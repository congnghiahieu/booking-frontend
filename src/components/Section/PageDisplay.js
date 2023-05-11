import Page1 from './Validation';
import Page2 from './Payment';
import Page3 from './Confirm';
import { useBookingContext } from '../../hooks/useContext';

const PageDisplay = () => {
  const { page } = useBookingContext();

  const display = {
    0: <Page1 />,
    1: <Page2 />,
    2: <Page3 />,
  };

  return display[page];
};

export default PageDisplay;
