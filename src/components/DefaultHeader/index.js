import style from './DefaultHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseCircleCheck,
  faSignOut,
  faMessage,
  faCalendarCheck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import DropDownItem from '../DropdownItem';
import MyAvatar from '../MyAvatar';
import { useState, useRef, memo } from 'react';
import useClickout from '../../hooks/useClickout';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';
import { useLogoutMutation } from '../../app/features/auth/authApiSlice';
import Cart from '../Cart/Cart';

const DefaultHeader = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const { id } = useSelector(selectUserInfo);

  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useClickout(menuRef, setOpen);

  const onLogout = async () => {
    setOpen(false);
    try {
      await logout().unwrap();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.defaultHeader}>
      <div className={style.homefunction}>
        <Link to='/' className={style.logo}></Link>
        <nav className={style.functiondetail}>
          <NavLink to={'/'} className={({ isActive }) => (isActive ? `${style.active}` : '')}>
            Home
          </NavLink>
        </nav>
        <div className={style.functiondetail}>Máy bay + K.sạn</div>
        <div className={style.functiondetail}>Chỗ ở</div>
        <div className={style.functiondetail}>Phiếu giảm giá và ưu đãi</div>
        <div className={style.functiondetail}>
          <FontAwesomeIcon icon={faHouseCircleCheck} />
          Căn hộ
        </div>
        <div className={style.functiondetail}></div>
      </div>

      {!id ? (
        <div className={style.homelogin}>
          <Link to='/login'>
            <div className={style.login}>Đăng nhập</div>
          </Link>
          <Link to='/register'>
            <div className={style.signup}>Tạo tài khoản</div>
          </Link>
        </div>
      ) : (
        <>
          <Cart />
          <div className={style.dropdown} ref={menuRef}>
            <button className={style.avatar} onClick={() => setOpen(prev => !prev)}>
              <MyAvatar />
            </button>
            {open && (
              <div className={style.menu}>
                <ul>
                  <p className={style.user}>TÀI KHOẢN CỦA TÔI</p>
                  <Link to='/user/booking' onClick={() => setOpen(prev => !prev)}>
                    <DropDownItem value={'Đơn đặt chỗ của tôi'} icon={faCalendarCheck} />
                  </Link>
                  <Link to='user/comments' onClick={() => setOpen(prev => !prev)}>
                    <DropDownItem value={'Nhận xét của tôi'} icon={faMessage} />
                  </Link>
                  <Link to='user/profile' onClick={() => setOpen(prev => !prev)}>
                    <DropDownItem value={'Hồ sơ của tôi'} icon={faUser} />
                  </Link>
                  <div onClick={onLogout}>
                    <DropDownItem value={'Đăng xuất'} icon={faSignOut} />
                  </div>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(DefaultHeader);
