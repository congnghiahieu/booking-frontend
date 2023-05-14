import { useState } from 'react';
import style from './UserBooking.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../components/UserBooking/Card';
import { faUser, faCalendarCheck, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useGetBooksByUserIdQuery } from '../../app/features/api/booksSlice';
import { BOOK_STATUS_LIST, BOOK_STATUS } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';
import useInput from '../../hooks/useInput';

const UserBooking = () => {
  const [type, setType] = useState(BOOK_STATUS.INCOMMING);
  const [filterId, filterAttrs, resetFilter] = useInput('');
  const { id } = useSelector(selectUserInfo);
  const {
    data: books,
    isLoading,
    isSuccess,
    isError,
  } = useGetBooksByUserIdQuery(
    { userId: id, populate: true },
    {
      selectFromResult: result => {
        const { data } = result;
        if (data) {
          const newData = data.filter(book => {
            const validType = book.status === type;
            const validId = filterId ? book.id.includes(filterId) : true;
            return validId && validType;
          });
          return {
            ...result,
            data: newData,
          };
        }
        return result;
      },
    },
  );

  return (
    <>
      <div className={style.container}>
        <div className={style.Sidebar}>
          <div className={style.profile}>
            <FontAwesomeIcon icon={faCalendarCheck} className='iconProfile' />
            <span>Đơn đặt chỗ của tôi</span>
          </div>
          <Link to='/user/comments'>
            <FontAwesomeIcon icon={faMessage} className='iconProfile' />
            <span>Nhận xét</span>
          </Link>
          <Link to='/user/profile'>
            <FontAwesomeIcon icon={faUser} className='iconProfile' />
            <span>Hồ sơ</span>
          </Link>
          <hr></hr>
        </div>
        <div className={style.Show}>
          <div>
            <div className={style.BookingState}>
              {BOOK_STATUS_LIST.map(ele => {
                return (
                  <span
                    key={ele}
                    onClick={() => setType(ele)}
                    style={{ color: ele === type ? '#2a2a2e' : '#75a8f9' }}>
                    {ele}
                  </span>
                );
              })}
            </div>
            <div className={style.BookingFilter}>
              <h4>Mã số đặt phòng</h4>
              <form>
                <input type='text' placeholder='Mã số đặt phòng' {...filterAttrs}></input>
                <button className={style.search}>Tìm</button>
              </form>
            </div>
          </div>
          <div className={style.hotelBooking}>
            {isLoading && <p>Loading...</p>}
            {!isLoading && isError && <p>Error...</p>}
            {!isLoading &&
              isSuccess &&
              (books.length ? (
                books.map(book => <Card key={book.id} book={book} />)
              ) : (
                <>
                  <p>Bạn chưa có khách sạn "{type}" nào</p>
                  <Link to='/'>
                    <button id={style.booking}> Đặt phòng ngay</button>
                  </Link>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBooking;
