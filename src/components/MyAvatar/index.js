import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../app/features/auth/authSlice';

const MyAvatar = () => {
  const { name, username, googleId } = useSelector(selectUserInfo);

  const shortName = () => {
    if (!name) return '';
    const splits = name.split(' ');
    return splits.length <= 2 ? name : `${splits[0]}. ${splits[splits.length - 1]}`;
  };

  const displayName = shortName() || username || 'Wygo User';

  return (
    <>
      <Avatar
        name={displayName}
        size='40px'
        round='50px'
        alt='Avatar'
        maxInitials={1}
        googleId={googleId || ''}
      />
      <p>{displayName}</p>
      <FontAwesomeIcon icon={faCaretDown} />
    </>
  );
};

export default memo(MyAvatar);
