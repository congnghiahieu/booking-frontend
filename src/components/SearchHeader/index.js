import {
    InputSearch,
    DatePlant,
    Member
  } from "../../components";
  import "./SearchHeader.css"

function SearchHeader() {
    return (
        <div className='head_search'>
            <div className='inputLength'>
                <InputSearch placeholder="Căn hộ Nikko - Cuộc sống quý phái" />
            </div>
            <DatePlant />
            <Member />
            <button className="search_btn">
                <span>TÌM</span>
            </button>
        </div>
    );
}

export default SearchHeader;