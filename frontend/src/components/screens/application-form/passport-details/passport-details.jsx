// #REACT
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

// #SHARED
import { WarrningError } from '../../../shared/verify/warrning-error'
import { FirstSetUp, SecondSetUp } from './lib/input-number-format'

// #HELPERS
import { RegForAddress, RegForHouseNumber, RegForApartmentNumber } from '../../../../helpers/regular-expressions'

// #CUSTOM LIBRARIES
import NumberFormat from 'react-number-format'

import { placeOfIssueScript, legalAddressScript, actualAddressScript } from '../../../../config/DaData/script'

export const PassportDetails = ({onChangePassportDetails, onChangeEmploymentAndIncome}) => {

  // ^СТЕЙТЫ | STATES
  const [passport, setPassport] = useState({
    series: "", // серия паспорта
    number: "", // номер паспорта
    dateOfBirth: "", // дата рождения
    passportIssueDate: "", // дата выдачи паспорта
    ouCode: "", // код подразделения
    placeOfBirth: "", // место рождения
    placeOfIssue: "" // паспорт выдан
  })
  const [otherData, setOtherData] = useState({
    gender: "", // гендер
    snils: "" // снилс
  })
  const [legalAddress, setLegalAddress] = useState({
    address: "", // адресс регистрации
    house: "", // номер дом
    apartment: "" // квартира
  })
  const [actualAddress, setActualAddress] = useState({
    address: "", // адресс
    house: "", // дом
    apartment: "" // квартира
  })
  const [functionalStates, setFunctionalStates] = useState({
    clickedGender: Boolean, // кнопка выбора гендора
    consentToDataProcessing: false, // согласие на обработку персональных данных
    additionalFields: true, // дополнительные поля для адреса проживания
    unselectedFieldWarning: Boolean // предупреждение о невыбранном значение в подсказках
  })


  // ^ХУКИ | HOOKS
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    resetField
  } = useForm({ mode: "all" })

  // ^СКРИПТЫ | SCRIPTS
  useEffect (() => {
    placeOfIssueScript(
      (value) => setPassport(passport => {
        return {...passport, placeOfIssue: value}
      }),
      (value) => setPassport(passport => {
        return {...passport, ouCode: value.replace(/[^0-9]/g, '')}
      }),
      (value) => setFunctionalStates(functionalStates => {
        return {...functionalStates, unselectedFieldWarning: value}
      }),
    )
  }, [])
  useEffect(() => {
    resetField("placeOfIssue", passport.placeOfIssue)
    setValue("placeOfIssue", passport.placeOfIssue)
  }, [passport.placeOfIssue, resetField, setValue])

  useEffect(() => {
    legalAddressScript(
      (value) => setLegalAddress((legalAddress) => {
        return {...legalAddress, address: value}
      }),
      (value) => setLegalAddress((legalAddress) => {
        return {...legalAddress, house: value}
      })
    )
  }, [])

  useEffect(() => {
    actualAddressScript(
      (value) => setActualAddress((actualAddress) => {
        return {...actualAddress, address: value}
      }),
      (value) => setActualAddress((actualAddress) => {
        return {...actualAddress, house: value}
      })
    )
  }, [])


  // ^⁡⁣⁣⁡⁣⁡⁣⁣КНОПКИ | BUTTONS
  const onSubmit = (data) => {
    onChangePassportDetails(false)
    onChangeEmploymentAndIncome(true)
    console.log(data)
  }


  // ^ХЕНДЛЕРЫ | HANDLERS
  const handlerClickedMan = () => { // выбор мужского гендора
    setFunctionalStates({...functionalStates, clickedGender: true})
    setOtherData({...otherData, gender: "Мужской"})
  }
  const handlerClickedWoman = () => { // выбор женского гендора
    setFunctionalStates({...functionalStates, clickedGender: false})
    setOtherData({...otherData, gender: "Женский"})
  }
  const handlerAccord = () => { // согласие на сведение
    if ( functionalStates.consentToDataProcessing === true ) {
      setFunctionalStates({...functionalStates, consentToDataProcessing: false})
    } else {
      setFunctionalStates({...functionalStates, consentToDataProcessing: true})
    }
  }
  const handlerResidentialAddress = () => { // включение дополнительных полей ввода адреса
    if ( functionalStates.additionalFields === false ) {
      setFunctionalStates({...functionalStates, additionalFields: true})
    } else {
      setFunctionalStates({...functionalStates, additionalFields: false})
    }
  }
  const handlerResidentialAddressActive = () => { // активация полей - нужно для корректоной работы useForm
    if ( functionalStates.additionalFields === false ) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <div
        className="mr_content-box"
        data-step_id="pasportnye_dannye"
        data-step_index="2"
      >
        <h2>Паспортные данные</h2>
        <form
          className="content-form" 
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="alert alert-danger hidden"></div>
          <div className="wrapper-master">
            <div className="wrapper-inputs">
              <div className="input-box inpBxFF" id="form_serial_passport">
                <label className="control-label">Серия паспорта</label>
                <Controller
                  control={control}
                  name="passportSeries"
                  rules={{
                    required: true,
                    minLength: {
                      value: 4,
                      message: `*Минимум 4 цифры`,
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <FirstSetUp format="####" setValue={value => setPassport({...passport, series: value })} onChange={onChange} onBlur={onBlur} />
                      <WarrningError>{ errors?.passportSeries && (<p>{ errors?.passportSeries?.message || `*Необходимо заполнить поле "Серия паспорта"` }</p>) }</WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_number_passport">
                <label className="control-label">Номер паспорта</label>
                <Controller
                  control={control}
                  name="passportNumber"
                  rules={{
                    required: true,
                    minLength: {
                      value: 6,
                      message: `*Минимум 6 цифры`,
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <FirstSetUp format="######" setValue={value => setPassport({...passport, number: value })} onChange={onChange} onBlur={onBlur} />
                      <WarrningError>{ errors?.passportNumber && (<p>{ errors?.passportNumber?.message || `*Необходимо заполнить поле "Номер паспорта"` }</p>) }</WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_date_of_birth">
                <label className="control-label">Дата рождения</label>
                <Controller
                  control={control}
                  name="dateOfBirth"
                  rules={{
                    required: true,
                    minLength: {
                      value: 8,
                      message: `*Минимум 8 цифры`,
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <FirstSetUp format="##.##.####" setValue={value => setPassport({...passport, dateOfBirth: value })} onChange={onChange} onBlur={onBlur} />
                      <WarrningError>{ errors?.dateOfBirth && (<p>{ errors?.dateOfBirth?.message || `*Необходимо заполнить поле "Номер паспорта"` }</p>) }</WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_date_of_issue">
                <label className="control-label">Дата выдачи паспорта</label>
                <Controller
                  control={control}
                  name="passportIssueDate"
                  rules={{
                    required: true,
                    minLength: {
                      value: 8,
                      message: `*Минимум 8 цифры`,
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <FirstSetUp format="##.##.####" setValue={value => setPassport({...passport, passportIssueDate: value })} onChange={onChange} onBlur={onBlur} />
                      <WarrningError>{ errors?.passportIssueDate && (<p>{ errors?.passportIssueDate?.message || `*Необходимо заполнить поле "Дата выдачи паспорта"` }</p>)}</WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_code_division">
                <label className="control-label">Код подразделения</label>
                <Controller
                  control={control}
                  name="ouCode"
                  rules={{
                    required: true,
                    minLength: {
                      value: 6,
                      message: `*Минимум 6 цифры`,
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <SecondSetUp type="text" id="code_division" className="input_field m_i_d_s suggestions-input" format="000-000"
                        val={passport.ouCode} setValue={(value) => setPassport({...passport, ouCode: value })} onChange={onChange} onBlur={onBlur}
                      />
                      <WarrningError>{ errors?.ouCode && (<p>{ errors?.ouCode?.message ||`*Необходимо заполнить поле "Код подразделения"`}</p>) }</WarrningError>
                    </>
                  )}
                />
                { functionalStates.unselectedFieldWarning === true ? 
                <span
                  style={{
                    fontSize: "13px",
                    color: "#fb6f39",
                    paddingLeft: "10%"
                  }}>Выберите значение из подсказки
                </span> : undefined }
              </div>
              <div className="input-box inpBxFF" id="form_place_of_birth">
                <label className="control-label">Место рождения</label>
                <input
                  id="place_of_birth"
                  className="input_field rus_num"
                  type="text"
                  maxLength={255}
                  data-required="true"
                  name="pasportnye_dannye[place_of_birth]"
                  data-index_group=""
                  placeholder=""
                  value={passport.placeOfBirth}
                  {...register("placeOfBirth", {
                    required: true,
                    pattern: {
                      value: /^[^A-Za-z]+$/ig,
                      message: "*Допустим ввод только русских символов"
                    },
                    onChange: (event) => setPassport({...passport, placeOfBirth: event.target.value.replace(RegForAddress, "")})
                  })}
                />
                <WarrningError>{ errors?.placeOfBirth && (<p>{ errors?.placeOfBirth?.message ||`*Необходимо заполнить поле "Место рождения"`}</p>) }</WarrningError>
              </div>
              <div className="input-box inpBxFull" id="form_place_of_issue">
                <label className="control-label">Паспорт выдан</label>
                <input
                  id="place_of_issue"
                  className="input_field rus_num"
                  type="text"
                  maxLength={255}
                  data-required="true"
                  name="pasportnye_dannye[place_of_issue]"
                  data-index_group=""
                  placeholder="Паспорт выдан"
                  value={passport.placeOfIssue}
                  {...register("placeOfIssue", {
                    required: true,
                    onChange: (event) => setPassport({...passport, placeOfIssue: event.target.value})
                  })}
                />
                <WarrningError>{ errors?.placeOfIssue && (<p>{ errors?.placeOfIssue?.message ||`*Необходимо заполнить поле "Паспорт выдан"`}</p>) }</WarrningError>
              </div>
              <div className="input-box inpBxFull" id="form_gender">
                <label className="control-label">Пол</label>
                <div className="input_box_radio_list">
                <Controller
                  control={control}
                  name="gender"
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange } }) => (
                    <>
                      <label className={ functionalStates.clickedGender === true ? "control-label label-radio active" : "control-label label-radio" }>
                        <input
                          className=""
                          type="radio"
                          data-id="gender"
                          data-required="true"
                          name="pasportnye_dannye[gender]"
                          checked="checked"
                          data-index_group=""
                          value="Мужчина"
                          onClick={ () => {
                            handlerClickedMan()
                            onChange("Мужской")
                          }}
                        />Мужской
                      </label>
                      <label className={ functionalStates.clickedGender === false ? "control-label label-radio active" : "control-label label-radio" }>
                        <input
                          className=""
                          type="radio"
                          data-id="gender"
                          data-required="true"
                          name="pasportnye_dannye[gender]"
                          data-index_group=""
                          value="Женщина"
                          onClick={ () => {
                            handlerClickedWoman()
                            onChange("Женский")
                          }}
                        />Женский
                      </label>
                    </>
                  )}
                />
                </div>
                  <WarrningError>{ errors?.gender && (<p>{ errors?.gender?.message ||`*Необходимо выбрать гендор`}</p>) }</WarrningError>
              </div>
              <div className="input-box inpBxFF" id="form_snils">
                <label className="control-label">СНИЛС</label>
                <Controller
                  control={control}
                  name="snils"
                  rules={{
                    required: true,
                    minLength: {
                      value: 11,
                      message: `*Минимум 11 цифры`,
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <NumberFormat
                        format="###-###-### ##"
                        allowEmptyFormatting
                        mask="_"
                        onBlur={onBlur}
                        onValueChange={(values) => {
                          const { value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                          // setSnils(value)
                          setOtherData({...otherData, snils: value})
                          onChange(value)
                        }}
                      />
                      <WarrningError>{ errors?.snils && (<p>{ errors?.snils?.message || `*Необходимо заполнить поле "СНИЛС"` }</p>) }</WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFull" id="form_consent_snils">
                <label className={ functionalStates.consentToDataProcessing === true ? "control-label label-checkbox active" : "control-label label-checkbox"}>
                  <input
                    id="consent_snils"
                    type="checkbox"
                    data-required="true"
                    data-is_checkbox="true"
                    name="consent_snils"
                    onClick={ handlerAccord }
                    {...register("consent_snils", {
                    required: true,
                  })}
                  />
                  Заполняя сведения о СНИЛС, выражаю свое согласие на
                  направление в электронном виде сведений обо мне в кредитную
                  организацию для прохождения упрощенной идентификации
                </label>
                  <WarrningError>{ errors?.consent_snils && (<p>{ errors?.consent_snils?.message || `*Необходимо согласиться с условиями` }</p>) }</WarrningError>
              </div>
              <div id="address_reg_id">
                  {/* @ Адрес регистрации */}
                <h3 className="m_plugin_title">Адрес регистрации</h3>
                <div className="wrapper-inputs">
                  <div className="input-box hide" id="form_address_reg_id_postal_code">
                    <label className="control-label">Почтовый индекс</label>
                    <input id="address_reg_id_postal_code"
                      className="input_field suggestions-input"
                      type="hidden"
                      data-dadata="legal_zip"
                      mask="999999"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][postal_code]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_reg_id_postal_code" className="help-block hidden">Необходимо заполнить поле "Почтовый индекс"</div>
                  </div>
                  <div
                    className="input-box inpBxFull"
                    id="form_address_reg_id_address"
                  >
                    <label className="control-label">
                      Адрес регистрации (Город / Населённый пункт / Улица)
                    </label>
                    <input
                      id="address_reg_id_address"
                      className="input_field suggestions-input"
                      type="text"
                      data-dadata="legal_address"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="address"
                      data-index_group=""
                      placeholder="Адрес регистрации (Город / Населённый пункт / Улица)"
                      value={legalAddress.address}
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      maxLength={101}
                      style={{ boxSizing: "border-box" }}
                      {...register ("addressRegistration", {
                        required: true,
                        maxLength: {
                          value: 100,
                          message: "*Не больше 100 символов",
                        },
                        pattern: {
                          value: /^[^A-Za-z]+$/ig,
                          message: "*Допустим ввод только русских символов"
                        },
                        onChange: (event) => setLegalAddress({ ...legalAddress, address: event.target.value.replace(RegForAddress, "")})
                      })}
                    />
                    <div className="suggestions-wrapper">
                      <div className="suggestions-suggestions" style={{ display: "none" }}></div>
                    </div>
                    <WarrningError>{ errors?.addressRegistration && (<p>{ errors?.addressRegistration?.message ||`*Необходимо заполнить поле "Адрес регистрации"`}</p>) }</WarrningError>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_region">
                    <label className="control-label">Регион</label>
                    <input id="address_reg_id_region"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_region"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][region]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_reg_id_region" className="help-block hidden">Необходимо заполнить поле "Регион"</div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_district">
                    <label className="control-label">Район</label>
                    <input id="address_reg_id_district"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_district"
                      maxLength="255"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][district]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_reg_id_district" className="help-block hidden">Необходимо заполнить поле "Район"</div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_city">
                    <label className="control-label">Город</label>
                    <input id="address_reg_id_city"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_city"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][city]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_reg_id_city" className="help-block hidden">Необходимо заполнить поле "Город"</div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_street">
                    <label className="control-label">Улица</label>
                    <input id="address_reg_id_street"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_street"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][street]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_reg_id_street" className="help-block hidden">Необходимо заполнить поле "Улица"</div>
                  </div>
                  <div className="input-box inpBxThirty" id="form_address_reg_id_house_number">
                    <label className="control-label">Номер дома</label>
                    <input
                      id="address_reg_id_house_number"
                      className="input_field rus_num suggestions-input"
                      type="text"
                      data-dadata="legal_building"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][house_number]"
                      data-index_group=""
                      placeholder="Номер дома"
                      value={legalAddress.house}
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      maxLength={11}
                      style={{ boxSizing: "border-box" }}
                      {...register ("houseRegistration", {
                        required: true,
                        maxLength: {
                          value: 10,
                          message: "*Не больше 10 символов",
                        },
                        onChange: (event) => setLegalAddress({ ...legalAddress, house: event.target.value.replace(RegForHouseNumber, "")})
                      })}
                    />
                    <div className="suggestions-wrapper">
                      <div className="suggestions-suggestions" style={{ display: "none" }}></div>
                    </div>
                    <WarrningError>{ errors?.houseRegistration && (<p>{ errors?.houseRegistration?.message ||`*Необходимо заполнить поле "Номер дома"`}</p>) }</WarrningError>
                  </div>
                  <div
                    className="input-box hide inpBxThirteen"
                    id="form_address_reg_id_block"
                  >
                    <label className="control-label">Корпус</label>
                    <input id="address_reg_id_block"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][block]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_reg_id_block" className="help-block hidden">Необходимо заполнить поле "Корпус"</div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_building">
                    <label className="control-label">Строение</label>
                    <input id="address_reg_id_building"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][building]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_reg_id_building" className="help-block hidden">Необходимо заполнить поле "Строение"</div>
                  </div>
                  <div
                    className="input-box inpBxMRA"
                    id="form_address_reg_id_apartment"
                  >
                    <label className="control-label">Квартира</label>
                    <input id="address_reg_id_apartment" className="input_field" type="text"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][apartment]"
                      data-index_group=""
                      placeholder="Квартира"
                      value={legalAddress.apartment}
                      maxLength={11}
                      {...register ("apartmentRegistration", {
                        required: true,
                        maxLength: {
                          value: 10,
                          message: "*Не больше 10 символов",
                        },
                        onChange: (event) => setLegalAddress({ ...legalAddress, apartment: event.target.value.replace(RegForApartmentNumber, "")})
                      })}
                    />
                    <WarrningError>{ errors?.apartmentRegistration && (<p>{ errors?.apartmentRegistration?.message ||`*Необходимо заполнить поле "Квартира"`}</p>) }</WarrningError>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_address_other">
                    <label className="control-label">Дополнительные значения адреса</label>
                    <input id="address_reg_id_address_other" className="input_field" type="hidden"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][address_other]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_reg_id_address_other" className="help-block hidden">Необходимо заполнить поле "Дополнительные значения адреса"</div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_loc_city_id">
                    <label className="control-label">Идентификатор адреса в общедоступном справочнике</label>
                    <input id="address_reg_id_loc_city_id" className="input_field" type="hidden"
                      maxLength="6"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][loc_city_id]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_reg_id_loc_city_id" className="help-block hidden">
                      Необходимо заполнить поле "Идентификатор адреса в
                      общедоступном справочнике"
                    </div>
                  </div>
                </div>
              </div>
              <div id="address_act_id">
                <h3 className="m_plugin_title">Адрес проживания</h3>
                <div className="wrapper-inputs">
                  <div className="input-box inpBxFull" id="form_address_act_id_address_match">
                    <div className="list_fields hidden">
                      <input
                        type="hidden"
                        value="postal_code"
                        data-val_is_show=""
                      />
                      <input type="hidden" data-val_is_show="" />
                      <input
                        type="hidden"
                        value="district"
                        data-val_is_show=""
                      />
                      <input type="hidden" data-val_is_show="" />
                      <input type="hidden" data-val_is_show="" />
                      <input
                        type="hidden"
                        value="house_number"
                        data-val_is_show=""
                      />
                      <input type="hidden" data-val_is_show="" />
                      <input
                        type="hidden"
                        value="building"
                        data-val_is_show=""
                      />
                      <input
                        type="hidden"
                        value="apartment"
                        data-val_is_show=""
                      />
                      <input
                        type="hidden"
                        value="address_other"
                        data-val_is_show=""
                      />
                      <input
                        type="hidden"
                        value="address"
                        data-val_is_show=""
                      />
                    </div>
                    <label className={ functionalStates.additionalFields === true ? "control-label label-checkbox active" : "control-label label-checkbox"}>
                      <input
                        id="address_act_id_address_match"
                        className=""
                        type="checkbox"
                        data-required="true"
                        data-key_plugin="address_act_id"
                        name="pasportnye_dannye[address_act_id][address_match]"
                        data-event_field="true"
                        onClick={ handlerResidentialAddress }
                        data-index_group=""
                      />
                      Адрес проживания совпадает с адресом регистрации
                    </label>
                    <div id="error_address_act_id_address_match" className="help-block hidden">
                      Необходимо заполнить поле "Адрес проживания совпадает с
                      адресом регистрации"
                    </div>
                  </div>
                  <div className="input-box hide hidden" id="form_address_act_id_postal_code">
                    <label className="control-label">Почтовый индекс</label>
                    <input id="address_act_id_postal_code"
                      className="input_field"
                      type="hidden"
                      data-dadata="actual_zip"
                      mask="999999"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][postal_code]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_act_id_postal_code" className="help-block hidden">Необходимо заполнить поле "Почтовый индекс"</div>
                  </div>
                  <div className={ functionalStates.additionalFields === false ? "input-box inpBxFull" : "input-box inpBxFull hidden" } id="form_address_act_id_address">
                    <label className="control-label">Адрес проживания (Город / Населённый пункт / Улица)</label>
                    <input
                      id="address_act_id_address"
                      className="input_field suggestions-input"
                      type="text"
                      data-dadata="actual_address"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="address"
                      data-index_group=""
                      placeholder="Адрес проживания (Город / Населённый пункт / Улица)"
                      value={actualAddress.address}
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      maxLength={101}
                      style={{ boxSizing: "border-box" }}
                      {...register ("addressActual", {
                        required: handlerResidentialAddressActive(),
                        maxLength: {
                          value: 100,
                          message: "*Не больше 100 символов",
                        },
                        pattern: {
                          value: /^[^A-Za-z]+$/ig,
                          message: "*Допустим ввод только русских символов"
                        },
                        onChange: (event) => setActualAddress({...actualAddress, address: event.target.value.replace(RegForAddress, "")})
                      })}
                    />
                    <WarrningError>{ errors?.addressActual && (<p>{ errors?.addressActual?.message ||`*Необходимо заполнить поле "Адрес регистрации"`}</p>) }</WarrningError>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_region"
                  >
                    <label className="control-label">Регион</label>
                    <input id="address_act_id_region"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_region"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][region]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_act_id_region" className="help-block hidden">Необходимо заполнить поле "Регион"</div>
                  </div>
                  <div className="input-box hide hidden" id="form_address_act_id_district">
                    <label className="control-label">Район</label>
                    <input id="address_act_id_district"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_district"
                      maxLength="255"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][district]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_act_id_district" className="help-block hidden">Необходимо заполнить поле "Район"</div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_city"
                  >
                    <label className="control-label">Город</label>
                    <input id="address_act_id_city"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_city"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][city]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_act_id_city" className="help-block hidden">Необходимо заполнить поле "Город"</div>
                  </div>
                  <div className="input-box hide hidden" id="form_address_act_id_street">
                    <label className="control-label">Улица</label>
                    <input id="address_act_id_street"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_street"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][street]"
                      data-index_group=""
                      placeholder=""
                      value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div id="error_address_act_id_street" className="help-block hidden">Необходимо заполнить поле "Улица"</div>
                  </div>
                  <div className={ functionalStates.additionalFields === false ? "input-box inpBxThirty" : "input-box inpBxThirty hidden"} id="form_address_act_id_house_number">
                    <label className="control-label">Номер дома</label>
                    <input
                      id="address_act_id_house_number"
                      className="input_field rus_num suggestions-input"
                      type="text"
                      data-dadata="actual_building"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][house_number]"
                      data-index_group=""
                      placeholder="Номер дома"
                      value={actualAddress.house}
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      maxLength={11}
                      style={{ boxSizing: "border-box" }}
                      {...register ("houseActual", {
                        required: handlerResidentialAddressActive(),
                        maxLength: {
                          value: 10,
                          message: "*Не больше 10 символов",
                        },
                        onChange: (event) => setActualAddress({...actualAddress, house: event.target.value.replace(RegForHouseNumber, "")})
                      })}
                    />
                    <WarrningError>{ errors?.houseActual && (<p>{ errors?.houseActual?.message ||`*Необходимо заполнить поле "Номер дома"`}</p>) }</WarrningError>
                  </div>
                  <div className="input-box hide inpBxThirteen hidden" id="form_address_act_id_block">
                    <label className="control-label">Корпус</label>
                    <input id="address_act_id_block"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][block]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_act_id_block" className="help-block hidden">Необходимо заполнить поле "Корпус"</div>
                  </div>
                  <div className="input-box hide hidden" id="form_address_act_id_building">
                    <label className="control-label">Строение</label>
                    <input id="address_act_id_building"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][building]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_act_id_building" className="help-block hidden">Необходимо заполнить поле "Строение"</div>
                  </div>
                  <div className={ functionalStates.additionalFields === false ? "input-box inpBxMRA" : "input-box inpBxMRA hidden" } id="form_address_act_id_apartment">
                    <label className="control-label">Квартира</label>
                    <input
                      id="address_act_id_apartment"
                      className="input_field"
                      type="text"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][apartment]"
                      data-index_group=""
                      placeholder="Квартира"
                      value={actualAddress.apartment}
                      maxLength={11}
                      {...register ("apartmentActual", {
                        required: handlerResidentialAddressActive(),
                        maxLength: {
                          value: 10,
                          message: "*Не больше 10 символов",
                        },
                        onChange: (event) => setActualAddress({...actualAddress, apartment: event.target.value.replace(RegForApartmentNumber, "")})
                      })}
                    />
                    <WarrningError>{ errors?.apartmentActual && (<p>{ errors?.apartmentActual?.message ||`*Необходимо заполнить поле "Квартира"`}</p>) }</WarrningError>
                  </div>
                  <div className="input-box hide hidden" id="form_address_act_id_address_other">
                    <label className="control-label">Дополнительные значения адреса</label>
                    <input id="address_act_id_address_other"
                      className="input_field"
                      type="hidden"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][address_other]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_act_id_address_other" className="help-block hidden">Необходимо заполнить поле "Дополнительные значения адреса"</div>
                  </div>
                  <div className="input-box hide" id="form_address_act_id_loc_city_id">
                    <label className="control-label">Идентификатор адреса в общедоступном справочнике</label>
                    <input id="address_act_id_loc_city_id"
                      className="input_field"
                      type="hidden"
                      maxLength="6"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][loc_city_id]"
                      data-index_group=""
                      placeholder=""
                      value=""
                    />
                    <div id="error_address_act_id_loc_city_id" className="help-block hidden">
                      Необходимо заполнить поле "Идентификатор адреса в
                      общедоступном справочнике"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" name="action[check_date_of_issue_passport_action]" />
          <div className="btn-box">
            <button type="submit" name="btn_submit_step_save" className="btn btn-primary" id="btn_submit_step_save">
              <span>Продолжить</span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}