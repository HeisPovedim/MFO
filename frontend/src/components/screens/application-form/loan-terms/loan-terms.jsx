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
                    <div className="type_offer_service hidden" data-service_id="extra_service_1">
                      <div className="offer" id="MessServicePrint_extra_service_1">
                        <div className="wrap">
                          <div style={{display: "block", pageBreakBefore: "always"}}></div>
                          <table className="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" style={{border: "none", width: "100%"}}>
                            <tbody>
                              <tr style={{msoYftiIrow: "0", msoYftiFirstrow: "yes", height: "19.85pt"}}>
                                <td width="709" colSpan="5" style={{width: "531.6pt", border: "1pt solid windowtext", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt", height: "19.85pt"}}>
                                  <p className="MsoNormal" align="center" style={{textAlign: "center"}}>
                                    <span style={{fontSize: "12px", color: "black"}}>&nbsp;</span>
                                    <b>
                                      <span style={{fontSize: "12px"}}>
                                        Заявление о
                                        включении в Список застрахованных лиц к Договору добровольного коллективного
                                        страхования
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                  <p className="MsoNormal" align="center" style={{textAlign: "center"}}>
                                    <b>
                                      <span style={{fontSize: "12px"}}>
                                        по
                                        Программе добровольного коллективного
                                        страхования от несчастного случая № К-2.0 (ред. 30.04.2019)
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="139" valign="top" style={{width: "104.4pt", border: "1pt solid windowtext", borderTop: "none", msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"}}
                                  >
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <b>
                                      <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                        Настоящим я,
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="570" colSpan="4" valign="top" style={{
                                    width: "427.2pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}
                                  >
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}} >Тестиняк Тест Тестович</span>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt", background:"lightgrey", msoHighlight: "lightgrey"}}>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="139" valign="top" style={{width: "104.4pt", border: "1pt solid windowtext", borderTop: "none", msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"}}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                      Дата рождения
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="371" valign="top" style={{width: "278.35pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>31.05.1991</span>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt", background:"lightgrey", msoHighlight: "lightgrey"}}>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="66" valign="top" style={{
                                    width: "49.6pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                      Телефон
                                      <span style={{background: "lightgrey", msoHighlight: "lightgrey"}}>
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td width="132" colSpan="2" valign="top" style={{
                                    width: "99.25pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>+79321131916</span>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt", background:"lightgrey", msoHighlight: "lightgrey"}}>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="139" valign="top" style={{width: "104.4pt", border: "1pt solid windowtext", borderTop: "none", msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"}}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                      Паспортные данные
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="570" colSpan="4" valign="top" style={{
                                    width: "427.2pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>серия 6511 номер 342432 выдан ТП № 2 ОУФМС РОССИИ ПО РЕСП. БУРЯТИЯ В ОКТЯБРЬСКОМ РАЙОНЕ Г. УЛАН-УДЭ от 07.07.2011 код подразделения 030-006</span>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt", background: "lightgrey", msoHighlight: "lightgrey"}}>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="139" valign="top" style={{width: "104.4pt", border: "1pt solid windowtext", borderTop: "none", msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"}}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                      Адрес регистрации
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="570" colSpan="4" valign="top" style={{
                                    width: "427.2pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>г. г Екатеринбург, ул.ул Щербакова, дом д 45, кв.683</span>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt", background: "lightgrey", msoHighlight: "lightgrey"}}>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="709" colSpan="5" valign="top" style={{width: "531.6pt", border: "1pt solid windowtext", borderTop: "none", msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"}}>
                                  <p className="MsoNormal" style={{marginRight: "21.25pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>действуя осознанно и добровольно, выражаю свое желание
                                    быть Застрахованным лицом по Программе добровольного коллективного
                                    страхования от несчастного случая <br/>
                                    № К-2.0 (ред. 30.04.2019) (далее – Программа страхования) в соответствии с
                                    Договором добровольного коллективного страхования № 26-21-МКК&nbsp; от</span><span style={{fontSize: "12px", color: "black"}}> 23.08.</span><span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>2021
                                    г.</span><span style={{fontSize: "12px"}}>, заключенным</span><span style={{fontSize: "12px", letterSpacing: "-0.1pt"}}> между </span><span style={{backgroundImage: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundAttachment: "initial", backgroundOrigin: "initial", backgroundClip: "initial"}}><font color="#333333"><span style={{fontSize: "12px"}}>ООО "МКК «Забирай» </span></font></span><span style={{fontSize: "12px"}}>(</span><span style={{fontSize: "12px", letterSpacing: "-0.1pt"}}>далее
                                    – Страхователь) и АО «Д2 Страхование» (далее – Страховщик) </span>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                      (далее –
                                      Договор добровольного коллективного страхования).
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{marginBottom: "3.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>Настоящим я подтверждаю, что ознакомлен (-а) с информацией о
                                    Страховщике, со всеми условиями Программы страхования, включая сведения о
                                    страховых случаях / рисках, размере страховой суммы, сроке страхования,
                                    имущественном интересе, являющемся объектом страхования, размере страховой премии
                                    (страхового тарифа), условиях досрочного расторжения договора страхования в
                                    отношении Застрахованного лица</span>
                                    <span style={{fontSize: "12px"}}>
                                      , 
                                      <span style={{letterSpacing:"-0.1pt"}}>
                                        порядке осуществления страховой выплаты.
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <b>
                                      <span style={{fontSize: "12px", letterSpacing: "-0.1pt"}}>
                                        Располагая всей
                                        необходимой информацией, я прошу указать меня в Списке Застрахованных лиц
                                        (являющемся неотъемлемой частью Договора добровольного коллективного
                                        страхования) в качестве Застрахованного лица на следующих условиях:
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="510" colSpan="2" valign="top" style={{width: "382.75pt", border: "1pt solid windowtext", borderTop: "none", msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"}}>
                                  <p className="2CxSpFirst" style={{marginLeft: "0cm", msoAddSpace: "auto", textAlign: "justify"}}>
                                    <b><span style={{fontSize: "12px", color: "black", msoColorAlt: "windowtext", letterSpacing: "-0.1pt"}}>Страховой случай</span></b>
                                    <b>
                                      <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="95" colSpan="2" valign="top" style={{
                                    width: "70.9pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}>
                                  <p className="2CxSpMiddle" style={{marginLeft: "0cm", msoAddSpace: "auto", textAlign: "justify"}}>
                                    <b><span style={{fontSize: "12px", color: "black", msoColorAlt: "windowtext", letterSpacing: "-0.1pt"}}>Страховая сумма</span></b>
                                    <b>
                                      <span style={{fontSize: "12px", letterSpacing: "-0.1pt"}}>
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="104" valign="top" style={{
                                    width: "77.95pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt"
                                  }}>
                                  <p className="2CxSpLast" style={{marginLeft: "0cm", msoAddSpace: "auto", textAlign: "justify"}}>
                                    <b><span style={{fontSize: "12px", color: "black", msoColorAlt: "windowtext", letterSpacing: "-0.1pt"}}>Срок страхования</span></b>
                                    <b>
                                      <span style={{fontSize: "12px", letterSpacing: "-0.1pt"}}>
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                              </tr>
                              <tr style={{msoYftiIrow: "7", height: "49.75pt"}}>
                                <td width="510" colSpan="2" rowSpan="3" valign="top" style={{width: "382.75pt", border: "1pt solid windowtext", borderTop: "none", msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt", height: "49.75pt"}}>
                                  <p className="MsoNormal">
                                    <span style={{fontSize: "12px"}}>
                                      – <b>Смерть Застрахованного лица</b> в результате одного из событий: а)
                                      взрыв; б) действие электрического тока; в) удар молнии; г) нападение
                                      животных; д) противоправные действия третьих лиц; е) падение предметов на
                                      Застрахованное лицо ж) падение самого Застрахованного лица; з) утопление; и) попадание
                                      в дыхательные пути инородного тела; к)&nbsp;острое отравление ядовитыми
                                      растениями, грибами, ядовитыми газами; л) движение средств транспорта или их
                                      крушение; м) пользование движущими механизмами, оружием, всякого рода
                                      инструментами; н) воздействие высоких или низких температур, химических
                                      веществ.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style={{fontSize: "12px"}}>
                                      – <b>Установление Застрахованному лицу инвалидности I (первой), II
                                      (второй) группы впервые</b> в результате одного из событий: а) взрыв; б)
                                      действие электрического тока; в) удар молнии; г) нападение животных; д) противоправные
                                      действия третьих лиц; е) падение предметов на Застрахованное лицо ж) падение
                                      самого Застрахованного лица; з)&nbsp;попадание в дыхательные пути инородного
                                      тела; и) острое отравление ядовитыми растениями, грибами, ядовитыми газами;
                                      к) движение средств транспорта или их крушение; л) пользование движущими
                                      механизмами, оружием, всякого рода инструментами; м) воздействие высоких или
                                      низких температур, химических веществ.
                                      <span style={{letterSpacing: "-0.1pt"}} >
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td width="95" colSpan="2" valign="top" style={{
                                    width: "70.9pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt", height: "49.75pt"
                                  }}>
                                  <p className="2CxSpFirst" style={{marginLeft: "0cm", msoAddSpace: "auto", textAlign: "justify"}}>
                                    <span className="d2 _amount"></span>15 000 рублей
                                    <span style={{fontSize: "12px", letterSpacing: "-0.1pt"}}>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="104" valign="top" style={{
                                    width: "77.95pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt", height: "49.75pt"
                                  }}>
                                  <p className="2CxSpMiddle" style={{textAlign: "start",marginLeft: "0cm", fonstSize: "12px", color: "black"}}>1 (один) месяц с даты, установленной соглашением Застрахованного лица и Страхователя (и при условии уплаты Страхователем страховой премии Страховщику).</p>
                                </td>
                              </tr>
                              <tr style={{msoYftiIrow: "8", height: "9.95pt"}}>
                                <td width="198" colSpan="3" valign="top" style={{
                                    width: "148.85pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt", height: "9.95pt"
                                  }}>
                                  <p className="2" style={{marginLeft: "0cm", msoAddSpace: "auto", textAlign: "justify"}}>
                                    <b><span style={{fontSize: "12px", color: "black", msoColorAlt: "windowtext", letterSpacing: "-0.1pt"}} >Выгодоприобретатель</span></b>
                                    <b>
                                      <span style={{fontSize: "12px", letterSpacing: "-0.1pt"}}>
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                              </tr>
                              <tr style={{msoYftiIrow: "9", height: "28.75pt"}}>
                                <td width="198" colSpan="3" valign="top" style={{
                                    width: "148.85pt", borderTop: "none", borderLeft: "none", borderBottom: "1pt solid windowtext", borderRight: "1pt solid windowtext",
                                    msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderLeftAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt", padding: "0cm 5.4pt 0cm 5.4pt", height: "28.75pt"
                                  }}>
                                  <p className="2" style={{marginLeft: "0cm", msoAddspace: "auto"}}>
                                    <span style={{fontSize: "12px"}}>
                                      Получателем страховой выплаты (Выгодоприобретателем) является
                                      Застрахованное лицо, а в случае его смерти – наследники Застрахованного лица.
                                      <span style={{letterSpacing: "-0.1pt"}}>
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="709" colSpan="5" valign="top" style={{width: "531.6pt", border: "1pt solid windowtext", borderTop: "none",
                                  msoBorderTopAlt: "solid #BFBFBF .5pt", msoBorderAlt: "solid #BFBFBF .5pt",
                                  padding: "0cm 5.4pt 0cm 5.4pt"}}>
                                  <span className="fio_asp"></span>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}><span style={{fontSize: "12px", color: "#7F7F7F"}}></span></p>
                                  <p className="2" style={{marginTop: "0cm", marginRight: "-0.5pt", marginBottom: "3.0pt",
                                      marginLeft: "0cm", textAlign: "justify", msoPagination: "none", tabStops: "0cm"
                                    }}>
                                    <span style={{fontSize: "12px"}}>
                                      Я заявляю, что на момент подписания настоящего
                                      заявления: а) не являюсь инвалидом с детства, инвалидом I, II или III группы
                                      и не имею оснований на установление группы инвалидности (в т.ч. направления
                                      на медико-социальную экспертизу); б) не страдаю / не страдал онкологическими
                                      заболеваниями, психическими расстройствами, болезнями нервной системы (включая
                                      эпилепсию), рассеянным склерозом, наркоманией, токсикоманией и другими видами
                                      химической зависимости, алкоголизмом, и / или не состою на учете в
                                      наркологическом, психоневрологическом диспансерах; в) не страдаю / не страдал
                                      врожденной, генетической, приобретенной патологией костной системы и
                                      опорно-двигательного аппарата; г) мне не установлен диагноз «Гепатит С»,
                                      СПИД, ВИЧ-инфиция, саркома Капоши и другие опухоли, связанные с ВИЧ-инфекцией
                                      или СПИДом; д) не состою на службе в действующей армии, не принимаю участие в
                                      военных действиях и подавлении беспорядков; е) не нуждаюсь в длительной
                                      посторонней помощи, не парализован; ж) не нахожусь под следствием и не
                                      осужден к лишению свободы.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="2" style={{marginTop: "0cm", marginRight: "-0.5pt", marginBottom: "3.0pt",
                                      marginLeft: "0cm", textAlign: "justify", msoPagination: "none", tabStops: "0cm"
                                    }}>
                                    <span style={{fontSize: "12px"}}>
                                      Я подтверждаю достоверность всех сведений, указанных
                                      в настоящем заявлении. Мне известно, что характер этих сведений является
                                      основанием для моего участия в Программе страхования. Я понимаю и согласен
                                      (-а) с тем, что если мною приведены ложные (недостоверные) сведения, сокрыты
                                      факты, то Договор добровольного коллективного страхования в отношении меня
                                      является незаключенным.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{marginBottom: "3.0pt", textAlign: "justify", tabStops: "list 18.0pt left 36.0pt", msoLayoutGridAlign: "none", msTextAutospace: "none"}}
                                    >
                                    <span style={{fontSize: "12px"}}>
                                      Я&nbsp;уведомлен и согласен, что действие Договора
                                      добровольного коллективного страхования (страховая защита) не
                                      распространяется на меня в период моего нахождения в состоянии алкогольного, наркотического,
                                      токсического опьянения.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="2" style={{marginTop: "0cm", marginRight: "-0.5pt", marginBottom: "3.0pt",
                                      marginLeft: "0cm", textAlign: "justify", msoPagination: "none", tabStops: "0cm"
                                    }}>
                                    <span style={{fontSize: "12px"}}>
                                      Я даю согласие на предоставление медицинскими
                                      учреждениями, страховыми организациями, Фондом ОМС, в соответствии с
                                      Федеральным законом от 21.11.2011 №&nbsp;323-ФЗ «Об основах охраны здоровья
                                      граждан в Российской Федерации» и Федеральным законом от 27.07.2006 № 152-ФЗ
                                      «О персональных данных» по запросу Страховщика документов и заключений,
                                      связанных с наступлением страхового случая, содержащих мои персональные
                                      данные и сведения, составляющие врачебную тайну, включая сведения о факте
                                      моего обращения за оказанием медицинской помощи, состоянии моего здоровья и
                                      диагнозе, иные сведения, полученные при медицинском обследовании и лечении, о
                                      перечне медицинских учреждений, в которые я обращался за медицинской помощью,
                                      и иную информацию, необходимую для решения вопроса о страховой выплате.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="2" style={{marginTop: "0cm", marginRight: "0cm", marginBottom: "3.0pt",
                                      marginLeft: "0cm", textAlign: "justify", msoLayoutGridAlign: "none", msTextAutospace: "none"
                                    }}>
                                    <span style={{fontSize: "12px"}}>
                                      Я подтверждаю, что Страховщик выбран мною
                                      добровольно, и что я уведомлен (-а) Страхователем о своем праве выбрать любую
                                      другую страховую компанию по своему усмотрению либо отказаться от участия в
                                      Программе страхования.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="2" style={{marginTop: "0cm", marginRight: "0cm", marginBottom: "3.0pt",
                                      marginLeft: "0cm", textAlign: "justify", msoLayoutGridAlign: "none", msTextAutospace: "none"
                                    }}>
                                    <span style={{fontSize: "12px"}}>Я уведомлен (-а), что участие в Программе
                                    страхования не является условием для получения иных услуг, в том числе
                                    предоставляемых Страхователем, и мой отказ от участия в Программе страхования
                                    не может являться основанием для отказа в предоставлении таких услуг или
                                    ухудшения условий предоставления таких услуг. Я</span><span lang="EN-US" style={{fontSize: "12px", msoAnsiLanguage: "EN-US"}}>&nbsp;</span>
                                    <span style={{fontSize: "12px"}}>
                                      подтверждаю, что Договор добровольного коллективного
                                      страхования / мое участие в Программе страхования не является способом
                                      обеспечения исполнения каких-либо обязательств Застрахованного лица.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="2" style={{marginTop: "0cm", marginRight: "0cm", marginBottom: "3.0pt",
                                      marginLeft: "0cm", textAlign: "justify", tabStops: "14.2pt", msoLayoutGridAlign: "none", msTextAutospace: "none"
                                    }}>
                                    <span style={{fontSize: "12px"}}>
                                      Я даю согласие
                                      Страховщику – АО «Д2 Страхование» (630099, Новосибирск, ул.&nbsp;Депутатская,
                                      дом 2, помещ. 1) и его контрагентам на обработку (в том числе сбор, запись,
                                      систематизацию, накопление, хранение, уточнение (обновление, изменение),
                                      извлечение, использование, передачу (распространение, предоставление,
                                      доступ), обезличивание, блокирование, удаление, уничтожение) любым, не
                                      противоречащим законодательству РФ, способом (в том числе с использованием
                                      средств автоматизации или без использования таких средств) моих персональных
                                      данных, включая: фамилию, имя, отчество, год, месяц, дату рождения, адреса
                                      проживания (регистрации), номера телефонов, адреса электронной почты,
                                      реквизиты документа, удостоверяющего личность, социально-демографические
                                      характеристики, сведения о состоянии моего здоровья – в целях присоединения
                                      меня в качестве застрахованного лица к Договору добровольного коллективного
                                      страхования по Программе страхования, исполнения договора страхования,
                                      перестрахования, проведения маркетинговых исследований и рекламных акций. Я
                                      даю согласие Страховщику – АО «Д2 Страхование» на осуществление
                                      информирования меня путем направления смс / голосовых сообщений, а также по
                                      телефону, Интернет, электронной почте, почте и другим каналам связи о
                                      продуктах и услугах Страховщика (включая сообщения рекламного характера).
                                      Согласие на обработку персональных данных и согласие на информирование
                                      вступают в силу <span style={{color: "black"}}>в момент подписания настоящего
                                      заявления</span> и действуют в течение 5 (Пяти) лет с даты окончания срока
                                      страхования; по истечении указанного срока действие согласий считается
                                      продленным на каждые следующие 5 (Пять) лет при отсутствии сведений об их
                                      отзыве. Согласие может быть отозвано в любое время путем передачи Страховщику
                                      подписанного Застрахованным письменного уведомления; в случае отзыва согласия
                                      Страховщик прекращает обработку персональных данных после выполнения
                                      требований законодательства, регламентирующих его деятельность, и в сроки,
                                      предусмотренные действующим законодательством РФ.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="2CxSpLast"style={{marginTop: "0cm", marginRight: "0cm", marginBottom: "3.0pt",
                                      marginLeft: "0cm", msoAddSpace: "auto", textAlign: "justify", tabStops: "36.0pt", msoLayoutGridAlign: "none", msTextAutospace: "none"
                                    }}>
                                    <span style={{fontSize: "12px"}}>
                                      Я
                                      уведомлен, что уплаченная Страхователем Страховщику страховая премия
                                      составляет 75,00 руб.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{marginBottom: "3.0pt", textAlign: "justify"}}>
                                    <span style={{fontSize: "12px"}}>
                                      С Договором добровольного коллективного страхования,
                                      Программой добровольного
                                      коллективного страхования от несчастного случая № К-2.0 ознакомлен
                                      (-а) и согласен (-а). Программу добровольного
                                      коллективного страхования от несчастного случая № К-2.0 получил (-а), обязуюсь
                                      ее выполнять.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{marginBottom: "3.0pt", textAlign: "justify"}}>
                                    <span style={{fontSize: "12px"}}>
                                      Настоящее заявление заполнено с моих слов и по моему
                                      поручению. Со&nbsp;всеми документами и условиями, перечисленными в заявлении,
                                      я&nbsp;подробно ознакомился&nbsp;(-ась), все указываемые в заявлении условия
                                      мной проверены, я с ними согласен&nbsp;(-на) и подтверждаю.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <br/><br/><span className="fio_asp"></span>
                                  <p className="MsoNormal" style={{marginBottom: "2.0pt", textAlign: "justify", tabStops: "center 233.85pt right 467.75pt"}}>
                                    <span style={{fontSize: "12px", letterSpacing: "-.1pt"}}>
                                      {/* <o:p>&nbsp;</o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr height="0">
                                <td width="139" style="border:none"></td>
                                <td width="371" style="border:none"></td>
                                <td width="66" style="border:none"></td>
                                <td width="28" style="border:none"></td>
                                <td width="104" style="border:none"></td>
                              </tr>
                            </tbody>
                          </table>
                          <div style="display: block; page-break-before: always;"></div>
                          <p className="MsoNormal" align="center" style="margin-left:1.0cm;text-align:center;margin-bottom: 0px;">
                            <b><span style={{fonstSize: "13px", fontFamily: "Times New Roman, serif"}} >Соглашение-оферта <br/>об оказании услуги включения в Список&nbsp; застрахованных лиц <br/>по Программе добровольного
                            коллективного страхования <br/>от несчастного случая № К-2.0
                            </span></b>
                          </p>
                          <p className="MsoNoSpacing" align="center" style="margin-left:1.0cm;text-align:center;margin-bottom: 0px;">
                            <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                              (далее –
                              Соглашение/Договор/Оферта) в соответствии с
                              {/* <o:p></o:p> */}
                            </span>
                          </p>
                          <p className="MsoNormal" align="center" style="text-align:center;margin-bottom: 0px;"><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">Договором
                            добровольного коллективного страхования № 26-21-МКК от 23.08.2021г.
                            </span>
                          </p>
                          <p className="MsoNormal" align="center" style={{textAlign: "center"}}>
                            <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                              {/* <o:p>&nbsp;</o:p> */}
                            </span>
                          </p>
                          <p className="MsoNoSpacing" style={{marginTop: "0cm", marginRight: "1.0cm", marginBottom: "0cm", marginLeft: "1.0cm", textAlign: "justify"}}><font face="Times New Roman, serif">Общество с ограниченной ответственностью  Микрокредитная компания «Забирай» (ООО МКК «Забирай»), именуемое в дальнейшем «Общество», в лице Генерального  директора Баканова Виталия Сергеевича, действующей на основании Устава, с одной стороны, и любое физическое лицо, полностью и безоговорочно принимающее условия настоящего соглашения, выразившее акцепт настоящей оферты путем размещения своих персональных данных, заполнив форму регистрации и заполнив анкету на Сайте Общества www.zabiray.ru и подтвердив свое согласие с приведенными ниже условиями (путем выбора и акцептования указанного Соглашения-оферты на сайте Общества простой электронной подписью), именуемое в дальнейшем «Клиент», с другой стороны, совместно именуемые «Сторонами», заключили настоящее Соглашение о нижеследующем:</font><br/></p>
                          <p className="MsoNoSpacing" style={{marginTop: "0cm", marginRight: "1.0cm", marginBottom: "0cm", marginLeft: "1.0cm", textAlign: "justify"}}><font face="Times New Roman, serif">1. Клиент имеет право на включение в Список застрахованных лиц по Программе добровольного коллективного страхования от несчастного случая № К-2.0)&nbsp; (Приложение №1 к настоящему Соглашению, далее – Программа страхования) в соответствии с Договором добровольного коллективного страхования № 26-21-МКК от 23.08.2021г. (заключенного между страхователем - Обществом и страховщиком – АО «Д2 Страхование») (Далее –Договор коллективного страхования) в качестве Застрахованного лица.</font><br/></p>
                          <p className="MsoNoSpacing" style={{marginTop: "0cm", marginRight: "1.0cm", marginBottom: "0cm", marginLeft: "1.0cm", textAlign: "justify"}}><font face="Times New Roman, serif">2.&nbsp;</font><span style={{fontFamily: "Times New Roman"}}>Стоимость услуги Общества по включению Клиента в Список застрахованных лиц по Программе добровольного коллективного страхования по Договору коллективного страхования (далее – Услуга Общества) составляет 905,00 рублей. Услуга Общества, оказываемая по настоящему Соглашению, включает в себя консультирование по условиям Программы страхования, сбор, обработку и техническую передачу информации о Клиенте Страховщику, связанную с организацией включения застрахованного лица в Список застрахованных лиц по Договору коллективного страхования, а также консультирование и документальное сопровождение при урегулировании страховых случаев в случае их наступления. По факту включения в список застрахованных лиц, в том числе при не наступлении страхового случая, Услуга Общества считается оказанной в полном объеме.</span><b><span style="mso-spacerun:'yes';font-family:'Times New Roman';mso-fareast-font-family:宋体;
                            mso-ansi-font-weight:bold;font-size:10,0000pt;mso-font-kerning:1,0000pt;">&nbsp;</span></b></p>
                          <p className="MsoNoSpacing" style={{marginTop: "0cm", marginRight: "1.0cm", marginBottom: "0cm", marginLeft: "1.0cm", textAlign: "justify"}}><span style={{fontFamily: "Times New Roman"}}>Участие в Программе страхования не является условием для получения иных услуг, в том числе предоставляемых Обществом. Отказ от участия в Программе страхования не может являться основанием для отказа в предоставлении таких услуг или ухудшения условий их предоставления. Участие в Программе страхования не является способом обеспечения исполнения каких-либо обязательств Застрахованного лица.</span></p>
                          <p className="MsoNoSpacing" style={{marginTop: "0cm", marginRight: "1.0cm", marginBottom: "0cm", marginLeft: "1.0cm", textAlign: "justify"}}><span style={{fontFamily: "Times New Roman"}}>Клиент, подписывая настоящее Соглашение, подтверждает, что:</span></p>
                          <p className="MsoNoSpacing" style={{marginTop: "0cm", marginRight: "1.0cm", marginBottom: "0cm", marginLeft: "1.0cm", textAlign: "justify"}}><span style={{fontFamily: "Times New Roman"}}>- сумма услуги, оказываемой Обществом, не включает в себя компенсацию каких-либо расходов Страхователя (Общества) на оплату страховой премии Страховщику;</span></p>
                          <p className="MsoNoSpacing" style={{marginTop: "0cm", marginRight: "1.0cm", marginBottom: "0cm", marginLeft: "1.0cm", textAlign: "justify"}}><span style={{fontFamily: "Times New Roman"}}>- при включении в Список застрахованных лиц будет являться Застрахованным лицом по Договору коллективного страхования на условиях Программы страхования и в соответствие со ст.934 ГК РФ, застрахованное лицо не уплачивает прямо или косвенно страховую премию Страховщику, застрахованное лицо не является Страхователем по Договору коллективного страхования (в связи с чем, на отношения сторон по настоящему Соглашению и по Договору коллективного страхования не распространяются положения Указания Банка России от 20.11.2015г. № 3854-у «О минимальных (стандартных) требованиях к условиям и порядку осуществления отдельных видов добровольного страхования»);</span><span style="font-family: &quot;Times New Roman&quot;, serif;">&nbsp;</span></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><font face="Times New Roman, serif">3.Оплата Услуг Общества производится не позднее 30 дней с момента подписания настоящего Соглашения. Общество приступает к оказанию услуг, предусмотренных п. 2 Соглашения, после поступления оплаты, в т. ч. осуществляет включение застрахованного лица в Список застрахованных лиц (дата начала срока страхования) в день поступления оплаты за услугу.</font></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><span style={{fontFamily: "Times New Roman"}}>Клиент оплачивает Услугу Общества:</span></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><span style={{fontFamily: "Times New Roman"}}>- путем перевода по следующим реквизитам:</span></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><span style={{fontFamily: "Times New Roman"}}>р/с 40701810900000006062 в АО «Тинькофф Банк»
                            </span>
                          </p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><span style={{fontFamily: "Times New Roman"}}>к/с 30101810145250000974 в ГУ БАНКА РОССИИ по ЦФО</span></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><span style={{fontFamily: "Times New Roman"}}>БИК 044525974</span></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><font face="Times New Roman">Получатель: ООО МКК «Забирай»</font></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><span style={{fontFamily: "Times New Roman"}}>Назначение платежа: оплата по соглашению об оказании услуги включения в Список &nbsp;застрахованных лиц по Программе добровольного коллективного страхования от несчастного случая». ФИО Заемщика.</span></p>
                          <p className="MsoNoSpacing" style={{marginLeft: "1.0cm"}}><span style={{fontFamily: "Times New Roman"}}>- путем перевода денежных средств платежными картами VISA, MasterCard, МИР в Личном кабинете на Сайте Общества.</span></p>
                          <p className="MsoNoSpacing" style="margin-left:333.15pt">
                            <span style="font-size:13px;
                              font-family:&quot;Times New Roman&quot;,serif">
                              {/* <o:p>&nbsp;</o:p> */}
                            </span>
                          </p>
                          <span className="fio_asp"></span>
                          <p className="MsoNoSpacing" style="margin-left:333.15pt">
                            <span style="font-size:13px;
                              font-family:&quot;Times New Roman&quot;,serif">
                              {/* <o:p>&nbsp;</o:p> */}
                            </span>
                          </p>
                          <p className="MsoNoSpacing" style="margin-left:333.15pt">
                            <span style="font-size:13px;
                              font-family:&quot;Times New Roman&quot;,serif">
                              {/* <o:p>&nbsp;</o:p> */}
                            </span>
                          </p>
                          <p className="MsoNoSpacing" style="margin-left:333.15pt">
                            <span style="font-size:13px;
                              font-family:&quot;Times New Roman&quot;,serif">
                              Приложение № 1 к Соглашению-оферте об
                              оказании услуги включения в Список&nbsp;
                              застрахованных лиц&nbsp; по Программе
                              добровольного коллективного страхования &nbsp;от
                              несчастного случая 
                              {/* <o:p></o:p> */}
                            </span>
                          </p>
                          <p className="MsoNoSpacing" style="margin-left:333.15pt">
                            <span style="font-size:13px;
                              font-family:&quot;Times New Roman&quot;,serif">
                              № 26-21-МКК от 23.08.2021г.
                              {/* <o:p></o:p> */}
                            </span>
                          </p>
                          <p className="MsoNoSpacing" style="margin-left:333.15pt">
                            <span style="font-size:13px;
                              font-family:&quot;Times New Roman&quot;,serif">
                              {/* <o:p>&nbsp;</o:p> */}
                            </span>
                          </p>
                          <table className="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" style={{border: "none", width: "100%"}}>
                            <tbody>
                              <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes;height:8.5pt">
                                <td width="95" valign="top" style="width:70.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
                                  height:8.5pt">
                                  <p className="MsoNormal" style="margin-left:-5.4pt;text-align:justify"><img style={{width: "85px", height: "19px"}} align="left" hspace="12" alt="Логотип_горизонтальный.png" /></p>
                                </td>
                                <td width="576" colSpan="4" style="width:432.3pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
                                  height:8.5pt">
                                  <p className="MsoNormal">
                                    <b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Программа
                                    добровольного коллективного страхования от несчастного случая № К-2.0 (ред.
                                    30.04.2019)</span></b>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      mso-bidi-font-weight:bold;mso-bidi-font-style:italic">
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:1;height:8.5pt">
                                <td width="671" colSpan="5" valign="top" style="width:503.2pt;border:none;
                                  border-bottom:1pt solid windowtext;mso-border-bottom-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:8.5pt">
                                  <p className="MsoNormal" style="margin-top:0cm;margin-right:-5.4pt;margin-bottom:
                                    2.0pt;margin-left:-5.4pt;text-align:justify"><span style="font-size:13px;
                                    font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold;mso-bidi-font-style:
                                    italic">Заключение договора страхования <b>не является необходимым условием выдачи займа</b></span></p>
                                  <p className="MsoNormal" style="margin-top:0cm;margin-right:-5.4pt;margin-bottom:
                                    2.0pt;margin-left:-5.4pt;text-align:justify">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold;mso-bidi-font-style:
                                      italic">Настоящая Программа добровольного коллективного страхования от
                                    несчастного случая № К-2.0 (далее – Программа страхования) регулируется
                                    Правилами страхования жизни и здоровья от несчастных случаев 6.0. (далее –
                                    Правила страхования) в редакции, действующей на дату подписания Заявления о
                                    включении в Список застрахованных лиц к Договору добровольного коллективного страхования
                                    по Программе страхования (далее – Заявление на присоединение). Программа
                                    страхования и Правила страхования </span><span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">доступны на сайте Страховщика </span><a href="http://www.d2insur.ru/"><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      color:#9C2033">www.d2insur.ru</span></a>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold;mso-bidi-font-style:
                                      italic">
                                      .
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-top:0cm;margin-right:-5.4pt;margin-bottom:
                                    2.0pt;margin-left:-5.4pt;text-align:justify;tab-stops:21.3pt">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Участие в
                                      Программе страхования не является условием для получения иных услуг, в том
                                      числе предоставляемых Страхователем, и отказ от участия в Программе
                                      страхования не может являться основанием для отказа в предоставлении таких
                                      услуг или ухудшения условий их предоставления. Участие в Программе
                                      страхования не является способом обеспечения исполнения каких-либо
                                      обязательств Застрахованного лица.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:2;height:8.5pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:8.5pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        1. Страховщик 
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:8.5pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Акционерное общество «Д2 Страхование»,
                                      лицензия ЦБ РФ СЛ № 1412. 
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">Полная информация о Страховщике доступна
                                    на сайте </span><a href="http://www.d2insur.ru/"><span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;color:#9C2033">www.d2insur.ru</span></a>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      .
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:3;height:11.35pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:11.35pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        2. Страхователь 
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:11.35pt">
                                  <p className="MsoNormal" style="text-align:justify;mso-outline-level:1">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Указан в
                                      Договоре добровольного коллективного страхования (далее – Договор
                                      страхования), Заявлении на присоединение.
                                      <span style="background:yellow;
                                        mso-highlight:yellow;mso-bidi-font-weight:bold;mso-bidi-font-style:italic">
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:4;height:19.75pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:19.75pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        3. Застрахованное лицо
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:19.75pt">
                                  <p className="MsoNormal" style="text-align:justify;tab-stops:9.75pt">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      3.1.
                                      Дееспособное физическое лицо, по возрасту и состоянию здоровья отвечающее
                                      требованиям настоящей Программы страхования, указанное в Списке
                                      Застрахованных лиц и за которое Страхователем уплачена страховая премия
                                      Страховщику.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;tab-stops:9.75pt">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      3.2. На условиях
                                      настоящей Программы страхования с учетом степени риска могут быть приняты на
                                      страхование и являться Застрахованными лицами только следующие лица:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                    <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">а.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      не младше 18 лет на момент распространения в
                                      отношении них действия Договора страхования и не старше 75 лет на момент
                                      окончания в отношении них действия Договора страхования;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                    <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">б.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      не являющиеся инвалидами с детства, инвалидами I
                                      (первой), II (второй), III (третьей) группы инвалидности, не имеющие
                                      основания на установление группы инвалидности (в т.ч. направление на
                                      медико-социальную экспертизу), не являющиеся недееспособными лицами;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                    <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">в.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      не страдающие / не страдавшие онкологическими
                                      заболеваниями, психическими расстройствами, болезнями нервной системы
                                      (включая эпилепсию), рассеянным склерозом, наркоманией, токсикоманией и
                                      другими видами химической зависимости, алкоголизмом, и / или
                                      не&nbsp;состоящие на учете в наркологическом, психоневрологическом<span style="letter-spacing:-1.1pt"> </span>диспансерах;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                    <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">г.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      не страдающие / не страдавшие врожденной,
                                      генетической, приобретенной патологией костной системы и опорно-двигательного
                                      аппарата;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                    <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">д.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      которым не установлен диагноз «Гепатит С», СПИД,
                                      ВИЧ-инфекция, саркома Капоши и другие опухоли, связанные с ВИЧ-инфекцией или<span style="letter-spacing:-.3pt"> </span>СПИДом;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                  <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">е.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      не состоящие на службе в действующей армии, не
                                      принимающие участие в военных действиях и подавлении беспорядков;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                    <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">ж.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      не нуждающиеся в длительной посторонней помощи, не
                                      парализованные;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:1.65pt;text-align:justify;text-indent:
                                    0cm;mso-pagination:none;mso-list:l2 level1 lfo4;tab-stops:15.85pt">
                                   <span style="font-size:9.0pt;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">з.<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      не находящиеся под следствием или в местах лишения<span style="letter-spacing:-1.05pt"> </span>свободы.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      3.3. Подписывая Заявление на
                                      присоединение, физическое лицо подтверждает, что соответствует условиям п.
                                      3.2. Программы страхования. Если физическое лицо, принятое на страхование (на
                                      основании подписанного им Заявления на присоединение), сообщило Страховщику
                                      заведомо ложные сведения (в т.&nbsp;ч. о соответствии условиям п. 3.2.
                                      Программы страхования), то Договор страхования в отношении этого лица
                                      является незаключенным.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:5;height:3.0pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:3.0pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        4. Объект страхования
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:3.0pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Объектами страхования являются не
                                      противоречащие законодательству Российской Федерации имущественные интересы,
                                      связанные с причинением вреда здоровью Застрахованного лица, а также его смертью
                                      в результате событий, предусмотренных разделом 6 Программы страхования.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:6;height:3.0pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:3.0pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        5. Выгодо-приобретатель
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:3.0pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Получателем страховой выплаты
                                      (Выгодоприобретателем) является Застрахованное лицо, а в случае его смерти –
                                      наследники Застрахованного лица. 
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:7;height:6.9pt">
                                <td width="104" colSpan="2" rowSpan="5" valign="top" style="width:77.95pt;border:
                                  1pt solid windowtext;border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.9pt">
                                  <p className="MsoNormal">
                                    <b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      mso-bidi-font-style:italic">6. Страховые случаи</span></b><b><span lang="EN-US" style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      mso-ansi-language:EN-US;mso-bidi-font-style:italic">&nbsp;</span></b><b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-style:
                                      italic">/</span></b><b><span lang="EN-US" style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif;mso-ansi-language:EN-US;mso-bidi-font-style:italic">&nbsp;</span></b>
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-style:
                                        italic">
                                        риски 
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border:none;
                                  border-right:1pt solid windowtext;mso-border-top-alt:solid #BFBFBF .5pt;
                                  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-top-alt:solid #BFBFBF .5pt;
                                  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-right-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:6.9pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Страховым случаем в рамках настоящей
                                      Программы страхования является одно из следующих событий, произошедших в
                                      течение срока страхования Застрахованного лица (при условии, что данное
                                      событие не относится к событиям, которые в соответствии с разделом 7
                                      Программы страхования не являются страховыми случаями):
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">6.1.
                                    Смерть Застрахованного лица</span></b>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      в результате одного из следующих
                                      событий, произошедших в течение срока страхования Застрахованного лица:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:8;height:6.9pt">
                                <td width="132" valign="top" style="width:99.25pt;border:none;mso-border-left-alt:
                                  solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.9pt">
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      а)
                                      взрыва;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      б)
                                      действия электрического тока;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      в)
                                      удара молнии;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      г)
                                      нападения животных; 
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      д)
                                      противоправных действий третьих лиц;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="161" valign="top" style="width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
                                  height:6.9pt">
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      е)
                                      падения предметов на Застрахованное лицо;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      ж)
                                      падения самого Застрахованного лица;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      з)
                                      утопления; 
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      и)
                                      попадания в дыхательные пути инородного тела;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="274" valign="top" style="width:205.5pt;border:none;border-right:1pt solid windowtext;
                                  mso-border-right-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;
                                  height:6.9pt">
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      к)
                                      острого отравления ядовитыми растениями, грибами, ядовитыми газами;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      л)
                                      движения средств транспорта или их крушения;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      м)
                                      пользования движущими механизмами, оружием, всякого рода инструментами;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      н)
                                      воздействия высоких или низких температур, химических веществ.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:9;height:6.9pt">
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border:none;
                                  border-right:1pt solid windowtext;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-right-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:6.9pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">6.2.
                                    Установление Застрахованному лицу инвалидности I (первой), II (второй) группы
                                    впервые</span></b>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      в результате одного из следующих событий, произошедших в течение срока
                                      страхования Застрахованного лица:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:10;height:6.9pt">
                                <td width="132" valign="top" style="width:99.25pt;border:none;mso-border-left-alt:
                                  solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:6.9pt">
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      а) взрыва;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      б) действия электрического тока;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      в) удара молнии;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      г) нападения животных; 
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      д) противоправных действий третьих лиц;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="161" valign="top" style="width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
                                  height:6.9pt">
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      е) падения предметов на Застрахованное
                                      лицо;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      ж) падения самого Застрахованного лица;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      з) попадания в дыхательные пути
                                      инородного тела;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                                <td width="274" valign="top" style="width:205.5pt;border:none;border-right:1pt solid windowtext;
                                  mso-border-right-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;
                                  height:6.9pt">
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      и) острого отравления ядовитыми
                                      растениями, грибами, ядовитыми газами;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      к) движения средств транспорта или их
                                      крушения;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      л) пользования движущими механизмами,
                                      оружием, всякого рода инструментами;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-right:-5.4pt">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      м) воздействия высоких или низких
                                      температур, химических веществ.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:11;height:6.9pt">
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-left-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-bottom-alt:solid #BFBFBF .5pt;mso-border-right-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:6.9pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Инвалидность, установленная в результате
                                      общего заболевания, является страховым случаем только при условии установления
                                      того факта, что заболевание явилось следствием событий, перечисленных в
                                      настоящем пункте, и подтверждено документами, предусмотренными в разделе 13
                                      Программы страхования.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      При этом инвалидность I (первой), II
                                      (второй) группы считается установленной впервые в том случае, если в
                                      документах, подтверждающих факт установления инвалидности, прямо указано на
                                      факт установления инвалидности I (первой), II (второй) группы впервые. Во
                                      всех иных случаях инвалидность I (первой), II (второй) группы считается установленной
                                      повторно и не отвечает определению «Установление инвалидности впервые».
                                      <b>
                                        {/* <o:p></o:p> */}
                                      </b>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:12;height:13.3pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:13.3pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        7. Не являются страховыми случаями
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:13.3pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;color:black;layout-grid-mode:line">
                                      7.1.
                                      События, указанные в пунктах 6.1., 6.2. Программы страхования, не являются
                                      страховым случаем и страховая выплата по ним не производится, если они
                                      произошли вследствие:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">а)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      воздействия ядерного взрыва, радиации или
                                      радиоактивного заражения; военных действий, а также маневров или иных военных
                                      мероприятий, забастовок;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">б)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      умышленных действий
                                      Страхователя&nbsp;/&nbsp;Застрахованного
                                      лица&nbsp;/&nbsp;Выгодоприобретателя, направленных на наступление страхового
                                      случая; причинения Застрахованным лицом себе телесных повреждений;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">в)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      самоубийства Застрахованного лица, за исключением
                                      случая, когда смерть наступила вследствие самоубийства, и к этому времени
                                      Договор страхования в отношении него действовал уже не&nbsp;менее
                                      2&nbsp;(двух) лет;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">г)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      случаев, произошедших во время пребывания
                                      Застрахованного лица в местах лишения свободы;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">д)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      действия&nbsp;/&nbsp;бездействия Застрахованного
                                      лица, находившегося в состоянии опьянения, если такое опьянение наступило в
                                      результате употребления Застрахованным лицом алкоголя, любых заменителей
                                      алкоголя, наркотических, психотропных, токсических веществ и неизвестных ядов
                                      или лекарственных веществ (препаратов); алкогольного отравления
                                      Застрахованного, отравления в результате употребления Застрахованным
                                      наркотических, токсических, сильнодействующих, психотропных и лекарственных
                                      веществ (препаратов) без предписания (или по предписанию врача, но с
                                      нарушением указанной им дозировки), заболеваний, вызванных употреблением
                                      алкоголя, наркотических или токсических веществ;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">е)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      управления Застрахованным лицом любым транспортным
                                      средством в состоянии алкогольного или наркотического опьянения либо без
                                      права на управление, либо передачи Застрахованным лицом управления лицу, не
                                      имевшему права на управление транспортным средством данной категории, либо
                                      находившемуся в состоянии алкогольного или наркотического опьянения;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">ж)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      причин, прямо или косвенно вызванных нервным или
                                      психическим заболеванием Застрахованного лица, параличей, эпилептических
                                      припадков, если они не явились следствием несчастного случая, произошедшего в
                                      течение срока действия Договора страхования;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">з)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      инфекционного заболевания независимо от причины
                                      заражения;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">и)</span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      занятий любым
                                      видом спорта на профессиональном уровне, включая соревнования и тренировки;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">к)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      занятия опасными видами спорта на любительской
                                      основе: авто-, мотоспорт, альпинизм, спелеология, бокс, фридайвинг,
                                      скайсерфинг, дайвинг при глубине погружения более 25 метров, кайтинг,
                                      бейсджампинг, экстремальные водные виды спорта, парашютный спорт, парапланеризм,
                                      дельтапланеризм, конный спорт, боевые единоборства, экстремальные виды
                                      велосипедного спорта, поездки или управления мотоциклом, мотороллером,
                                      маломерным судном или снегоходом и т.&nbsp;п.;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="margin-left:0cm;text-align:justify;text-indent:
                                    0cm;mso-list:l3 level1 lfo3;tab-stops:8.8pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">л)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      неустановленной причины.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:13;height:4.8pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:4.8pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        8. Страховая сумма
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:4.8pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Страховая сумма устанавливается
                                      индивидуально для каждого Застрахованного лица в Списке Застрахованных лиц и
                                      не может превышать максимального размера, установленного Договором
                                      страхования. Страховая сумма также указывается в Заявлении на присоединение.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:14;height:17.5pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        9. Страховая выплата
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:17.5pt">
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none;mso-hyphenate:
                                    none;tab-stops:18.0pt;layout-grid-mode:char">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      9.1. Страховая выплата по страховым
                                      случаям, указанным в разделе 6 Программы страхования, осуществляется в
                                      пределах страховой суммы, установленной в отношении Застрахованного лица:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none;mso-hyphenate:
                                    none;tab-stops:18.0pt;layout-grid-mode:char">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      а) Смерть Застрахованного лица – 100%
                                      (Сто процентов) страховой суммы.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none;mso-hyphenate:
                                    none;tab-stops:18.0pt;layout-grid-mode:char">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">б) Установление инвалидности </span><span lang="EN-US" style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      mso-ansi-language:EN-US">I</span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      (первой) группы – 100% (Сто процентов) страховой
                                      суммы.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none;mso-hyphenate:
                                    none;tab-stops:18.0pt;layout-grid-mode:char">
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      в) Установление инвалидности II (второй)
                                      группы – 75% (Семьдесят пять процентов) страховой суммы.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none;mso-hyphenate:
                                    none">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      9.2.
                                      Страховая выплата осуществляется в течение 15 (Пятнадцати) рабочих дней со
                                      дня, следующего за днем получения Страховщиком <u>полного пакета</u>
                                      надлежащим образом оформленных документов в соответствии с разделом 13
                                      настоящей Программы страхования, 
                                      <span style="letter-spacing:.1pt">
                                        а в случае
                                        отсутствия оснований для страховой выплаты Страховщик в указанный срок
                                        направляет Страхователю / Выгодоприобретателю соответствующее уведомление.
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none;mso-hyphenate:
                                    none">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      letter-spacing:.1pt">
                                      Срок урегулирования требования о страховой выплате может
                                      быть продлен на 90 (Девяносто) календарных дней со дня направления
                                      Страховщиком соответствующего запроса (или на период получения Страховщиком
                                      ответов на направленные им запросы) в связи с необходимостью получения
                                      Страховщиком информации от компетентных органов и / или сторонних
                                      организаций, непосредственно связанной с возможностью принятия решения о
                                      признании события страховым случаем или о размере страховой выплаты.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;letter-spacing:.1pt">9.3. При наличии
                                    достаточных оснований Страховщик имеет право отсрочить решение вопроса о
                                    страховой выплате в случае возбуждения по факту наступления страхового
                                    события уголовного дела – до момента окончания расследования компетентными
                                    органами.</span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      9.4. <span style="letter-spacing:.1pt">Общая
                                      сумма страховых выплат в отношении Застрахованного лица не может превышать
                                      страховой суммы, установленной в отношении него. Если Выгодоприобретателю
                                      произведена страховая выплата, то страховая сумма в отношении Застрахованного
                                      лица уменьшается на величину выплаченного возмещения со дня выплаты
                                      страхового возмещения.</span>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      9.5. Страховая выплата НЕ
                                      осуществляется, если:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      а) компетентные органы не подтверждают
                                      факт несчастного случая и не установлена причинно-следственная связь между
                                      несчастным случаем и фактом смерти либо установлением инвалидности впервые;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      б) Застрахованным лицом
                                      (Выгодоприобретателем) не предоставлены документы и сведения в соответствии с
                                      разделом 13 настоящей Программы страхования, и / или уполномоченными органами
                                      не предоставлены обоснованно затребованные Страховщиком документы;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      в) Застрахованное лицо отказывается
                                      пройти медицинское освидетельствование по требованию Страховщика;
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      г) Застрахованным лицом (Выгодоприобретателем)
                                      представлены для получения страховой выплаты ложные сведения и документы. В
                                      этом случае Страховщик отказывает в выплате, независимо от того, что событие,
                                      имевшее место в действительности, может быть классифицировано как страховой
                                      случай.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:15;height:34.95pt">
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt;height:34.95pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        10. Срок страхования 
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:34.95pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Срок страхования устанавливается
                                      индивидуально для каждого Застрахованного лица в Списке Застрахованных лиц и
                                      может составлять от 30&nbsp;до 365 дней. Срок страхования Застрахованного
                                      лица также указывается в Заявлении на присоединение.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;color:black">Действие Договора
                                    страхования в отношении конкретного Застрахованного лица (срок страхования)
                                    начинается с даты, указанной в Списке Застрахованных лиц, и оканчивается
                                    истечением срока страхования, указанного в Списке Застрахованных лиц, при
                                    условии уплаты Страхователем страховой премии.</span>
                                    <span style="font-size:
                                      13px;font-family:&quot;Times New Roman&quot;,serif">
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        mso-bidi-font-style:italic">
                                        11. Порядок уплаты страховой премии
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      Уплата страховой премии осуществляется
                                      Страхователем единовременно путем безналичного перечисления на счет
                                      Страховщика. Конкретный порядок уплаты и расчета страховой премии определяется
                                      в Договоре страхования.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                        12.
                                        Время и территория страхования
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;mso-fareast-language:EN-US">В любое время
                                    суток на территории Российской Федерации, за исключением территории
                                    Республики Дагестан, республики Ингушетия, Республики Северная Осетия-Алания,
                                    Чеченской Республики, Республики Крым.</span>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="104" colSpan="2" valign="top" style="width:77.95pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal">
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                        13. Документы,
                                        представляемые при наступлении события, имеющего признаки страхового случая
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                                <td width="567" colSpan="3" valign="top" style="width:15.0cm;border-top:none;
                                  border-left:none;border-bottom:1pt solid windowtext;border-right:1pt solid windowtext;
                                  mso-border-top-alt:solid #BFBFBF .5pt;mso-border-left-alt:solid #BFBFBF .5pt;
                                  mso-border-alt:solid #BFBFBF .5pt;padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal" style="text-align:justify;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Для
                                      установления, является ли заявленное событие страховым случаем, и принятия
                                      решения о страховой выплате Страхователь&nbsp;/&nbsp;Застрахованное лицо /
                                      Выгодоприобретатель предоставляет Страховщику следующие документы:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                        letter-spacing:.1pt">
                                        13.1. Общие документы:
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;letter-spacing:
                                      .1pt">а)</span><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                    Заявление Выгодоприобретателя на получение страховой выплаты по установленной
                                    форме, форма доступна на </span><a href="http://www.d2insur.ru/"><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;color:#9C2033">www.d2insur.ru</span></a>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      .
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;letter-spacing:.1pt">
                                      б)&nbsp;Заверенная
                                      Страхователем копия Заявления на присоединение, подписанного Застрахованным
                                      лицом.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;letter-spacing:.1pt">в) Паспорт
                                    Застрахованного лица / Выгодоприобретателя / наследника Застрахованного лица
                                    / Заявителя (основная страница, страница с адресом регистрации) – копия (</span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      в случае смерти
                                      Застрахованного лица копия его паспорта не предоставляется
                                      <span style="letter-spacing:.1pt">
                                        );
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;letter-spacing:.1pt">г) </span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Реквизиты
                                      банковского счета Выгодоприобретателя для получения страховой выплаты,
                                      включая наименование и БИК банка, ИНН банка, номер корреспондентского счета
                                      банка, номер лицевого счета клиента.
                                      <span style="letter-spacing:.1pt">
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;mso-pagination:none;mso-hyphenate:
                                    none">
                                    <b><span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">13.2. При наступлении риска</span></b><span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold"> </span>
                                    <b>
                                      <span style="font-size:13px;font-family:
                                        &quot;Times New Roman&quot;,serif">
                                        «Смерть Застрахованного лица» (п. 6.1. Программы
                                        страхования):
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">а)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:
                                      bold">
                                      Свидетельство о смерти Застрахованного лица – копия.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;color:black">б)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:
                                      bold">Справка о смерти с указанием причины смерти или медицинское
                                    свидетельство о смерти – оригинал или копия, заверенная выдавшим учреждением.</span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;color:black">
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">в)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;
                                    </span></span><span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif;color:black">Медицинское (врачебное) заключение о
                                    причине смерти или заключение судебно-медицинской </span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      экспертизы /
                                      заключение патологоанатома / посмертный эпикриз – оригинал или копия, заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">г)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold">Выписка из акта
                                    судебно-химического исследования / справка на момент поступления в стационар
                                    о результатах исследования биологических жидкостей трупа (кровь, моча и
                                    т.&nbsp;д.) на содержание этилового алкоголя, наркотических, токсических
                                    веществ – оригинал или копия, заверенная выдавшим учреждением (не
                                    предоставляется, если указанная информация содержится в документах,
                                    предоставленных согласно п. 13.2.в).</span>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">д)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:
                                      bold">
                                      Постановление о возбуждении или отказе в возбуждении уголовного дела,
                                      постановление о признании потерпевшим – оригинал или копия, заверенная
                                      выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">е)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:
                                      bold">
                                      Выписка из амбулаторной карты за последние 5 лет с указанием общего
                                      физического состояния, диагнозов и дат их постановки – оригинал или копия,
                                      заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">ж)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:
                                      bold">
                                      Документы в соответствии с п. 13.4. Программы страхования.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l1 level1 lfo1;tab-stops:-38.9px 14.85pt;
                                    punctuation-wrap:simple;text-autospace:ideograph-numeric;vertical-align:baseline">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">з)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:
                                      bold">
                                      Свидетельство о праве на наследство – нотариально заверенная копия (в
                                      случае если наследники Застрахованного лица являются выгодоприобретателями);
                                      копия документа, удостоверяющего личность наследника.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style="text-align:justify;tab-stops:-38.9px">
                                    <b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">13.3. При
                                    наступлении риска</span></b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      mso-bidi-font-weight:bold"> </span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      «<b>Установление
                                      Застрахованному лицу I (первой), II (второй) группы инвалидности<span style="letter-spacing:.1pt">» (п.&nbsp;6.2. Программы страхования):</span></b>
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">а)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      Справка, подтверждающая факт установления
                                      инвалидности, – оригинал или копия, заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">б)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;
                                    </span></span>
                                    <span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif">
                                      Заключение медико-социальной экспертизы (МСЭ) об
                                      установлении инвалидности – оригинал или копия, заверенная выдавшим
                                      учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">в)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Направление на
                                      МСЭ – оригинал или копия, заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">г)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Выписной эпикриз
                                      в случае госпитализации, прохождения стационарного лечения по факту
                                      полученной травмы – оригинал или копия, заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">д)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Справка
                                      лечебного учреждения в случае амбулаторного лечения по факту полученной
                                      травмы, с указанием в ней анамнеза и диагноза, периода непрерывного лечения –
                                      оригинал или копия, заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">е)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Справка
                                      лечебного учреждения (травмпункта) о первичном обращении по факту полученной
                                      травмы – оригинал или копия, заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">ж)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Справка
                                      лечебного учреждения о результатах освидетельствования на содержание
                                      этилового алкоголя, наркотических, токсических веществ при обращении за
                                      медицинской помощью в медицинское учреждение по факту полученной травмы (в
                                      случае если событие наступило в результате несчастного случая) – оригинал или
                                      копия, заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:-38.9px 1.65pt 15.75pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;;mso-bidi-font-weight:bold">з)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:
                                      bold">
                                      Выписка из амбулаторной карты за последние 5 лет с указанием общего
                                      физического состояния, диагнозов и дат их постановки – оригинал или копия,
                                      заверенная выдавшим учреждением.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpLast" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;text-indent:0cm;mso-list:l0 level1 lfo2;tab-stops:1.65pt 14.85pt">
                                   <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;mso-fareast-font-family:
                                      &quot;Times New Roman&quot;">и)<span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 9px; line-height: normal; font-family: &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;
                                    </span></span><span style="font-size:13px;font-family:
                                      &quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold">Документы в соответствии с
                                    п. 13.4. Программы страхования. </span>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoListParagraphCxSpFirst" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;tab-stops:-38.9px 10.5pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                    <b>13.4.</b> <b>Документы, предоставляемые при определенных обстоятельствах:</b>
                                    {/* <o:p></o:p> */}
                                  </p>
                                  <p className="MsoListParagraphCxSpMiddle" style="margin-left:0cm;mso-add-space:
                                    auto;text-align:justify;tab-stops:-38.9px 10.5pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                    а) При ДТП: справка
                                    из ГИБДД с указанием времени и места ДТП, постановление в отношении
                                    участников, протокол об административном правонарушении – оригинал или копия,
                                    заверенная выдавшим учреждением.
                                    {/* <o:p></o:p> */}
                                  </p>
                                  <p className="MsoListParagraphCxSpMiddle" style="margin-left:0cm;mso-add-space:
                                    auto;text-align:justify;tab-stops:-38.9px 10.5pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                    б) При причинении
                                    вреда здоровью в результате противоправных действий третьих лиц: документ из
                                    компетентных органов (справка о возбуждении, приостановлении уголовного дела,
                                    постановление об отказе в возбуждении уголовного дела, постановление о
                                    признании потерпевшим, иной документ, подтверждающий, что о происшедшем было
                                    заявлено в компетентные органы) – оригинал или копия, заверенная выдавшим
                                    учреждением.
                                    {/* <o:p></o:p> */}
                                  </p>
                                  <p className="MsoListParagraphCxSpLast" style="margin-left:0cm;mso-add-space:auto;
                                    text-align:justify;tab-stops:-38.9px 10.5pt;punctuation-wrap:simple;
                                    text-autospace:ideograph-numeric;vertical-align:baseline">
                                    в) При несчастном
                                    случае на производстве: акт о несчастном случае на производстве по форме Н-1
                                    – оригинал или копия, заверенная выдавшим учреждением.
                                    {/* <o:p></o:p> */}
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      г) При несчастном случае по пути на
                                      работу: акт о несчастном случае по пути на работу или с работы, составленный
                                      работодателем, – оригинал или копия, заверенная работодателем.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      13.5. При наступлении страхового случая
                                      и принятии решения о страховой выплате Страховщик проводит проверку наличия
                                      имущественного интереса у получателя страховых услуг на основании
                                      предоставленных им документов.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormalCxSpMiddle" style="text-align:justify;tab-stops:-38.9px 1.65pt 15.75pt;
                                    punctuation-wrap:simple;text-autospace:ideograph-numeric;vertical-align:baseline">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      13.6. В случае
                                      выявления факта предоставления&nbsp;Страховщику неполного пакета документов и
                                      / или документов, оформленных ненадлежащим образом, Страховщик направляет
                                      уведомление заявителю с указанием перечня недостающих и / или ненадлежащим
                                      образом оформленных документов не позднее 15 (Пятнадцати) рабочих дней с
                                      момента получения Страховщиком неполного пакета документов и / или
                                      документов, оформленных ненадлежащим образом.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:19;height:11.35pt">
                                <td width="671" colSpan="5" style="width:503.2pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  background:#D9D9D9;padding:0cm 5.4pt 0cm 5.4pt;height:11.35pt">
                                  <p className="MsoNormal" style="punctuation-wrap:simple;text-autospace:ideograph-numeric;
                                    vertical-align:baseline">
                                    <b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;color:black;
                                      mso-color-alt:windowtext">ПАМЯТКА КЛИЕНТУ</span></b>
                                    <b>
                                      <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="671" colSpan="5" valign="top" style="width:503.2pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif">
                                      При наступлении события, имеющего
                                      признаки страхового случая:
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      mso-bidi-font-weight:bold">
                                      1. Незамедлительно обратитесь в лечебное
                                      учреждение для получения медицинской помощи.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;
                                      mso-bidi-font-weight:bold">2. Уведомите АО «Д2 Страхование»</span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      любым доступным
                                      способом в течение 30 (тридцати)
                                      календарных дней с момента события.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}>
                                    <span style="font-size:13px;
                                      font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold">3. Соберите <u>полный
                                    пакет</u> документов </span>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      (раздел
                                      13 Программы страхования) и направьте в страховую компанию на почтовый адрес,
                                      указанный ниже.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal" style={{textAlign: "justify"}}><span style="font-size:13px;
                                    font-family:&quot;Times New Roman&quot;,serif;mso-bidi-font-weight:bold"></span></p>
                                </td>
                              </tr>
                              <tr style="mso-yfti-irow:21;height:11.35pt">
                                <td width="671" colSpan="5" style="width:503.2pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  background:#D9D9D9;padding:0cm 5.4pt 0cm 5.4pt;height:11.35pt">
                                  <p className="MsoNormal">
                                    <b><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;color:black;
                                      mso-color-alt:windowtext">КОНТАКТНАЯ ИНФОРМАЦИЯ</span></b>
                                    <b>
                                      <span style="font-size:13px;font-family:
                                        &quot;Times New Roman&quot;,serif">
                                        {/* <o:p></o:p> */}
                                      </span>
                                    </b>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td width="671" colSpan="5" valign="top" style="width:503.2pt;border:1pt solid windowtext;
                                  border-top:none;mso-border-top-alt:solid #BFBFBF .5pt;mso-border-alt:solid #BFBFBF .5pt;
                                  padding:0cm 5.4pt 0cm 5.4pt">
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      АО
                                      «Д2 Страхование». Почтовый адрес: 630099, Новосибирск, ул. Депутатская, дом 2, помещ. 1.
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      Телефон:
                                      8&nbsp;800 7755 290 (звонок по России бесплатный).
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                  <p className="MsoNormal">
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">Адрес
                                    электронной почты </span><a href="mailto:help@d2insur.ru"><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif;color:#9A0B28">help@d2insur.ru</span></a><span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">. Интернет-сайт
                                    страховой компании </span><a href="http://www.d2insur.ru/"><span style="font-size: 13px; font-family: &quot;Times New Roman&quot;, serif; color: rgb(154, 11, 40);">www.d2insur.ru</span></a>
                                    <span style="font-size:13px;font-family:&quot;Times New Roman&quot;,serif">
                                      .
                                      {/* <o:p></o:p> */}
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr height="0">
                                <td width="123" style="border:none"></td>
                                <td width="8" style="border:none"></td>
                                <td width="130" style="border:none"></td>
                                <td width="155" style="border:none"></td>
                                <td width="255" style="border:none"></td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="MsoNoSpacing" style="margin-left:1.0cm">
                            <span style="font-size:13px;
                              font-family:&quot;Times New Roman&quot;,serif">
                              {/* <o:p>&nbsp;</o:p> */}
                            </span>
                          </p>
                          <div className="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
                          <div className="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                          <div className="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <div className="type_offer_service hidden" data-service_id="extra_services_broken_2">
                      <div className="offer" id="MessServicePrint_extra_services_broken_2">
                        <div className="wrap">
                          <div style="display: block; page-break-before: always;"></div>
                          <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>									</b></font></font>
                          <p></p>
                          <p lang="ru-RU" className="western" align="center" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>Оферта
                            на оказание
                            информационно-консультационных
                            услуг</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="center" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>по
                            подбору финансовых
                            продуктов</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="center" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">(далее
                            - Договор/Оферта)</font></font>
                          </p>
                          <p lang="ru-RU" style="  ">
                            <br/>
                          </p>
                          <p lang="ru-RU" align="justify" style="  ">
                            <br/>
                          </p>
                          <p lang="ru-RU" align="justify" style=" text-indent: 0.49in;  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Настоящий
                            документ, постоянно
                            размещенный
                            в сети Интернет
                            по адресу&nbsp;</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">zabiray</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">ru</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">/</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">selection</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">of</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">products</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">,
                            является предложением
                            Общества с
                            ограниченной
                            ответственностью
                            Микрокредитная
                            компания «Забирай»
                            (далее – Исполнитель)
                            заключить
                            Договор на
                            оказание
                            информационно-консультационных
                            услуг по подбору
                            финансовых
                            продуктов
                            (далее по тексту
                            Оферты - Договор)
                            с любым заинтересованным
                            физическим
                            лицом (далее
                            по тексту Оферты
                            – Клиент).</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" text-indent: 0.49in;  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Настоящий
                            документ является
                            публичной
                            офертой в
                            соответствии
                            с пунктом 2 статьи
                            437 Гражданского
                            Кодекса Российской
                            Федерации. </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Надлежащим
                            акцептом настоящей
                            Оферты в соответствии
                            со статьей 438
                            Гражданского
                            кодекса Российской
                            Федерации
                            считается
                            осуществление
                            Клиентом в
                            совокупности
                            всех нижеперечисленных
                            действий:<br/>
                            -
                            заполнение
                            формы анкеты
                            на сайте Исполнителя;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            ознакомление
                            с условиями
                            Оферты на сайте
                            Исполнителя;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            выражение
                            согласия на
                            получение
                            информационно-консультационных
                            услуг по подбору
                            финансовых
                            продуктов на
                            условиях Оферты
                            путем нажатия
                            кнопки «Согласен»
                            (проставлением
                            галочки); </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            подписания
                            Оферты смс-кодом,
                            полученным
                            на номер мобильного
                            телефона Клиента;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            совершения
                            полной оплаты
                            Услуги.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Совершая
                            оплату Услуги
                            Клиент подтверждает
                            заключение
                            Договора. Датой
                            заключения
                            Договора является
                            дата оплаты
                            стоимости
                            Услуги.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>1.
                            Термины и
                            определения.</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">В
                            целях настоящей
                            Оферты нижеприведенные
                            термины используются
                            в следующем
                            значении:</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.1.
                            </font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>«Информационно-консультационная
                            услуга по подбору
                            финансовых
                            продуктов»</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            - дополнительная
                            платная услуга,
                            предоставляемая
                            Исполнителем
                            Клиенту на
                            условиях настоящей
                            Оферты, которая
                            не является
                            обязательной
                            для заключения,
                            исполнения
                            договора займа.
                            В рамках оказания
                            услуги Клиенту
                            предоставляется
                            список банков,
                            куда, по мнению
                            Исполнителя,
                            стоит в первую
                            очередь подать
                            Клиенту заявку
                            на получение
                            кредита. В данный
                            перечень включены
                            банки, которые
                            предоставляют
                            возможность
                            потратить
                            деньги на любые
                            цели, выдвигают
                            минимальные
                            требования
                            к заемщику,
                            быстро рассматривают
                            заявку, предоставляют
                            кредиты с низкими
                            процентными
                            ставками, используют
                            упрощенную
                            процедуру
                            оформления,
                            наблюдается
                            высокий процент
                            одобрения
                            заявок. А также
                            список онлайн
                            займов, в который
                            включены
                            привлекательные
                            продукты от
                            микрофинансовых
                            организаций
                            с хорошей репутацией
                            и наиболее
                            низкими процентными
                            ставками (далее
                            – Услуга).</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.2.
                            «Оферта» - настоящий
                            документ на
                            подключение
                            и пользование
                            дополнительной
                            платной услугой
                            на сайте Исполнителя.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.3.
                            «Сайт» - сайт
                            Исполнителя
                            в телекоммуникационной
                            сети «Интернет»,
                            расположенный
                            по адресу
                            </font></font><a href="http://www.zabiray.ru/"><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">www</span></font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">zabiray</span></font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">ru</span></font></font></u></font></a><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.4.
                            «Клиент» -
                            дееспособное
                            физическое
                            лицо, осуществившее
                            акцепт Оферты,
                            достигшее
                            возраста 20 лет,
                            являющееся
                            гражданином
                            Российской
                            Федерации,
                            обратившееся
                            к Исполнителю
                            с намерением
                            получить Услугу.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>2.
                            Порядок оказания
                            Услуги. </b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.1.
                            Исполнитель
                            оказывает
                            Услугу по истечении
                            3 (трех) рабочих
                            дней с момента
                            получения
                            оплаты от Клиента.
                            В течение данного
                            срока Клиент
                            может направить
                            в адрес Исполнителя
                            на электронную
                            почту </font></font><font color="#0000ff"><u><a href="mailto:services@zabiray.ru"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">services@zabiray.ru</font></font></a></u></font><font color="#ff0000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            </font></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">дополнительную
                            информацию
                            (срок, сумма,
                            обеспечение,
                            цель и т.д.), с
                            учетом которой,
                            Исполнитель
                            произведет
                            подборку финансовых
                            продуктов.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.2.
                            После получения
                            оплаты Услуги,
                            Исполнитель
                            в течение 3 (трех)
                            рабочих дней
                            направляет
                            на мобильный
                            номер телефона
                            и электронную
                            почту Клиента,
                            указанные им
                            при заполнении
                            анкеты на Сайте,
                            сообщение,
                            содержащее
                            ссылку на
                            произведенную
                            Исполнителем
                            подборку лучших
                            финансовых
                            продуктов, в
                            том числе с
                            учетом сведений
                            дополнительно,
                            предоставленных
                            Клиентом.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>3.
                            Финансовые
                            условия.</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font style=""><span style="font-size: 10pt;">3.3.
                            Стоимость
                            Услуги составляет </span><span style="font-size: 13.3333px;">850,00 (Восемьсот пятьдесят) рублей</span><span style="font-size: 10pt;">,
                            с учетом НДС.</span></font></font>
                          </p>
                          <p lang="ru-RU" style=" "><font color="#000000"><font face="Montserrate, Cambria, serif"><font size="2" style="font-size: 10pt">3.4.</font></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            Оплата Услуг
                            Общества производится
                            не позднее 30
                            дней с момента
                            подписания
                            настоящего
                            Соглашения.
                            </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.5.
                            Общество приступает
                            к оказанию
                            Услуги, предусмотренной
                            п. 2.1. Договора,
                            в срок, указанный
                            в п. 2.2. Договора
                            после поступления
                            оплаты. </font></font>
                          </p>
                          <p lang="ru-RU" style=" "><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.6.
                            Клиент оплачивает
                            Услугу Общества:</font></font>
                          </p>
                          <p lang="ru-RU" style=" "><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1)
                            путем перевода
                            по следующим
                            реквизитам:</font></font>
                          </p>
                          <p lang="ru-RU" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">р/с
                            40701810900000006062</font></font>
                          </p>
                          <p lang="ru-RU" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">в
                            АО «Тинькофф
                            Банк»</font></font>
                          </p>
                          <p lang="ru-RU" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">БИК
                            044525974</font></font>
                          </p>
                          <p lang="ru-RU" style="  ">
                            <font face="Arial, sans-serif"><font size="3" style="font-size: 12pt"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">к/с
                            30101810145250000974 в ГУ БАНКА
                            РОССИИ по ЦФО</font></font></font></font></font>
                          </p>
                          <p lang="ru-RU" style=" "><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Получатель:
                            ООО МКК «Забирай»</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Назначение
                            платежа: оплата
                            на оказание
                            информационно-консультационных
                            услуг по подбору
                            финансовых
                            продуктов. ФИО
                            Заемщика.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2)
                            путем перевода
                            денежных средств
                            платежными
                            картами VISA, MasterCard,
                            МИР в Личном
                            кабинете на
                            Сайте Общества.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.7.
                            Обязанность
                            Клиента по
                            оплате считается
                            исполненной
                            с момента зачисления
                            полной суммы
                            денежных средств
                            на расчетный
                            счет Исполнителя.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>4.
                            Условия о
                            конфиденциальности.</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.1.
                            Каждая из сторон
                            согласилась
                            считать весь
                            объем информации,
                            переданной
                            или передаваемой
                            сторонами друг
                            другу при заключении
                            настоящего
                            Договора и в
                            ходе исполнения
                            обязательств,
                            возникающих
                            из настоящего
                            Договора,
                            конфиденциальной
                            информацией
                            (а в пределах,
                            допускаемых
                            действующим
                            законодательством,
                            - коммерческой
                            тайной другой
                            стороны). </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.2.
                            Представляемая
                            Сторонами друг
                            другу коммерческая
                            и иная информация
                            (в том числе
                            персональные
                            данные Клиента),
                            прямо или косвенно
                            связанная с
                            предметом
                            настоящего
                            Договора, является
                            Конфиденциальной
                            информацией.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.3.
                            Принимающей
                            стороне строго
                            запрещается
                            без письменного
                            разрешения
                            Раскрывающей
                            стороны, разглашать
                            или иным образом
                            раскрывать
                            Конфиденциальную
                            информацию
                            третьим лицам.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.4.
                            Запрет на разглашение
                            Конфиденциальной
                            информации
                            не распространяется
                            на случаи
                            непреднамеренного
                            и/или вынужденного
                            разглашения
                            Конфиденциальной
                            информации
                            по причине
                            действия
                            обстоятельств
                            непреодолимой
                            силы или в силу
                            применения
                            положений
                            законодательства
                            Российской
                            Федерации,
                            вступивших
                            в силу решений
                            суда соответствующей
                            юрисдикции
                            либо законных
                            требований
                            компетентных
                            органов государственной
                            власти и управления.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.5.
                            В случаях,
                            предусмотренных
                            настоящий
                            Договором,
                            Принимающая
                            сторона обязана
                            предварительно
                            до раскрытия
                            Конфиденциальной
                            информации
                            уведомить
                            Раскрывающую
                            сторону о наступлении
                            соответствующего
                            события, с которым
                            связана необходимость
                            раскрытия
                            Конфиденциальной
                            информации,
                            а также об условиях
                            и сроках раскрытия
                            Конфиденциальной
                            информации,
                            а при невозможности
                            направления
                            предварительного
                            уведомления
                            - незамедлительно
                            после раскрытия.
                            Принимающая
                            сторона обязуется
                            обеспечить
                            раскрытие
                            только той
                            части Конфиденциальной
                            информации,
                            раскрытие
                            которой необходимо
                            в силу применения
                            положений
                            законодательства
                            Российской
                            Федерации,
                            вступивших
                            в законную силу
                            решений судов
                            соответствующей
                            юрисдикции
                            либо законных
                            требований
                            компетентных
                            органов государственной
                            власти и управления.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>5.
                            Срок действия
                            Договора</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">5.1.
                            Настоящий
                            Договор считается
                            заключенным
                            с даты оплаты
                            Услуги и действует
                            до даты окончания
                            оказания услуг
                            (п. 2.1), а в части
                            денежных обязательств
                            - до полного их
                            исполнения.<br/>
                            5.2.
                            Договор в любое
                            время может
                            быть расторгнут
                            по соглашению
                            Сторон.<br/>
                            5.3. В течение
                            14 календарных
                            дней с момента
                            заключения
                            Договора Клиент
                            вправе расторгнуть
                            Договор и потребовать
                            возврат оплаченных
                            денежных средств,
                            за минусом
                            фактически
                            понесенных
                            расходов Исполнителя
                            за Услугу, оказанную
                            до даты заявления
                            об отказе от
                            Договора.<br/>
                            5.4. В
                            случае досрочного
                            прекращения
                            Договора, Клиенту
                            подлежит возврату
                            внесенная им
                            по Договору
                            сумма за вычетом
                            стоимости
                            услуг, оказанных
                            с даты начала
                            оказания услуг
                            до даты получения
                            уведомления
                            об отказе от
                            Договора (далее
                            – Сумма возврата).<br/>
                            5.5.
                            Исполнитель
                            возвращает
                            Клиенту сумму
                            возврата в
                            течение 10 рабочих
                            дней с даты
                            получения
                            уведомления
                            Клиента об
                            отказе от Договора.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>6.
                            Заключительные
                            положения. </b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.1.
                            Стороны обязуются
                            не позднее, чем
                            через 3 (Три)
                            календарных
                            дня после изменения
                            своих данных,
                            необходимых
                            для исполнения
                            настоящего
                            Договора, таких
                            как: адреса,
                            банковские
                            реквизиты,
                            телефоны, адрес
                            электронной
                            почты, извещать
                            друг друга обо
                            всех таких
                            изменениях.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.2.
                            Обмен информацией,
                            как и любая
                            другая переписка
                            может осуществляться
                            сторонами
                            посредством
                            использования
                            средств электронной
                            связи (e-mail, смс-сообщений,
                            сообщений через
                            личный кабинет
                            Клиента на
                            Сайте), почтовых
                            отправлений,
                            путем передачи
                            нарочно. </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.3.
                            Клиент гарантирует
                            работоспособность
                            указанных им
                            адреса электронной
                            почты и номера
                            мобильного
                            телефона и
                            самостоятельно
                            несет риски,
                            связанные с
                            неполучением,
                            несвоевременным
                            получением
                            или отправкой
                            сообщений,
                            ознакомлением
                            с их содержанием
                            в связи с любыми
                            техническими
                            неисправностями
                            в работе электронной
                            почты, мобильного
                            телефона, отсутствием
                            доступа по
                            любым причинам,
                            включая отсутствие
                            доступа в Интернет,
                            результатами
                            специальной
                            сортировки
                            сообщений, в
                            частности,
                            попаданием
                            сообщений в
                            папку «Спам»
                            либо аналогичную.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.4.
                            Все споры по
                            Договору должны
                            разрешаться
                            с соблюдением
                            предварительного
                            претензионного
                            порядка. Претензия
                            в письменном
                            виде, подписанная
                            уполномоченным
                            на то лицом,
                            должна быть
                            направлена
                            на электронный
                            адрес почты
                            Сторон, указанных
                            в Договоре.
                            Сторона, получившая
                            претензию,
                            должна дать
                            письменный
                            ответ по существу
                            заявленных
                            в претензии
                            требований
                            не позднее 12
                            рабочих дней
                            с даты получения
                            претензии.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.5.
                            Текст настоящей
                            Оферты может
                            быть в любое
                            время изменён
                            Исполнителем
                            в одностороннем
                            порядке, при
                            этом актуальной
                            считается
                            версия, размещенная
                            на Сайте Исполнителя.
                            Условия Договора
                            остаются неизменными
                            для лица, акцептовавшего
                            Договор, до
                            окончания срока
                            его действия.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="  ">
                            <br/>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="type_offer_service hidden" data-service_id="extra_services_broken_3">
                      <div className="offer" id="MessServicePrint_extra_services_broken_3">
                        <div className="wrap">
                          <div style="display: block; page-break-before: always;"></div>
                          <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>									</b></font></font>
                          <p></p>
                          <p lang="ru-RU" className="western" align="center" style="">
                            <br/>
                          </p>
                          <p lang="ru-RU" className="western" align="center">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>Оферта
                            на оказание
                            информационно-консультационных
                            услуг</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="center">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>«Персональный
                            менеджер»</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="center">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">(далее
                            - Договор/Оферта)</font></font>
                          </p>
                          <p lang="ru-RU">
                            <br/>
                          </p>
                          <p lang="ru-RU" align="justify">
                            <br/>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Настоящий
                            документ, постоянно
                            размещенный
                            в сети Интернет
                            по адресу&nbsp;</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">zabiray</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">ru</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">/</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">selection</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">of</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">products</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">,
                            является предложением
                            Общества с
                            ограниченной
                            ответственностью
                            Микрокредитная
                            компания «Забирай»
                            (далее – Исполнитель)
                            заключить
                            Договор на
                            оказание
                            информационно-консультационных
                            услуг «Персональный
                            менеджер»
                            (далее по тексту
                            Оферты - Договор)
                            с любым заинтересованным
                            физическим
                            лицом (далее
                            по тексту Оферты
                            – Клиент).</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Настоящий
                            документ является
                            публичной
                            офертой в
                            соответствии
                            с пунктом 2 статьи
                            437 Гражданского
                            Кодекса Российской
                            Федерации. </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Надлежащим
                            акцептом настоящей
                            Оферты в соответствии
                            со статьей 438
                            Гражданского
                            кодекса Российской
                            Федерации
                            считается
                            осуществление
                            Клиентом в
                            совокупности
                            всех нижеперечисленных
                            действий:<br/>
                            -
                            заполнение
                            формы анкеты
                            на сайте Исполнителя;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            ознакомление
                            с условиями
                            Оферты на сайте
                            Исполнителя;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            выражение
                            согласия на
                            получение
                            информационно-консультационных
                            услуг «Персональный
                            менеджер» на
                            условиях Оферты
                            путем нажатия
                            кнопки «Согласен»
                            (проставлением
                            галочки); </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            подписания
                            Оферты смс-кодом,
                            полученным
                            на номер мобильного
                            телефона Клиента.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Датой
                            заключения
                            Договора является
                            дата подписания
                            Оферты смс-кодом.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>1.
                            Термины и
                            определения.</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">В
                            целях настоящей
                            Оферты нижеприведенные
                            термины используются
                            в следующем
                            значении:</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.1.
                            </font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>«Информационно-консультационная
                            услуга «Персональный
                            менеджер»</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            - дополнительная
                            платная услуга,
                            предоставляемая
                            Исполнителем
                            Клиенту на
                            условиях настоящей
                            Оферты, которая
                            не является
                            обязательной
                            для заключения,
                            исполнения
                            договора займа.
                            Клиенту предоставляются
                            услуги персонального
                            менеджера,
                            который готов
                            в удобном формате
                            ответить на
                            финансовые
                            вопросы Клиента
                            по видеосвязи,
                            телефону или
                            в чате, подобрать
                            подходящий
                            продукт и оформить
                            его онлайн, по
                            запросу Клиента
                            оформить курьерскую
                            доставку справки,
                            копии договора
                            займа.  Персональный
                            менеджер на
                            связи каждый
                            день с 9:00 до 21:00 по
                            московскому
                            времени (далее
                            – Услуга). </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.2.
                            «Оферта» - настоящий
                            документ на
                            подключение
                            и пользование
                            дополнительной
                            платной услугой
                            на сайте Исполнителя.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.3.
                            «Сайт» - сайт
                            Исполнителя
                            в телекоммуникационной
                            сети «Интернет»,
                            расположенный
                            по адресу
                            </font></font><a href="http://www.zabiray.ru/"><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">www</span></font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">zabiray</span></font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">ru</span></font></font></u></font></a><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.4.
                            «Клиент» -
                            дееспособное
                            физическое
                            лицо, осуществившее
                            акцепт Оферты,
                            достигшее
                            возраста 20 лет,
                            являющееся
                            гражданином
                            Российской
                            Федерации,
                            обратившееся
                            к Исполнителю
                            с намерением
                            получить Услугу.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>2.
                            Порядок оказания
                            Услуги. </b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.1.
                            После подписания
                            Договора Клиентом,
                            Исполнитель
                            в течение 1 (одного)
                            рабочего дня
                            направляет
                            на мобильный
                            номер телефона
                            и/или электронную
                            почту Клиента,
                            указанные им
                            при заполнении
                            анкеты на Сайте,
                            сообщение,
                            содержащее
                            номер телефона
                            и адрес электронной
                            почты его
                            персонального
                            менеджера.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.2.
                            Услуга оказывается
                            в течение 30
                            календарных
                            дней с момента
                            подписания
                            Договора. В
                            рамках Услуги
                            Исполнитель
                            предоставляет
                            консультации/разъяснения
                            Клиенту по
                            вопросам оформления,
                            подписания,
                            исполнения
                            договоров
                            займа, подбирает
                            финансовые
                            продукты Исполнителя.
                            Время реагирования
                            Исполнителя
                            на письменные
                            обращения
                            Клиента не
                            более 2 часов.
                            В течение действия
                            Услуги количество
                            обращений
                            Клиента к Исполнителю
                            не ограничено.
                            Курьерская
                            доставка
                            осуществляется
                            не более одного
                            раза за время
                            действия Услуги.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.3.
                            В случае если
                            Клиент в течение
                            действия Услуги
                            не воспользовался
                            ею, Услуга считается
                            оказанной
                            Исполнителем.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>3.
                            Финансовые
                            условия.</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="">
                            <font face="Times New Roman, serif"><font style=""><span style="font-size: 10pt;">3.1.
                            Стоимость
                            Услуги составляет
                            850,00 (</span><span style="font-size: 13.3333px;">Восемьсот пятьдесят</span><span style="font-size: 10pt;">) рублей,
                            с учетом НДС.</span></font></font>
                          </p>
                          <p lang="ru-RU" style=" line-height: 100%"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.2.
                            Оплата Услуг
                            Общества производится
                            не позднее 30
                            дней с момента
                            подписания
                            настоящего
                            Соглашения.
                            </font></font>
                          </p>
                          <p lang="ru-RU" style=" line-height: 100%"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.3.
                            Клиент оплачивает
                            Услугу Общества:</font></font>
                          </p>
                          <p lang="ru-RU" style=" line-height: 100%"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1)
                            путем перевода
                            по следующим
                            реквизитам:</font></font>
                          </p>
                          <p lang="ru-RU" style="margin-right: 0.3in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">р/с
                            40701810900000006062</font></font>
                          </p>
                          <p lang="ru-RU" style="margin-right: 0.3in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">в
                            АО «Тинькофф
                            Банк»</font></font>
                          </p>
                          <p lang="ru-RU" style="margin-right: 0.3in;">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">БИК
                            044525974</font></font>
                          </p>
                          <p lang="ru-RU" style="margin-right: 0.3in;">
                            <font face="Arial, sans-serif"><font size="3" style="font-size: 12pt"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">к/с
                            30101810145250000974 в ГУ БАНКА
                            РОССИИ по ЦФО</font></font></font></font></font>
                          </p>
                          <p lang="ru-RU" style=" line-height: 100%"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Получатель:
                            ООО МКК «Забирай»</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Назначение
                            платежа: оплата
                            на оказание
                            информационно-консультационных
                            услуг Персональный
                            менеджер. ФИО
                            Заемщика.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2)
                            путем перевода
                            денежных средств
                            платежными
                            картами VISA, MasterCard,
                            МИР в Личном
                            кабинете на
                            Сайте Общества.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style="">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.4.
                            Обязанность
                            Клиента по
                            оплате считается
                            исполненной
                            с момента зачисления
                            полной суммы
                            денежных средств
                            на расчетный
                            счет Исполнителя.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>4.
                            Условия о
                            конфиденциальности.</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.1.
                            Каждая из сторон
                            согласилась
                            считать весь
                            объем информации,
                            переданной
                            или передаваемой
                            сторонами друг
                            другу при заключении
                            настоящего
                            Договора и в
                            ходе исполнения
                            обязательств,
                            возникающих
                            из настоящего
                            Договора,
                            конфиденциальной
                            информацией
                            (а в пределах,
                            допускаемых
                            действующим
                            законодательством,
                            - коммерческой
                            тайной другой
                            стороны). </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.2.
                            Представляемая
                            Сторонами друг
                            другу коммерческая
                            и иная информация
                            (в том числе
                            персональные
                            данные Клиента),
                            прямо или косвенно
                            связанная с
                            предметом
                            настоящего
                            Договора, является
                            Конфиденциальной
                            информацией.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.3.
                            Принимающей
                            стороне строго
                            запрещается
                            без письменного
                            разрешения
                            Раскрывающей
                            стороны, разглашать
                            или иным образом
                            раскрывать
                            Конфиденциальную
                            информацию
                            третьим лицам.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.4.
                            Запрет на разглашение
                            Конфиденциальной
                            информации
                            не распространяется
                            на случаи
                            непреднамеренного
                            и/или вынужденного
                            разглашения
                            Конфиденциальной
                            информации
                            по причине
                            действия
                            обстоятельств
                            непреодолимой
                            силы или в силу
                            применения
                            положений
                            законодательства
                            Российской
                            Федерации,
                            вступивших
                            в силу решений
                            суда соответствующей
                            юрисдикции
                            либо законных
                            требований
                            компетентных
                            органов государственной
                            власти и управления.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.5.
                            В случаях,
                            предусмотренных
                            настоящий
                            Договором,
                            Принимающая
                            сторона обязана
                            предварительно
                            до раскрытия
                            Конфиденциальной
                            информации
                            уведомить
                            Раскрывающую
                            сторону о наступлении
                            соответствующего
                            события, с которым
                            связана необходимость
                            раскрытия
                            Конфиденциальной
                            информации,
                            а также об условиях
                            и сроках раскрытия
                            Конфиденциальной
                            информации,
                            а при невозможности
                            направления
                            предварительного
                            уведомления
                            - незамедлительно
                            после раскрытия.
                            Принимающая
                            сторона обязуется
                            обеспечить
                            раскрытие
                            только той
                            части Конфиденциальной
                            информации,
                            раскрытие
                            которой необходимо
                            в силу применения
                            положений
                            законодательства
                            Российской
                            Федерации,
                            вступивших
                            в законную силу
                            решений судов
                            соответствующей
                            юрисдикции
                            либо законных
                            требований
                            компетентных
                            органов государственной
                            власти и управления.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" line-height: 100%">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>5.
                            Срок действия
                            Договора</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">5.1.
                            Настоящий
                            Договор считается
                            заключенным
                            с даты подписания
                            Договора и
                            действует в
                            течение 30 календарных
                            дней, а в части
                            денежных обязательств
                            - до полного их
                            исполнения.<br/>
                            5.2.
                            Договор в любое
                            время может
                            быть расторгнут
                            по соглашению
                            Сторон.<br/>
                            5.3. В течение
                            14 календарных
                            дней с момента
                            заключения
                            Договора Клиент
                            вправе расторгнуть
                            Договор и потребовать
                            возврат оплаченных
                            денежных средств,
                            за минусом
                            фактически
                            понесенных
                            расходов Исполнителя
                            за Услугу, оказанную
                            до даты заявления
                            об отказе от
                            Договора.<br/>
                            5.4. В
                            случае досрочного
                            прекращения
                            Договора, Клиенту
                            подлежит возврату
                            внесенная им
                            по Договору
                            сумма за вычетом
                            стоимости
                            Услуг, оказанных
                            с даты начала
                            оказания Услуг
                            до даты получения
                            уведомления
                            об отказе от
                            Договора (далее
                            – Сумма возврата).</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">5.5.
                            Исполнитель
                            возвращает
                            Клиенту сумму
                            возврата в
                            течение 10 рабочих
                            дней с даты
                            получения
                            уведомления
                            Клиента об
                            отказе от Договора.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>6.
                            Заключительные
                            положения. </b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.1.
                            Стороны обязуются
                            не позднее, чем
                            через 3 (Три)
                            календарных
                            дня после изменения
                            своих данных,
                            необходимых
                            для исполнения
                            настоящего
                            Договора, таких
                            как: адреса,
                            банковские
                            реквизиты,
                            телефоны, адрес
                            электронной
                            почты, извещать
                            друг друга обо
                            всех таких
                            изменениях.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.2.
                            Обмен информацией,
                            как и любая
                            другая переписка
                            может осуществляться
                            сторонами
                            посредством
                            использования
                            средств электронной
                            связи (e-mail, смс-сообщений,
                            сообщений через
                            личный кабинет
                            Клиента на
                            Сайте), почтовых
                            отправлений,
                            путем передачи
                            нарочно. </font></font>
                          </p>
                          <p lang="ru-RU" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.3.
                            Клиент гарантирует
                            работоспособность
                            указанных им
                            адреса электронной
                            почты и номера
                            мобильного
                            телефона и
                            самостоятельно
                            несет риски,
                            связанные с
                            неполучением,
                            несвоевременным
                            получением
                            или отправкой
                            сообщений,
                            ознакомлением
                            с их содержанием
                            в связи с любыми
                            техническими
                            неисправностями
                            в работе электронной
                            почты, мобильного
                            телефона, отсутствием
                            доступа по
                            любым причинам,
                            включая отсутствие
                            доступа в Интернет,
                            результатами
                            специальной
                            сортировки
                            сообщений, в
                            частности,
                            попаданием
                            сообщений в
                            папку «Спам»
                            либо аналогичную.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.4.
                            Все споры по
                            Договору должны
                            разрешаться
                            с соблюдением
                            предварительного
                            претензионного
                            порядка. Претензия
                            в письменном
                            виде, подписанная
                            уполномоченным
                            на то лицом,
                            должна быть
                            направлена
                            на электронный
                            адрес почты
                            Сторон, указанных
                            в Договоре.
                            Сторона, получившая
                            претензию,
                            должна дать
                            письменный
                            ответ по существу
                            заявленных
                            в претензии
                            требований
                            не позднее 12
                            рабочих дней
                            с даты получения
                            претензии.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.5.
                            Текст настоящей
                            Оферты может
                            быть в любое
                            время изменён
                            Исполнителем
                            в одностороннем
                            порядке, при
                            этом актуальной
                            считается
                            версия, размещенная
                            на Сайте Исполнителя.
                            Условия Договора
                            остаются неизменными
                            для лица, акцептовавшего
                            Договор, до
                            окончания срока
                            его действия.</font></font>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="type_offer_service hidden" data-service_id="extra_services_broken_4">
                      <div className="offer" id="MessServicePrint_extra_services_broken_4">
                        <div className="wrap">
                          <div style="display: block; page-break-before: always;"></div>
                          <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>									</b></font></font>
                          <p></p>
                          <p lang="ru-RU" className="western" align="center">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>Оферта
                            на оказание
                            информационно-консультационных
                            услуг</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="center">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>«Юридическая
                            помощь»</b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="center">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">(далее
                            - Договор/Оферта)</font></font>
                          </p>
                          <p lang="ru-RU">
                            <br/>
                          </p>
                          <p lang="ru-RU" align="justify">
                            <br/>
                          </p>
                          <p lang="ru-RU" align="justify" style=" text-indent: 0.49in;  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Настоящий
                            документ, постоянно
                            размещенный
                            в сети Интернет
                            по адресу&nbsp;</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">zabiray</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">ru</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">/</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">selection</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">of</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">products</span></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">,
                            является предложением
                            Общества с
                            ограниченной
                            ответственностью
                            Микрокредитная
                            компания «Забирай»
                            (далее – Исполнитель)
                            заключить
                            Договор на
                            оказание
                            информационно-консультационных
                            услуг «Юридическая
                            помощь» (далее
                            по тексту Оферты
                            - Договор) с любым
                            заинтересованным
                            физическим
                            лицом (далее
                            по тексту Оферты
                            – Клиент).</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" text-indent: 0.49in;  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Настоящий
                            документ является
                            публичной
                            офертой в
                            соответствии
                            с пунктом 2 статьи
                            437 Гражданского
                            Кодекса Российской
                            Федерации. </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Надлежащим
                            акцептом настоящей
                            Оферты в соответствии
                            со статьей 438
                            Гражданского
                            кодекса Российской
                            Федерации
                            считается
                            осуществление
                            Клиентом в
                            совокупности
                            всех нижеперечисленных
                            действий:<br/>
                            -
                            заполнение
                            формы анкеты
                            на сайте Исполнителя;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            ознакомление
                            с условиями
                            Оферты на сайте
                            Исполнителя;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            выражение
                            согласия на
                            получение
                            информационно-консультационных
                            услуг «Юридическая
                            помощь» на
                            условиях Оферты
                            путем нажатия
                            кнопки «Согласен»
                            (проставлением
                            галочки); </font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            подписания
                            Оферты смс-кодом,
                            полученным
                            на номер мобильного
                            телефона Клиента;</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            совершения
                            полной оплаты
                            Услуги.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style="text-indent: 0.49in;  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Совершая
                            оплату Услуги
                            Клиент подтверждает
                            заключение
                            Договора. Датой
                            заключения
                            Договора является
                            дата оплаты
                            стоимости
                            Услуги.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>1.
                            Термины и
                            определения.</b></font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">В
                            целях настоящей
                            Оферты нижеприведенные
                            термины используются
                            в следующем
                            значении:</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>«Информационно-консультационная
                            услуга «Юридическая
                            помощь»</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            - дополнительная
                            платная услуга,
                            предоставляемая
                            Исполнителем
                            Клиенту на
                            условиях настоящей
                            Оферты, которая
                            не является
                            обязательной
                            для заключения,
                            исполнения
                            договора займа.
                            Клиенту предоставляются
                            консультации
                            по следующему
                            кругу вопросов:
                            в области защиты
                            прав потребителей,
                            потребительского
                            кредитования,
                            трудового,
                            семейного
                            законодательства.
                            По письменному
                            запросу Клиента
                            предоставляются
                            также типовые
                            формы документов,
                            инструкции
                            по составлению
                            документа
                            (далее – Услуга).</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.2.
                            «Оферта» - настоящий
                            документ на
                            подключение
                            и пользование
                            дополнительной
                            платной услугой
                            на сайте Исполнителя.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.3.
                            «Сайт» - сайт
                            Исполнителя
                            в телекоммуникационной
                            сети «Интернет»,
                            расположенный
                            по адресу
                            </font></font><a href="http://www.zabiray.ru/"><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">www</span></font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">zabiray</span></font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">ru</span></font></font></u></font></a><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.
                            </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1.4.
                            «Клиент» -
                            дееспособное
                            физическое
                            лицо, осуществившее
                            акцепт Оферты,
                            достигшее
                            возраста 20 лет,
                            являющееся
                            гражданином
                            Российской
                            Федерации,
                            обратившееся
                            к Исполнителю
                            с намерением
                            получить Услугу.</font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>2.
                            Порядок оказания
                            Услуги. </b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.1.
                            Исполнитель
                            оказывает
                            Услугу с момента
                            получения
                            оплаты от Клиента
                            в течение 30
                            календарных
                            дней. </font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.2.
                            В течение данного
                            срока Клиент
                            может направить
                            в адрес Исполнителя
                            на электронную
                            почту</font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            </font></font><a href="mailto:legal@zabiray.ru"><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><span lang="en-US">legal</span></font></font></u></font><font color="#0000ff"><u><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">@zabiray.ru</font></font></u></font></a><font color="#ff0000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">:</font></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            не более 2 (двух)
                            запросов на
                            предоставление
                            юридической
                            консультации
                            по вопросам:
                            в области защиты
                            прав потребителей,
                            потребительского
                            кредитования,
                            трудового,
                            семейного
                            законодательства
                            </font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>или
                            </b></font></font>
                          </p>
                          <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">-
                            не более 3 (трех)
                            запросов на
                            предоставление
                            типовых форм
                            документов.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">А
                            также представить
                            Исполнителю
                            необходимый
                            пакет документов
                            и достоверную
                            исчерпывающую
                            информацию,
                            относящуюся
                            к обращению
                            Клиента.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.3.
                            После получения
                            запроса Клиента
                            на предоставление
                            Услуги и поступления
                            ее оплаты,
                            Исполнитель
                            в течение 3 (трех)
                            рабочих дней
                            на адрес электронной
                            почты Клиента
                            направляет
                            правовое заключение
                            по вопросу
                            Клиента, с
                            предложением
                            определенной
                            последовательности
                            рекомендуемых
                            действий, с
                            необходимыми
                            разъяснениями,
                            приложенными
                            законодательными
                            актами по данному
                            вопросу. Либо
                            предоставляет
                            типовую форму
                            запрошенного
                            Клиентом документа
                            с инструкцией
                            по его составлению.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.4.
                            Время оказания
                            Услуг - рабочее
                            время с понедельника
                            по пятницу
                            кроме официальных
                            праздничных
                            и выходных
                            дней, с 8.00 до 16.00 по
                            московскому
                            времени.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.5.
                            В случае невозможности
                            выполнения
                            Исполнителем
                            запроса Клиента
                            ввиду недостаточности
                            в нем сведений,
                            необходимых
                            для оказания
                            Услуги в полном
                            объеме, Исполнитель
                            в течение двух
                            рабочих дней
                            с момента поступления
                            запроса от
                            Клиента, обращается
                            к Клиенту с
                            требованием
                            предоставить
                            дополнительные
                            сведения, материалы
                            и (или) документы.
                            При этом Исполнитель
                            вправе не приступать
                            к исполнению
                            Услуги до момента
                            предоставления
                            Заказчиком
                            дополнительных
                            сведений (материалов,
                            документов),
                            а срок оказания
                            Услуги продлевается
                            на время предоставления
                            Клиентом
                            дополнительной
                            необходимой
                            Исполнителю
                            информации
                            (документов,
                            сведений).</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2.6.
                            В случае если
                            Клиент в течение
                            действия Услуги
                            не воспользовался
                            ею, Услуга считается
                            оказанной
                            Исполнителем.</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>3.
                            Финансовые
                            условия.</b></font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font style=""><span style="font-size: 10pt;">3.3.
                            Стоимость
                            Услуги составляет </span><span style="font-size: 13.3333px;">1550,00 (Одна тысяча пятьсот пятьдесят) рублей</span><span style="font-size: 10pt;">, с учетом
                            НДС.</span></font></font>
                           </p>
                           <p lang="ru-RU" style=" "><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.4</font></font><font color="#000000"><font face="Montserrate, Cambria, serif"><font size="2" style="font-size: 10pt">.</font></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            Оплата Услуг
                            Общества производится
                            не позднее 30
                            дней с момента
                            подписания
                            настоящего
                            Соглашения.
                            </font></font>
                           </p>
                           <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.5.
                            Общество приступает
                            к оказанию
                            Услуги, предусмотренной
                            п. 2.3. Договора,
                            в срок, указанный
                            в п. 2.3. Договора
                            после поступления
                            оплаты. </font></font>
                           </p>
                           <p lang="ru-RU" style=" "><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.6.
                            Клиент оплачивает
                            Услугу Общества:</font></font>
                           </p>
                           <p lang="ru-RU" style=" "><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">1)
                            путем перевода
                            по следующим
                            реквизитам:</font></font>
                           </p>
                           <p lang="ru-RU" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">р/с
                            40701810900000006062</font></font>
                           </p>
                           <p lang="ru-RU" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">в
                            АО «Тинькофф
                            Банк»</font></font>
                           </p>
                           <p lang="ru-RU" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">БИК
                            044525974</font></font>
                           </p>
                           <p lang="ru-RU" style="  ">
                            <font face="Arial, sans-serif"><font size="3" style="font-size: 12pt"><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">к/с
                            30101810145250000974 в ГУ БАНКА
                            РОССИИ по ЦФО</font></font></font></font></font>
                           </p>
                           <p lang="ru-RU" style=" "><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Получатель:
                            ООО МКК «Забирай»</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">Назначение
                            платежа: оплата
                            на оказание
                            информационно-консультационных
                            услуг по подбору
                            финансовых
                            продуктов. ФИО
                            Заемщика.</font></font>
                           </p>
                           <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">2)
                            путем перевода
                            денежных средств
                            платежными
                            картами VISA, MasterCard,
                            МИР в Личном
                            кабинете на
                            Сайте Общества.</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify" style="  ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">3.7.
                            Обязанность
                            Клиента по
                            оплате считается
                            исполненной
                            с момента зачисления
                            полной суммы
                            денежных средств
                            на расчетный
                            счет Исполнителя.</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>4.
                            Условия о
                            конфиденциальности.</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            </font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.1.
                            Каждая из сторон
                            согласилась
                            считать весь
                            объем информации,
                            переданной
                            или передаваемой
                            сторонами друг
                            другу при заключении
                            настоящего
                            Договора и в
                            ходе исполнения
                            обязательств,
                            возникающих
                            из настоящего
                            Договора,
                            конфиденциальной
                            информацией
                            (а в пределах,
                            допускаемых
                            действующим
                            законодательством,
                            - коммерческой
                            тайной другой
                            стороны). </font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.2.
                            Представляемая
                            Сторонами друг
                            другу коммерческая
                            и иная информация
                            (в том числе
                            персональные
                            данные Клиента),
                            прямо или косвенно
                            связанная с
                            предметом
                            настоящего
                            Договора, является
                            Конфиденциальной
                            информацией.
                            </font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.3.
                            Принимающей
                            стороне строго
                            запрещается
                            без письменного
                            разрешения
                            Раскрывающей
                            стороны, разглашать
                            или иным образом
                            раскрывать
                            Конфиденциальную
                            информацию
                            третьим лицам.
                            </font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.4.
                            Запрет на разглашение
                            Конфиденциальной
                            информации
                            не распространяется
                            на случаи
                            непреднамеренного
                            и/или вынужденного
                            разглашения
                            Конфиденциальной
                            информации
                            по причине
                            действия
                            обстоятельств
                            непреодолимой
                            силы или в силу
                            применения
                            положений
                            законодательства
                            Российской
                            Федерации,
                            вступивших
                            в силу решений
                            суда соответствующей
                            юрисдикции
                            либо законных
                            требований
                            компетентных
                            органов государственной
                            власти и управления.</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">4.5.
                            В случаях,
                            предусмотренных
                            настоящий
                            Договором,
                            Принимающая
                            сторона обязана
                            предварительно
                            до раскрытия
                            Конфиденциальной
                            информации
                            уведомить
                            Раскрывающую
                            сторону о наступлении
                            соответствующего
                            события, с которым
                            связана необходимость
                            раскрытия
                            Конфиденциальной
                            информации,
                            а также об условиях
                            и сроках раскрытия
                            Конфиденциальной
                            информации,
                            а при невозможности
                            направления
                            предварительного
                            уведомления
                            - незамедлительно
                            после раскрытия.
                            Принимающая
                            сторона обязуется
                            обеспечить
                            раскрытие
                            только той
                            части Конфиденциальной
                            информации,
                            раскрытие
                            которой необходимо
                            в силу применения
                            положений
                            законодательства
                            Российской
                            Федерации,
                            вступивших
                            в законную силу
                            решений судов
                            соответствующей
                            юрисдикции
                            либо законных
                            требований
                            компетентных
                            органов государственной
                            власти и управления.</font></font>
                           </p>
                           <p lang="ru-RU" align="justify" style=" ">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>5.
                            Срок действия
                            Договора</b></font></font><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">.</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">5.1.
                            Настоящий
                            Договор считается
                            заключенным
                            с даты оплаты
                            Услуги и действует
                            до даты окончания
                            оказания услуги.</font></font><font color="#000000"><font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">
                            Датой окончания
                            оказания Услуги
                            считается, день
                            следующий за
                            днем оказания
                            услуги (п. 2.3), а в
                            части денежных
                            обязательств
                            - до полного их
                            исполнения.</font></font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">5.2.
                            Договор в любое
                            время может
                            быть расторгнут
                            по соглашению
                            Сторон.<br/>
                            5.3. В течение
                            14 календарных
                            дней с момента
                            заключения
                            Договора Клиент
                            вправе расторгнуть
                            Договор и потребовать
                            возврат оплаченных
                            денежных средств,
                            за минусом
                            фактически
                            понесенных
                            расходов Исполнителя
                            за Услугу, оказанную
                            до даты заявления
                            об отказе от
                            Договора.<br/>
                            5.4. В
                            случае досрочного
                            прекращения
                            Договора, Клиенту
                            подлежит возврату
                            внесенная им
                            по Договору
                            сумма за вычетом
                            стоимости
                            услуг, оказанных
                            с даты начала
                            оказания услуг
                            до даты получения
                            уведомления
                            об отказе от
                            Договора (далее
                            – Сумма возврата).</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">5.5.
                            Исполнитель
                            возвращает
                            Клиенту сумму
                            возврата в
                            течение 10 рабочих
                            дней с даты
                            получения
                            уведомления
                            Клиента об
                            отказе от Договора.</font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt"><b>6.
                            Заключительные
                            положения. </b></font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.1.
                            Стороны обязуются
                            не позднее, чем
                            через 3 (Три)
                            календарных
                            дня после изменения
                            своих данных,
                            необходимых
                            для исполнения
                            настоящего
                            Договора, таких
                            как: адреса,
                            банковские
                            реквизиты,
                            телефоны, адрес
                            электронной
                            почты, извещать
                            друг друга обо
                            всех таких
                            изменениях.
                            </font></font>
                           </p>
                           <p lang="ru-RU" className="western" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.2.
                            Обмен информацией,
                            как и любая
                            другая переписка
                            может осуществляться
                            сторонами
                            посредством
                            использования
                            средств электронной
                            связи (e-mail, смс-сообщений,
                            сообщений через
                            личный кабинет
                            Клиента на
                            Сайте), почтовых
                            отправлений,
                            путем передачи
                            нарочно. </font></font>
                           </p>
                           <p lang="ru-RU" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.3.
                            Клиент гарантирует
                            работоспособность
                            указанных им
                            адреса электронной
                            почты и номера
                            мобильного
                            телефона и
                            самостоятельно
                            несет риски,
                            связанные с
                            неполучением,
                            несвоевременным
                            получением
                            или отправкой
                            сообщений,
                            ознакомлением
                            с их содержанием
                            в связи с любыми
                            техническими
                            неисправностями
                            в работе электронной
                            почты, мобильного
                            телефона, отсутствием
                            доступа по
                            любым причинам,
                            включая отсутствие
                            доступа в Интернет,
                            результатами
                            специальной
                            сортировки
                            сообщений, в
                            частности,
                            попаданием
                            сообщений в
                            папку «Спам»
                            либо аналогичную.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.4.
                            Все споры по
                            Договору должны
                            разрешаться
                            с соблюдением
                            предварительного
                            претензионного
                            порядка. Претензия
                            в письменном
                            виде, подписанная
                            уполномоченным
                            на то лицом,
                            должна быть
                            направлена
                            на электронный
                            адрес почты
                            Сторон, указанных
                            в Договоре.
                            Сторона, получившая
                            претензию,
                            должна дать
                            письменный
                            ответ по существу
                            заявленных
                            в претензии
                            требований
                            не позднее 12
                            рабочих дней
                            с даты получения
                            претензии.</font></font>
                          </p>
                          <p lang="ru-RU" align="justify">
                            <font face="Times New Roman, serif"><font size="2" style="font-size: 10pt">6.5.
                            Текст настоящей
                            Оферты может
                            быть в любое
                            время изменён
                            Исполнителем
                            в одностороннем
                            порядке, при
                            этом актуальной
                            считается
                            версия, размещенная
                            на Сайте Исполнителя.
                            Условия Договора
                            остаются неизменными
                            для лица, акцептовавшего
                            Договор, до
                            окончания срока
                            его действия.</font></font>
                          </p>
                        </div>
                      </div>
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