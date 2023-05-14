import style from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { hotelLocationFormat, numFormatter } from '../../utils/formatter';
import { getReview } from '../../utils/random';
import { useNavigate } from 'react-router-dom';
import { useDeleteCartMutation } from '../../app/features/api/usersSlice';
import { selectUserInfo } from '../../app/features/auth/authSlice';
import { useSelector } from 'react-redux';

const CartItem = ({ cartItem }) => {
  const { id } = useSelector(selectUserInfo);
  const navigate = useNavigate();
  const [delCart, { isLoading }] = useDeleteCartMutation();
  const hotel = cartItem.hotelId;

  const onDirect = () => {
    navigate(`/hotel/booking/${hotel.slug}/${cartItem.slug}/${hotel._id}/${cartItem._id}`);
  };

  const onDelete = async () => {
    try {
      await delCart({ userId: id, serviceId: cartItem._id }).unwrap();
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div className={style.card}>
      <div className={style.hotelInfor}>
        <div className={style.hotel}>
          <img src={getViewLinkGG(hotel.imgsGG[0])} alt={hotel.name} />
          <div className={style.info}>
            <p id={style.name}>{hotel.name}</p>
            <p id={style.location}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{hotelLocationFormat(hotel.location)}</span>
            </p>
            <div className={style.comment}>
              <p id={style.point}>{hotel.point}</p>
              <p id={style.rate}>{getReview(hotel.point)}</p>
              <p id={style.sumOfComment}>{hotel.cmtSum} đánh giá</p>
            </div>
          </div>
          <div className={style.discount}>
            <p id={style.two}>{hotel.discountOfCheapest || 30}% </p>
            <p id={style.one}>GIẢM GIÁ</p>
          </div>
        </div>
        <div className={style.payment}>
          <button id={style.booking} onClick={onDirect} disabled={isLoading}>
            Đặt phòng ngay
          </button>
          <button id={style.delete} onClick={onDelete} disabled={isLoading}>
            Xóa bỏ
          </button>
        </div>
      </div>
      <div className={style.bookingInfor}>
        <div className={style.booking}>
          <p id={style.one}>{cartItem.name}</p>
          <p id={style.two}>
            {cartItem.info.beds} giường - {cartItem.info.area} m²
          </p>
        </div>
        <div className={style.price}>
          <p id={style.three}>
            {numFormatter.format((cartItem.prices * 100) / (100 - cartItem.discount))}
          </p>
          <p id={style.one}>{numFormatter.format(cartItem.prices)}</p>
          <p id={style.two}>Bao gồm cả thuế và phí</p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
