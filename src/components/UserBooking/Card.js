import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { getVnDateFormat } from '../../utils/formatter';
import { useUpdateBookByIdMutation } from '../../app/features/api/booksSlice';
import { BOOK_STATUS } from '../../utils/constants';

const Card = ({ book }) => {
  const [updateBook, { isLoading }] = useUpdateBookByIdMutation();

  const hotel = book.hotelId;
  const service = book.serviceId;

  let status;
  if (book.isPaid) status = 'Thanh toán thành công';
  if (book.isCanceled) status = 'Lịch đặt đã bị huỷ';

  const start = getVnDateFormat(book.period.start);
  const end = getVnDateFormat(book.period.end);

  const onCancel = async () => {
    try {
      await updateBook({ bookId: book.id, flag: BOOK_STATUS.CANCELED }).unwrap();
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <div className={style.card}>
        <div className={style.booking}>
          <img className={style.img} src={getViewLinkGG(hotel.imgsGG[0])} alt={hotel.name} />
          <div className={style.info}>
            <p className={`${style.check} ${!book.isCanceled ? '' : style.cancel}`}>
              {!book.isCanceled ? 'Đã xác nhận đặt phòng' : 'Đã xác nhận huỷ phòng'}
            </p>
            <h4>
              <Link to={`/hotel/view/${hotel.slug}/${hotel._id}`}>{hotel.name}</Link>
            </h4>
            <span>Mã số đặt phòng: </span>
            <span className={style.number}>{book.id}</span>
            <div className={`${style.state} ${!book.isCanceled ? '' : style.cancel}`}>
              <FontAwesomeIcon icon={faCircleCheck} />
              {status}
            </div>
            <p id={style.one}>{service.name}</p>
            <p className={style.delete}>
              {!book.isCanceled ? 'Miễn phí huỷ phòng' : 'Phòng đã bị huỷ'}
            </p>
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
        {!book.isCanceled && (
          <>
            <hr></hr>
            <div className={style.setting}>
              <button onClick={onCancel} disabled={isLoading}>
                Huỷ đặt phòng
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Card;
