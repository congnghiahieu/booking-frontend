import style from './SuggestItem.module.css';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { useDispatch } from 'react-redux';
import { setSearch, setFocus } from '../../app/features/search/searchSlice';

const SuggestItem = ({ placename, hotel }) => {
  const dispatch = useDispatch();
  const imgLink = hotel ? getViewLinkGG(hotel.imgsGG[0]) : '';

  return (
    <div className={style.SuggestItem}>
      <img src={imgLink} />
      <span
        className={style.province}
        onMouseDown={() => {
          dispatch(setSearch(placename));
        }}>
        {placename}
      </span>
    </div>
  );
};

export default SuggestItem;
