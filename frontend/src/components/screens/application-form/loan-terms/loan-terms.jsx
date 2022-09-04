// #: REACT
import React from "react";

export const LoanTerms = () => {
  return (
  <>
    <div className="mr_content-box " data-step_id="usloviya_zayma" data-step_index="6">
      <h2>Условия займа</h2>
      <form className="content-form" method="post" name="index_master">
        <div className="alert alert-danger ">Указанные данные калькулятора потеряны!</div>
        <div className="wrapper-master">
          <h3>Доступная сумма займа до 15 000 &nbsp;₽</h3>
          <h4 style={{paddingBottom: "20px"}}>Сумма займа свыше 15 000 рублей доступна со второго займа</h4>
          <div className="wrapper-inputs ">
          </div>
          <div className="calculator_inner-section">
            <div className="calc">
              <input type="hidden" name="curdate" defaultValue="1662040742" />
              <input type="hidden" name="summ" defaultValue="10000" />
              <input type="hidden" name="limit" defaultValue="21" />
              <input type="hidden" name="over" defaultValue="2100" />
              <input type="hidden" name="total" defaultValue="12100" />
              <input type="hidden" name="day" defaultValue="22.09.2022" />
              <input type="hidden" id="sum-min" defaultValue="1500" />
              <input type="hidden" id="sum-max" defaultValue="15000" />
              <input type="hidden" id="limit-min" defaultValue="5" />
              <input type="hidden" id="limit-max" defaultValue="30" />
              <input type="hidden" id="procent" defaultValue="1.00" />
              <input type="hidden" id="step_amount" defaultValue="500" />
              <input type="hidden" id="step_term" defaultValue="1" />
              <input type="hidden" name="product" defaultValue="1" />
              <input type="hidden" id="count_prod" defaultValue="1" />
              <input type="hidden" id="annuity" name="is_annuity" defaultValue="" />
              <input type="hidden" id="currency_lang" defaultValue="&amp;#8381;" />
              <input type="hidden" id="sum-max_label" defaultValue="60000" />
              <input type="hidden" id="days_to_reduce" defaultValue="0" />
              <input type="hidden" id="is_grace_periods" defaultValue="0" />
              <input type="hidden" id="delete_duplicate" defaultValue="1" />
              <input type="hidden" id="service-sum" defaultValue="0" />
              <input type="hidden" id="extra_service-sum" defaultValue="980" />
              <input type="hidden" id="p1" attr-maxa="15000" attr-mina="1500" attr-mint="5" attr-maxt="30" attr-p="1.00" attr-sa="500" attr-st="1" attr-id="1" attr-labelt="дней" attr-isa="0" attr-timevalindex="1" attr-position="0" />
              <div className="calc-desc">
                <div className="cd_info">
                  <p>Вы берете</p>
                  <p>
                    <span className="calc-summ">10 000<small>&nbsp;₽</small></span>
                  </p>
                </div>
                <div className="cd_info">
                  <p className="payment_period">Возвращаете</p>
                  <p>
                    <span className="calc-total">12 100 <small>₽</small></span>
                  </p>
                </div>
                <div className="cd_info">
                  <p>До (включительно)</p>
                  <p><span className="calc-day-short">22.09.2022 г.</span></p>
                </div>
              </div>
              <div className="params-box">
                <div className="param">
                  <h4>Сумма</h4>
                  <div className="calc-value-box">
                    <div className="calc-value-info calc-value-info-amount">
                      <span className="calc-summ">10 000<small>&nbsp;₽</small></span>
                    </div>
                    <input type="text" defaultValue="1 500" className="calc-summ num" />
                  </div>
                  <div className="uislider summ ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                    <div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style={{width: "62.963%"}}></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: "62.963%"}}></span>
                  </div>
                  <p className="range_label flex justify-content-between">
                    <span>1 500</span>
                    <span>15 000</span>
                  </p>
                </div>
                <div className="param">
                  <h4>Срок</h4>
                  <div className="calc-value-box">
                    <div className="calc-value-info calc-value-info-term">
                      <span className="calc-limit"><span>21</span><small>&nbsp;день</small></span>
                    </div>
                    <input type="text" defaultValue="5" className="calc-limit num" />
                  </div>
                  <div className="uislider limit ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                    <div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style={{width: "64%"}}></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: "64%"}}></span>
                  </div>
                  <p className="range_label flex justify-content-between">
                    <span className="limit_min ">5 дней</span>
                    <span className="limit_max ">30 дней</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="info-step5">
              <p>Погасите займ вовремя и получите возможность взять займ до 100 000 рублей.</p>
            </div>
            <div className="wrapper-checkboxes">
              <label className="control-label label-checkbox main-checkbox">
                <input type="checkbox" name="mastrChckbx[all]" defaultValue="1" data-btnchckbx="btn_submit_step_save" data-promo="false" />
                <div>Я ознакомлен(-а) и согласен(-на) <a className="toggle_inner_checkboxes" href="#/">со следующим</a></div>
              </label>
              <div className="inner_checkboxes hidden">
                <div className="services_box">
                  <label className="control-label label-checkbox addr-check-label" htmlFor="extra_service_1">
                  <input type="checkbox" className="checkbox services_check" name="extra_service_match[1]" id="extra_service_1" data-identifier="1" defaultChecked="defaultChecked" defaultValue="1" />
                  <a className="show_modal_view_offers_services" data-modal_name="modal_offers_extra_services" data-service_id="extra_service_1" href="#/">Страховка от несчастного случая</a>
                  </label>
                  <div id="extraServiceBroken">
                    <input type="hidden" id="extra_service_broken" data-products="2,3,4" />
                    <input type="hidden" className="extra_service_broken active" data-from="1000" data-to="15000" data-products="2" />
                    <input type="hidden" className="extra_service_broken active" data-from="5000" data-to="15000" data-products="3" />
                    <input type="hidden" className="extra_service_broken active" data-from="6500" data-to="15000" data-products="4" />
                  </div>
                  <label className="control-label label-checkbox addr-check-label extra_service_broken-label" htmlFor="extra_service_2">
                  <input type="checkbox" className="checkbox services_check" name="extra_service_match[2]" id="extra_service_2" data-identifier="2" defaultChecked="defaultChecked" defaultValue="1" />
                  <a className="show_modal_view_offers_services" data-modal_name="modal_offers_extra_services_broken" data-service_id="extra_services_broken_2" href="#/">Подбор финансовых продуктов</a>
                  </label>
                  <label className="control-label label-checkbox addr-check-label extra_service_broken-label" htmlFor="extra_service_3">
                  <input type="checkbox" className="checkbox services_check" name="extra_service_match[3]" id="extra_service_3" data-identifier="3" defaultChecked="defaultChecked" defaultValue="1" />
                  <a className="show_modal_view_offers_services" data-modal_name="modal_offers_extra_services_broken" data-service_id="extra_services_broken_3" href="#/">Персональный менеджер</a>
                  </label>
                  <label className="control-label label-checkbox addr-check-label extra_service_broken-label" htmlFor="extra_service_4">
                  <input type="checkbox" className="checkbox services_check" name="extra_service_match[4]" id="extra_service_4" data-identifier="4" defaultChecked="defaultChecked" defaultValue="1" />
                  <a className="show_modal_view_offers_services" data-modal_name="modal_offers_extra_services_broken" data-service_id="extra_services_broken_4" href="#/">Юридические услуги</a>
                  </label>
                </div>
                <div className="modal fade modal-very-lg" id="modal_offers_extra_services" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* Страховка от несчастного случая */}
                      </div>
                  </div>
                </div>
                <div className="modal fade modal-very-lg" id="modal_offers_extra_services_broken" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* Подбор финансовых продуктов; Персональный менеджер; Юридические услуги */}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <label className="control-label label-checkbox">
                <input type="checkbox" name="mastrChckbx[two]" defaultValue="1" data-btnchckbx="btn_submit_step_save" />
                  Выражаю свое согласие на направление в электронном виде сведений обо мне в кредитную организацию для прохождения упрощенной идентификации
                </label>
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" name="action[signing_of_agreements_action]" defaultValue="1" />
        <input type="hidden" name="action[add_questionnaire_action]" defaultValue="1" />
        <div className="btn-box">
          <button type="button" className="btn btn-light btn_back_step" id="btn_back_step" defaultValue="usloviya_zayma"><span>Назад</span></button>
          <button type="submit" name="btn_submit_step_save" className="btn btn-primary" id="btn_submit_step_save" defaultValue="usloviya_zayma" disabled="disabled"><span>Продолжить</span></button>
        </div>
      </form>
    </div>
  </>
  )
}