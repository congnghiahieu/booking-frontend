import { forwardRef, useMemo, useState,useRef,useEffect } from 'react';
import style from './Progress.module.css';
import useBookingContext from '../../hooks/useBookingContext';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSignOut } from '@fortawesome/free-solid-svg-icons'
import DropDownItem from '../DropdownItem';

const ProgressStep = () => {
  const { page } = useBookingContext();
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(prev => !prev)
  }
  let menuRef = useRef();
  useEffect(()=> {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return() => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return useMemo(() => {
    return (
      <>
        <div className={style.header}>
          <img src='' />
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
              <p id={style.two}>Đã xác nhận đặt phòng!</p>
            </div>
          </div>
          <div className={style.dropdown} ref={menuRef}>
            <button className={style.avatar} onClick={handleClick} >
              <Avatar name="Duy Ngo" size='40px' round='50px' maxInitials={1} />
              <p>Ten</p>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {open && <div className={style.menu}>
              <ul >
                <DropDownItem value={'Đăng xuất'} icon={faSignOut} />
              </ul>
            </div>}
          </div>
        </div>
      </>
    );
  }, [page, open]);
};
export default ProgressStep;
