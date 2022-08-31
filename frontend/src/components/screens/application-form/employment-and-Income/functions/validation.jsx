// ?: ФУНКЦИИ ПРОВЕРКИ
export const validateFunc = (type, value) => {
  if (type === "scope") { // !: функция для проверки и появления поля - "Сфера деятельности" && "Стаж работы на последнем месте"
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
  } else if (type === "phoneMinLength") { // !: функция для проверки длины поля - "Дополнительный телефон"
    if (value >= 2) {
      return 11
    } else {
      return 0
    }
  } else if (type === "phoneEmpty") { // !: функция для проверки номера телефона на пустоту
    if (value.length <= 1) {
      return value = undefined
    } else {
      return value
    }
  } else {
    console.log("Warrning: this function does not exist!")
  }
}