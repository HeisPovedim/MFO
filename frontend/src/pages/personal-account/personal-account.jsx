// #: REACT
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

// # COMPONENTS
import { PhoneField } from '../../components/shared/fields/phone-field'
import { WarrningError } from '../../components/shared/verify/warrning-error'

// #IMG | className = wrapper container site-header__wrapper
import PersonPng from '../../assets/img/basic/person.png'
import BurgerPng from '../../assets/img/basic/burger.png'

// #IMG | className = footer-wrapper wrapper container flex --just-space
import IconEmailPng from '../../assets/img/basic/icon-email.png'
import FooterWatchPng from '../../assets/img/basic/footer-watch.png'
import FooterLocationPng from '../../assets/img/basic/footer-location.png'

const PersonalAccount = () => {

  // ^СТЕЙТЫ | STATES
  const [singIn, setSignIn] = useState({
    login: "", // логин
    password: "" // пароль
  })

  // ^ХУКИ | HOOKS
  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    mode: "all"
  })

  // ^ ⁡⁣⁣⁡⁣⁡⁣⁣КНОПКИ | BUTTONS
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <a href="#main-content" className="visually-hidden focusable">
        Перейти к основному содержанию
      </a>
      <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
        <div className="site-header">
        <div className="wrapper container site-header__wrapper">
            <nav className="nav" style={{display: "flex"}}>
                <button id="config-btn" className="nav__toggle navbar-toggle" data-toggle="collapse" data-target="#menu" type="button">
                  <i className=""><img src={BurgerPng} alt=""/></i>
                </button>
                <div id="menu" className="faqs-container collapse navbar-collapse">
                    <div className="faq" style={{borderTop: "1px", solid: "#9fa4a8"}}>
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
                <polygon className="c" points="422.95 58.16 422.95 81.21 440.97 58.16 451.96 58.16 451.96 95.55 440.97 95.55 440.97 72.49 422.95 95.55 411.96 95.55 411.96 58.16 422.95 58.16"></polygon></g>
              </svg>
            </a>
            <div className="user_login">
                <a className="button button--icon" href="/login" aria-label="Sign in">
                    <img src={PersonPng} alt="person"/>
                    <span>Личный кабинет</span>
                </a>
            </div>
            <div className="user_info hidden">
                <div className="user_settings">
                    <button type="button" className="btn_person_settings">
                        <img src="/themes/zabiray/img/person-header.png" alt="settings"/>
                    </button>
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
    <div className="login-main wrapper container">
      <div>
        <div data-drupal-messages-fallback="" className="hidden"></div>
        <h1>Вход в личный кабинет</h1>
        <div className="mr_content-box">
          <form className="content-form"
            method="post"
            onSubmit={ handleSubmit(onSubmit) }
          >
            <div className="alert alert-success hidden"></div>
            <div className="alert alert-danger hidden"></div>
            <div className="input-box has-error" id="form_number_phone">
              <label className="control-label">Номер телефона</label>
              <Controller
                  control={control}
                  name="phoneNumber"
                  rules={{
                    required: true,
                    minLength: {
                      value: 11,
                      message: "*Заполните полностью поле телефона",
                    },
                  }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <PhoneField
                        // phone={singIn.login.replace(/[^0-9]/g, "").replace("7", "")}
                        setPhone={event => setSignIn({...singIn, login: event})}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                      <WarrningError>{errors?.phoneNumber && (<p>{errors?.phoneNumber?.message || `*Необходимо заполнить поле "Номер телефона"`}</p>)}</WarrningError>
                    </>
                  )}
                />
            </div>
            <div className="input-box has-error" id="form_password">
              <label className="control-label">Пароль</label>
              <input id="password" className="" type="text" 
                data-required="true"
                maxLength={51}
                name="login[password]"
                placeholder=""
                {...register ("password", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  maxLength: {
                    value: 50,
                    message: "Не больше 50 символов",
                  },
                  onChange: (event) => setSignIn({...singIn, password: event.target.value}),
                })}
                />
              <WarrningError>{errors?.password && (<p>{errors?.password?.message || `*Необходимо заполнить поле "Пароль"`}</p>)}</WarrningError>
            </div>
            <div className="btn-box">
              <button type="submit" name="btn_submit_login" className="btn btn-primary" value="1"><span>Войти</span></button>
            </div>
            <div className="loginbox-links">
              <a href="/password-recovery" title="Забыли пароль">Забыли пароль?</a>
              <a href="/registration" title="Регистрация">Регистрация</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="footer flex">
        <div className="footer-wrapper wrapper container flex --just-space">
            <div>
                <a href="/">
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
                      <path className="c" d="M275.56,58.16v23.05l18.02-23.05h10.99v37.38h-10.99v-23.05l-18.02,23.05h-10.99V58.16h10.99Z"></path><path className="c" d="M336.5,56.96c-3.33,0-8.83,.86-12.7,6.04v-4.83h-10.99v49h10.99v-16.45c4.23,5.61,9.91,6.04,12.43,6.04,11.53,0,19.46-8.55,19.46-19.94s-7.66-19.86-19.19-19.86Zm-2.97,30.48c-6.31,0-10.81-4.66-10.81-10.62s4.5-10.53,10.81-10.53,10.81,4.58,10.81,10.53-4.5,10.62-10.81,10.62Z"></path>
                      <path className="c" d="M392.96,58.16h10.99v37.38h-10.99v-4.83c-3.96,5.44-9.19,6.04-11.98,6.04-11.98,0-19.91-8.98-19.91-19.94s7.84-19.86,19.37-19.86c2.97,0,8.83,.52,12.52,6.04v-4.83Zm-20.54,18.65c0,5.96,4.5,10.62,10.81,10.62s10.81-4.66,10.81-10.62-4.5-10.53-10.81-10.53-10.81,4.58-10.81,10.53Z"></path>
                      <polygon className="c" points="422.95 58.16 422.95 81.21 440.97 58.16 451.96 58.16 451.96 95.55 440.97 95.55 440.97 72.49 422.95 95.55 411.96 95.55 411.96 58.16 422.95 58.16"></polygon>
                    </g>
                  </svg>
                </a>
                <ul style={{color: "#222", padding: "33px 0 0 0", fontSize: "12px"}}>
                    <li>© Забирай.РФ, 2021</li>
                    <li>
                      <p>
                      <a rel="_blank" style={{padding: "16px 0 0 0", color: "#0056b3", display: "block"}} href="https://bankiros.ru/zaymy">Официальный партнер<br/>по подбору займов</a>
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
                        <img src={IconEmailPng} alt="" style={{width: "22px"}}/>
                        <p>support@zabiray.ru</p>
                    </li>
                        <li className="footer-watch flex">
                        <img src={FooterWatchPng} alt=""/>
                        <div className="footer-watch-text">
                            <p><span>Пн-Пт</span> 8:00 - 18:00(МСК)</p>
                            <p><span>Сб-Вс</span> выходной</p>
                        </div>
                    </li>
                    <li className="footer-location flex">
                        <img src={FooterLocationPng} alt=""/>
                        <p>620014, Свердловская область,<br/>г. Екатеринбург, ул. Чернышевского,<br/>строение 7, офис 520</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}
export {PersonalAccount}