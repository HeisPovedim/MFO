// RU: Используется для формы телефона, удаляет 8 и 7 при первом введение номера телефона | EN: Used for phone form, removes 8 and 7 when first entering a phone number
import { setCharAt } from "./set-char-at"

export const formatNumber = (string) => {
  if (string.charAt(0) === "7" || string.charAt(0) === "8") {
    return setCharAt(string, 0, "")
  } else {
    return string
  }
}