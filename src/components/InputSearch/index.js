import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import style from "./InputSearchStyle.css"

function InputSearch({placeholder }) {
  return (

    <div className="search_bar">
      <label
        htmlFor="user_input"
        className="icon"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <div className="search_input">
        <input placeholder={placeholder} id="user_input"></input>.
      </div>
    </div>
    // <input
    // placeholder={placeholder}
    // id={id}
    // >
    // </input>
  );
}

export default InputSearch;
