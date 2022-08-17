import React, { useEffect, useState } from "react";


// helper
import { CountDown } from "../helper/count-down";

// import img
import backPng from "../../img/free-icon-back-130882.png"

const ModalDialog = (props) => {

  const [statusTimer, setStatusTimer] = useState(false)
  const [restarTimer, setRestartTimer] = useState(false)

  const handlerRestartTimer = () => {
    setStatusTimer(false)
  }

  const handlerModalBack = () => {
    props.modalBack(true)
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
              <form method="POST" className="dnt_sbmt_frm" name="check_form">
                <div className="input-box">
                  <label className="control-label">Код из смс</label>
                  <input type="text" data-required="true" name="modal[sms_code]" maxLength="5" defaultValue="" />
                </div>
                <div className="resend_box">
                  { statusTimer === true ? (<div className="resend_sms" data-send-page="master_reg" onClick={ handlerRestartTimer } >Отправить код повторно</div> ) : undefined }
                  { statusTimer === false ? <p className="resend_sms_title">Получить код повторно <span className="resend_timer"> <CountDown seconds={5} timerStatus={setStatusTimer} restartTimer={restarTimer} /> </span> сек</p> : undefined}
                </div>
                <button type="button" className="btn btn-secondary" onClick={ handlerModalBack } >Изменить номер телефона</button>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" id="confirmSMSCode">Подтвердить</button>
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