import style from './HotelInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  faLeaf,
  faClock,
  faBell,
  faHandHoldingDollar,
  faBed,
  faMugSaucer,
  faDumbbell,
  faPersonSwimming,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

const HotelInfo = ({ hotel }) => {
  const navigate = useNavigate();
  const onDirect = () => {
    navigate(`/hotel/view/${hotel.slug}/${hotel.id}`);
  };

  return (
    <>
      <div className={style.hotelInfor}>
        <div className={style.information}>
          <h3 onClick={onDirect}>{hotel.name}</h3>
          <p>
            {Array(hotel.stars)
              .fill()
              .map((_, i) => {
                return <FontAwesomeIcon key={i} icon={faStar} className='star' />;
              })}
          </p>
          <p id={style.one}>
            <FontAwesomeIcon icon={faLocationDot} />{' '}
            {hotel.location?.others ? `${hotel.location.others}, ` : ''}
            {hotel.location?.district ? `${hotel.location.district}, ` : ''}
            {hotel.location.nation + ' - ' + hotel.location.province}
          </p>
          <p id={style.four}>
            <FontAwesomeIcon icon={faLeaf} /> Du lịch bền vững
          </p>
          <p id={style.three}>
            <FontAwesomeIcon icon={faClock} /> Lý tưởng cho lưu trú dài hạn
          </p>
          <p id={style.two}>
            <FontAwesomeIcon icon={faBell} /> Lần đặt gần nhất:
          </p>
          <p>
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            Thưởng hoàn tiền mặt:
          </p>
          <hr />
        </div>

        <div className={style.famous}>
          <p>Đặc điểm nổi bật: </p>
          <span>
            <FontAwesomeIcon icon={faBed} className='famous' />
            x1
          </span>
          <span>
            <FontAwesomeIcon icon={faMugSaucer} className='famous' />
            x1
          </span>
          <span>
            <FontAwesomeIcon icon={faDumbbell} className='famous' />
            x1
          </span>
          <span>
            <FontAwesomeIcon icon={faPersonSwimming} className='famous' />
            x1
          </span>
        </div>
      </div>
    </>
  );
};
export default memo(HotelInfo);
