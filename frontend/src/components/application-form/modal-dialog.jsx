// REACT
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// HELPER
  // functions
  import { CountDown } from "../helper/functions/count-down";
  // component
  import { WarrningError } from '../helper/component/warrning-error'

// IMG
import backPng from "../../img/free-icon-back-130882.png"


const ModalDialog = (props) => {


  // USEFORM
  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" })


  // СТЕЙТЫ | STATES
  const [statusTimer, setStatusTimer] = useState(false)


  // КНОПКИ | BUTTONS
  const onSubmit = (data) => {
    props.statusSmsPhone(false)
    props.setStatusStepTwoForm(true)
  }


  // ХЕНДЛЕРЫ | HANDLERS
  const handlerRestartTimer = () => {
    setStatusTimer(false)
  }
  const handlerModalBack = () => {
    props.statusStepOneForm(true)
    props.statusSmsPhone(false)
  }


  return (
    <>
      <div className="modal fade" id="checkSMSCode" tabIndex="-1">
        <button className="modal_fade_back" onClick={ handlerModalBack } ><img src={ backPng } alt=""/></button>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Подтверждение номера телефона</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <div className="alert alert-danger hidden">Ошибка</div>
              <p>Введите код из SMS, отправленный на номер <span className="phone_num_info">{ props.phoneNumber }</span></p>
              <form className="dnt_sbmt_frm" name="check_form" method="post"
                onSubmit={ handleSubmit(onSubmit) }
              >
                <div className="input-box">
                  <label className="control-label">Код из смс</label>
                  <input className="input-box__sms" type="number" defaultValue="" 
                    onInput = { (event) => event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,5) }
                    {...register("smsPhone", {
                      required: true,
                      minLength: {
                        value: 5,
                        message: "*Минимум 5 цифр"
                      }
                    })}
                  />
                  <WarrningError>
                  {errors?.smsPhone && (
                    <p>
                      {errors?.smsPhone?.message ||
                        `Необходимо заполнить поле "Код из смс"`}
                    </p>
                  )}
                </WarrningError>
                </div>
                <div className="resend_box">
                  { statusTimer === true ? (<div className="resend_sms" data-send-page="master_reg" onClick={ handlerRestartTimer } >Отправить код повторно</div> ) : undefined }
                  { statusTimer === false ? <p className="resend_sms_title">Получить код повторно <span className="resend_timer"> <CountDown seconds={60} timerStatus={setStatusTimer} /> </span> сек</p> : undefined}
                </div>
                <button type="button" className="btn btn-secondary" onClick={ handlerModalBack } >Изменить номер телефона</button>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" >Подтвердить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export { ModalDialog }