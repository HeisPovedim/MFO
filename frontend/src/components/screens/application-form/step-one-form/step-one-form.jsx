// REACT
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

// HELPERS
import { capitalizeFirstLetter } from '../../../../helpers/capitalize-first-letter'
import { RegForInitials } from '../../../../helpers/regular-expressions'

// COMPONENTS
import { PhoneField } from '../../../shared/fields/phone-field'
import { WarrningError } from '../../../shared/verify/warrning-error'

// CUSTOM HOOKS
import { useLocalStorage } from '../../../../hooks/use-local-storage'

// CUSTOM LIBRARIES
import { EmailSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

// OTHER
import { TOKEN } from '../../../../config/api/dadata-token'


const StepOneForm = (props) => {

  // UseEffect
  useEffect(() => {
    // LOCALSTORAGE
    localStorage.setItem("userPhone", phoneNumber.replace(/[^0-9]/g, ""))
    localStorage.setItem("userEmail", email)
    localStorage.setItem("userLastName", lastName)
    localStorage.setItem("userFirstName", firstName)
    localStorage.setItem("userMiddleName", middleName)
    // console.log("Step: "+phoneNumber)
  })


  // СТЕЙТЫ | STATES
  const [checked, setChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useLocalStorage("userPhone", "")
  const [email, setEmail] = useLocalStorage("userEmail", "")
  const [lastName, setLastName] = useLocalStorage("userLastName", "")
  const [firstName, setFirstName] = useLocalStorage("userFirstName", "")
  const [middleName, setMiddleName] = useLocalStorage("userMiddleName", "")


  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    mode: "all",
    defaultValues: {
      phoneNumber: localStorage.getItem("userPhone"),
      lastName: localStorage.getItem("userLastName"),
      firstName: localStorage.getItem("userFirstName"),
      middleName: localStorage.getItem("userMiddleName"),
      email: localStorage.getItem("userEmail")
    }
})


  // КНОПКИ | BUTTONS
  const onSubmit = (data) => {
    props.statusStepOneForm(false)
    props.statusSmsPhone(true)
    props.phoneNumber(phoneNumber)
    console.log(data)
  }


  // ХЕНДЛЕРЫ | HANDLERS
  const handlerLastName = (event) => {
    setLastName(capitalizeFirstLetter(event.replace(RegForInitials, '')))
  }
  const handlerFirstName = (event) => {
    setFirstName(capitalizeFirstLetter(event.replace(RegForInitials, '')))
  }
  const handlerMiddleName = (event) => {
    setMiddleName(capitalizeFirstLetter(event.replace(RegForInitials, '')))
  }


  return (
    <>
      <div
        className="mr_content-box frst_stp"
        data-step_id="kontaktnaya_informaciya"
        data-step_index="1"
      >
        <h2>Контактная информация</h2>
        <form
          className="content-form"
          method="post"
          onSubmit={ handleSubmit(onSubmit) }
        >
          <div className="wrapper-master">
            <div className="wrapper-inputs frst_stp">
              <div className="input-box inpBxFF" id="form_last_name">
                <label className="control-label">Фамилия</label>
                <input
                  id="last_name"
                  className="input_field rus search_in_session"
                  type="text"
                  maxLength={31}
                  placeholder="Фамилия"
                  value={lastName}
                  {...register("lastName", {
                    required: true,
                    minLength: {
                      value: 2,
                      message: "*Минимум 2 символа",
                    },
                    maxLength: {
                      value: 30,
                      message: "*Не больше 30 символов",
                    },
                    pattern: {
                      value: /^[^A-Za-z]+$/ig,
                      message: "*Допустим ввод только русских символов"
                    },
                    onChange: (event) => handlerLastName(event.target.value),
                  })}
                />
                <WarrningError>
                  {errors?.lastName && (
                    <p>
                      {errors?.lastName?.message ||
                        `*Необходимо заполнить поле "Фамилия"`}
                    </p>
                  )}
                </WarrningError>
              </div>
              <div className="input-box inpBxFF" id="form_first_name">
                <label className="control-label">Имя</label>
                <input
                  id="first_name"
                  className="input_field rus"
                  type="text"
                  maxLength={31}
                  placeholder="Имя"
                  value={firstName}
                  {...register("firstName", {
                    required: true,
                    minLength: {
                      value: 2,
                      message: "*Минимум 2 символа",
                    },
                    maxLength: {
                      value: 30,
                      message: "*Не больше 30 символов",
                    },
                    pattern: {
                      value: /^[^A-Za-z]+$/ig,
                      message: "*Допустим ввод только русских символов"
                    },
                    onChange: (event) => handlerFirstName(event.target.value),
                  })}
                />
                <WarrningError>
                  {errors?.firstName && (
                    <p>
                      {errors?.firstName?.message ||
                        `*Необходимо заполнить поле "Имя"`}
                    </p>
                  )}
                </WarrningError>
              </div>
              <div className="input-box inpBxFF" id="form_middle_name">
                <label className="control-label">Отчество</label>
                <input
                  id="middle_name"
                  className="input_field rus"
                  type="text"
                  maxLength={31}
                  placeholder="Отчество"
                  value={middleName}
                  {...register ("middleName", {
                    required: false,
                    minLength: {
                      value: 2,
                      message: "Минимум 2 символа",
                    },
                    maxLength: {
                      value: 30,
                      message: "Не больше 30 символов",
                    },
                    pattern: {
                      value: /^[^A-Za-z]+$/ig,
                      message: "*Допустим ввод только русских символов"
                    },
                    onChange: (event) => handlerMiddleName(event.target.value),
                  })}
                />
                <WarrningError>
                  {errors?.middleName && (
                    <p>
                      {errors?.middleName?.message ||
                        `Необходимо заполнить поле "Отчество"`}
                    </p>
                  )}
                </WarrningError>
              </div>
              <div className="input-box inpBxFF" id="form_default_mobile_phone">
                <label className="control-label">Номер телефона</label>
                <Controller
                  control={control}
                  name="phoneNumber"
                  rules={{
                    required: true,
                    minLength: {
                      value: 11,
                      message: "*Заполните полностью поле телефона",
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <PhoneField
                        phone={phoneNumber.replace('7', '')}
                        setPhone={setPhoneNumber}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      {/* <NumberFormat
                        type="tel"
                        format="+7 (###) ###-####"
                        allowEmptyFormatting
                        mask="_"
                        onBlur={onBlur}
                        value={phoneNumber}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                          setPhoneNumber(formattedValue.toString());
                        }}
                        onChange={ (event) => onChange(event.target.value.replace(/[^0-9]/g, "")) }
                      /> */}
                      <WarrningError>{errors?.phoneNumber && (<p>{errors?.phoneNumber?.message || `*Необходимо заполнить поле "Номер телефона"`}</p>)}</WarrningError>
                    </>
                  )}
                />
                {/* <TestNumber name = "phoneNumber" value = { setPhoneNumber } /> */}
              </div>
              <div className="input-box inpBxFF" id="form_email">
                {/* @ Email Адрес */}
                <label className="control-label">Email адрес</label>
                <Controller 
                  control={control}
                  name="email"
                  rules={{
                    required: true,
                    pattern: {
                      value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "*Неправильный формат"
                    }
                  }}
                  render={({ field: {onChange, onBlur, value} }) => (
                  <>
                    <EmailSuggestions
                      hintText="Email Адрес"
                      token={TOKEN}
                      count={5}
                      onChange={ (event) => {
                        setEmail(event.value)
                        onChange(event.value)
                      }}
                      defaultQuery={ value }
                      inputProps={{
                        className: "inputDadata",
                        placeholder:"Email Адрес",
                        onBlur: onBlur,
                        onChange: (event) => {
                          setEmail(event.target.value)
                          onChange(event.target.value)
                        }
                      }}
                    />
                  </>
                  )}
                />
                <WarrningError>
                  {errors?.email && (
                    <p>
                      {errors?.email?.message ||
                        `*Необходимо заполнить поле "Email адрес"`}
                    </p>
                  )}
                </WarrningError>
              </div>
              <div className="input-box hide" id="form_sms_code_plugin">
                <label className="control-label">Код из СМС</label>
                <input
                  id="sms_code_plugin"
                  className="input_field"
                  type="hidden"
                  data-required="true"
                  name="kontaktnaya_informaciya[sms_code_plugin]"
                  data-index_group=""
                  placeholder=""
                  defaultValue=""
                />
                <div id="error_sms_code_plugin" className="help-block hidden">
                  Необходимо заполнить поле &quot;Код из СМС&quot;
                </div>
              </div>
              <div className="input-box hidden" id="form_time_zone">
                <label className="control-label">Временная зона</label>
                <select
                  id="time_zone"
                  className=""
                  data-required="false"
                  name="kontaktnaya_informaciya[time_zone]"
                  data-index_group=""
                >
                  <option defaultValue="default">
                    Выберите временную зону
                  </option>
                  <option defaultValue="00:00">00:00</option>
                  <option defaultValue="+01:00">+01:00</option>
                  <option defaultValue="+02:00">+02:00</option>
                  <option defaultValue="+03:00">+03:00</option>
                  <option defaultValue="+04:00">+04:00</option>
                  <option defaultValue="+05:00">+05:00</option>
                  <option defaultValue="+06:00">+06:00</option>
                  <option defaultValue="+07:00">+07:00</option>
                  <option defaultValue="+08:00">+08:00</option>
                  <option defaultValue="+09:00">+09:00</option>
                  <option defaultValue="+10:00">+10:00</option>
                  <option defaultValue="+11:00">+11:00</option>
                  <option defaultValue="+12:00">+12:00</option>
                </select>
                <div id="error_time_zone" className="help-block hidden">
                  Необходимо заполнить поле &quot;Временная зона&quot;
                </div>
              </div>
            </div>
          </div>
          <input
            type="hidden"
            name="action[validate_customers_action]"
            defaultValue="1"
          />
          <input
            type="hidden"
            name="action[send_to_sms_action]"
            defaultValue="1"
          />
          <input
            type="hidden"
            name="action[save_customers_in_data_base_action]"
            defaultValue="1"
          />
          <div className="wrapper-checkboxes wrapper-checkboxes__margin-top">
          {/* @ Check Box */}
            <label className={ checked === true ? "control-label label-checkbox active" : "control-label label-checkbox" }>
              <input
                type="checkbox"
                className='checkbox'
                defaultValue="1"
                checked={checked}
                onChange={ (e) => setChecked(e.target.checked) }
              />
                Я даю свое{" "}
              <a href="sites/default/files/2022-04/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%B8_%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BD%D0%BE%D0%B3%D0%BE.pdf" target="_blank">
                согласие на обработку персональных данных, на получение из БКИ кредитных отчетов 
              </a> 
                ,{" "}
              <a href="sites/default/files/2022-04/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D1%82%D1%80%D0%B5%D1%82%D1%8C%D0%B5%D0%BC%D1%83_%D0%BB%D0%B8%D1%86%D1%83_docx.pdf" target="_blank">
                Согласие на передачу персональных данных третьей стороне
              </a>
                , а также <br />я ознакомлен(а) и принимаю{" "}
              <a href="sites/default/files/2022-04/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%BE%D1%82_25_04_2022%20%282%29.pdf" target="_blank">
                Политику в области обработки персональных данных
              </a>
                {" "} и{" "}
              <a href="sites/default/files/2021-12/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%90%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%B0%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%80%D1%83%D1%87%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B8_1.pdf" target="_blank">
                Соглашение об использовании Аналога собственноручной подписи
              </a>
                ,{" "}
              <a href="sites/default/files/2022-04/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE_%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%B9%D0%BC%D0%B0.pdf" target="_blank">
                заявление о предоставлении потребительского кредита
              </a>
            </label>
          </div>
          <div className="btn-box">
            <button
              type="submit"
              disabled={!checked}
              className="btn btn-primary btn_submit_modal"
            >
              <span>Подтвердить</span>
            </button>
          </div>
        </form>
        <div className="gosuslugi_box">
          <a id="authByEsia" className="link_authByEsia">Войти через Госуслуги</a>
        </div>
      </div>
    </>
  )
}
export { StepOneForm }