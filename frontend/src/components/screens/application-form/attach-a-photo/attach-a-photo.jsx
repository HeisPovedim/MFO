// #: REACT
import React, { useState, useRef, useCallback, useEffect } from "react"

// #: IMG
import defPssportImg from "../../../../assets/img/attach-a-photo/defPassport.png"
import defPssportRegImg from "../../../../assets/img/attach-a-photo/defPassportReg.png"

export const AttachPhoto = () => {
  return (
  <>
  <div className="mr_content-box " data-step_id="prikreplenie_foto" data-step_index="5">
  <h2>Прикрепление фото</h2>
  <form className="content-form" method="post" id="prikreplenie-foto">
    <div className="alert alert-danger hidden"></div>
    <div className="wrapper_content">
      <div className="wrapper_content_passport">
        <img src={defPssportImg} alt="pssport img"/>
        <div className="wrapper_content_passport_info">
        <h5 style={{fontWeight: "bold", paddingBottom: "30px"}}>Загрузите изображеие паспорта РФ</h5>
          <ul>
            <li>Разворот должен попадать полностью на фото без обрезки углов, как на примере слева</li>
            <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
            <li>Не закрывайте рукой данные в паспорте</li>
            <li>Обязательно убедитесь, что на прикрепленном фото все записи хорошо читаются</li>
          </ul>
          <div className="wrapper_content_passport_info__buttons"><buttons className="btn btn-primary" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><span>Загрузить фото</span></buttons></div>
        </div>
      </div>
      <div className="wrapper_content_passport">
        <img src={defPssportRegImg} alt="pssport img"/>
        <div className="wrapper_content_passport_info">
        <h5 style={{fontWeight: "bold", paddingBottom: "30px"}}>Загрузите изображеие паспорта РФ</h5>
          <ul>
            <li>Разворот должен попадать полностью на фото без обрезки углов, как на примере слева</li>
            <li>В случае если на странице регистрации нет серии и номера паспорта, то необходимо сфотографировать страницу регистрации вместе со следующей страницей</li>
            <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
            <li>Не закрывайте рукой данные в паспорте</li>
            <li>Обязательно убедитесь, что на прикрепленном фото все записи хорошо читаются</li>
          </ul>
          <div className="wrapper_content_passport_info__buttons"><buttons className="btn btn-primary" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><span>Загрузить фото</span></buttons></div>
        </div>
      </div>
      <div></div>
    </div>
    <div className="btn-box">
      <button type="button" className="btn btn-light btn_back_step" id="btn_back_step" value="prikreplenie_foto"><span>Назад</span></button>
      <button type="submit" name="btn_submit_step_save" className="btn btn-primary" id="btn_submit_step_save" value="prikreplenie_foto"><span>Продолжить</span></button>
    </div>
  </form>
  </div>
  </>
  )
}