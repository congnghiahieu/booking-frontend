import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import style from './InputSearchStyle.css';
import { memo } from 'react';

const InputSearch = ({ search, setSearch, placeholder, setFocus }) => {
  return (
    <div className='search_bar'>
      <label htmlFor='user_input' className='icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <div className='search_input'>
        <input
          id='user_input'
          type='text'
          required
          value={search}
          onChange={e => setSearch(e.target.value)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          placeholder={placeholder}
        />
      </div>
    </div>
    // <input
    // placeholder={placeholder}
    // id={id}
    // >
    // </input>
  );
};

export default memo(InputSearch);
