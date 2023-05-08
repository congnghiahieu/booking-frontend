import { useState } from 'react';
import style from './UserBooking.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarCheck, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../app/features/api/usersSlice';
import useAuth from '../../hooks/useAuth';

const BookingState = ['Sắp tới', 'Hoàn tất', 'Đã hủy'];
const UserBooking = () => {
  const [state, setState] = useState('Sắp tới');
  // const { id } = useAuth();
  // const { data: user, isLoading, isSuccess, isError } = useGetUserByIdQuery(id);

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
              {BookingState.map(ele => {
                return (
                  <span
                    key={ele}
                    onClick={() => setState(ele)}
                    style={{ color: ele === state ? '#2a2a2e' : '#75a8f9' }}>
                    {ele}
                  </span>
                );
              })}
            </div>
            <div className={style.BookingFilter}>
              <h4>Mã số đặt phòng</h4>
              <form>
                <input type='text' placeholder='Mã số đặt phòng'></input>
                <button className={style.search}>Tìm</button>
              </form>
            </div>
          </div>
          <div className={style.hotelBooking}>
            <span>Bạn đéo có khách sạn sắp tới nào</span>
            <Link to='/'>
              <button> Đặt phòng ngay</button>
            </Link>
          </div>
          {/* <div className={style.footer}>

          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserBooking;
