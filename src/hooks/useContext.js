import { BookingContext } from '../context/BookingContext';
import { RegisterContext } from '../context/RegisterContext';
import { useContext } from 'react';

export const useBookingContext = () => {
  return useContext(BookingContext);
};

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};
