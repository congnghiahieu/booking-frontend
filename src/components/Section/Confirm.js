import style from './Confirm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useBookingContext } from '../../hooks/useContext';

const Page3 = () => {
  const { formData } = useBookingContext();

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>Thông tin thanh toán</div>
        <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#088c4e' }} className='success' />
        <h1>Đặt phòng thành công !</h1>
        <p>Cảm ơn bạn đã sử dụng dịch vụ đặt phòng của chúng tôi</p>
        <p>
          Vui lòng kiểm tra địa chỉ email <strong>{formData.cusEmail.value}</strong> thường xuyên để
          nhận được thông báo mới nhất của chúng tôi
        </p>
        <p>Chân thành cảm ơn </p>
        <div className={style.button}>
          <Link to='/'>
            <button>Về trang chủ</button>
          </Link>
          <Link to='/user/booking'>
            <button>Xem thông tin đặt phòng </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page3;
