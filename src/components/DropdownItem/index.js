import style from './DropdownItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropDownItem = ({ value, icon }) => {
  return (
    <>
      <li className={style.dropdownItem}>
        <FontAwesomeIcon icon={icon} />
        <span>{value}</span>
      </li>
    </>
  );
};
export default DropDownItem;
