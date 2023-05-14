import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './InputSearchStyle.css';
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearch,
  setFocus,
  setField,
  selectSearch,
  selectSearchField,
} from '../../app/features/search/searchSlice';
import { SEARCH_FIELD } from '../../utils/constants';

const InputSearch = () => {
  const dispatch = useDispatch();
  const [searchValue] = useSelector(selectSearch);

  return (
    <div className='search_bar'>
      <select
        className='search_select'
        onChange={e => {
          dispatch(setField(e.target.value));
        }}
        defaultValue={useSelector(selectSearchField)}>
        {Object.values(SEARCH_FIELD).map(v => (
          <option key={v} value={v} className='search_select_option'>
            {v}
          </option>
        ))}
      </select>
      <div className='search_input'>
        <input
          id='user_input'
          type='text'
          required
          autoComplete='off'
          value={searchValue}
          onChange={e => dispatch(setSearch(e.target.value))}
          onBlur={() => dispatch(setFocus(false))}
          onFocus={() => dispatch(setFocus(true))}
        />
      </div>
      <label htmlFor='user_input' className='icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
    </div>
  );
};

export default memo(InputSearch);
