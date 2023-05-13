import { useEffect } from 'react';
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
  SearchButton,
  WelcomeBack,
} from '../../components';
import useTitle from '../../hooks/useTitle';
import { setSearchErr, selectSearch } from '../../app/features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchOption from '../../components/Home/SearchOption';
import { selectCurrentToken } from '../../app/features/auth/authSlice';

const Home = () => {
  useTitle('Wygo.com | Official Website');

  const dispatch = useDispatch();
  const token = useSelector(selectCurrentToken);
  const [searchValue, searchErr] = useSelector(selectSearch);

  useEffect(() => {
    dispatch(setSearchErr(''));
  }, [searchValue, dispatch]);

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
          <SearchOption />
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
          <SearchButton className={style.search_btn} />
        </div>
      </div>
      <div className={style.home_body}>
        {token && <WelcomeBack />}
        <HomeAttrVN />
        <HomeSuggest />
        <HomeAttrForeign />
      </div>
      <HomeSubFooter />
    </div>
  );
};

export default Home;
