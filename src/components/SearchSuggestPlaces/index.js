import { memo } from 'react';

const SearchSuggestPlaces = ({ place, setSearch }) => {
  return (
    <li
      onMouseDown={() => setSearch(place)}
      style={{ cursor: 'pointer', position: 'relative', zIndex: '9999' }}>
      {place}
    </li>
  );
};

export default memo(SearchSuggestPlaces);
