import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../app/features/auth/authSlice';
import jwtDecode from 'jwt-decode';

/**
 *
 * @returns {{username: string, name: string, roles: Array, id: String, fav: Array, cart: Array}}
 */
const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode(token);
    const { username, name, roles, id, fav, cart } = decoded.UserInfo;

    return { username, name, roles, id, fav, cart };
  }

  return { username: '', name: '', roles: null, id: '', fav: null, cart: null };
};
export default useAuth;
