import style from './DefaultHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faHouseCircleCheck,
  faSignOut,
  faMessage,
  faCalendarCheck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import DropDownItem from '../DropdownItem';
import useClickout from '../../hooks/useClickout';

const DefaultHeader = () => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useClickout(menuRef, setOpen);

  return (
    <div className={style.defaultHeader}>
      <div className={style.homefunction}>
        <div className={style.logo}></div>
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

      {/* <div className={style.homelogin}>
        <div className={style.login}>Đăng nhập</div>
        <div className={style.signup}>Tạo tài khoản</div>
      </div> */}

      <div className={style.dropdown} ref={menuRef}>
        <button className={style.avatar} onClick={() => setOpen(prev => !prev)}>
          <Avatar name='Duy Ngo' size='40px' round='50px' maxInitials={1} />
          <p>Ten</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        {open && (
          <div className={style.menu}>
            <ul>
              <p className={style.user}>TÀI KHOẢN CỦA TÔI</p>
              <Link to='/user/booking'>
                <DropDownItem value={'Đơn đặt chỗ của tôi'} icon={faCalendarCheck} />
              </Link>
              <Link to='user/comments'>
                <DropDownItem value={'Nhận xét của tôi'} icon={faMessage} />
              </Link>
              <Link to='user/profile'>
                <DropDownItem value={'Hồ sơ của tôi của tôi'} icon={faUser} />
              </Link>
              <Link to='/'>
                <DropDownItem value={'Đăng xuất'} icon={faSignOut} />
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(DefaultHeader);
