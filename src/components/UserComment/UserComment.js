import style from './UserComment.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { getVnDateFormat } from '../../utils/formatter';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { Link } from 'react-router-dom';

const UserComment = ({ cmt }) => {
  const hotel = cmt.hotelId;

  return (
    <>
      <div className={style.comment}>
        <Link to={`/hotel/view/${hotel.slug}/${hotel._id}`}>
          <h3>{hotel.name}</h3>
        </Link>
        <div className={style.hotel}>
          <img alt={hotel.name} src={getViewLinkGG(hotel.imgsGG[0])} />
          <div className={style.UserComment}>
            <div className={style.subComment}>
              <div className={style.title}>{cmt.title}</div>
              <div className={style.content}>{cmt.content}</div>
              <div className={style.timeComment}>
                Đã nhận xét vào {getVnDateFormat(cmt.updatedAt).withoutWeekDay}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
export default UserComment;
