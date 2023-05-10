import { addDays } from 'date-fns';
import { useState, memo, useEffect, useRef } from 'react';
import './DateRange.css';
// import { DateRangePicker } from 'react-date-range';x x
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import { React } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';

function DatePlant() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenDate(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div>
      <div className='datePlant'>
        <label htmlFor='headerSearchText'></label>
        <div
          onClick={() => setOpenDate(!openDate)}
          className='headerSearchText'>
          <div className='dateIn'>
            <span className='icon'>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </span>
            <span className='dayselect'>{`${format(date[0].startDate, 'dd/MM/yyyy')}`}</span>
          </div>
          <div className='dateOut'>
            <span className='icon'>
              <FontAwesomeIcon icon={faCalendarDay} />
            </span>
            <span className='dayselect'>{`${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
          </div>
        </div>
        {openDate && (
          <div ref={menuRef}>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='day'
              minDate={new Date()}
            />
          </div>

        )}
      </div>
    </div>
  );
}

export default memo(DatePlant);
