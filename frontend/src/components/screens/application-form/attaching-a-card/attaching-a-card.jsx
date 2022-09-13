// #: REACT
import React from 'react'
import { useForm } from 'react-hook-form'

export const AttachingCard = ({onChangeEmploymentAndIncome, onChangeAttachingCard, onChangeAttachPhoto}) => {

  // ^: ХУКИ | HOOKS
  const {
    formState: { errors },
    handleSubmit,
    control
  } = useForm ({
    mode: "all",
  })

  // ^: КНОПКИ | BUTTONS
  const onSubmit = (data) => {
    onChangeAttachingCard(false)
    onChangeAttachPhoto(true)
  }
  const onBack = () => {
    onChangeAttachingCard(false)
    onChangeEmploymentAndIncome(true)
  }



  return (
    <>
      <div className="mr_content-box " data-step_id="prikreplenie_karty" data-step_index="4">
        <h2>Прикрепление карты</h2>
        <form 
          className="content-form"
          method="post"
          id="prikreplenie-karty"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="alert alert-danger hidden"></div>
          <div className="wrapper-master">
            <div className="wrapper-inputs "></div>
            <table className="table">
              <thead>
                <tr>
                  <th>Карта</th>
                  <th>Номер карты</th>
                  <th>Срок действия</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>553691******3770</td>
                  <td>03/2030</td>
                </tr>
              </tbody>
              </table>
              <input type="hidden" id="cards_count" data-count_update="3" value="1" />
              <div className="support__text">
                <p style={{fontSize: "16px"}}>Уважаемый клиент, перед привязкой карты убедитесь, что ваш баланс карты <span style={{fontWeight: "700"}}>не менее 1 рубля</span>, иначе привязать карту не получится.</p>
              </div>
              <div className="group-btn-box">
                <button type="button" className="btn btn-primary" onclick="window.top.location.href='https://pay.best2pay.net/webapi/Authorize?sector=7991&amp;id=509170070&amp;signature=NTY5ZTA2ODlmMjBhYjM1ZTVhZjdhNTdlOGQ1NTQ2MmM%3D&amp;get_token=1'">
                <span>Добавить карту</span>
                </button>
              </div>
          </div>
          <input type="hidden" name="action[return_add_card_link_action]" value="1" />
          <div className="btn-box">
            <button type="button" className="btn btn-light btn_back_step" id="btn_back_step" value="prikreplenie_karty" onClick={onBack}><span>Назад</span></button>
            <button type="submit" name="btn_submit_step_save" className="btn btn-primary" id="btn_submit_step_save" value="prikreplenie_karty"><span>Продолжить</span></button>
          </div>
        </form>
      </div>
    </>
  )
}