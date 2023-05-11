import style from './SuggestItem.module.css';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { useDispatch } from 'react-redux';
import { setSearch, setFocus } from '../../app/features/search/searchSlice';

const SuggestItem = ({ placename, imgId }) => {
  const dispatch = useDispatch();
  const imgLink =getViewLinkGG(imgId);

  return (
    <div className={style.SuggestItem}>
      <div className={style.img}>
        <img src={imgLink} />
      </div>

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
