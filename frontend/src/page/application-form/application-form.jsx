/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import styled from 'styled-components'
import { IMaskInput } from 'react-imask'

//className = wrapper container site-header__wrapper
import PresonPng from '../../img/basic/person.png'
import BurgerPng from '../../img/basic/burger.png'

// className = btn_person_settings
import PersonHeaderPng from '../../img/basic/person-header.png'

// className = footer-wrapper wrapper container flex --just-space
import IconEmailPng from '../../img/basic/icon-email.png'
import FooterWatchPng from '../../img/basic/footer-watch.png'
import FooterLocationPng from '../../img/basic/footer-location.png'


const ApplicationFormPage = () => {

  const ref = useRef(null);
  const [ phoneNumber, setPhoneNumber ] = useState();
  const {
    register,
    formState:
    { errors, },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" })

  const onSubmit = (data) => {
    console.log(ref)
    reset();
  }

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

  return(
  <>
    <a href="#main-content" className="visually-hidden focusable"> Перейти к основному содержанию</a>
    <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
      <div className="site-header">
        <div className="wrapper container site-header__wrapper">
          <nav className="nav" style={{display: "flex"}}>
            <button id="config-btn" className="nav__toggle navbar-toggle" data-toggle="collapse" data-target="#menu" type="button">
              <i className=""><img src={BurgerPng} alt=""/></i>
            </button>
            <div id="menu" className="faqs-container collapse navbar-collapse">
              <div className="faq" style={{borderTop: "1px solid #9fa4a8"}}>
                <a href="o-nas.html" className="faq-title">О нас</a>
                <a href="novosti.html" className="faq-text">Новости</a>
                <a href="dokumenty.html" className="faq-text">Документы</a>
                <a href="kontakty.html" className="faq-text">Контакты</a>
                <button className="faq-toggle">
                <i className="fa fa-chevron-down"></i>
                <i className="fa fa-chevron-up"></i>
                </button>
              </div>
              <div className="faq">
                <a href="kak-oformit-zajm.html" className="faq-title">Как оформить займ</a>
                <a href="legal-assistance.html" className="faq-text">Дополнительные услуги</a>
                <a href="kak-otsrochit-vyplatu.html" className="faq-text">Как отсрочить выплату</a>
                <button className="faq-toggle">
                <i className="fa fa-chevron-down"></i>
                <i className="fa fa-chevron-up"></i>
                </button>
              </div>
              <div className="faq">
                <a href="kak-poluchit-dengi.html" className="faq-title">Как получить деньги</a>
                <a href="na-bankovskuyu-kartu.html" className="faq-text">На банковскую карту
                </a>
                <button className="faq-toggle">
                <i className="fa fa-chevron-down"></i>
                <i className="fa fa-chevron-up"></i>
                </button>
              </div>
              <div className="faq">
                <a href="kak-pogasit-zaem.html" className="faq-title">Как погасить</a>
                <a href="bankovskaya-karta.html" className="faq-text">Банковская карта</a>
                <a href="bankovskij-perevod.html" className="faq-text">Банковский перевод</a>
                <button className="faq-toggle">
                <i className="fa fa-chevron-down"></i>
                <i className="fa fa-chevron-up"></i>
                </button>
              </div>
              <div className="faq">
                <a href="faq.html" className="faq-title">Вопросы/Ответы</a>
              </div>
              <div className="faq">
                <a href="vashi-prava-klienta-narusheny.html" className="faq-title">Пожаловаться</a>
              </div>
            </div>
          </nav>
          <a className="brand" href="index.htm">
            <svg className="logo" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.12 150.06">
              <defs>
                <style>{`.b{fill:#ff6700;}.c{fill:#2b2b2b;}`}</style>
              </defs>
              <g>
                <rect className="b" x="13.42" y="103.51" width="35.7" height="11.06"></rect>
                <rect className="b" x="13.42" y="65.67" width="64.15" height="11.06"></rect>
                <rect className="b" x="13.42" y="84.59" width="49.92" height="11.06"></rect>
                <rect className="b" x="13.42" y="27.82" width="92.6" height="11.06"></rect>
                <rect className="b" x="13.42" y="46.74" width="78.37" height="11.06"></rect>
              </g>
              <g>
                <rect className="c" x="423" y="46.67" width="17.92" height="5.48"></rect>
                <path className="c" d="M120.31,61.62c5.09-3.45,12.96-4.66,19.06-4.66,3.77,0,8.45,.6,11.7,2.5,2.24,1.3,4.99,3.8,4.99,7.94,0,4.75-4.07,7.08-6.11,8.03,2.14,.43,4.27,1.38,5.8,2.5,1.93,1.47,3.36,3.71,3.36,6.91,0,4.4-2.75,7.17-5.09,8.63-3.77,2.42-9.77,3.28-14.45,3.28-5.29,0-14.21-1.04-20.12-6.22l6.11-6.39c3.56,2.85,9.63,3.97,12.99,3.97,6.31,0,7.73-2.5,7.73-4.23,0-1.12-.61-2.33-2.34-3.11-1.42-.6-3.26-.69-5.29-.69h-5.19v-7.6h4.99c1.63,0,3.66-.17,4.89-.86,1.32-.78,1.53-1.81,1.53-2.59,0-1.99-1.63-3.8-6.72-3.8-3.97,0-9.5,1.04-12.14,2.94l-5.7-6.56Z"></path>
                <path className="c" d="M194.57,58.16h10.99v37.38h-10.99v-4.83c-3.96,5.44-9.19,6.04-11.98,6.04-11.98,0-19.91-8.98-19.91-19.94s7.84-19.86,19.37-19.86c2.97,0,8.83,.52,12.52,6.04v-4.83Zm-20.54,18.65c0,5.96,4.51,10.62,10.81,10.62s10.81-4.66,10.81-10.62-4.51-10.53-10.81-10.53-10.81,4.58-10.81,10.53Z"></path>
                <path className="c" d="M236.58,56.95c-4.87,0-10.72,1.47-13.7,5.09h0c.27-3.28,1.49-5.28,3.77-7.06,4.9-3.84,7.95-1.99,15.6-4.24,4.15-1.22,10.37-3.89,12.45-11.87h-10.57c-1.25,1.68-3.6,2.71-8.09,3.58-5.23,1.04-13.44,1.82-18.49,8.47-2.88,3.8-5.03,7.66-5.03,22,0,5.35,.54,13.3,7.03,18.91,5.05,4.4,11.35,4.92,15.59,4.92,6.22,0,11.17-1.47,15.5-5.27,3.15-2.76,6.58-7.51,6.58-14.76,0-7.94-3.87-12.52-6.04-14.51-3.78-3.54-8.74-5.27-14.6-5.27Zm-1.71,30.48c-6.49,0-10.99-4.66-10.99-10.53s4.42-10.62,10.99-10.62,10.99,4.66,10.99,10.62-4.51,10.53-10.99,10.53Z"></path>
                <path className="c" d="M275.56,58.16v23.05l18.02-23.05h10.99v37.38h-10.99v-23.05l-18.02,23.05h-10.99V58.16h10.99Z"></path>
                <path className="c" d="M336.5,56.96c-3.33,0-8.83,.86-12.7,6.04v-4.83h-10.99v49h10.99v-16.45c4.23,5.61,9.91,6.04,12.43,6.04,11.53,0,19.46-8.55,19.46-19.94s-7.66-19.86-19.19-19.86Zm-2.97,30.48c-6.31,0-10.81-4.66-10.81-10.62s4.5-10.53,10.81-10.53,10.81,4.58,10.81,10.53-4.5,10.62-10.81,10.62Z"></path>
                <path className="c" d="M392.96,58.16h10.99v37.38h-10.99v-4.83c-3.96,5.44-9.19,6.04-11.98,6.04-11.98,0-19.91-8.98-19.91-19.94s7.84-19.86,19.37-19.86c2.97,0,8.83,.52,12.52,6.04v-4.83Zm-20.54,18.65c0,5.96,4.5,10.62,10.81,10.62s10.81-4.66,10.81-10.62-4.5-10.53-10.81-10.53-10.81,4.58-10.81,10.53Z"></path>
                <polygon className="c" points="422.95 58.16 422.95 81.21 440.97 58.16 451.96 58.16 451.96 95.55 440.97 95.55 440.97 72.49 422.95 95.55 411.96 95.55 411.96 58.16 422.95 58.16"></polygon>
              </g>
            </svg>
          </a>
          <div className="user_login">
            <a className="button button--icon" href="login.html" aria-label="Sign in">
            <img src={PresonPng} alt="person" />
            <span>&Lcy;&icy;&chcy;&ncy;&ycy;&jcy; &kcy;&acy;&bcy;&icy;&ncy;&iecy;&tcy;</span>
            </a>
          </div>
          <div className="user_info hidden">
            <div className="user_settings">
              <button type="button" className="btn_person_settings" onClick="window.top.location.href='/cabinet/profile'">
              <img src={PersonHeaderPng} alt="settings" />
              </button>
            </div>
            <div className="user_logout">
              <a className="button button--icon button--icon--person" href="login.html" aria-label="Sign out">
              <img src={PresonPng} alt="person" />
              <span>Выйти</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="first-shag-main mr-wrapper-main wrapper container">
        <div className="bread">
          <div className="bread__wrapper">
            <div className="bread__body">
              <div className="bread__text">
                <Link to="/">Главная</Link>
                <span>/</span>
                <p>Форма анкеты</p>
              </div>
            </div>
          </div>
        </div>
        <div className="registration__title">
          <h1>Форма анкеты</h1>
        </div>
        <div>
          <div data-drupal-messages-fallback="" className="hidden"></div>
          <span data-big-pipe-placeholder-id="callback=Drupal%5CCore%5CRender%5CElement%5CStatusMessages%3A%3ArenderMessages&amp;args%5B0%5D&amp;token=_HAdUpwWmet0TOTe2PSiJuMntExoshbm1kh2wQzzzAA"></span>
          <div className="main-wrapper-content">
            <div className="left-block">
              <div className="support">
                <div className="support__wrapper">
                  <div className="support__body">
                    <div className="support__title">
                      <h2>Нужна помощь?</h2>
                    </div>
                    <div className="support__text">
                      <p>Вы можете связаться с нами в любое время</p>
                      <a href="cdn-cgi/l/email-protection.html#45363035352a3731053f24272c37243c6b37307a3630272f202631782d202935"><span className="__cf_email__" data-cfemail="8ffcfaffffe0fdfbcff5eeede6fdeef6a1fdfa">[email&#160;protected]</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-block">
              <div className="registration-steps">
                <ul className="reg-steps-list">
                  <li>
                    <a className="active">Контактная информация</a>
                    <span className="reg-step_sp">вероятность одобрения</span>
                  </li>
                  <li>
                    <a>Паспортные данные</a>
                    <span className="reg-step_sp">вероятность одобрения</span>
                  </li>
                  <li>
                    <a>Занятость и доходы</a>
                    <span className="reg-step_sp">вероятность одобрения</span>
                  </li>
                  <li>
                    <a>Прикрепление карты</a>
                    <span className="reg-step_sp">вероятность одобрения</span>
                  </li>
                  <li>
                    <a>Прикрепление фото</a>
                    <span className="reg-step_sp">вероятность одобрения</span>
                  </li>
                  <li>
                    <a>Условия займа</a>
                    <span className="reg-step_sp">вероятность одобрения</span>
                  </li>
                </ul>
              </div>
              <div className="mr_content-box frst_stp" data-step_id="kontaktnaya_informaciya" data-step_index="1">
                <h2>Контактная информация</h2>
                <form className="content-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                  <div className="wrapper-master">
                    <div className="wrapper-inputs frst_stp">
                      <div className="input-box inpBxFF" id="form_last_name">
                        <label className="control-label">Фамилия</label>
                        <input id="last_name" className="input_field rus search_in_session" type="text" data-required="true" data-index_group="" placeholder="" defaultValue="" 
                          {...register('lastName', { 
                            required: true,
                            minLength: {
                              value: 2,
                              message: "*Минимум 3 символа"
                            },
                            maxLength: {
                              value:30,
                              message: "*Не больше 30 символов"
                            }
                          })}
                        />
                      <WarrningError>{errors?.lastName && <p>{errors?.lastName?.message || `*Необходимо заполнить поле "Фамилия"`}</p>}</WarrningError>
                      </div>
                      <div className="input-box inpBxFF" id="form_first_name">
                        <label className="control-label">Имя</label>
                        <input id="first_name" className="input_field rus" type="text" data-required="true" data-index_group="" placeholder="" defaultValue="" 
                          {...register('firstName', {
                            required: true,
                            minLength: {
                              value: 2,
                              message: "*Минимум 3 символа"
                            },
                            maxLength: {
                              value: 30,
                              message: "*Не больше 30 символов"
                            }
                          })}
                        />
                        <WarrningError>{errors?.firstName && <p>{errors?.firstName?.message || `*Необходимо заполнить поле "Имя"`}</p>}</WarrningError>
                      </div>
                      <div className="input-box inpBxFF" id="form_middle_name">
                        <label className="control-label">Отчество</label>
                        <input id="middle_name" className="input_field rus" type="text" data-required="false" data-index_group="" placeholder="" defaultValue="" 
                          {...register('middleName', {
                            required: false,
                            minLength: {
                              value: 2,
                              message: "Минимум 3 символа"
                            },
                            maxLength: {
                              value: 30,
                              message: "Не больше 30 символов"
                            }
                          })}
                        />
                        <WarrningError>{errors?.middleName && <p>{errors?.middleName?.message || `Необходимо заполнить поле "Отчество"`}</p>}</WarrningError>
                      </div>
                      <div className="input-box inpBxFF" id="form_default_mobile_phone">
                        <label className="control-label">Номер телефона</label>
                        <IMaskInput
                          type='text'
                          mask={'+{7}(000)000-00-00'}
                          lazy={false}
                          placeholderChar="_"
                          unmask={true}
                          ref={(x) => { this.inputComponent.maskValue = setPhoneNumber(x) }}
                          onAccept={ (value, mask) => console.log(value) }
                          {...register('phoneNumber',{
                            required: true
                          })}
                        />
                        <WarrningError>{errors?.phoneNumber && <p>{errors?.phoneNumber?.message || `*Необходимо заполнить поле "Номер телефона"`}</p>}</WarrningError>
                      </div>
                      <div className="input-box inpBxFF" id="form_email">
                        <label className="control-label">Email адрес</label>
                        <input id="email" className="input_field search_in_session" pattern=".+@globex\.com" type="email" data-required="true" name="kontaktnaya_informaciya[email]" data-index_group="" placeholder="" defaultValue="" 
                          {...register('email',{
                            required: true,
                            minLength: 5,
                            maxLength: {
                              value: 50,
                              message: "*Почта слишком большая"
                            }
                          })}
                        />
                        <WarrningError>{errors?.email && <p>{errors?.email?.message || `*Неверный формат "Email адреса"`}</p>}</WarrningError>
                      </div>
                      <div className="input-box hide" id="form_sms_code_plugin">
                        <label className="control-label">Код из СМС</label>
                        <input id="sms_code_plugin" className="input_field" type="hidden" data-required="true" name="kontaktnaya_informaciya[sms_code_plugin]" data-index_group="" placeholder="" defaultValue="" />
                        <div id="error_sms_code_plugin" className="help-block hidden">Необходимо заполнить поле &quot;Код из СМС&quot;</div>
                      </div>
                      <div className="input-box hidden" id="form_time_zone">
                        <label className="control-label">Временная зона</label>
                        <select id="time_zone" className="" data-required="false" name="kontaktnaya_informaciya[time_zone]" data-index_group="">
                          <option defaultValue="default">Выберите временную зону</option>
                          <option defaultValue="00:00">00:00</option>
                          <option defaultValue="+01:00">+01:00</option>
                          <option defaultValue="+02:00">+02:00</option>
                          <option defaultValue="+03:00">+03:00</option>
                          <option defaultValue="+04:00">+04:00</option>
                          <option defaultValue="+05:00">+05:00</option>
                          <option defaultValue="+06:00">+06:00</option>
                          <option defaultValue="+07:00">+07:00</option>
                          <option defaultValue="+08:00">+08:00</option>
                          <option defaultValue="+09:00">+09:00</option>
                          <option defaultValue="+10:00">+10:00</option>
                          <option defaultValue="+11:00">+11:00</option>
                          <option defaultValue="+12:00">+12:00</option>
                        </select>
                        <div id="error_time_zone" className="help-block hidden">Необходимо заполнить поле &quot;Временная зона&quot;</div>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="action[validate_customers_action]" defaultValue="1" />
                  <input type="hidden" name="action[send_to_sms_action]" defaultValue="1" />
                  <input type="hidden" name="action[save_customers_in_data_base_action]" defaultValue="1" />
                  <div className="wrapper-checkboxes wrapper-checkboxes__margin-top">
                    <label className="control-label label-checkbox active">
                    <input type="checkbox" name="modlChckbx[bki]" defaultValue="1" data-btnchckbx="btn_send_sms" />
                    Я даю свое <a href="sites/default/files/2022-04/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%B8_%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BD%D0%BE%D0%B3%D0%BE.pdf" target="_blank">согласие на обработку персональных данных, на получение из БКИ кредитных отчетов</a>, <a href="sites/default/files/2022-04/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D1%82%D1%80%D0%B5%D1%82%D1%8C%D0%B5%D0%BC%D1%83_%D0%BB%D0%B8%D1%86%D1%83_docx.pdf" target="_blank">Согласие на передачу персональных данных третьей стороне</a>, а также<br/>я ознакомлен(а) и принимаю <a href="sites/default/files/2022-04/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%BE%D1%82_25_04_2022%20%282%29.pdf" target="_blank">Политику в области обработки персональных данных</a> и <a href="sites/default/files/2021-12/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%90%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%B0%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D1%80%D1%83%D1%87%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B8_1.pdf" target="_blank">Соглашение об использовании Аналога собственноручной подписи</a>, <a href="sites/default/files/2022-04/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE_%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%B9%D0%BC%D0%B0.pdf" target="_blank">заявление о предоставлении потребительского кредита</a>
                    </label>
                  </div>
                  <div className="btn-box">
                    <button type="submit" name="btn_send_sms" className="btn btn-primary btn_submit_modal" data-send-page="master_reg" id="btn_send_sms" defaultValue="kontaktnaya_informaciya"><span>Подтвердить</span></button>
                  </div>
                </form>
                <div className="gosuslugi_box">
                  <a id="authByEsia" className="link_authByEsia">Войти через Госуслуги</a>
                </div>
              </div>
              <div className="modal fade" id="checkSMSCode" tabIndex="-1">
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
                      <p>Введите код из SMS, отправленный на номер <span className="phone_num_info">+7 (999) 777-11-00</span></p>
                      <form method="POST" className="dnt_sbmt_frm" name="check_form">
                        <div className="input-box">
                          <label className="control-label">Код из смс</label>
                          <input type="text" data-required="true" name="modal[sms_code]" maxLength="5" defaultValue="" />
                        </div>
                        <div className="resend_box">
                          <div className="resend_sms" data-send-page="master_reg">Отправить код повторно</div>
                          <p className="resend_sms_title">
                            Получить код повторно <span className="resend_timer">60</span> сек
                          </p>
                        </div>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Изменить номер телефона</button>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" id="confirmSMSCode">Подтвердить</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer flex">
        <div className="footer-wrapper wrapper container flex --just-space">
          <div>
            <a href="index.htm">
              <svg className="logo" id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.12 150.06">
                <defs>
                  <style>{`.b{fill:#ff6700;}.c{fill:#2b2b2b;}`}</style>
                </defs>
                <g>
                  <rect className="b" x="13.42" y="103.51" width="35.7" height="11.06"></rect>
                  <rect className="b" x="13.42" y="65.67" width="64.15" height="11.06"></rect>
                  <rect className="b" x="13.42" y="84.59" width="49.92" height="11.06"></rect>
                  <rect className="b" x="13.42" y="27.82" width="92.6" height="11.06"></rect>
                  <rect className="b" x="13.42" y="46.74" width="78.37" height="11.06"></rect>
                </g>
                <g>
                  <rect className="c" x="423" y="46.67" width="17.92" height="5.48"></rect>
                  <path className="c" d="M120.31,61.62c5.09-3.45,12.96-4.66,19.06-4.66,3.77,0,8.45,.6,11.7,2.5,2.24,1.3,4.99,3.8,4.99,7.94,0,4.75-4.07,7.08-6.11,8.03,2.14,.43,4.27,1.38,5.8,2.5,1.93,1.47,3.36,3.71,3.36,6.91,0,4.4-2.75,7.17-5.09,8.63-3.77,2.42-9.77,3.28-14.45,3.28-5.29,0-14.21-1.04-20.12-6.22l6.11-6.39c3.56,2.85,9.63,3.97,12.99,3.97,6.31,0,7.73-2.5,7.73-4.23,0-1.12-.61-2.33-2.34-3.11-1.42-.6-3.26-.69-5.29-.69h-5.19v-7.6h4.99c1.63,0,3.66-.17,4.89-.86,1.32-.78,1.53-1.81,1.53-2.59,0-1.99-1.63-3.8-6.72-3.8-3.97,0-9.5,1.04-12.14,2.94l-5.7-6.56Z"></path>
                  <path className="c" d="M194.57,58.16h10.99v37.38h-10.99v-4.83c-3.96,5.44-9.19,6.04-11.98,6.04-11.98,0-19.91-8.98-19.91-19.94s7.84-19.86,19.37-19.86c2.97,0,8.83,.52,12.52,6.04v-4.83Zm-20.54,18.65c0,5.96,4.51,10.62,10.81,10.62s10.81-4.66,10.81-10.62-4.51-10.53-10.81-10.53-10.81,4.58-10.81,10.53Z"></path>
                  <path className="c" d="M236.58,56.95c-4.87,0-10.72,1.47-13.7,5.09h0c.27-3.28,1.49-5.28,3.77-7.06,4.9-3.84,7.95-1.99,15.6-4.24,4.15-1.22,10.37-3.89,12.45-11.87h-10.57c-1.25,1.68-3.6,2.71-8.09,3.58-5.23,1.04-13.44,1.82-18.49,8.47-2.88,3.8-5.03,7.66-5.03,22,0,5.35,.54,13.3,7.03,18.91,5.05,4.4,11.35,4.92,15.59,4.92,6.22,0,11.17-1.47,15.5-5.27,3.15-2.76,6.58-7.51,6.58-14.76,0-7.94-3.87-12.52-6.04-14.51-3.78-3.54-8.74-5.27-14.6-5.27Zm-1.71,30.48c-6.49,0-10.99-4.66-10.99-10.53s4.42-10.62,10.99-10.62,10.99,4.66,10.99,10.62-4.51,10.53-10.99,10.53Z"></path>
                  <path className="c" d="M275.56,58.16v23.05l18.02-23.05h10.99v37.38h-10.99v-23.05l-18.02,23.05h-10.99V58.16h10.99Z"></path>
                  <path className="c" d="M336.5,56.96c-3.33,0-8.83,.86-12.7,6.04v-4.83h-10.99v49h10.99v-16.45c4.23,5.61,9.91,6.04,12.43,6.04,11.53,0,19.46-8.55,19.46-19.94s-7.66-19.86-19.19-19.86Zm-2.97,30.48c-6.31,0-10.81-4.66-10.81-10.62s4.5-10.53,10.81-10.53,10.81,4.58,10.81,10.53-4.5,10.62-10.81,10.62Z"></path>
                  <path className="c" d="M392.96,58.16h10.99v37.38h-10.99v-4.83c-3.96,5.44-9.19,6.04-11.98,6.04-11.98,0-19.91-8.98-19.91-19.94s7.84-19.86,19.37-19.86c2.97,0,8.83,.52,12.52,6.04v-4.83Zm-20.54,18.65c0,5.96,4.5,10.62,10.81,10.62s10.81-4.66,10.81-10.62-4.5-10.53-10.81-10.53-10.81,4.58-10.81,10.53Z"></path>
                  <polygon className="c" points="422.95 58.16 422.95 81.21 440.97 58.16 451.96 58.16 451.96 95.55 440.97 95.55 440.97 72.49 422.95 95.55 411.96 95.55 411.96 58.16 422.95 58.16"></polygon>
                </g>
              </svg>
            </a>
            <ul style={{color: "#222", padding: "33px 0 0 0", fontSize: "12px"}}>
              <li>© Забирай.РФ, 2021</li>
              <li>
                <p><a rel="noreferrer" target="_blank" style={{padding: "16px 0 0 0", color: "#0056b3", display: "block"}} href="https://bankiros.ru/zaymy">Официальный партнер<br/>по подбору займов</a>
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-second">
            <div>
              <ul>
                <li><a className="bold" href="o-nas.html">О нас</a></li>
                <li><a href="novosti.html">Новости</a></li>
                <li><a href="dokumenty.html">Документы</a></li>
                <li><a href="kontakty.html">Контакты</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a className="bold" href="kak-oformit-zajm.html">Как оформить займ</a></li>
                <li><a href="legal-assistance.html">Дополнительные услуги</a></li>
                <li><a href="kak-otsrochit-vyplatu.html">Как отсрочить выплату</a></li>
                <li><a className="bold" href="kak-poluchit-dengi.html">Как получить деньги</a></li>
                <li><a href="na-bankovskuyu-kartu.html">На карту</a></li>
                <li><a className="bold" href="uchreditelnye-dokumenty-raskrytie-informacii.html">Раскрытие информации</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a className="bold" href="kak-pogasit-zaem.html">Как погасить</a></li>
                <li><a href="bankovskaya-karta.html">Банковская карта</a></li>
                <li><a href="bankovskij-perevod.html">Банковский перевод</a></li>
                <li><a className="bold" href="faq.html">Вопросы и ответы</a></li>
                <li><a className="bold" href="vashi-prava-klienta-narusheny.html">Пожаловаться</a></li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li className="footer-phone flex">
                <img src={IconEmailPng} alt="" style={{width: "22px"}} />
                <p><a href="cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="b6c5c3c6c6d9c4c2f6ccd7d4dfc4d7cf98c4c3">[email&#160;protected]</a></p>
              </li>
              <li className="footer-watch flex">
                <img src={FooterWatchPng} alt="" />
                <div className="footer-watch-text">
                  <p><span>Пн-Пт</span> 8:00 - 18:00(МСК)</p>
                  <p><span>Сб-Вс</span> выходной</p>
                </div>
              </li>
              <li className="footer-location flex">
                <img src={FooterLocationPng} alt="" />
                <p>620014, Свердловская область,<br/>г. Екатеринбург, ул. Чернышевского,<br/>строение 7, офис 520</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cookie hidden" id="cookie_notification">
        <p>На сайте ООО МКК «Забирай» используются файлы cookie.<br/>
          Оставаясь на www.zabiray.ru Вы принимаете <a target="_blank" href="sites/default/files/docs/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.pdf">Пользовательское соглашение</a>.
        </p>
        <button className="button cookie_accept">Подтвердить</button>
      </div>
    </div>
  </>
  )
}

export {ApplicationFormPage}