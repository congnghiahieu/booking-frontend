import useLocalStorage from './useLocalStorage';

const useLocalInput = (key, defaultValue = '') => {
  const [value, setValue] = useLocalStorage(key, defaultValue);

  const reset = () => setValue(defaultValue);

  const valueAttrs = {
    value,
    onChange: e => setValue(e.target.value),
  };

  return [value, valueAttrs, reset];
};

export default useLocalInput;
