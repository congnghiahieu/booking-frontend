import { useRef, memo } from 'react';
import style from './HotelPrice.module.css';
import { getRan, getDiscount, getReview } from '../../utils/random';
import { numFormatter } from '../../utils/formatter';

const HotelPrice = ({ hotel }) => {
  const point = useRef(getRan(7, 10, 1));
  const review = useRef(getReview(point.current));
  const discount = useRef(getDiscount());
  let cheapestPrice = useRef(getRan(300000, 1000000, 0));
  let orginalPrice = useRef((cheapestPrice.current * 100) / discount.current);
  cheapestPrice.current = numFormatter.format(cheapestPrice.current);
  orginalPrice.current = numFormatter.format(orginalPrice.current);
  const cmtsSum = useRef(getRan(300, 500, 0));
  return (
    <>
      <div className={style.price}>
        <div className={style.feedBack}>
          <div className={style.comment}>
            <h4>{review.current}</h4>
            <span>{cmtsSum.current} Nhận xét</span>
          </div>
          <div className={style.point}>{point.current}</div>
        </div>

        <div className={style.discount}>
          <p>GIẢM {discount.current}%</p>
          <span>Giá mỗi đêm rẻ nhất từ</span>
          <span id={style.orginalPrice}>{orginalPrice.current}</span>
          <span id={style.discountPrice}>{cheapestPrice.current}</span>
          <span className={style.destroy}>+ Hủy miễn phí</span>
        </div>
      </div>
    </>
  );
};
export default memo(HotelPrice);
