import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { hotelLocationFormat } from '../../utils/formatter';
import { getReview } from '../../utils/random';
import style from './Card.module.css';

const CartItem = ({ cartItem }) => {
  const hotel = cartItem.hotelId;

  return (
    <div className={style.card}>
      <div className={style.hotelInfor}>
        <div className={style.hotel}>
          <img src={getViewLinkGG(hotel.imgsGG[0])} />
          <div className={style.info}>
            <p id={style.name}>{hotel.name}</p>
            <p id={style.location}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{hotelLocationFormat(hotel.location)}</span>
            </p>
            <div className={style.comment}>
              <p id={style.point}>{hotel.point}</p>
              <p id={style.rate}>{getReview(hotel.point)}</p>
              <p id={style.sumOfComment}>{hotel.cmtSum}</p>
            </div>
          </div>
          <div className={style.discount}>
            <p id={style.two}>{hotel.discountOfCheapest || 20}% </p>
            <p id={style.one}>GIẢM GIÁ</p>
          </div>
        </div>
        <div className={style.payment}>
          <button id={style.booking}>Đặt phòng ngay</button>
          <button id={style.delete}>Xóa bỏ</button>
        </div>
      </div>
      <div className={style.bookingInfor}>
        <div className={style.booking}>
          <p id={style.one}> 1 x Căn hộ 1 phòng ngủ</p>
          <p id={style.two}>Từ ngày nào - đến ngày nào</p>
        </div>
        <div className={style.price}>
          <p id={style.three}>Gia goc</p>
          <p id={style.one}>Giá</p>
          <p id={style.two}>Bao gồm cả thuế và phí</p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
