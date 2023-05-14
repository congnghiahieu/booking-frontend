import { memo } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import provinvesMap from '../../utils/VI_PROVINCES_MAPPING.json';
import { normalizeStr } from '../../utils/normalizeStr';
import { SEARCH_FIELD } from '../../utils/constants';
import {
  setSearch,
  setSearchErr,
  selectSearch,
  selectSearchField,
  selectHotelLink,
  selectTime,
} from '../../app/features/search/searchSlice';
import { useSelector, useDispatch } from 'react-redux';

const SearchButton = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue] = useSelector(selectSearch);
  const searchField = useSelector(selectSearchField);
  const hotelLink = useSelector(selectHotelLink);
  const [start, end] = useSelector(selectTime);

  const onSearch = () => {
    // Search by province => direct to search page
    const normalized = normalizeStr(searchValue);
    if (searchField === SEARCH_FIELD.BY_PROVINCE) {
      if (!normalized)
        return dispatch(setSearchErr('Vui lòng nhập tên tỉnh thành / thành phố bạn muốn đến'));
      if (!Object.keys(provinvesMap).includes(normalized)) {
        return dispatch(setSearchErr('Hiện tại chúng tôi chỉ hỗ trợ tìm kiếm các tỉnh thành ở VN'));
      }

      const transformed = provinvesMap[normalized].name;
      dispatch(setSearch(transformed));

      return navigate({
        pathname: '/search',
        search: createSearchParams({
          province: transformed,
          start,
          end,
        }).toString(),
      });
    }

    // Else search by name, direct to hotel single page
    if (!normalized) return dispatch(setSearchErr('Vui lòng nhập tên khách sạn bạn muốn đến'));
    // If user choose (click) one of suggested hotels
    if (hotelLink.slug && hotelLink.id) {
      return navigate(`/hotel/view/${hotelLink.slug}/${hotelLink.id}`);
    }
    // If user type hotel name
    return navigate({
      pathname: '/search',
      search: createSearchParams({
        name: searchValue,
        start,
        end,
      }).toString(),
    });
  };

  return (
    <button className={className} onClick={onSearch}>
      <span>TÌM</span>
    </button>
  );
};

export default memo(SearchButton);
