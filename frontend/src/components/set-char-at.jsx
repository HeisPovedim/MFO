// RU: Функция замены любого символа в сторке по индексу | EN:Function to replace any symbol in the index store
export const setCharAt = (str,index,chr) => {
  if(index > str.length-1) return str;
  return str.substring(0,index) + chr + str.substring(index+1);
}