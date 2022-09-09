// #: REACT
import React, { useState, useRef, useCallback, useEffect } from "react"

export const AttachPhoto = () => {
  return (
  <>
  <div className="mr_content-box " data-step_id="prikreplenie_foto" data-step_index="5">
  <h2>Прикрепление фото</h2>
  <form className="content-form" method="post" id="prikreplenie-foto">
    <div className="alert alert-danger hidden"></div>
    <div className="wrapper-master">
      <div id="prikreplenie_foto">
        <div className="group_type">
          <h4>Добавить фотографии паспорта</h4>
          <div className="group_type_list">
            <div id="group_form_prikreplenie_foto_2" className="groupFields" data-step="prikreplenie_foto">
              <div id="image_group_prikreplenie_foto">
                <div className="images-box">
                  <div className="input-box not_check" id="form_image_type_2">
                    <label className="hidden">Скан паспорта (основная страница)</label>
                    <input type="hidden" id="image_type_2" data-required="true" />
                    <div id="error_image_type_2" className="help-block hidden">Загрузите фотографию "Скан паспорта (основная страница)"</div>
                  </div>
                  <div className="block-pic" data-kk="372077" data-photo_type="2">
                    <div className="block-pic-images">
                      <button type="button" id="remove_image_prikreplenie_foto_372077" title="Удалить" className="close img-form" onclick="deleteBlockPic('372077');"><i className="danger fa fa-times"></i></button>
                      <input type="hidden" data-key_plugin="image_group" name="prikreplenie_foto[372077][image_group][image_type]" value="2"/>
                      <input type="hidden" className="input_base64" data-key_plugin="image_group" name="prikreplenie_foto[372077][image_group][image]" />
                      <img src="" />
                    </div>
                    <div className="block-pic-info">
                      <ul>
                      <li>Разворот должен попадать полностью на фото без обрезки углов, как на примере слева</li>
                      <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
                      <li>Не закрывайте рукой данные в паспорте</li>
                      <li>Обязательно убедитесь, что на прикрепленном фото все записи хорошо читаются</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-white btn-primary btn-file-add">
                  <i className="fa fa-plus"></i>
                  <input type="file" className="add_photo" data-key="image" data-key_plugin="image_group" data-photo_type="2" data-step="prikreplenie_foto" data-button_zero="true" />
                  Скан паспорта (основная страница)
                </button>
              </div>
              <hr/>
            </div>
            <div id="group_form_prikreplenie_foto_6" className="groupFields" data-step="prikreplenie_foto">
              <div id="image_group_prikreplenie_foto">
                <div className="images-box">
                  <div className="input-box not_check" id="form_image_type_6">
                    <label className="hidden">Скан паспорта (страница с регистрацией)</label>
                    <input type="hidden" id="image_type_6" data-required="true" />
                    <div id="error_image_type_6" className="help-block hidden">Загрузите фотографию "Скан паспорта (страница с регистрацией)"</div>
                  </div>
                  <div className="block-pic" data-kk="372078" data-photo_type="6">
                    <div className="block-pic-images">
                      <button type="button" id="remove_image_prikreplenie_foto_372078" title="Удалить" className="close img-form" onclick="deleteBlockPic('372078');"><i className="danger fa fa-times"></i></button>
                      <input type="hidden" data-key_plugin="image_group" name="prikreplenie_foto[372078][image_group][image_type]" value="6" />
                      <input type="hidden" className="input_base64" data-key_plugin="image_group" name="prikreplenie_foto[372078][image_group][image]" value=""/>
                      <img src="" />
                    </div>
                    <div className="block-pic-info">
                      <ul>
                        <li>Разворот должен попадать полностью на фото без обрезки углов, как на примере слева</li>
                        <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
                        <li>Не закрывайте рукой данные в паспорте</li>
                        <li>Обязательно убедитесь, что на прикрепленном фото все записи хорошо читаются</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-white btn-primary btn-file-add">
                <i className="fa fa-plus"></i>
                <input type="file" className="add_photo" data-key="image" data-key_plugin="image_group" data-photo_type="6" data-step="prikreplenie_foto" data-button_zero="true" />
                Скан паспорта (страница с регистрацией)
                </button>
              </div>
              <hr/>
            </div>
          </div>
        </div>
        <div className="group_type">
          <h4>Добавить фотографии банковской карты</h4>
          <div className="group_type_list">
            <div id="group_form_prikreplenie_foto_3" className="groupFields" data-step="prikreplenie_foto">
              <div id="image_group_prikreplenie_foto">
                <div className="images-box">
                  <div className="input-box not_check" id="form_image_type_3">
                    <label className="hidden">Банковская карта</label>
                    <input type="hidden" id="image_type_3" data-required="true" />
                    <div id="error_image_type_3" className="help-block hidden">Загрузите фотографию "Банковская карта"</div>
                  </div>
                  <div className="block-pic" data-kk="372079" data-photo_type="3">
                    <div className="block-pic-images">
                      <button type="button" id="remove_image_prikreplenie_foto_372079" title="Удалить" className="close img-form" onclick="deleteBlockPic('372079');"><i className="danger fa fa-times"></i></button>
                      <input type="hidden" data-key_plugin="image_group" name="prikreplenie_foto[372079][image_group][image_type]" value="3" />
                      <input type="hidden" className="input_base64" data-key_plugin="image_group" name="prikreplenie_foto[372079][image_group][image]" value="" />
                      <img src="" />
                    </div>
                    <div className="block-pic-info">
                      <ul>
                        <li>Разворот должен попадать полностью на фото без обрезки углов, как на примере слева</li>
                        <li>Делать фото необходимо в хорошо освещенном месте, но без вспышки, так чтобы не было бликов</li>
                        <li>Не закрывайте рукой данные в паспорте</li>
                        <li>Обязательно убедитесь, что на прикрепленном фото все записи хорошо читаются</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-white btn-primary btn-file-add">
                <i className="fa fa-plus"></i>
                <input type="file" className="add_photo" data-key="image" data-key_plugin="image_group" data-photo_type="3" data-step="prikreplenie_foto" data-button_zero="true" />
                Банковская карта
                </button>
              </div>
              <hr/>
            </div>
          </div>
        </div>
        <div className="sb_group_type">
          <div className="input-box" id="form_sb_use_cards">
            <label className="control-label label-checkbox"><input id="sb_use_cards" type="checkbox" name="sb_use_cards" />У Вас карта Тинькофф или Альфа банка нового образца?</label>
          </div>
          <div className="sb_group_hide hidden">
            <div className="sb_group_text">Если Вы держатель карты Тинькофф или Альфа банка нового образца, где ФИО и номер карты расположены на разных сторонах, необходимо прикрепить 2 фотографии</div>
            <div className="group_type_list sb_group_list">
              <div id="group_form_prikreplenie_foto_16" className="groupFields" data-step="prikreplenie_foto">
                <div id="image_group_prikreplenie_foto">
                  <div className="images-box">
                  </div>
                  <button type="button" className="btn btn-white btn-primary btn-file-add">
                  <i className="fa fa-plus"></i>
                  <input type="file" className="add_photo" data-key="image" data-key_plugin="image_group" data-photo_type="16" data-step="prikreplenie_foto" data-button_zero="true" />
                  Лицевая сторона
                  </button>
                </div>
                <hr/>
              </div>
              <div id="group_form_prikreplenie_foto_17" className="groupFields" data-step="prikreplenie_foto">
                <div id="image_group_prikreplenie_foto">
                  <div className="images-box">
                  </div>
                  <button type="button" className="btn btn-white btn-primary btn-file-add">
                  <i className="fa fa-plus"></i>
                  <input type="file" className="add_photo" data-key="image" data-key_plugin="image_group" data-photo_type="17" data-step="prikreplenie_foto" data-button_zero="true" />
                  Обратная сторона
                  </button>
                </div>
                <hr/>
              </div>
            </div>
          </div>
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