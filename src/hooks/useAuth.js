import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../app/features/auth/authSlice';
import jwtDecode from 'jwt-decode';

/**
 *
 * @returns {{id: string, googleId: string, username: string, name: string, email: string, phone: string, address: string, avatarUrl: string, roles: Array}}
 */
const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode(token);
    const { id, googleId, username, name, email, phone, address, avatarUrl, roles } =
      decoded.UserInfo;

    return { id, googleId, username, name, email, phone, address, avatarUrl, roles };
  }

  return {
    id: '',
    googleId: '',
    username: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    avatarUrl: '',
    roles: '',
  };
};

export default useAuth;
