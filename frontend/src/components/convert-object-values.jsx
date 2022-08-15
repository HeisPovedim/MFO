// RU: Позволяет перебрать объект => число в строку && строку в число | EN: Allows you to iterate the object => number to string && string to number
// numToStr = true конвертирует числовые значения в строковые | EN: numToStr = true converts numeric values to string values
// numToStr = false конвертирует строковые значения в числовые | EN: numToStr = false converts string values to numeric values
export const convertObjectValues = (obj, numToStr) => {
  if (numToStr !== true && numToStr !== false) return;
  if (typeof obj === "object" && obj !== null) {
    // получен объект | object received
    if (Array.isArray(obj)) {
      // объект оказался массивом, перебор массива | the object turned out to be an array, array Brute Force
      return obj.map(elem => convertObjectValues(elem, numToStr));
    } else {
      // перебор объекта | iteration of the object
      const result = {};
      for (const key in obj) {
        result[key] = convertObjectValues(obj[key], numToStr)
      }
      return result;
    }
  } else {
    // получено простое значение (не объект и не массив) | a simple value (not an object or an array) was obtained
    return isNaN(obj) ? obj : numToStr ? obj + '' : +obj;
  }
}