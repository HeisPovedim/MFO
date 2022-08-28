// НАБОР РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
  // форма для инициалов
  export const RegForInitials = /[^АA-ЯаZa-яЁёz\s]/gi
  // форма для адресов
  export const RegForAddress = /[^АA-ЯаZa-яЁёz()0-9,.-/\s]/g
  // форма для номера дома
  export const RegForHouseNumber = /[^АA-ЯаZa-яЁёz()0-9-/\s]/g
  // форма для номера квартиры
  export const RegForApartmentNumber = /[^0-9-/\s]/g