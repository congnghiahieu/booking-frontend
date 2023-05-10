import { useState, memo } from 'react';
import './DateRange.css';
// import { DateRangePicker } from 'react-date-range';x x
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format, add } from 'date-fns';
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setStart, setEnd, selectTime } from '../../app/features/search/searchSlice';

function DatePlant() {
  const dispatch = useDispatch();
  const [start, end] = useSelector(selectTime);
  const [openDate, setOpenDate] = useState(false);
  const date = [{ startDate: new Date(start), endDate: new Date(end), key: 'selection' }];

  return (
    <div>
      <div className='datePlant'>
        <label htmlFor='headerSearchText'></label>
        <div
          onClick={() => setOpenDate(!openDate)}
          // className={style.headerSearchText}
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
          <DateRange
            editableDateInputs={true}
            onChange={({ selection }) => {
              dispatch(setStart(selection.startDate.valueOf()));
              dispatch(setEnd(selection.endDate.valueOf()));
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='day'
            minDate={new Date()}
            maxDate={add(new Date(), { days: 90 })}
          />
        )}
      </div>
    </div>
  );
}

export default memo(DatePlant);
