import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSearchParams, useNavigate } from 'react-router-dom';
import provinvesMap from '../../utils/VI_PROVINCES_MAPPING.json';
import { normalizeStr } from '../../utils/normalizeStr';
import { SEARCH_FIELD } from '../../utils/constants';
import {
  selectSearchValue,
  selectSearchField,
  selectFocus,
} from '../../app/features/search/searchSlice';

const SearchSuggest = () => {
  const searchValue = useSelector(selectSearchValue);
  const searchField = useSelector(selectSearchField);
  const focus = useSelector(selectFocus);
  const [sugPlaces, setSugPlaces] = useState([]);

  useEffect(() => {
    if (searchField === SEARCH_FIELD.BY_PROVINCE) {
      setSugPlaces(() => {
        const places = [];
        Object.keys(provinvesMap).forEach(key => {
          if (key.includes(normalizeStr(searchValue))) places.push(provinvesMap[key]);
        });
        return places;
      });
    }
  }, [searchValue]);
  return (
    focus && (
      <ul>
        {sugPlaces.slice(0, 5).map(v => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    )
  );
};

export default SearchSuggest;