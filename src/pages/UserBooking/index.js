import { useState } from 'react';
import style from './UserBooking.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarCheck,
  faMessage,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
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
            <div className={style.card}>
              <div className={style.booking}>
                <div className={style.img}></div>
                <div className={style.info}>
                  <p className={style.check}>Đã xác nhận đặt phòng</p>
                  <h4>Tên khách sạn</h4>
                  <span>Mã số đặt phòng: </span>
                  <span className={style.number}>0289301823</span>
                  <div className={style.state}>
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#28871c' }} /> Thanh toán
                    thành công
                  </div>
                  <p id={style.one}>Căn hộ 2 phòng ngủ</p>
                  <p className={style.delete}>Miễn phí hủy phòng</p>
                </div>
                <div className={style.time}>
                  <div className={style.checking}>
                    <p>NHẬN PHÒNG</p>
                    <div className={style.date}>
                      <p>29</p>
                      <div className={style.month}>
                        <p>th4</p>
                        <p>th7</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.checking}>
                    <p>TRẢ PHÒNG</p>
                    <div className={style.date}>
                      <p>29</p>
                      <div className={style.month}>
                        <p>th4</p>
                        <p>th7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className={style.setting}>
                <button>Chỉnh sửa đặt phòng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBooking;
