import { useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const reset = () => setValue(defaultValue);

  const valueAttrs = {
    value,
    onChange: e => setValue(e.target.value),
  };

  return [value, valueAttrs, reset];
};

export default useInput;
