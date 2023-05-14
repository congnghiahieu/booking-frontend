import style from './UserProfile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarCheck,
  faCaretDown,
  faCircle,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../app/features/api/usersSlice';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';
import Information from '../../components/UserProfile/Information';
import Payment from '../../components/UserProfile/Payment';
import Follow from '../../components/UserProfile/Follow';
import LoadingImg from '../../components/Loading/LoadingImg';

const UserProfile = () => {
  const { id } = useSelector(selectUserInfo);
  const { data: user, isLoading, isSuccess, isError } = useGetUserByIdQuery(id);

  return (
    <>
      <div className={style.container}>
        <div className={style.Sidebar}>
          <Link to='/user/booking'>
            <FontAwesomeIcon icon={faCalendarCheck} className='iconProfile' />
            <span>Đơn đặt chỗ của tôi</span>
          </Link>
          <Link to='/user/comments'>
            <FontAwesomeIcon icon={faMessage} className='iconProfile' />
            <span>Nhận xét</span>
          </Link>
          <div className={style.profile}>
            <FontAwesomeIcon icon={faUser} className='iconProfile' />
            <span>Hồ sơ</span>
            <FontAwesomeIcon icon={faCaretDown} className='iconProfile' />
          </div>
          <li>
            <a href='#information'>
              <FontAwesomeIcon icon={faCircle} className='iconCircle' />
              <span>Thông tin người dùng</span>
            </a>
            <a href='#payment'>
              <FontAwesomeIcon icon={faCircle} className='iconCircle' />
              <span>Phương thức thanh toán</span>
            </a>
            <a href='#follow'>
              <FontAwesomeIcon icon={faCircle} className='iconCircle' />
              <span>Theo dõi</span>
            </a>
          </li>
          <hr></hr>
        </div>
        {isLoading && <LoadingImg />}
        {!isLoading && isError && <p>Lỗi khi lấy data</p>}
        {!isLoading && isSuccess && (
          <div className={style.Show}>
            <Information user={user} />
            <Payment />
            <Follow />
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
