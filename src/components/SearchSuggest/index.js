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
import SuggestItem from '../SuggestItem';
import './SearchSuggest.css';
import { useGetAllHotelsQuery } from '../../app/features/api/hotelsSlice';
import useDebounceInput from '../../hooks/useDebounceInput';

const SearchSuggest = () => {
  const searchValue = useSelector(selectSearchValue);
  const searchField = useSelector(selectSearchField);
  const focus = useSelector(selectFocus);
  const [sugPlaces, setSugPlaces] = useState([]);
  const [skip, setSkip] = useState(true);
  const debounceValue = useDebounceInput(searchValue, 1000);
  const {
    data: suggestHotels,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetAllHotelsQuery({ page: 1, perPage: 15, name: debounceValue }, { skip });

  // console.log(skip);
  // console.log(suggestHotels);

  useEffect(() => {
    if (searchField === SEARCH_FIELD.BY_NAME) setSkip(false);
    else setSkip(true);
  }, [searchField]);

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
    <ul className='PlaceList'>
      {searchField === SEARCH_FIELD.BY_PROVINCE &&
        sugPlaces.slice(0, 15).map(v => (
          // <li key={v} >{v}</li>
          <SuggestItem key={v} placename={v} />
        ))}
      {searchField === SEARCH_FIELD.BY_NAME ? (
        !isLoading && !isFetching && isSuccess ? (
          suggestHotels.ids.map(id => {
            const hotel = suggestHotels.entities[id];
            return <SuggestItem key={hotel.id} placename={hotel.name} hotel={hotel} />;
          })
        ) : (
          <>
            {console.log('is fetching data')}
            <p>Loading...</p>
          </>
        )
      ) : (
        <></>
      )}
    </ul>
  );
};

export default SearchSuggest;
