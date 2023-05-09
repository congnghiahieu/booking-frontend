import style from './VNHighLight.module.css';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getViewLinkGG } from '../../utils/getViewLinkGG';

function VNHighLight({ place }) {
  const navigate = useNavigate();

  const onSearchPlace = () => {
    navigate({
      pathname: '/search',
      search: createSearchParams({
        city: place.name,
        start: new Date().valueOf(),
        end: new Date().valueOf(),
      }).toString(),
    });
  };

  return (
    <div className={style.place} onClick={onSearchPlace}>
      <img className={style.place_img} src={getViewLinkGG(place.img)} />
      <div className={style.place_name}>{place.name}</div>
    </div>
  );
}

export default VNHighLight;
