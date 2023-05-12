import { useState, useEffect, useRef, useMemo } from "react";
import "./DateRange.css";
// import { DateRangePicker } from 'react-date-range';x x
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, add } from "date-fns";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setStart,
  setEnd,
  selectTime,
} from "../../app/features/search/searchSlice";
import { DAY_VN } from "../../utils/constants";
import useClickout from "../../hooks/useClickout";

function DatePlant() {
  const dispatch = useDispatch();
  const [start, end] = useSelector(selectTime);
  const [date, setDate] = useState([
    { startDate: new Date(start), endDate: new Date(end), key: "selection" },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const dateRef = useRef(null);
  useClickout(dateRef, setOpenDate);

  useEffect(() => {
    dispatch(setStart(date[0].startDate.valueOf()));
    dispatch(setEnd(date[0].endDate.valueOf()));
  }, [date]);

  return useMemo(() => {
    return (
      <div className="datePlant">
        <label htmlFor="headerSearchText"></label>
        <div
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >
          <div className="dateIn">
            <span className="icon">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </span>
            <div className="day_date">
              <span className="dayselect">{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )}`}</span>
              {/* Thứ */}
              <span className="dateSelect">{DAY_VN[new Date(start).getDay()]}</span>
            </div>
          </div>
          <div className="dateOut">
            <span className="icon">
              <FontAwesomeIcon icon={faCalendarDay} />
            </span>
            <div className="day_date">
              <span className="dayselect">{`${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {/* Thứ */}
              <span className="dateSelect">{DAY_VN[new Date(end).getDay()]}</span>
            </div>
          </div>
        </div>
        {openDate && (
          <div ref={dateRef}>
            <DateRange
              editableDateInputs={true}
              onChange={({ selection }) => setDate([selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="day"
              minDate={new Date()}
              maxDate={add(new Date(), { days: 90 })}
            />
          </div>
        )}
      </div>
    );
  }, [start, end, date, openDate]);
}

export default DatePlant;
