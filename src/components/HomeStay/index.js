import style from './HomeStay.module.css';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function HomeStay({ hotel }) {
  const navigate = useNavigate();

  const onDirect = () => {
    navigate('/search');
  };

  return (
    <div className={style.HomeStay} onClick={onDirect}>
      <div className={style.HomeStay_img}>
        <img className={style.Img_homeStay} src={`${getViewLinkGG(hotel.imgsGG[0])}`} />
        <div className={style.HomeStay_point}>{hotel.point}</div>
      </div>
      <div className={style.HomeStay_name}>{hotel.name}</div>
      <div className={style.HomeStay_location_star}>
        <div className={style.HomeStay_star}>
          {Array(hotel.stars)
            .fill()
            .map((v, i) => (
              <FontAwesomeIcon key={i} icon={faStar} color='#ff567d' />
            ))}
        </div>
        <div className={style.HomeStay_location}>
          <FontAwesomeIcon icon={faLocationDot} />
          {hotel.location.province}, {hotel.location.nation}
        </div>
      </div>
      <span className={style.price_text}>Giá mỗi đêm rẻ nhất từ</span>
      <div className={style.HomeStay_price}>VND {hotel.cheapest || '500.000'}</div>
    </div>
  );
}

export default HomeStay;
