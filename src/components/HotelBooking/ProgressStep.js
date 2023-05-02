import { useMemo } from 'react';
import style from './Progress.module.css';
import useBookingContext from '../../hooks/useBookingContext';

const ProgressStep = () => {
  const { page } = useBookingContext();
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
          <div>abc</div>
        </div>
      </>
    );
  }, [page]);
};
export default ProgressStep;
