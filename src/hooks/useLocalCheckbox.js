import useLocalStorage from './useLocalStorage';

const useLocalCheckbox = (key, defaultValue = false) => {
  const [value, setValue] = useLocalStorage(key, defaultValue);

  const toggle = () => {
    setValue(prev => !prev);
  };

  return [value, toggle];
};

export default useLocalCheckbox;
