// Позволяет перебрать объект => число в строку && строку в число
// numToStr = true конвертирует числовые значения в строковые
// numToStr = false конвертирует строковые значения в числовые
export const convertObjectValues = (obj, numToStr) => {
  if (numToStr !== true && numToStr !== false) return;
  if (typeof obj === "object" && obj !== null) {
    // получен объект
    if (Array.isArray(obj)) {
      // объект оказался массивом. Перебор массива
      return obj.map(elem => convertObjectValues(elem, numToStr));
    } else {
      // перебор объекта
      const result = {};
      for (const key in obj) {
        result[key] = convertObjectValues(obj[key], numToStr)
      }
      return result;
    }
  } else {
    // получено простое значение (не объект и не массив)
    return isNaN(obj) ? obj : numToStr ? obj + '' : +obj;
  }
}