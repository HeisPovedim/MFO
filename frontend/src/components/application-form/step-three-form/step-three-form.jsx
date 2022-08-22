// REACT
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import selectEvent from "react-select-event"
import Select from 'react-select'

import { WarrningError } from '../../helper/component/warrning-error'
import { SelectComponent } from './components/select'
import { FamilyOptions, ScopeOptions, EducationOptions, EmploymentOptions } from './components/options'
import { Salart } from './components/salary'

const StepThreeForm = (props) => {


  React.useEffect(() => {
    console.log("Famile: "+family)
    // console.log("Scope: "+scopeStatus)
    // console.log("Education: "+education)
    // console.log("Employment: "+employment)
  })


  // Поле - "Семейное положение"
  const [family, setFamily] = useState("")
  // Поле - "Сфера деятельности"
  const [scopeStatus, setScopeStatus] = useState("")
  // Поле - "Образование"
  const [education, setEducation] = useState("")
  // Поле - "Занятость"
  const [employment, setEmployment] = useState("")
  // Поле - "Сумма ежемесячных расходов"
  const [expenses, setExpenses] = useState("")
  // Поле - "Ваш доход в месяц"
  const [income, setIncome] = useState("")


  const customStyles = {
    option: (provided) => ({
      ...provided,
      transition: 'max-height .2s ease-out'
    }),
    control: (provided) => ({
      ...provided,
      height: "48px",
      minHeight: "48px"
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "13px",
      whiteSpace: 'nowrap'
    })
  }


  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm ({
    mode: "all"
  })


  // КНОПКИ | BUTTONS
  const onSubmit = (data) => {
    console.log(data)
  }


  return(
    <>
      <div className="mr_content-box " data-step_id="zanyatosty_i_dohody" data-step_index="3">
        <h2>Занятость и доходы</h2>
        <form 
          className="content-form"
          method="post"
          onSubmit = { handleSubmit(onSubmit) }
        >
          <div className="alert alert-danger hidden"></div>
          <div className="wrapper-master">
            <div className="wrapper-inputs ">
              <div className="input-box inpBxFF" id="form_marital_status">
                <label className="control-label">Семейное положение</label>
                <Controller
                  control={control}
                  name="family"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SelectComponent 
                        placeholder="Выберите семейное положение" 
                        options={FamilyOptions}
                        style={customStyles}
                        object={setFamily}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.family && (<p>{errors?.family?.message || `*Необходимо заполнить поле "Семейное положение"`}</p>)}</WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_familiar_phone">
                <label className="control-label">Дополнительный телефон</label>
                <input id="familiar_phone" className="input_field phone_num" type="text" data-number-mask="use" data-autoclear-mask="true" data-required="false" name="zanyatosty_i_dohody[familiar_phone]" data-index_group="" placeholder="" value="" />
                <div id="error_familiar_phone" className="help-block hidden">Необходимо заполнить поле "Дополнительный телефон"</div>
              </div>
              <div className="input-box inpBxFF" id="form_education_level_id">
                <label className="control-label">Образование</label>
                <Controller
                  control={control}
                  name="education"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SelectComponent
                        placeholder="Выберите уровень образования"
                        options={EducationOptions}
                        style={customStyles}
                        object={setEducation}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.education && (<p>{errors?.education?.message || `*Необходимо заполнить поле "Образование"`}</p>)}</WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_employment_type_id">
                <label className="control-label">Занятость</label>
                <Controller
                  control={control}
                  name="employment"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SelectComponent
                        placeholder="Выберите тип занятости"
                        options={EmploymentOptions}
                        style={customStyles}
                        object={setEmployment}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.employment && (<p>{errors?.employment?.message || `*Необходимо заполнить поле "Занятость"`}</p>)}</WarrningError>
                    </>
                  )}
                />
              </div>
              <div id="form_activity_id" className={ 
                    employment.value === 6 ? "input-box inpBxFF"
                  : employment.value === 8 ? "input-box inpBxFF"
                  : employment.value === 11 ? "input-box inpBxFF"
                  : employment.value === 12 ? "input-box inpBxFF"
                  : employment.value === 14 ? "input-box inpBxFF"
                  : employment.value === 15 ? "input-box inpBxFF"
                  : employment.value === 16 ? "input-box inpBxFF"
                  : employment.value === 17 ? "input-box inpBxFF"
                  : "input-box inpBxFF hidden"
                }>
                <label className="control-label">Сфера деятельности</label>
                  <SelectComponent placeholder="Сфера деятельности" 
                    options={ScopeOptions}
                    style={customStyles}
                    value={setScopeStatus}
                  />
                <div id="error_activity_id" className="help-block hidden">Необходимо заполнить поле "Сфера деятельности"</div>
              </div>
              <div className="input-box inpBxFF" id="form_monthly_expenses">
                <label className="control-label">Сумма ежемесячных расходов</label>
                  <Controller
                    control={control}
                    name="expenses"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur } }) => (
                      <>
                        <Salart value={setExpenses} onChange={onChange} onBlur={onBlur} />
                        <WarrningError>{errors?.expenses && (<p>{errors?.expenses?.message || `*Необходимо заполнить поле "Сумма ежемесячных расходов"`}</p>)}</WarrningError>
                      </>
                    )}
                  />
              </div>
              <div className="input-box inpBxFF" id="form_monthly_income">
                <label className="control-label">Ваш доход в месяц</label>
                  <Controller
                    control={control}
                    name="income"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur } }) => (
                      <>
                        <Salart value={setIncome} onChange={onChange} onBlur={onBlur} />
                        <WarrningError>{errors?.income && (<p>{errors?.income?.message || `*Необходимо заполнить поле "Ваш доход в месяц"`}</p>)}</WarrningError>
                      </>
                    )}
                  />
              </div>
              <div className="input-box inpBxFF" id="form_owned_car_dic">
                <label className="control-label">Наличие автомобиля</label>
                <select id="owned_car_dic" className="" data-required="true" name="zanyatosty_i_dohody[owned_car_dic]" data-index_group="">
                  <option value="default">Укажите наличие автомобиля</option>
                  <option value="true" selected="selected">Да</option>
                  <option value="false">Нет</option>
                </select>
                <div id="error_owned_car_dic" className="help-block hidden">Необходимо заполнить поле "Наличие автомобиля"</div>
              </div>
              <div className="input-box inpBxFF" id="form_owned_real_estate_dic">
                <label className="control-label">Наличие собственности</label>
                <select id="owned_real_estate_dic" className="" data-required="true" name="zanyatosty_i_dohody[owned_real_estate_dic]" data-index_group="">
                  <option value="default">Укажите наличие недвижимости</option>
                  <option value="true" selected="selected">Да</option>
                  <option value="false">Нет</option>
                </select>
                <div id="error_owned_real_estate_dic" className="help-block hidden">Необходимо заполнить поле "Наличие собственности"</div>
              </div>
              <div className="input-box inpBxFF hidden" id="form_work_experience">
                <label className="control-label">Стаж работы на последнем месте</label>
                <select id="work_experience" className="" data-required="true" name="zanyatosty_i_dohody[work_experience]" data-only_field="employment_type_id" data-only_values="6, 8, 11, 12, 14, 15, 16, 17" data-index_group="">
                  <option value="default">Выберите стаж на последнем месте работы</option>
                  <option value="1">от 6 месяцев до 1 года</option>
                  <option value="2">от 1 до 3 лет</option>
                  <option value="3">от 3 до 5 лет</option>
                  <option value="4">от 5 до 10 лет</option>
                  <option value="5">от 10 до 20 лет</option>
                  <option value="6">более 20 лет</option>
                  <option value="7">6 месяцев</option>
                  <option value="8">1 месяц</option>
                  <option value="9">2 месяца</option>
                  <option value="10">3 месяца</option>
                  <option value="11">4 месяца</option>
                  <option value="12">5 месяцев</option>
                </select>
                <div id="error_work_experience" className="help-block hidden">Необходимо заполнить поле "Стаж работы на последнем месте"</div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <button type="button" className="btn btn-light btn_back_step" id="btn_back_step" value="zanyatosty_i_dohody"><span>Назад</span></button>
            <button type="submit" name="btn_submit_step_save" className="btn btn-primary" id="btn_submit_step_save" value="zanyatosty_i_dohody"><span>Продолжить</span></button>
          </div>
        </form>
      </div>
    </>
  )
}
export { StepThreeForm }