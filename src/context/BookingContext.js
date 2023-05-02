import { createContext, useState } from 'react';

export const BookingContext = createContext({});

const TOTAL_PAGE = 3;

const BookingProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    cusName: {
      valid: false,
      value: '',
    },
    cusEmail: {
      valid: false,
      value: '',
    },
    cusEmailVerification: {
      valid: false,
      value: '',
    },
    cusPhone: {
      valid: false,
      value: '',
    },
    cardName: {
      valid: false,
      value: '',
    },
    cardSeries: {
      valid: false,
      value: '',
    },
    cardExpiredate: {
      valid: false,
      value: '',
    },
    cardCvc: {
      valid: false,
      value: '',
    },
  });

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
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
    if (name == 'cusEmail') {
      const match = value === formData.cusEmailVerification.value;
      setFormData(prevData => ({
        ...prevData,
        [name]: {
          ...prevData[name],
          valid,
          value,
        },
        'cusEmailVerification': {
          ...prevData.cusEmailVerification,
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

  let canSubmit;
  if (page === 1) {
    canSubmit = Object.values(formData).every(v => v.valid);
  }

  const starter = {
    0: 'cus',
    1: 'card',
  };

  const canNextPage = Object.keys(formData)
    .filter(key => key.startsWith(starter[page]))
    .map(key => formData[key].valid)
    .every(Boolean);

  const disablePrev = page === 0;

  const disableNext = page === 1 || !canNextPage;

  const prevHide = page === 0 && 'hidden';

  const nextHide = page === 1 && 'hidden';

  const submitHide = page !== 1 && 'hidden';

  return (
    <BookingContext.Provider
      value={{
        page,
        setPage,
        formData,
        setFormData,
        onDataChange,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
