import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';
import { useGetCartByUserIdQuery, useAddCartMutation } from '../../app/features/api/usersSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AddButton = ({ serviceId, className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useSelector(selectUserInfo);
  const { data, isLoading, isSuccess, isFetching } = useGetCartByUserIdQuery(
    { userId: id },
    { skip: !Boolean(id) },
  );
  const [addCart, { isLoading: isAddLoad, isSuccess: isAddOk }] = useAddCartMutation();

  const onDirectToLogin = () => {
    navigate('/login', {
      replace: true,
      state: { from: location },
    });
  };

  const onAddCart = async () => {
    try {
      await addCart({ userId: id, serviceId: serviceId }).unwrap();
    } catch (err) {}
  };

  return (
    <button className={className}>
      {Boolean(id) ? (
        isLoading || isFetching || isAddLoad ? (
          <span>...</span>
        ) : data.cart.includes(serviceId) ? (
          <span onClick={() => navigate('/cart')}>Đã thêm vào giỏ hàng</span>
        ) : (
          <span onClick={onAddCart}>Thêm vào giỏ hàng</span>
        )
      ) : (
        <span onClick={onDirectToLogin}>Thêm vào giỏ hàng</span>
      )}
    </button>
  );
};

export default AddButton;
