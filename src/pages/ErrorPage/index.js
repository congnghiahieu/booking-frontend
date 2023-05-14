import React from 'react';
import {
  InputSearch,
  Member,
  DatePlant,
  HomeSubFooter,
  SearchHeader,
  SearchSuggest,
  SearchButton,
} from '../../components';
import { selectSearch } from '../../app/features/search/searchSlice';
import { useSelector } from 'react-redux';
import style from './ErrorPage.module.css';

const ErrorPage = () => {
  const [searchValue] = useSelector(selectSearch);

  return (
    <div className={style.ErrorPage}>
      <div className={style.error_content}>
        <span className={style.text1}>Không có kết quả tìm kiếm cho: {searchValue}</span>
        <span className={style.text2}>Kiểm tra lại thông tin và thử lại:</span>
        <div className={style.search}>
          <div className={style.inputsearch}>
            <InputSearch />
            <SearchSuggest />
          </div>
          <div className={style.dateplant}>
            <DatePlant />
          </div>
          <Member />
          <SearchButton className={style.search_btn} />
        </div>
      </div>

      <div className={style.subfooter}>
        <HomeSubFooter />
      </div>
    </div>
  );
};

export default ErrorPage;
