import { BookingContext } from '../context/BookingContext';
import { useContext } from 'react';

const useBookingContext = () => {
  return useContext(BookingContext);
};

export default useBookingContext;
