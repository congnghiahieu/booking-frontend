import style from './HighLightPlace.module.css';
import { getViewLinkGG } from '../../utils/getViewLinkGG';

function HighLightPlace({ place }) {
  return (
    <div className={style.place}>
      <img className={style.place_img} src={`${getViewLinkGG(place.img)}`} alt={place.name} />
      <div className={style.place_name}>{place.name}</div>
    </div>
  );
}

export default HighLightPlace;
