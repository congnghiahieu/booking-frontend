import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../app/features/auth/authSlice';
import jwtDecode from 'jwt-decode';

/**
 *
 * @returns {{username: string, name: string, email: string, address: Object, roles: Array, id: String}}
 */
const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode(token);
    const { username, name, email, address, roles, id } = decoded.UserInfo;

    return { username, name, email, address, roles, id };
  }

  return { username: '', name: '', email: '', address: {}, roles: null, id: '' };
};

export default useAuth;
