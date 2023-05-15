import style from './SuggestItem.module.css';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { useDispatch } from 'react-redux';
import { setSearch, setHotelLink } from '../../app/features/search/searchSlice';

const SuggestItem = ({ placename, imgId, hotel, isHotel }) => {
  const dispatch = useDispatch();
  const imgLink = getViewLinkGG(imgId);

  const onSetLink = () => {
    dispatch(setSearch(placename));
    if (!isHotel) return;
    dispatch(setHotelLink({ slug: hotel.slug, id: hotel.id }));
  };

  return (
    <div className={style.SuggestItem} onMouseDown={onSetLink}>
      <div className={style.img}>
        <img src={imgLink} alt={placename} />
      </div>
      <span className={style.province}>{placename}</span>
    </div>
  );
};

export default SuggestItem;
