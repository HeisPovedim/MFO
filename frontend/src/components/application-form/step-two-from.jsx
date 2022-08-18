import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form'
import $ from 'jquery'
import 'suggestions-jquery'

// helpers
import { capitalizeFirstLetter } from '../../components/helper/capitalize-first-letter.jsx'

// custom libraries
import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import ReactDadataBox from 'react-dadata-box'

const StepTwoForm = (props) => {

  useEffect (() => {
    console.log(dataSuggestion)
    // console.log(dataSuggestion.data.code)
    // console.log(dataSuggestion.value)
    // $('#code').suggestions({
    //   token: "0a6d8a91d324ad8afcbb98473979e7329d944fd6",
    //   type: 'fms_unit',
    //   formatResult: function (value, currentValue, suggestion) {
    //       suggestion.value = suggestion.data.code;
    //       return suggestion.data.code + ' — ' + suggestion.data.name;
    //   },
    //   onSelect: function (suggestion) {
    //       $('#place_of_issue').val(suggestion.data.name);
    //   }
    // })
  })

  // ХУКИ | HOOKS
  const { register, formState: { errors }, handleSubmit, control } = useForm({ mode: "onBlur" })

  const onSubmit = () => {}

  // Переменные паспортных данных
  const [passportSeries, setPassportSeries] = useState(Number)
  const [passportNumber, setPassportNumber] = useState(Number)
  const [dateOfBirth, setDateOfBirth] = useState(Number)
  const [passportIssueDate, setPassportIssueDate] = useState(Number)
  const [ouCode, setOUCode] = useState()
  const [placeOfBirth, setPlaceOfBirth] = useState(Number)
  const [dataSuggestion, setDataSuggestion] = useState()
  const [placeOfIssue, setPlaceOfIssue] = useState("")

  // Хендлеры
  const handlerPlaceOfBirth = (event) => {
    setPlaceOfBirth(capitalizeFirstLetter(event.replace(/[^а-яА-ЯёЁ\s]/gi, '')))
  }
  const handelStepTwoFormBack = () => {
    props.statusSmsPhone(true)
  }
  const handlerDataSuggestion = (suggestion) => {
    console.log(suggestion)
    setOUCode(suggestion.data.code)
    setPlaceOfIssue(suggestion.value)
  }

  // Текст ошибки
  const WarrningError = styled.p`
    padding-top: 5px;
    margin: 0;
    >p{
      color: red;
      font-size: 13px;
      font-weight: 600;
      text-align: center;
    }
  `

  return (
    <>
      <div
        className="mr_content-box"
        data-step_id="pasportnye_dannye"
        data-step_index="2"
      >
        <h2>Паспортные данные</h2>
        <form className="content-form" method="post"
        onSubmit = { handleSubmit(onSubmit) }
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
                      <NumberFormat
                        format="####"
                        allowEmptyFormatting
                        mask="_"
                        onBlur={onBlur}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                          setPassportSeries(value);
                          onChange(value)
                        }}
                      />
                      <WarrningError>
                        {errors?.passportSeries && (
                          <p>
                            {errors?.passportSeries?.message ||
                              `*Необходимо заполнить поле "Серия паспорта"`}
                          </p>
                        )}
                      </WarrningError>
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
                      <NumberFormat
                        format="######"
                        allowEmptyFormatting
                        mask="_"
                        onBlur={onBlur}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                          setPassportNumber(value);
                          onChange(value)
                        }}
                      />
                      <WarrningError>
                        {errors?.passportNumber && (
                          <p>
                            {errors?.passportNumber?.message ||
                              `*Необходимо заполнить поле "Номер паспорта"`}
                          </p>
                        )}
                      </WarrningError>
                    </>
                  )}
                />
              </div>
              {/* data-picker="" */}
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
                      <NumberFormat
                        format="##.##.####"
                        data-picker=""
                        allowEmptyFormatting
                        mask="_"
                        onBlur={onBlur}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                          setDateOfBirth(value);
                          onChange(value)
                        }}
                      />
                      <WarrningError>
                        {errors?.dateOfBirth && (
                          <p>
                            {errors?.dateOfBirth?.message ||
                              `*Необходимо заполнить поле "Номер паспорта"`}
                          </p>
                        )}
                      </WarrningError>
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
                      <NumberFormat
                        format="##.##.####"
                        data-picker=""
                        allowEmptyFormatting
                        mask="_"
                        onBlur={onBlur}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                          setPassportIssueDate(value);
                          onChange(value)
                        }}
                      />
                      <WarrningError>
                        {errors?.passportIssueDate && (
                          <p>
                            {errors?.passportIssueDate?.message ||
                              `*Необходимо заполнить поле "Дата выдачи паспорта"`}
                          </p>
                        )}
                      </WarrningError>
                    </>
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_code_division">
                <label className="control-label">Код подразделения</label>
                {/* <Controller
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
                      <NumberFormat
                        id="code"
                        format="###-###"
                        allowEmptyFormatting
                        mask="_"
                        onBlur={onBlur}
                        onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                          setOUCode(value);
                          onChange(value)
                        }}
                      />
                      <WarrningError>
                        {errors?.ouCode && (
                          <p>
                            {errors?.ouCode?.message ||
                              `*Необходимо заполнить поле "Код подразделения"`}
                          </p>
                        )}
                      </WarrningError>
                    </>
                  )}
                /> */}
                <ReactDadataBox
                  token="0a6d8a91d324ad8afcbb98473979e7329d944fd6"
                  type='fms_unit'
                  onChange={suggestion => handlerDataSuggestion(suggestion)}
                  customInput = {( {onChange} ) => (
                    <NumberFormat
                      format="###-###"
                      allowEmptyFormatting
                      mask="_"
                      // className={className}
                      onValueChange={(values) => {
                          const { formattedValue, value } = values;
                          // formattedValue = $2,223
                          // value ie, 2223
                            setDataSuggestion(value)
                            console.log(value)
                        }}
                      onChange={ (event) => {
                        onChange(event)
                        setOUCode(event.target.value)
                      }}
                      value={ouCode}
                    />
                  )}
                />
              </div>
              <div className="input-box inpBxFF" id="form_place_of_birth">
                <label className="control-label">Место рождения</label>
                <input
                  id="place_of_birth"
                  className="input_field rus_num"
                  type="text"
                  value={ placeOfBirth }
                  maxLength="255"
                  data-required="true"
                  name="pasportnye_dannye[place_of_birth]"
                  data-index_group=""
                  placeholder=""
                  {...register("placeOfBirth", {
                    required: true,
                    onChange: (event) => setPlaceOfBirth(event.target.value)
                  })}
                />
                <div id="error_place_of_birth" className="help-block hidden">
                  Необходимо заполнить поле "Место рождения"
                </div>
              </div>
              <div className="input-box inpBxFull" id="form_place_of_issue">
                <label className="control-label">Паспорт выдан</label>
                <input
                  id="place_of_issue"
                  className="input_field rus_num"
                  type="text"
                  maxLength="255"
                  data-required="true"
                  name="pasportnye_dannye[place_of_issue]"
                  data-index_group=""
                  placeholder=""
                  value={placeOfIssue}
                />
                <div id="error_place_of_issue" className="help-block hidden">
                  Необходимо заполнить поле "Паспорт выдан"
                </div>
              </div>
              <div className="input-box inpBxFull" id="form_gender">
                <label className="control-label">Пол</label>
                <div className="input_box_radio_list">
                  <label className="control-label label-radio active">
                    <input
                      className=""
                      type="radio"
                      data-id="gender"
                      data-required="true"
                      name="pasportnye_dannye[gender]"
                       // checked="checked"
                      data-index_group=""
                      // value="1"
                    />
                    Мужской
                  </label>
                  <label className="control-label label-radio">
                    <input
                      className=""
                      type="radio"
                      data-id="gender"
                      data-required="true"
                      name="pasportnye_dannye[gender]"
                      data-index_group=""
                      // value="2"
                    />
                    Женский
                  </label>
                </div>
                <div id="error_gender" className="help-block hidden">
                  Необходимо заполнить поле "Пол"
                </div>
              </div>
              <div className="input-box inpBxFF" id="form_snils">
                <label className="control-label">СНИЛС</label>
                <input
                  id="snils"
                  className="input_field"
                  type="text"
                  mask="999-999-999 99"
                  data-autoclear-mask="true"
                  data-required="true"
                  name="pasportnye_dannye[snils]"
                  data-index_group=""
                  placeholder=""
                  // value="32132132112"
                />
                <div id="error_snils" className="help-block hidden">
                  Необходимо заполнить поле "СНИЛС"
                </div>
              </div>

              <div className="input-box inpBxFull" id="form_consent_snils">
                <label className="control-label label-checkbox active">
                  <input
                    id="consent_snils"
                    type="checkbox"
                    data-required="true"
                    data-is_checkbox="true"
                    name="consent_snils"
                     // checked="checked"
                  />
                  Заполняя сведения о СНИЛС, выражаю свое согласие на
                  направление в электронном виде сведений обо мне в кредитную
                  организацию для прохождения упрощенной идентификации
                </label>
                <div id="error_consent_snils" className="help-block hidden">
                  Необходимо проставить галочку
                </div>
              </div>
              <div id="address_reg_id">
                <h3 className="m_plugin_title">Адрес регистрации</h3>
                <div className="wrapper-inputs">
                  <div
                    className="input-box hide"
                    id="form_address_reg_id_postal_code"
                  >
                    <label className="control-label">Почтовый индекс</label>
                    <input
                      id="address_reg_id_postal_code"
                      className="input_field suggestions-input"
                      type="hidden"
                      data-dadata="legal_zip"
                      mask="999999"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][postal_code]"
                      data-index_group=""
                      placeholder=""
                      // value="620076"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_reg_id_postal_code"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Почтовый индекс"
                    </div>
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
                      placeholder=""
                      // value="Свердловская обл, г Екатеринбург, ул Щербакова"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div className="suggestions-wrapper">
                      <div
                        className="suggestions-suggestions"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      id="error_address_reg_id_address"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Адрес"
                    </div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_region">
                    <label className="control-label">Регион</label>
                    <input
                      id="address_reg_id_region"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_region"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][region]"
                      data-index_group=""
                      placeholder=""
                      // value="Свердловская обл"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_reg_id_region"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Регион"
                    </div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_district">
                    <label className="control-label">Район</label>
                    <input
                      id="address_reg_id_district"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_district"
                      maxLength="255"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][district]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_reg_id_district"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Район"
                    </div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_city">
                    <label className="control-label">Город</label>
                    <input
                      id="address_reg_id_city"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_city"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][city]"
                      data-index_group=""
                      placeholder=""
                      // value="г Екатеринбург"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_reg_id_city"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Город"
                    </div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_street">
                    <label className="control-label">Улица</label>
                    <input
                      id="address_reg_id_street"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="legal_street"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][street]"
                      data-index_group=""
                      placeholder=""
                      // value="ул Щербакова"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_reg_id_street"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Улица"
                    </div>
                  </div>
                  <div
                    className="input-box inpBxThirty"
                    id="form_address_reg_id_house_number"
                  >
                    <label className="control-label">Номер дома</label>
                    <input
                      id="address_reg_id_house_number"
                      className="input_field rus_num suggestions-input"
                      type="text"
                      data-dadata="legal_building"
                      maxLength="32"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][house_number]"
                      data-index_group=""
                      placeholder=""
                      // value="д 77 к 4 "
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div className="suggestions-wrapper">
                      <div
                        className="suggestions-suggestions"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      id="error_address_reg_id_house_number"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Номер дома"
                    </div>
                  </div>
                  <div
                    className="input-box hide inpBxThirteen"
                    id="form_address_reg_id_block"
                  >
                    <label className="control-label">Корпус</label>
                    <input
                      id="address_reg_id_block"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][block]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_reg_id_block"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Корпус"
                    </div>
                  </div>
                  <div className="input-box hide" id="form_address_reg_id_building">
                    <label className="control-label">Строение</label>
                    <input
                      id="address_reg_id_building"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][building]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_reg_id_building"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Строение"
                    </div>
                  </div>
                  <div
                    className="input-box inpBxMRA"
                    id="form_address_reg_id_apartment"
                  >
                    <label className="control-label">Квартира</label>
                    <input
                      id="address_reg_id_apartment"
                      className="input_field"
                      type="text"
                      maxLength="40"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][apartment]"
                      data-index_group=""
                      placeholder=""
                      // value="683"
                    />
                    <div
                      id="error_address_reg_id_apartment"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Квартира"
                    </div>
                  </div>
                  <div
                    className="input-box hide"
                    id="form_address_reg_id_address_other"
                  >
                    <label className="control-label">
                      Дополнительные значения адреса
                    </label>
                    <input
                      id="address_reg_id_address_other"
                      className="input_field"
                      type="hidden"
                      data-required="false"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][address_other]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_reg_id_address_other"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Дополнительные значения адреса"
                    </div>
                  </div>
                  <div
                    className="input-box hide"
                    id="form_address_reg_id_loc_city_id"
                  >
                    <label className="control-label">
                      Идентификатор адреса в общедоступном справочнике
                    </label>
                    <input
                      id="address_reg_id_loc_city_id"
                      className="input_field"
                      type="hidden"
                      maxLength="6"
                      data-required="true"
                      data-key_plugin="address_reg_id"
                      name="pasportnye_dannye[address_reg_id][loc_city_id]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_reg_id_loc_city_id"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Идентификатор адреса в
                      общедоступном справочнике"
                    </div>
                  </div>
                </div>
              </div>
              <div id="address_act_id">
                <h3 className="m_plugin_title">Адрес проживания</h3>
                <div className="wrapper-inputs">
                  <div
                    className="input-box inpBxFull"
                    id="form_address_act_id_address_match"
                  >
                    <div className="list_fields hidden">
                      <input
                        type="hidden"
                        // value="postal_code"
                        data-val_is_show=""
                      />
                      <input type="hidden" data-val_is_show="" />
                      <input
                        type="hidden"
                        // value="district"
                        data-val_is_show=""
                      />
                      <input type="hidden" data-val_is_show="" />
                      <input type="hidden" data-val_is_show="" />
                      <input
                        type="hidden"
                        // value="house_number"
                        data-val_is_show=""
                      />
                      <input type="hidden" data-val_is_show="" />
                      <input
                        type="hidden"
                        // value="building"
                        data-val_is_show=""
                      />
                      <input
                        type="hidden"
                        // value="apartment"
                        data-val_is_show=""
                      />
                      <input
                        type="hidden"
                        // value="address_other"
                        data-val_is_show=""
                      />
                      <input
                        type="hidden"
                        // value="address"
                        data-val_is_show=""
                      />
                    </div>
                    <label className="control-label label-checkbox active">
                      <input
                        id="address_act_id_address_match"
                        className=""
                        type="checkbox"
                        data-required="true"
                        data-key_plugin="address_act_id"
                        name="pasportnye_dannye[address_act_id][address_match]"
                        data-event_field="true"
                         // checked="checked"
                        data-index_group=""
                      />
                      Адрес проживания совпадает с адресом регистрации
                    </label>
                    <div
                      id="error_address_act_id_address_match"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Адрес проживания совпадает с
                      адресом регистрации"
                    </div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_postal_code"
                  >
                    <label className="control-label">Почтовый индекс</label>
                    <input
                      id="address_act_id_postal_code"
                      className="input_field"
                      type="hidden"
                      data-dadata="actual_zip"
                      mask="999999"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][postal_code]"
                      data-index_group=""
                      placeholder=""
                      // value="620076"
                    />
                    <div
                      id="error_address_act_id_postal_code"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Почтовый индекс"
                    </div>
                  </div>
                  <div
                    className="input-box inpBxFull hidden"
                    id="form_address_act_id_address"
                  >
                    <label className="control-label">
                      Адрес проживания (Город / Населённый пункт / Улица)
                    </label>
                    <input
                      id="address_act_id_address"
                      className="input_field suggestions-input"
                      type="text"
                      data-dadata="actual_address"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="address"
                      data-index_group=""
                      placeholder=""
                      // value="Свердловская обл, г Екатеринбург, ул Щербакова"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_act_id_address"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Адрес"
                    </div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_region"
                  >
                    <label className="control-label">Регион</label>
                    <input
                      id="address_act_id_region"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_region"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][region]"
                      data-index_group=""
                      placeholder=""
                      // value="Свердловская обл"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_act_id_region"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Регион"
                    </div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_district"
                  >
                    <label className="control-label">Район</label>
                    <input
                      id="address_act_id_district"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_district"
                      maxLength="255"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][district]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_act_id_district"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Район"
                    </div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_city"
                  >
                    <label className="control-label">Город</label>
                    <input
                      id="address_act_id_city"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_city"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][city]"
                      data-index_group=""
                      placeholder=""
                      // value="г Екатеринбург"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_act_id_city"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Город"
                    </div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_street"
                  >
                    <label className="control-label">Улица</label>
                    <input
                      id="address_act_id_street"
                      className="input_field rus_num suggestions-input"
                      type="hidden"
                      data-dadata="actual_street"
                      maxLength="255"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][street]"
                      data-index_group=""
                      placeholder=""
                      // value="ул Щербакова"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_act_id_street"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Улица"
                    </div>
                  </div>
                  <div
                    className="input-box inpBxThirty hidden"
                    id="form_address_act_id_house_number"
                  >
                    <label className="control-label">Номер дома</label>
                    <input
                      id="address_act_id_house_number"
                      className="input_field rus_num suggestions-input"
                      type="text"
                      data-dadata="actual_building"
                      maxLength="32"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][house_number]"
                      data-index_group=""
                      placeholder=""
                      // value="д 77 к 4 "
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      style={{ boxSizing: "border-box" }}
                    />
                    <div
                      id="error_address_act_id_house_number"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Номер дома"
                    </div>
                  </div>
                  <div
                    className="input-box hide inpBxThirteen hidden"
                    id="form_address_act_id_block"
                  >
                    <label className="control-label">Корпус</label>
                    <input
                      id="address_act_id_block"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][block]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_act_id_block"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Корпус"
                    </div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_building"
                  >
                    <label className="control-label">Строение</label>
                    <input
                      id="address_act_id_building"
                      className="input_field"
                      type="hidden"
                      maxLength="20"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][building]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_act_id_building"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Строение"
                    </div>
                  </div>
                  <div
                    className="input-box inpBxMRA hidden"
                    id="form_address_act_id_apartment"
                  >
                    <label className="control-label">Квартира</label>
                    <input
                      id="address_act_id_apartment"
                      className="input_field"
                      type="text"
                      maxLength="40"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][apartment]"
                      data-index_group=""
                      placeholder=""
                      // value="683"
                    />
                    <div
                      id="error_address_act_id_apartment"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Квартира"
                    </div>
                  </div>
                  <div
                    className="input-box hide hidden"
                    id="form_address_act_id_address_other"
                  >
                    <label className="control-label">
                      Дополнительные значения адреса
                    </label>
                    <input
                      id="address_act_id_address_other"
                      className="input_field"
                      type="hidden"
                      data-required="false"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][address_other]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_act_id_address_other"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Дополнительные значения адреса"
                    </div>
                  </div>
                  <div
                    className="input-box hide"
                    id="form_address_act_id_loc_city_id"
                  >
                    <label className="control-label">
                      Идентификатор адреса в общедоступном справочнике
                    </label>
                    <input
                      id="address_act_id_loc_city_id"
                      className="input_field"
                      type="hidden"
                      maxLength="6"
                      data-required="true"
                      data-key_plugin="address_act_id"
                      name="pasportnye_dannye[address_act_id][loc_city_id]"
                      data-index_group=""
                      placeholder=""
                      // value=""
                    />
                    <div
                      id="error_address_act_id_loc_city_id"
                      className="help-block hidden"
                    >
                      Необходимо заполнить поле "Идентификатор адреса в
                      общедоступном справочнике"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="hidden"
            name="action[check_date_of_issue_passport_action]"
            // value="1"
          />

          <div className="btn-box">
            <button
              type="submit"
              name="btn_submit_step_save"
              className="btn btn-primary"
              id="btn_submit_step_save"
              // value="pasportnye_dannye"
            >
              <span>Продолжить</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export { StepTwoForm };
