import style from './Progress.module.css';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import DropDownItem from '../DropdownItem';
import MyAvatar from '../MyAvatar';
import { useNavigate, Link } from 'react-router-dom';
import { useMemo, useState, useRef } from 'react';
import useClickout from '../../hooks/useClickout';
import { useBookingContext } from '../../hooks/useContext';
import { useLogoutMutation } from '../../app/features/auth/authApiSlice';

const ProgressStep = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const { page } = useBookingContext();

  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useClickout(menuRef, setOpen);

  const onLogout = async () => {
    setOpen(false);
    try {
      await logout().unwrap();
      navigate('/');
    } catch (err) {
      // console.log(err);
    }
  };

  return useMemo(() => {
    return (
      <>
        <div className={style.header}>
          <Link to='/' className={style.logo}></Link>
          <div className={style.progress}>
            <div className={style.progressStep}>
              <div className={`${style.circle} ${page >= 0 ? style.active : ''}`}>1</div>
              <p id={style.three}>Thông tin khác hàng</p>
            </div>
            <div className={style.progressStep}>
              <span className={page >= 1 ? style.active : ''}></span>
              <div className={`${style.circle} ${page >= 1 ? style.active : ''}`}>2</div>
              <p>Chi tiết thanh toán</p>
            </div>
            <div className={style.progressStep}>
              <span className={page >= 2 ? style.active : ''}></span>
              <div className={`${style.circle} ${page >= 2 ? style.active : ''}`}>3</div>
              <p id={style.two}>Xác nhận đặt phòng!</p>
            </div>
          </div>
          <div className={style.dropdown} ref={menuRef}>
            <button className={style.avatar} onClick={() => setOpen(prev => !prev)}>
              <MyAvatar />
            </button>
            {open && (
              <div className={style.menu}>
                <ul>
                  <div onClick={onLogout}>
                    <DropDownItem value={'Đăng xuất'} icon={faSignOut} />
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }, [page, open]);
};
export default ProgressStep;
