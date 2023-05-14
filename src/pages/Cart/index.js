import style from './Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CardItem from '../../components/Cart/CartItem';
import { useGetCartByUserIdQuery } from '../../app/features/api/usersSlice';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';

const Cart = () => {
  const { id } = useSelector(selectUserInfo);
  const { data, isLoading, isSuccess } = useGetCartByUserIdQuery({ userId: id, populate: true });
  console.log(data);

  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.title}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Giỏ hàng của quý khách</span>
          </div>
        </div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && isSuccess ? (
          data.cart.length ? (
            data.cart.map(cartItem => <CardItem key={cartItem._id} cartItem={cartItem} />)
          ) : (
            <>
              <span>Bạn chưa có khách sạn sắp tới nào</span>
              <Link to='/'>
                <button> Đặt phòng ngay</button>
              </Link>
            </>
          )
        ) : (
          <p>Error...</p>
        )}
      </div>
    </>
  );
};

export default Cart;
