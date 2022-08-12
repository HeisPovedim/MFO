export const convertObjectValues = (obj, numToStr) => {
  // Перебирает весь объект и производит конвертацию числа в строку и обратно.
  // numToStr = true конвертирует числовые значения в строковые
  // numToStr = false конвертирует строковые значения в числовые
  if (numToStr !== true && numToStr !== false) return;

  if (typeof obj === "object" && obj !== null) {
    //Получен объект
    if (Array.isArray(obj)) {
      // Объект оказался массивом. Перебор массива
      return obj.map(elem => convertObjectValues(elem, numToStr));
    } else {
      // Перебор объекта
      const result = {};
      for (const key in obj) {
        result[key] = convertObjectValues(obj[key], numToStr)
      }
      return result;
    }
  } else {
    // Получено простое значение (не объект и не массив)
    return isNaN(obj) ? obj : numToStr ? obj + '' : +obj;
  }
};