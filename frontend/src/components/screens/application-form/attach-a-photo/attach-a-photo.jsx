// #: REACT
import React, { useState, useRef, useCallback, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"

// #: COMPONENTS
import { WarrningError } from "../../../shared/verify/warrning-error"

// #: IMG
import defPssportImg from "../../../../assets/img/attach-a-photo/defPassport.png"
import defPssportRegImg from "../../../../assets/img/attach-a-photo/defPassportReg.png"
import defcardImg from "../../../../assets/img/attach-a-photo/cardDef.png"
import defCardFrontTFImg from "../../../../assets/img/attach-a-photo/cardFrontTF.png"
import defCardBackTFImg from "../../../../assets/img/attach-a-photo/CardBackTF.png"



export const AttachPhoto = () => {

  // ^СТЕЙТЫ | STATES
  const [cardCheckbox, setCardCheckbox] = useState(false)
  const [firstPassportImg, setFirstPassportImg] = useState(defPssportImg)
  const [firstPassportURL, setFirstPassportURL] = useState()
  const [secondPassportImg, setSecondPassportImg] = useState(defPssportImg)
  const [secondPassportURL, setSecondPassportURL] = useState()
  const fileReader = new FileReader()

  // ^ХУКИ | HOOKS
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    resetField
  } = useForm({ mode: "all" })

  // ^ХЕНДЛЕРЫ | HANDLERS
  // Включение карты новго образца
  const handlerSetCard = () => {
    if (cardCheckbox === false) {
      setCardCheckbox(true)
    } else {
      setCardCheckbox(false)
    }
  }

  // Загрузка первой страницы паспорта
  const handlerSetFirstPassportImg = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    setFirstPassportImg(file)
    fileReader.readAsDataURL(file)
    fileReader.onloadend = () => {
      setFirstPassportURL(fileReader.result)
    }
  }

  // Загрузка второй страницы паспорта
  const handlerSetSecondPassportImg = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    setSecondPassportImg(file)
    fileReader.readAsDataURL(file)
    fileReader.onloadend = () => {
      setSecondPassportURL(fileReader.result)
    }
  }

  return (
  <>
  <div className="mr_content-box " data-step_id="prikreplenie_foto" data-step_index="5">
  <h2>Прикрепление фото</h2>
  <form className="content-form" method="post" id="prikreplenie-foto">
    <div className="alert alert-danger hidden"></div>
    <div className="wrapper_content">
      <div className="wrapper_content_passport" style={{marginBottom: "56px"}}>
        <div className="wrapper_content_passport__img">
          <img src={firstPassportURL ? firstPassportURL : defPssportImg} alt="pssport img"/>
        </div>
        <div className="wrapper_content_passport_info">
        <h5 style={{fontWeight: "bold", paddingBottom: "30px"}}>Загрузите изображеие паспорта РФ</h5>
          <ul>
            <li>Разворот должен попадать полностью на фото без обрезки углов, как на примере слева</li>
            <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
            <li>Не закрывайте рукой данные в паспорте</li>
            <li>Обязательно убедитесь, что на прикрепленном фото все записи хорошо читаются</li>
          </ul>
          <label for="first_passport">
            <div className="wrapper_content_passport_info__buttons">
              <buttons className="btn btn-primary" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><span>Загрузить файл</span></buttons>
            </div>
          </label>
          <input id="first_passport" className="hidden" type="file" onChange={handlerSetFirstPassportImg} />
        </div>
      </div>
      <div className="wrapper_content_passport" style={{marginBottom: "125px"}}>
        <div className="wrapper_content_passport__img">
          <img src={secondPassportURL ? secondPassportURL : defPssportRegImg} alt="pssport img"/>
        </div>
        <div className="wrapper_content_passport_info">
        <h5 style={{fontWeight: "bold", paddingBottom: "30px"}}>Загрузите изображение разворота регистрации паспорта</h5>
          <ul>
            <li>Разворот должен попадать полностью на фото без обрезки углов, как на примере слева</li>
            <li>В случае если на странице регистрации нет серии и номера паспорта, то необходимо сфотографировать страницу регистрации вместе со следующей страницей</li>
            <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
            <li>Не закрывайте рукой данные в паспорте</li>
            <li>Обязательно убедитесь, что на прикрепленном фото все записи хорошо читаются</li>
          </ul>
          <label for="second_passport">
            <div className="wrapper_content_passport_info__buttons">
              <buttons className="btn btn-primary" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><span>Загрузить файл</span></buttons>
            </div>
            <input id="second_passport" className="hidden" type="file" onChange={handlerSetSecondPassportImg} />
          </label>
        </div>
      </div>
      <div className="wrapper_content_card" style={{marginBottom: "60px"}}>
        <div className="wrapper_content_card_img" style={{width: "222px"}}>
          <img src={defcardImg} alt="card img"/>
          <label for="second_passport">
            <div className="wrapper_content_card_img__buttons" style={{width: "222px"}}>
              <buttons className="btn btn-primary" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><span>Загрузить файл</span></buttons>
            </div>
          </label>
        </div>
        <div className="wrapper_content_card_info">
        <h5 style={{fontWeight: "bold", paddingBottom: "30px"}}>Добавить фотографию банковской карты</h5>
          <ul>
            <li>Сделайте фото лицевой стороны карты, которую Вы прикрепили</li>
            <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
            <li>Не закрывайте рукой данные на карте</li>
            <li>Обязательно убедитесь, что на прикрепленном фото номер и владелец карты хорошо читаются</li>
          </ul>
        </div>
      </div>
      <Controller
        control={control}
        name="card"
        rules={{
          required: true,
        }}
        render={({ field: { onChange } }) => (
          <>
          <div class="input-box" id="form_sb_use_cards" style={{marginBottom: "60px"}}>
              <label className={cardCheckbox === true ? "control-label label-checkbox active" : "control-label label-checkbox"}><input id="sb_use_cards" type="checkbox" name="sb_use_cards" onClick={() => {onChange(); handlerSetCard()}}/> У Вас карта Тинькофф или Альфа банка нового образца?</label><br/>
              <span style={{fontSize: "14px"}}>Если Вы держатель карты Тинькофф или Альфа банк нового образца, где ФИО и номер карты расположены на разных сторонах, необходимо прикрепить 2 фотографии</span>
          </div>
          </>
        )}
      />
      <div className={cardCheckbox === false ? "wrapper_content_card hidden" : "wrapper_content_card"} style={{marginBottom: "60px"}}>
        <div className="wrapper_content_card_img" style={{width: "222px"}}>
          <img src={defCardFrontTFImg} alt="card img"/>
          <div className="wrapper_content_card_img__buttons"><buttons className="btn btn-primary" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><span>Загрузить файл</span></buttons></div>
        </div>
        <div className="wrapper_content_card_info">
        <h5 style={{fontWeight: "bold", paddingBottom: "30px"}}>Добавить фотографию лица банковской карты</h5>
          <ul>
            <li>Сделайте фото лицевой стороны карты, которую Вы прикрепили</li>
            <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
            <li>Не закрывайте рукой данные на карте</li>
            <li>Обязательно убедитесь, что на прикрепленном фото номер и владелец карты хорошо читаются</li>
          </ul>
        </div>
      </div>
      <div className={cardCheckbox === false ? "wrapper_content_card hidden" : "wrapper_content_card"} style={{marginBottom: "60px"}}>
        <div className="wrapper_content_card_img" style={{width: "222px"}}>
          <img src={defCardBackTFImg} alt="card img"/>
          <div className="wrapper_content_card_img__buttons"><buttons className="btn btn-primary" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><span>Загрузить файл</span></buttons></div>
        </div>
        <div className="wrapper_content_card_info">
        <h5 style={{fontWeight: "bold", paddingBottom: "30px"}}>Добавить фотографию оборота банковской карты</h5>
          <ul>
            <li>Необходимо фото обратной стороны карты, которую вы прикрепили</li>
            <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
            <li>Закройте номер CVV так чтобы была видна остальная информация</li>
            <li>Обязательно убедитесь, что на прикрепленном фото номер и владелец карты хорошо читаются</li>
          </ul>
        </div>
      </div>
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