import style from './HotelOptionBar.module.css';
import { useState } from 'react';
import { numFormatter } from '../../utils/formatter';

function HotelOptionBar({ hotel }) {
  const [cheapest] = useState(hotel.cheapest ? hotel.cheapest : 500000);

  return (
    <div className={style.hotel_option}>
      <div className={style.hotel_optionbar}>
        <div className={style.hotel_selectoption}>
          <a href='#Overview' className={style.hotel_select}>
            Tổng quan
          </a>
          <a href='#hotelSuggest' className={style.hotel_select}>
            Phòng nghỉ
          </a>
          <a className={style.hotel_select}>Tiện ích</a>
          <a href='#hotelCmt' className={style.hotel_select}>
            Đánh giá
          </a>
          <a className={style.hotel_select}>Vị trí</a>
          <a className={style.hotel_select}>Chính sách</a>
        </div>
        <div className={style.hotel_price}>{numFormatter.format(cheapest)}</div>
      </div>
    </div>
  );
}

export default HotelOptionBar;
