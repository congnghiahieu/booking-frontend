import style from './HotelOptionBar.module.css';
import { useState } from 'react';
import { numFormatter } from '../../utils/formatter';
import { Link } from 'react-router-dom';

function HotelOptionBar({ hotel }) {
  const [cheapest] = useState(hotel.cheapest ? hotel.cheapest : 500000);

  return (
    <div className={style.hotel_option}>
      <div className={style.hotel_optionbar}>
        <div className={style.hotel_selectoption}>
          <div className={style.hotel_select}>Tổng quan</div>
          <div className={style.hotel_select}>Phòng nghỉ</div>
          <div className={style.hotel_select}>Tiện ích</div>
          <div className={style.hotel_select}>Đánh giá</div>
          <div className={style.hotel_select}>Vị trí</div>
          <div className={style.hotel_select}>Chính sách</div>
        </div>
        <div className={style.hotel_price}>{numFormatter.format(cheapest)}</div>
      </div>
    </div>
  );
}

export default HotelOptionBar;
