import style from './VNHighLight.module.css';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../app/features/search/searchSlice';

function VNHighLight({ place }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearchPlace = () => {
    dispatch(setSearch(place.name));

    navigate({
      pathname: '/search',
      search: createSearchParams({
        province: place.name,
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
