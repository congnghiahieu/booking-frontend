import React from "react";
import style from "./UserEdit.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarCheck,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UserComment from "../../components/UserComment/UserComment";
const UserComments = () => {
  // const cmt =
  // {
  //   point: '9',
  //   user: {
  //     name: 'Duy Ngo',
  //     nation: 'Viet Nam',
  //   },
  //   title: 'Tren ca tuyet voi',
  //   content: 'Phong rat dep ',
  //   createdAt: '09.05/2023',
  // }

  return (
    <>
      <div className={style.container}>
        <div className={style.Sidebar}>
          <Link to='/user/booking'>
            <FontAwesomeIcon icon={faCalendarCheck} className='iconProfile' />
            <span>Đơn đặt chỗ của tôi</span>
          </Link>
          <div className={style.profile}>
            <FontAwesomeIcon icon={faMessage} className='iconProfile' />
            <span>Nhận xét</span>
          </div>

          <Link to='/user/profile'>
            <FontAwesomeIcon icon={faUser} className='iconProfile' />
            <span>Hồ sơ</span>
          </Link>
          <hr></hr>
        </div>
        <div className={style.Show}>
          <p className={style.yourComment}>Đánh giá của bạn</p>
          <UserComment/>
          <UserComment/>
          <UserComment/>
        </div>

      </div>
    </>
  )
};

export default UserComments;
