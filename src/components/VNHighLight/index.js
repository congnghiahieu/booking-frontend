import style from './VNHighLight.module.css';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { getViewLinkGG } from '../../utils/getViewLinkGG';
import { SEARCH_FIELD } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setField, selectTime } from '../../app/features/search/searchSlice';

function VNHighLight({ place }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [start, end] = useSelector(selectTime);

  const onSearchPlace = () => {
    dispatch(setSearch(place.name));
    dispatch(setField(SEARCH_FIELD.BY_PROVINCE));

    navigate({
      pathname: '/search',
      search: createSearchParams({
        province: place.name,
        start,
        end,
      }).toString(),
    });
  };

  return (
    <div className={style.place} onClick={onSearchPlace}>
      <img className={style.place_img} src={getViewLinkGG(place.img)} alt={place.name} />
      <div className={style.place_name}>{place.name}</div>
    </div>
  );
}

export default VNHighLight;
