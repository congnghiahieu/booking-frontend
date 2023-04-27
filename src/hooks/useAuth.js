import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../app/features/auth/authSlice';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode(token);
    const { username, name, roles, id, fav, cart } = decoded.UserInfo;

    return { username, name, roles, id, fav, cart };
  }

  return {};
};
export default useAuth;
