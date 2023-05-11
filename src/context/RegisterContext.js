import { createContext, useState } from 'react';

export const RegisterContext = createContext({});

const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    username: {
      valid: false,
      value: '',
    },
    name: {
      valid: false,
      value: '',
    },
    email: {
      valid: false,
      value: '',
    },
    password: {
      value: false,
      value: '',
    },
    passwordVerification: {
      value: false,
      value: '',
    },
  });

  const onDataChange = e => {
    const type = e.target.type;
    const name = e.target.name;
    let value;
    switch (type) {
      case 'checkbox':
        value = e.target.checked;
        break;
      case 'files':
        value = e.target.files;
      default:
        value = e.target.value;
    }

    const valid = e.target.checkValidity();
    /* Kiểm tra email và confirm email có match không*/
    if (name == 'password') {
      const match = value === formData.passwordVerification.value;
      setFormData(prevData => ({
        ...prevData,
        [name]: {
          ...prevData[name],
          valid,
          value,
        },
        'passwordVerification': {
          ...prevData.passwordVerification,
          valid: match,
        },
      }));
    }
    /* Các TH khác */
    setFormData(prevData => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        valid,
        value,
      },
    }));
  };

  const canRegis = Object.values(formData).every(v => v.valid);

  return (
    <RegisterContext.Provider
      value={{
        formData,
        setFormData,
        onDataChange,
        canRegis,
      }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
