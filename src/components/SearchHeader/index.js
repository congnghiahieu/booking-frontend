import { InputSearch, DatePlant, Member, SearchSuggest, SearchButton } from '../../components';
import { memo } from 'react';
import './SearchHeader.css';

function SearchHeader() {
  return (
    <div className='head_search'>
      <div className='inputLength'>
        <InputSearch />
        <SearchSuggest />
      </div>
      <div className='mem_dateSelect'>
        <DatePlant />
        <Member />
      </div>
      <SearchButton className='search_btn' />
    </div>
  );
}

export default memo(SearchHeader);
