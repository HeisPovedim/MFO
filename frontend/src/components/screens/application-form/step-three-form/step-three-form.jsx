// REACT
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

// COMPONENTS
import { SelectComponent } from './lib/select'
import { FamilyOptions, ScopeOptions, EducationOptions, EmploymentOptions, CarOptions, OwnershipOptions, StandingOptions } from './lib/options'
import { ValidateScope, ValidatePhone } from './functions/validation'
import { Salart } from './lib/salary'
import { CustomStyles } from './lib/salary-style'

// SHARED/LIB/COMPONENTS
import { WarrningError } from '../../../shared/verify/warrning-error'
import { PhoneField } from '../../../shared/fields/phone-field'

const StepThreeForm = (props) => {

  React.useEffect(() => {
    console.log(phone.replace(/[^0-9]/g, ""))
  })

  // ПОЛЕ - "Семейное положение"
  const [family, setFamily] = useState("")
  // ПОЛЕ - "Дополнительный телефон"
  const [phone, setPhone] = useState("")
  // ПОЛЕ - "Образование"
  const [education, setEducation] = useState("")
  // ПОЛЕ - "Занятость"
  const [employment, setEmployment] = useState("")
  // ПОЛЕ - "Сфера деятельности"
  const [scope, setScope] = useState("")
  // ПОЛЕ - "Сумма ежемесячных расходов"
  const [expenses, setExpenses] = useState("")
  // ПОЛЕ - "Ваш доход в месяц"
  const [income, setIncome] = useState("")
  // ПОЛЕ - "Наличие автомобиля"
  const [car, setCar] = useState("")
  // ПОЛЕ - "Наличие собственности"
  const [ownership, setOwnership] = useState("")
  // ПОЛЕ - "Стаж работы на последнем месте"
  const [standing, setStanding] = useState("")

  // USEFORM
  const {
    formState: { errors },
    handleSubmit,
    control
  } = useForm ({
    mode: "all",
  })

  // КНОПКИ | BUTTONS
  const onSubmit = (data) => {
    console.log(data)
  }
  const onBack = () => {
    props.statusStepTwoForm(true)
    props.statusStepThreeForm(false)
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
                        style={CustomStyles}
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
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    minLength: {
                      value: ValidatePhone(phone.replace(/[^0-9]/g, "").length),
                      message: "*Заполните полностью поле телефона",
                    }
                  
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <PhoneField
                        phone={phone}
                        setPhone={setPhone}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.phone && (<p>{errors?.phone?.message || `*Необходимо заполнить поле "Дополнительный телефон"`}</p>)}</WarrningError>
                    </>
                  )}
                />
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
                        style={CustomStyles}
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
                        style={CustomStyles}
                        object={setEmployment}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.employment && (<p>{errors?.employment?.message || `*Необходимо заполнить поле "Занятость"`}</p>)}</WarrningError>
                    </>
                  )}
                />
              </div>
              <div id="form_activity_id" 
                className={
                  employment.value === 6 ? "input-box inpBxFF"
                  : employment.value === 8 ? "input-box inpBxFF"
                  : employment.value === 11 ? "input-box inpBxFF"
                  : employment.value === 12 ? "input-box inpBxFF"
                  : employment.value === 14 ? "input-box inpBxFF"
                  : employment.value === 15 ? "input-box inpBxFF"
                  : employment.value === 16 ? "input-box inpBxFF"
                  : employment.value === 17 ? "input-box inpBxFF"
                  : "input-box inpBxFF hidden"
                }
              >
                <label className="control-label">Сфера деятельности</label>
                <Controller
                  control={control}
                  name="scope"
                  rules={{ required: ValidateScope(employment.value) }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SelectComponent 
                        placeholder="Сфера деятельности" 
                        options={ScopeOptions}
                        style={CustomStyles}
                        object={setScope}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.scope && (<p>{errors?.scope?.message || `*Необходимо заполнить поле "Занятость"`}</p>)}</WarrningError>
                    </>
                  )}
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
                    rules={{ 
                      required: true,
                      min: {
                        value: 1000,
                        message: "Минимальный доход в месяц - 1000"
                      }
                    }}
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
                <Controller
                  control={control}
                  name="car"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SelectComponent
                        placeholder="Укажите наличие автомобиля"
                        options={CarOptions}
                        style={CustomStyles}
                        object={setCar}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.car && (<p>{errors?.car?.message || `*Необходимо заполнить поле "Наличие автомобиля"`}</p>)}</WarrningError>
                    </>
                  )}
                />
                <div id="error_owned_car_dic" className="help-block hidden">Необходимо заполнить поле "Наличие автомобиля"</div>
              </div>
              <div className="input-box inpBxFF" id="form_owned_real_estate_dic">
                <label className="control-label">Наличие собственности</label>
                <Controller
                  control={control}
                  name="ownership"
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SelectComponent
                        placeholder="Укажите наличие собственности"
                        options={OwnershipOptions}
                        style={CustomStyles}
                        object={setOwnership}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.ownership && (<p>{errors?.ownership?.message || `*Необходимо заполнить поле "Наличие собственности"`}</p>)}</WarrningError>
                    </>
                  )}
                />
              </div>
              <div  id="form_work_experience"
                className={
                  employment.value === 6 ? "input-box inpBxFF"
                  : employment.value === 8 ? "input-box inpBxFF"
                  : employment.value === 11 ? "input-box inpBxFF"
                  : employment.value === 12 ? "input-box inpBxFF"
                  : employment.value === 14 ? "input-box inpBxFF"
                  : employment.value === 15 ? "input-box inpBxFF"
                  : employment.value === 16 ? "input-box inpBxFF"
                  : employment.value === 17 ? "input-box inpBxFF"
                  : "input-box inpBxFF hidden"
                }
              >
                <label className="control-label">Стаж работы на последнем месте</label>
                <Controller
                  control={control}
                  name="standing"
                  rules={{ required: ValidateScope(employment.value) }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SelectComponent
                        placeholder="Выберите стаж на последнем месте работы"
                        options={StandingOptions}
                        style={CustomStyles}
                        object={setStanding}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.standing && (<p>{errors?.standing?.message || `*Необходимо заполнить поле "Стаж работы на последнем месте"`}</p>)}</WarrningError>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="btn-box">
            <button type="button" className="btn btn-light btn_back_step" id="btn_back_step" value="zanyatosty_i_dohody" onClick={onBack} ><span>Назад</span></button>
            <button type="submit" name="btn_submit_step_save" className="btn btn-primary" id="btn_submit_step_save" value="zanyatosty_i_dohody"><span>Продолжить</span></button>
          </div>
        </form>
      </div>
    </>
  )
}
export { StepThreeForm }