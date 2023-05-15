import { memo, useState } from 'react';
import style from './HotelPrice.module.css';
import { getDiscount, getReview } from '../../utils/random';
import { numFormatter } from '../../utils/formatter';

const HotelPrice = ({ hotel }) => {
  const [discount] = useState(hotel.discountOfCheapest ? hotel.discountOfCheapest : getDiscount());
  const [cheapest] = useState(hotel.cheapest ? hotel.cheapest : 500000);

  return (
    <>
      <div className={style.price}>
        <div className={style.feedBack}>
          <div className={style.comment}>
            <h4>{getReview(hotel.point)}</h4>
            <span>{hotel.cmtSum} Nhận xét</span>
          </div>
          <div className={style.point}>{hotel.point}</div>
        </div>

        <div className={style.discount}>
          <p>GIẢM {discount}%</p>
          <span id={style.one}>Giá mỗi đêm rẻ nhất từ</span>
          <span id={style.orginalPrice}>
            {numFormatter.format((cheapest * 100) / (100 - discount))}
          </span>
          <span id={style.discountPrice}>{numFormatter.format(cheapest)}</span>
          <span className={style.destroy}>+ Hủy miễn phí</span>
        </div>
      </div>
    </>
  );
};
export default memo(HotelPrice);
