import { useState, useEffect } from "react";


function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = saved;
  return initial || defaultValue;
}


export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });


  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);


  return [value, setValue];
};