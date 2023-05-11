import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import Avatar from 'react-avatar';

const MyAvatar = () => {
  const { name, username } = useAuth();

  const shortName = () => {
    if (!name) return '';
    const splits = name.split(' ');
    return splits.length <= 2 ? name : `${splits[0]}. ${splits[splits.length - 1]}`;
  };

  const displayName = shortName() || username || 'Wygo User';

  return (
    <>
      <Avatar name={displayName} size='40px' round='50px' maxInitials={1} />
      <p>{displayName}</p>
      <FontAwesomeIcon icon={faCaretDown} />
    </>
  );
};

export default memo(MyAvatar);
