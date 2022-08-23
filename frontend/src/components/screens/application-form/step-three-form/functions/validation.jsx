// Функция для проверки и появления поля - "Сфера деятельности"
export const ValidateScope = (value) => {
  if (value === 6) {
    return true
  } else if (value === 8) {
    return true
  } else if (value === 11) {
    return true
  } else if (value === 12) {
    return true
  } else if (value === 14) {
    return true
  } else if (value === 15) {
    return true
  } else if (value === 16) {
    return true
  } else if (value === 17) {
    return true
  } else {
    return false
  }
}

// Функция для проверки длины поля - "Дополнительный телефон"
export const ValidatePhone = (value) => {
  if (value >= 2) {
    console.log(value)
    return 11
  } else {
    return 0
  }
}