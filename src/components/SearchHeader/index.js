import { InputSearch, DatePlant, Member, SearchSuggest } from "../../components";
import { memo } from "react";
import "./SearchHeader.css";

function SearchHeader() {
  return (
    <div className="head_search">
      <div className="inputLength">
        <InputSearch />
        <SearchSuggest/>
      </div>
      <div className="mem_dateSelect">
        <DatePlant />
        <Member />
      </div>
      <button className="search_btn">
        <span>TÌM</span>
      </button>
    </div>
  );
}

export default memo(SearchHeader);
