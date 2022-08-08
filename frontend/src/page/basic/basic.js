import React from 'react'
import './basic.scss'

const Basic = () => {
  return (
  <>
    <body>
      <a href="#main-content" className="visually-hidden focusable">
      Перейти к основному содержанию
      </a>
      <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
        <div className="site-header">
          <div className="wrapper container site-header__wrapper">
            <nav className="nav" style={{ display: 'flex' }}>
              <button id="config-btn" className="nav__toggle navbar-toggle" data-toggle="collapse" data-target="#menu" type="button">
              <i className=""><img src="/themes/zabiray/img/burger.png" alt=""/></i>
              </button>
              <div id="menu" className="faqs-container collapse navbar-collapse">
                <div className="faq" style={{ borderTop: '1px solid #9fa4a8' }}>
                  <a href="/o-nas" className="faq-title">
                  О нас
                  </a>
                  <a href="/novosti" className="faq-text">
                  Новости
                  </a>
                  <a href="/dokumenty" className="faq-text">
                  Документы
                  </a>
                  <a href="/kontakty" className="faq-text">
                  Контакты
                  </a>
                  <button className="faq-toggle">
                  <i className="fa fa-chevron-down"></i>
                  <i className="fa fa-chevron-up"></i>
                  </button>
                </div>
                <div className="faq">
                  <a href="/kak-oformit-zajm" className="faq-title">
                  Как оформить займ
                  </a>
                  <a href="/legal-assistance" className="faq-text">
                  Дополнительные услуги
                  </a>
                  <a href="/kak-otsrochit-vyplatu" className="faq-text">
                  Как отсрочить выплату
                  </a>
                  <button className="faq-toggle">
                  <i className="fa fa-chevron-down"></i>
                  <i className="fa fa-chevron-up"></i>
                  </button>
                </div>
                <div className="faq">
                  <a href="/kak-poluchit-dengi" className="faq-title">
                  Как получить деньги
                  </a>
                  <a href="/na-bankovskuyu-kartu" className="faq-text">
                  На банковскую карту
                  </a>
                  <button className="faq-toggle">
                  <i className="fa fa-chevron-down"></i>
                  <i className="fa fa-chevron-up"></i>
                  </button>
                </div>
                <div className="faq">
                  <a href="/kak-pogasit-zaem" className="faq-title">
                  Как погасить
                  </a>
                  <a href="/bankovskaya-karta" className="faq-text">
                  Банковская карта
                  </a>
                  <a href="/bankovskij-perevod" className="faq-text">
                  Банковский перевод
                  </a>
                  <button className="faq-toggle">
                  <i className="fa fa-chevron-down"></i>
                  <i className="fa fa-chevron-up"></i>
                  </button>
                </div>
                <div className="faq">
                  <a href="/faq" className="faq-title">
                  Вопросы/Ответы
                  </a>
                </div>
                <div className="faq">
                  <a href="/vashi-prava-klienta-narusheny" className="faq-title">
                  Пожаловаться
                  </a>
                </div>
              </div>
            </nav>
            <a className="brand" href="/">
              <svg className="logo" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.12 150.06"></svg>
            </a>
            <div className="user_login">
              <a className="button button--icon" href="/login" aria-label="Sign in">
              <img src="/themes/zabiray/img/person.png" alt="person"/>
              <span>&Lcy;&icy;&chcy;&ncy;&ycy;&jcy; &kcy;&acy;&bcy;&icy;&ncy;&iecy;&tcy;</span>
              </a>
            </div>
            <div className="user_info hidden">
              <div className="user_settings">
                {/* <button type="button" className="btn_person_settings" onClick="window.top.location.href='/cabinet/profile'">
                <button type="button" className="btn_person_settings" onClick="window.top.location.href='/cabinet/profile'"> */}
                <img src="/themes/zabiray/img/person-header.png" alt="settings"/>
                {/* </button> */}
              </div>
              <div className="user_logout">
                <a className="button button--icon button--icon--person" href="/cabinet/logout" aria-label="Sign out">
                <img src="/themes/zabiray/img/person.png" alt="person"/>
                <span>Выйти</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="calculator">
            <div className="calculator-bg-image">
              <div className="calculator-header wrapper container flex --just-end zabiray">
                <div className="calculator-text">
                  <div className="calculator-title">
                    <div className="calculator-title__content">
                      <div className="calculator-title__zabiray"></div>
                      <div className="calculator-title__text">
                        <h1>ЭКСПРЕСС-ЗАЙМ</h1>
                        <h2>100%</h2>
                        <p>Быстро. Надёжно. Онлайн</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div id="block-maincalculator">
                      <div className="main_calc-box">
                        <form name="index_master" method="post">
                          <input type="hidden" name="curdate" defaultValue="1659610287"/>
                          <input type="hidden" name="summ" defaultValue="1500.00"/>
                          <input type="hidden" name="limit" defaultValue="5"/>
                          <input type="hidden" name="over" defaultValue=""/>
                          <input type="hidden" name="total" defaultValue=""/>
                          <input type="hidden" name="day" defaultValue=""/>
                          <input type="hidden" id="sum-min" defaultValue="1500"/>
                          <input type="hidden" id="sum-max" defaultValue="15000"/>
                          <input type="hidden" id="limit-min" defaultValue="5"/>
                          <input type="hidden" id="limit-max" defaultValue="30"/>
                          <input type="hidden" id="procent" defaultValue="1.00"/>
                          <input type="hidden" id="step_amount" defaultValue="500"/>
                          <input type="hidden" id="step_term" defaultValue="1"/>
                          <input type="hidden" name="product" defaultValue="1"/>
                          <input type="hidden" id="count_prod" defaultValue="1"/>
                          <input type="hidden" id="annuity" name="is_annuity" defaultValue=""/>
                          <input type="hidden" id="currency_lang" defaultValue="&amp;#8381;"/>
                          <input type="hidden" id="sum-max_label" defaultValue="60000"/>
                          <input type="hidden" id="days_to_reduce" defaultValue="0"/>
                          <input type="hidden" id="is_grace_periods" defaultValue="0"/>
                          <input type="hidden" id="delete_duplicate" defaultValue="1"/>
                          <input type="hidden"
                            id="p1"
                            attr-maxa="15000"
                            attr-mina="1500"
                            attr-mint="5"
                            attr-maxt="30"
                            attr-p="1.00"
                            attr-sa="500"
                            attr-st="1"
                            attr-id="1"
                            attr-labelt="дней"
                            attr-isa="0"
                            attr-timevalindex="1"
                            attr-position="0"
                            />
                          <div className="params-box">
                            <div className="param">
                              <h4>Сумма</h4>
                              <div className="calc-value-box">
                                <div className="calc-value-info calc-value-info-amount">
                                  <span className="calc-summ">
                                  1 500&nbsp;<small>&#8381;</small>
                                  </span>
                                </div>
                                <input type="text" defaultValue="1 500" className="calc-summ num"/>
                              </div>
                              <div className="slider-range-box">
                                <div className="uislider summ"></div>
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
                                  <span className="calc-limit">
                                  5&nbsp;<small>дней</small>
                                  </span>
                                </div>
                                <input type="text" defaultValue="5" className="calc-limit num"/>
                              </div>
                              <div className="slider-range-box">
                                <div className="uislider limit"></div>
                              </div>
                              <p className="range_label flex justify-content-between">
                                <span className="limit_min ">5 дней</span>
                                <span className="limit_max ">30 дней</span>
                              </p>
                            </div>
                          </div>
                          <div className="calc-btn">
                            <button type="button" className="btn btn-primary" name="btn_calc" id="calc_butt" defaultValue="1">Забираю</button>
                          </div>
                          <div className="calc-desc">
                            <div className="cd_info">
                              <p>Вы берете</p>
                              <p><span className="calc-summ">1 500 &#8381;</span></p>
                            </div>
                            <div className="cd_info">
                              <p>До (включительно)</p>
                              <p><span className="calc-day-short"></span></p>
                            </div>
                            <div className="cd_info">
                              <p className="payment_period">Возвращаете</p>
                              <p>
                                <span className="calc-total">
                                1 575
                                &#8381;
                                </span>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carts wrapper">
            <div className="container">
              <div className="carts_wrapper flex --just-center">
                <div className="__cart">
                  <img src="/themes/zabiray/img/visa.png" alt=""/>
                </div>
                <div className="__cart">
                  <img src="/themes/zabiray/img/mastercard.png" alt=""/>
                </div>
                <div className="__cart">
                  <img src="/themes/zabiray/img/mir.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="three-steps">
            <div className="container">
              <div className="title">
                <h1>КАК ПОЛУЧИТЬ ДЕНЬГИ?</h1>
              </div>
              <div className="blocks wrapper flex --just-center">
                <div className="container-for-img-text">
                  <div className="block">
                    <img src="/themes/zabiray/img/1.png" alt=""/>
                    <div className="text">
                      <img src="/themes/zabiray/img/ticket.png" alt=""/>
                      <p>ЗАПОЛНИТЕ ЗАЯВКУ</p>
                      <span>Процесс максимально упрощен</span>
                    </div>
                    {/* <button className="common-btn set__ticket" onClick="window.top.location='/form/reg.php'">
                    ЗАПОЛНИТЬ АНКЕТУ
                    </button> */}
                  </div>
                </div>
                <div className="container-for-img-text">
                  <div className="block">
                    <img src="/themes/zabiray/img/2.png" alt=""/>
                    <div className="text">
                      <img src="/themes/zabiray/img/watch.png" alt=""/>
                      <p>ОЖИДАЙТЕ РЕШЕНИЯ</p>
                      <span>Мы дадим ответ за 1 минуту</span>
                    </div>
                  </div>
                </div>
                <div className="container-for-img-text">
                  <div className="block">
                    <img src="/themes/zabiray/img/3.png" alt=""/>
                    <div className="text">
                      <img src="/themes/zabiray/img/mobile.png" alt=""/>
                      <p>ПОЛУЧИТЕ ДЕНЬГИ</p>
                      <span>Мы переведем деньги на вашу банковскую карту</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="bg__img__mid">
              <div className="container">
                <div className="info__wrapper wrapper">
                  <div className="info__title">
                    <p>Забирай - надежный помощник в финансовых трудностях.</p>
                  </div>
                  <div className="info__text">
                    <p>Это быстрый удобный онлайн способ решить текущие финансовые вопросы.Нужны деньги срочно? Не
                      вопрос. Забирай поможет, поддержит в нужный момент.
                    </p>
                  </div>
                  <div className="info__title__2">
                    <p>С Забирай Вы можете:</p>
                  </div>
                  <div className="info__imgs">
                    <div className="info__img">
                      <img src="/themes/zabiray/img/cap.png" alt=""/>
                      <p>оплатить обучение</p>
                    </div>
                    <div className="info__img">
                      <img src="/themes/zabiray/img/tv.png" alt=""/>
                      <p>купить желаемое</p>
                    </div>
                    <div className="info__img">
                      <img src="/themes/zabiray/img/medic.png" alt=""/>
                      <p>получить платную медицинскую услугу</p>
                    </div>
                    <div className="info__img">
                      <img src="/themes/zabiray/img/coin.png" alt=""/>
                      <p>одолжить денег до зарплаты</p>
                    </div>
                    <div className="info__img">
                      <img src="/themes/zabiray/img/trevel.png" alt=""/>
                      <p>решить любую другую необходимость</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tariffs">
            <div className="container">
              <div className="title">
                <h1>НАШИ ТАРИФЫ</h1>
              </div>
              <div className="tariff_wrapper wrapper flex --just-space" style={{ justifyContent: 'center' }}>
                <div className="__tariff">
                  <div className="__tariff__wrapper__img__text flex">
                    <div className="tariff__img">
                      <img src="/themes/zabiray/img/tariff-icon.png" alt=""/>
                    </div>
                    <div className="tariff__title">
                      <h2>МИНУТОЧКА</h2>
                    </div>
                  </div>
                  <div className="tariff__text">
                    <p>Ставка 1% в день</p>
                    <span>Возврат займа и процентов в конце срока</span>
                  </div>
                  <div className="tariff__inner">
                    <div className="tariff__inner__left">
                      <div className="tariff__icon">
                        <img src="/themes/zabiray/img/tariif-coin.png" alt=""/>
                      </div>
                      <div className="tariff__icon__text">
                        <p>Микрозайм</p>
                        <span>от 1 500 до 15 000</span>
                      </div>
                    </div>
                    <div className="tariff__inner__right">
                      <div className="tariff__icon">
                        <img src="/themes/zabiray/img/tariff-24.png" alt=""/>
                      </div>
                      <div className="tariff__icon__text">
                        <p>На срок</p>
                        <span>От 5 до 30 дней</span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="common-btn tariff__button" onClick="window.top.location.href='/form/reg.php'">
                  ЗАБИРАЙ
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="news wrapper">
            <div className="container">
              <div className="news__title">
                <h1>НОВОСТИ</h1>
              </div>
              <div>
                <div className="views-element-container" id="block-views-block-news-front-block-1">
                  <div>
                    <div className="js-view-dom-id-9a4faaba6b9d4b1b4b569b55a34ce1b0e7d21e637606956e1ed00f3987737f65">
                      <div className="grid">
                        <div className="views-field views-field-title">
                          <span className="field-content">
                            <article className="grid-item">
                              <div className="image">
                                <img src="/sites/default/files/2022-02/n200.jpg" alt="Каждому третьему россиянину не дадут займ"/>
                              </div>
                              <div className="info">
                                <p className="info-date">22.07.2020</p>
                                <a href="/node/72">Каждому третьему россиянину не дадут займ</a>
                                <div className="info-text">
                                  <p>Почти две трети россиян имеют низкие шансы на одобрение кредита в 2022 году. Согласно исследованиям Национального бюро кредитных историй, 30% заемщиков получают заем только в 8,1% случаев. К этой категории людей относятся россияне из «красной зоны» по шкале кредитоспособности.</p>
                                </div>
                              </div>
                            </article>
                          </span>
                        </div>
                        <div className="views-field views-field-title">
                          <span className="field-content">
                            <article className="grid-item">
                              <div className="image">
                                <img src="/sites/default/files/2021-12/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82.jpg" alt="Россияне стали чаще занимать в МФО"/>
                              </div>
                              <div className="info">
                                <p className="info-date">22.07.2020</p>
                                <a href="/node/69">Россияне стали чаще занимать в МФО</a>
                                <div className="info-text">
                                  <p>Количество заемщиков МФО растет быстрее, чем в банках. Их число увеличилось на миллион, по сравнению с прошлым годом. Такие данные приводит Центробанк в свежем аналитическом отчете по итогам первого полугодия 2021 года. </p>
                                </div>
                              </div>
                            </article>
                          </span>
                        </div>
                        <div className="views-field views-field-title">
                          <span className="field-content">
                            <article className="grid-item">
                              <div className="image">
                                <img src="/sites/default/files/2021-10/4.png" alt="Центробанк рекомендовал не портить кредитные истории граждан из-за коронавируса"/>
                              </div>
                              <div className="info">
                                <p className="info-date">22.07.2020</p>
                                <a href="/node/17">Центробанк рекомендовал не портить кредитные истории граждан из-за коронавируса</a>
                                <div className="info-text">
                                  <p>Россияне, пожелавшие уйти на кредитные каникулы из-за распространения вируса, не должны превратиться в неблагонадежных заемщиков. Так считают представители Центробанка Российской Федерации.</p>
                                </div>
                              </div>
                            </article>
                          </span>
                        </div>
                        <div className="views-field views-field-title">
                          <span className="field-content">
                            <article className="grid-item">
                              <div className="image">
                                <img src="/sites/default/files/2021-10/3.png" alt="Погашение займа с 01 по 10 мая 2021 года"/>
                              </div>
                              <div className="info">
                                <p className="info-date">22.07.2020</p>
                                <a href="/node/16">Погашение займа с 01 по 10 мая 2021 года</a>
                                <div className="info-text">
                                  <p>Обращаем ваше внимание! В период майских праздников (01.05.21-10.05.2021) банковские платежи будут проведены и обработаны 11.05.21. В среднем нашим клиентам необходимо всего 4 минуты для того, чтобы заполнить анкету и подать заявку на получение займа.</p>
                                </div>
                              </div>
                            </article>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button className="common-btn news__button" onClick="window.top.location='/novosti'">
              ВСЕ НОВОСТИ
              </button> */}
            </div>
          </div>
          <div className="promo">
            <div className="bg-bottom-img">
              <div className="container">
                <div className="promo__body wrapper">
                  <div className="promo__row flex --just-end">
                    <div className="promo__item">
                      <div className="promo__text">
                        <h1>Получи займ<br/>и сделай себе подарок</h1>
                      </div>
                      <div className="promo__button__wrap">
                        {/* <button className="promo__button common-btn" onClick="window.top.location='/form/reg.php'">Заполнить анкету</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="apply-loan wrapper">
            <div className="">
              <div className="apply-loan-title">
                <h1>Оформи займ,<br/>позволь себе большее</h1>
                <p>Как оформить займ?</p>
              </div>
              <div className="apply-loan__body">
                <div className="apply-loan__row flex --just-center">
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__img">
                        <img src="/themes/zabiray/img/loan1.png" alt=""/>
                      </div>
                      <div className="apply-loan__text">
                        <a href="/form/reg.php">Заполнить заявку</a>
                        <p>в личном кабинете</p>
                        <span>(от вас нужен паспорт
                        и действующая банковская карта)</span>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__arrow">
                        <p>→</p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__img">
                        <img src="/themes/zabiray/img/loan2.png" alt=""/>
                      </div>
                      <div className="apply-loan__text">
                        <p>Подтвердить телефон кодом
                          из SMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__arrow">
                        <p>→</p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__img">
                        <img src="/themes/zabiray/img/loan3.png" alt=""/>
                      </div>
                      <div className="apply-loan__text">
                        <p>Выбрать сумму
                          и срок
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__arrow">
                        <p>→</p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__img">
                        <img src="/themes/zabiray/img/loan4.png" alt=""/>
                      </div>
                      <div className="apply-loan__text">
                        <p>Подтвердить Вашу банковскую карту</p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__arrow">
                        <p>→</p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__img">
                        <img src="/themes/zabiray/img/loan5.png" alt=""/>
                      </div>
                      <div className="apply-loan__text">
                        <p>Получить одобрение
                          в личном<br/>кабинете / по SMS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__arrow">
                        <p>→</p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-loan__column">
                    <div className="apply-loan__item">
                      <div className="apply-loan__img">
                        <img src="/themes/zabiray/img/loan6.png" alt=""/>
                      </div>
                      <div className="apply-loan__text">
                        <p>Проверить свой баланс на карте</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="apply-loan__btm__title">
                  <p>Информация о текущем займе и уникальных предложениях будет доступна в личном кабинете.</p>
                </div>
                <div className="apply-loan_cb_text container">
                  <p>Полное наименование: Общество с ограниченной ответственностью Микрокредитная компания  «Забирай»;</p>
                  <p>Сокращенное наименование: ООО МКК «Забирай»;</p>
                  <p>Полное фирменное наименование Общества на английском языке: Microcredit company «Zabiray» Limited Liability Company;</p>
                  <p>Сокращённое фирменное наименование Общества на английском языке: MC «Zabiray» LLC</p>
                  <p>ИНН 6685183681, ОГРН 1216600009482.</p>
                  <p>Ссылка на официальный сайт Банка России в информационно- телекоммуникационной сети "Интернет": <a href="http://www.cbr.ru" target="_blank" rel="noreferrer">http://www.cbr.ru</a>.</p>
                  <p>Ссылка на страницу сайта Банка России, содержащую государственный реестр микрофинансовых организаций: <a href="https://www.cbr.ru/microfinance/registry" target="_blank" rel="noreferrer">https://www.cbr.ru/microfinance/registry</a>.</p>
                  <p>Регистрационный номер записи в государственном реестре микрофинансовых организаций: 2103465009676.</p>
                  <p>Дата внесения сведений о юридическом лице в государственный реестр микрофинансовых организаций: 13.05.2021 года.</p>
                  <p>ООО МКК «Забирай» является членом саморегулируемой организации в сфере финансового рынка СРО Союз "Микрофинансовый Альянс "Институты развития малого и среднего бизнеса" с 29.11.2021 года.</p>
                  <p>Адрес места нахождения СРО Союз "Микрофинансовый Альянс "Институты развития малого и среднего бизнеса": 127055, г. Москва, ул. Сущёвская, д. 21, офис 513.;</p>
                  <p>Адреса официального сайта в информационно-телекоммуникационной сети "Интернет" СРО Союз "Микрофинансовый Альянс "Институты развития малого и среднего бизнеса": <a href="https://alliance-mfo.ru" target="_blank" rel="noreferrer">www.alliance-mfo.ru</a>.</p>
                  <p>Ссылка на страницу интернет-приемной Банка России на сайте Банка России: <a href="https://www.cbr.ru/reception" target="_blank" rel="noreferrer">https://www.cbr.ru/reception</a>;</p>
                  <p>Информация о праве потребителей финансовых услуг направить обращение финансовому уполномоченному, место нахождения, почтовый адрес и номер телефона службы обеспечения деятельности финансового уполномоченного, адрес официального сайта финансового уполномоченного в информационно-телекоммуникационной сети "Интернет" указана <a href="/sites/default/files/docs/informaciya-o-prave-potrebitelej-finansovyh-uslug-na-obrashchenie-k.pdf" target="_blank">тут</a>.</p>
                  <p>Дата внесения сведений о юридическом лице в государственный реестр микрофинансовых организаций: 13.05.2021 года <a href="https://www.cbr.ru/finorg/foinfo/?ogrn=1216600009482" target="_blank" rel="noreferrer">https://www.cbr.ru/finorg/foinfo/?ogrn=1216600009482</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex">
          <div className="footer-wrapper wrapper container flex --just-space">
            <div>
              <a href="/">
                <svg className="logo" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.12 150.06">
                  {/* <defs style>
                    <style>.b{fill:#ff6700;}.c{fill:#2b2b2b;}</style>
                  </defs> */}
                  <g>
                    <rect className="b" x="13.42" y="103.51" width="35.7" height="11.06"/>
                    <rect className="b" x="13.42" y="65.67" width="64.15" height="11.06"/>
                    <rect className="b" x="13.42" y="84.59" width="49.92" height="11.06"/>
                    <rect className="b" x="13.42" y="27.82" width="92.6" height="11.06"/>
                    <rect className="b" x="13.42" y="46.74" width="78.37" height="11.06"/>
                  </g>
                  <g>
                    <rect className="c" x="423" y="46.67" width="17.92" height="5.48"/>
                    <path className="c" d="M120.31,61.62c5.09-3.45,12.96-4.66,19.06-4.66,3.77,0,8.45,.6,11.7,2.5,2.24,1.3,4.99,3.8,4.99,7.94,0,4.75-4.07,7.08-6.11,8.03,2.14,.43,4.27,1.38,5.8,2.5,1.93,1.47,3.36,3.71,3.36,6.91,0,4.4-2.75,7.17-5.09,8.63-3.77,2.42-9.77,3.28-14.45,3.28-5.29,0-14.21-1.04-20.12-6.22l6.11-6.39c3.56,2.85,9.63,3.97,12.99,3.97,6.31,0,7.73-2.5,7.73-4.23,0-1.12-.61-2.33-2.34-3.11-1.42-.6-3.26-.69-5.29-.69h-5.19v-7.6h4.99c1.63,0,3.66-.17,4.89-.86,1.32-.78,1.53-1.81,1.53-2.59,0-1.99-1.63-3.8-6.72-3.8-3.97,0-9.5,1.04-12.14,2.94l-5.7-6.56Z"/>
                    <path className="c" d="M194.57,58.16h10.99v37.38h-10.99v-4.83c-3.96,5.44-9.19,6.04-11.98,6.04-11.98,0-19.91-8.98-19.91-19.94s7.84-19.86,19.37-19.86c2.97,0,8.83,.52,12.52,6.04v-4.83Zm-20.54,18.65c0,5.96,4.51,10.62,10.81,10.62s10.81-4.66,10.81-10.62-4.51-10.53-10.81-10.53-10.81,4.58-10.81,10.53Z"/>
                    <path className="c" d="M236.58,56.95c-4.87,0-10.72,1.47-13.7,5.09h0c.27-3.28,1.49-5.28,3.77-7.06,4.9-3.84,7.95-1.99,15.6-4.24,4.15-1.22,10.37-3.89,12.45-11.87h-10.57c-1.25,1.68-3.6,2.71-8.09,3.58-5.23,1.04-13.44,1.82-18.49,8.47-2.88,3.8-5.03,7.66-5.03,22,0,5.35,.54,13.3,7.03,18.91,5.05,4.4,11.35,4.92,15.59,4.92,6.22,0,11.17-1.47,15.5-5.27,3.15-2.76,6.58-7.51,6.58-14.76,0-7.94-3.87-12.52-6.04-14.51-3.78-3.54-8.74-5.27-14.6-5.27Zm-1.71,30.48c-6.49,0-10.99-4.66-10.99-10.53s4.42-10.62,10.99-10.62,10.99,4.66,10.99,10.62-4.51,10.53-10.99,10.53Z"/>
                    <path className="c" d="M275.56,58.16v23.05l18.02-23.05h10.99v37.38h-10.99v-23.05l-18.02,23.05h-10.99V58.16h10.99Z"/>
                    <path className="c" d="M336.5,56.96c-3.33,0-8.83,.86-12.7,6.04v-4.83h-10.99v49h10.99v-16.45c4.23,5.61,9.91,6.04,12.43,6.04,11.53,0,19.46-8.55,19.46-19.94s-7.66-19.86-19.19-19.86Zm-2.97,30.48c-6.31,0-10.81-4.66-10.81-10.62s4.5-10.53,10.81-10.53,10.81,4.58,10.81,10.53-4.5,10.62-10.81,10.62Z"/>
                    <path className="c" d="M392.96,58.16h10.99v37.38h-10.99v-4.83c-3.96,5.44-9.19,6.04-11.98,6.04-11.98,0-19.91-8.98-19.91-19.94s7.84-19.86,19.37-19.86c2.97,0,8.83,.52,12.52,6.04v-4.83Zm-20.54,18.65c0,5.96,4.5,10.62,10.81,10.62s10.81-4.66,10.81-10.62-4.5-10.53-10.81-10.53-10.81,4.58-10.81,10.53Z"/>
                    <polygon className="c" points="422.95 58.16 422.95 81.21 440.97 58.16 451.96 58.16 451.96 95.55 440.97 95.55 440.97 72.49 422.95 95.55 411.96 95.55 411.96 58.16 422.95 58.16"/>
                  </g>
                </svg>
              </a>
              <ul style={{ color: '#222', padding: '33px 0 0 0', fontSize: '12px' }}>
                <li>© Забирай.РФ, 2021</li>
                <li>
                  <p>
                    <a target="_blank" style={{ padding: '16px 0 0 0', color: '#0056b3', display: 'block' }} href="https://bankiros.ru/zaymy" rel="noreferrer">
                      Официальный партнер<br/>по подбору займов
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer-second">
              <div>
                <ul>
                  <li><a className="bold" href="/o-nas">О нас</a></li>
                  <li><a href="/novosti">Новости</a></li>
                  <li><a href="/dokumenty">Документы</a></li>
                  <li><a href="/kontakty">Контакты</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><a className="bold" href="/kak-oformit-zajm">Как оформить займ</a></li>
                  <li><a href="/legal-assistance">Дополнительные услуги</a></li>
                  <li><a href="/kak-otsrochit-vyplatu">Как отсрочить выплату</a></li>
                  <li><a className="bold" href="/kak-poluchit-dengi">Как получить деньги</a></li>
                  <li><a href="/na-bankovskuyu-kartu">На карту</a></li>
                  <li><a className="bold" href="/uchreditelnye-dokumenty-raskrytie-informacii">Раскрытие информации</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><a className="bold" href="/kak-pogasit-zaem">Как погасить</a></li>
                  <li><a href="/bankovskaya-karta">Банковская карта</a></li>
                  <li><a href="/bankovskij-perevod">Банковский перевод</a></li>
                  <li><a className="bold" href="/faq">Вопросы и ответы</a></li>
                  <li><a className="bold" href="/vashi-prava-klienta-narusheny">Пожаловаться</a></li>
                </ul>
              </div>
            </div>
            <div>
              <ul>
                <li className="footer-phone flex">
                  <img src="/themes/zabiray/img/icon-email.png" alt="" style={{ width: '22px' }} />
                  <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="dcafa9acacb3aea89ca6bdbeb5aebda5f2aea9">[email&#160;protected]</a></p>
                </li>
                <li className="footer-watch flex">
                  <img src="/themes/zabiray/img/footer-watch.png" alt=""/>
                  <div className="footer-watch-text">
                    <p><span>Пн-Пт</span> 8:00 - 18:00(МСК)</p>
                    <p><span>Сб-Вс</span> выходной</p>
                  </div>
                </li>
                <li className="footer-location flex">
                  <img src="/themes/zabiray/img/footer-location.png" alt=""/>
                  <p>620014, Свердловская область,<br/>г. Екатеринбург, ул. Чернышевского,<br/>строение 7, офис 520</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cookie hidden" id="cookie_notification">
          <p>На сайте ООО МКК «Забирай» используются файлы cookie.<br/>
            Оставаясь на www.zabiray.ru Вы принимаете <a target="_blank" href="/sites/default/files/docs/Пользовательское соглашение.pdf">Пользовательское соглашение</a>.
          </p>
          <button className="button cookie_accept">Подтвердить</button>
        </div>
      </div>
      {/* <!-- Yandex.Metrika counter -->
      <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
        ym(86091839, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
      </script>
      <noscript>
        <div><img src="https://mc.yandex.ru/watch/86091839" style="position:absolute; left:-9999px;" alt="" /></div>
      </noscript>
      <!-- /Yandex.Metrika counter --> */}
      {/* <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"node","currentPathIsAdmin":false,"isFront":true,"currentLanguage":"ru"},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"user":{"uid":0,"permissionsHash":"5fdac3c7eb305efd86bfcbf7ce7060e9146f9cd155dcc13ef163bb827443f5e4"}}</script>
      <script src="/sites/default/files/js/js_qpQ5rOUOlaKgeM-hSkL0cxD6x5l4pGyo675zjT-BmkM.js"></script> */}
    </body>
  </>
  )
}

export { Basic }