import { useEffect, useState } from 'react';
import style from './Home.module.css';
import {
  DatePlant,
  InputSearch,
  Member,
  HomeSubFooter,
  HomeSuggest,
  HomeAttrVN,
  HomeAttrForeign,
  SearchSuggest,
  WelcomeBack,
} from '../../components';
import useTitle from '../../hooks/useTitle';
import { createSearchParams, useNavigate } from 'react-router-dom';
import provinvesMap from '../../utils/VI_PROVINCES_MAPPING.json';
import { normalizeStr } from '../../utils/normalizeStr';
import { selectSearchValue, selectTime, selectEnd } from '../../app/features/search/searchSlice';
import { useSelector } from 'react-redux';
import SearchOption from '../../components/Home/SearchOption';

const Home = () => {
  useTitle('Wygo.com | Official Website');
  const [searchErr, setSearchErr] = useState('');
  const searchValue = useSelector(selectSearchValue);
  const [start, end] = useSelector(selectTime);

  const navigate = useNavigate();

  useEffect(() => setSearchErr(''), [searchValue]);

  const onSearch = () => {
    const normalized = normalizeStr(searchValue);
    console.log('Normailized: ', normalized);
    if (!normalized) return setSearchErr('Vui lòng nhập tên tỉnh thành / thành phố bạn muốn đến');
    if (!Object.keys(provinvesMap).includes(normalized)) {
      return setSearchErr('Hiện tại chúng tôi chỉ hỗ trỡ tìm kiếm các tỉnh thành ở VN');
    }
    navigate({
      pathname: '/search',
      search: createSearchParams({
        province: provinvesMap[normalized],
        start,
        end,
      }).toString(),
    });
  };

  return (
    <div className={style.HOME} id='Home'>
      <div className={style.search_wrapper}>
        <div className={style.tile_script}>
          <h1 className={style.script1}>TÌM KIẾM KHÁCH SẠN VỚI WYGO</h1>
          <h2 className={style.script2}>
            Rộng rãi hơn, chân thực hơn, nhiều lý do để đi du lịch hơn.
          </h2>
        </div>
        <div className={style.search_box}>
          <SearchOption/>
          <div className={style.tab_content}>
            <div className={style.DN_select}>
              <span className={style.night_select}>Chỗ ở qua đêm </span>
              <span className={style.day_select}>Chỗ ở trong ngày </span>
            </div>
            <div className={style.input_length}>
              <InputSearch />
            </div>
            {/* Search Suggest */}
            {searchErr && <p>{searchErr}</p>}
            {/* Search Suggest */}
            {/* Search Suggest */}
            <div className={style.search_suggest}>
              <SearchSuggest />
            </div>
            {/* Search Suggest */}
            <div className={style.select_option}>
              <DatePlant />
              <Member />
            </div>
          </div>
          <button className={style.search_btn} onClick={onSearch}>
            TÌM
          </button>
        </div>
      </div>
      <div className={style.home_body}>
        <WelcomeBack />
        <HomeAttrVN />
        <HomeSuggest />
        <HomeAttrForeign />
      </div>
      <HomeSubFooter />
    </div>
  );
};

export default Home;
