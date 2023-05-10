import style from './SuggestItem.module.css';
import { getViewLinkGG } from '../../utils/getViewLinkGG';

const SuggestItem = ({ placename, hotel }) => {
  const imgLink = hotel ? getViewLinkGG(hotel.imgsGG[0]) : '';

  return (
    <div className={style.SuggestItem}>
      <img src={imgLink} />
      <span className={style.province}>{placename}</span>
    </div>
  );
};

export default SuggestItem;
