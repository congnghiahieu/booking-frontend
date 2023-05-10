import style from './UserProfile.module.css';
import { useState } from 'react';

const Payment = () => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <div id='payment' className={style.YourPayment}>
        <h2>Phương thức Payment</h2>
        <div className={style.display}>
          <h2>Lưu thông tin thẻ tín dụng của tôi</h2>
          <div className={style.edit}>
            <span>CÓ</span>
            <label className={style.switch}>
              <input type='checkbox' onChange={() => setCheck(prev => !prev)} checked={check} />
              <span className={`${style.slider} ${style.round}`}></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
