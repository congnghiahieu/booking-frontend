import { useState, useEffect } from 'react';

const getLocalValue = (key, defaultValue) => {
  //SSR Next.js
  if (typeof window === 'undefined') return defaultValue;

  // if a value is already store
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) return localValue;

  // if not exist
  // return result of a function
  if (defaultValue instanceof Function) return defaultValue();

  return defaultValue;
};

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
