import style from './CartItem.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useGetCartByUserIdQuery } from '../../app/features/api/usersSlice';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';

const Cart = () => {
  const { id } = useSelector(selectUserInfo);
  const { data, isLoading, isSuccess } = useGetCartByUserIdQuery({ userId: id });
  return (
    <Link to='/cart' className={style.cart_link}>
      <FontAwesomeIcon icon={faCartShopping} />
      <div className={style.quantity}>
        {isLoading && <span>...</span>}
        {!isLoading && isSuccess && data.cart.length !== 0 && <span>{data.cart.length}</span>}
      </div>
    </Link>
  );
};
export default Cart;
