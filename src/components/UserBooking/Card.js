import style from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { getVnDateFormat } from '../../utils/formatter';

const Card = ({ book }) => {
  const hotel = book.hotelId;
  const service = book.serviceId;

  let status;
  if (book.isPaid) status = 'Thanh toán thành công';
  if (book.isCanceled) status = 'Lịch đặt đã bị huỷ';

  const start = getVnDateFormat(book.period.start);
  const end = getVnDateFormat(book.period.end);

  return (
    <>
      <div className={style.card}>
        <div className={style.booking}>
          <img className={style.img} src={getViewLinkGG(hotel.imgsGG[0])} />
          <div className={style.info}>
            <p className={style.check}>Đã xác nhận đặt phòng</p>
            <h4>{hotel.name}</h4>
            <span>Mã số đặt phòng: </span>
            <span className={style.number}>{book.id}</span>
            <div className={style.state}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: book.isPaid ? '#28871c' : '#e12d2d' }}
              />
              {status}
            </div>
            <p id={style.one}>{service.name}</p>
            <p className={style.delete}>Miễn phí hủy phòng</p>
          </div>
          <div className={style.time}>
            <div className={style.checking}>
              <p>NHẬN PHÒNG</p>
              <div className={style.date}>
                <p>{start.day}</p>
                <div className={style.month}>
                  <p>{start.monthWithPrefix}</p>
                  <p>{start.weekDay}</p>
                </div>
              </div>
            </div>
            <div className={style.checking}>
              <p>TRẢ PHÒNG</p>
              <div className={style.date}>
                <p>{end.day}</p>
                <div className={style.month}>
                  <p>{end.monthWithPrefix}</p>
                  <p>{end.weekDay}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={style.setting}>
          <button>Huỷ đặt phòng</button>
        </div>
      </div>
    </>
  );
};
export default Card;
