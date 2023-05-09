import { useEffect, useState } from 'react';
import style from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHotel,
  faHouseChimneyWindow,
  faPlane,
  faPlaneDeparture,
  faCalendarDays,
  faUsers,
  faMagnifyingGlass,
  faCalendarCheck,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';
import {
  DatePlant,
  InputSearch,
  Member,
  SearchSuggestPlaces,
  HighLightPlace,
  HomeSubFooter,
  HomeSuggest,
  HomeAttrVN,
  HomeAttrForeign,
} from '../../components';
import useTitle from '../../hooks/useTitle';
import { createSearchParams, useNavigate } from 'react-router-dom';
import provinvesMap from '../../utils/VI_PROVINCES_MAPPING.json';
import { rmWs, normalizeStr } from '../../utils/normalizeStr';
import { Link, useParams, NavLink } from 'react-router-dom';
const Home = () => {
  useTitle('Wygo.com | Official Website');
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);
  const [searchErr, setSearchErr] = useState('');
  const [norSearchVal, setNorSearchVal] = useState('');
  const [sugPlaces, setSugPlaces] = useState([]);

  useEffect(() => {
    setNorSearchVal(normalizeStr(rmWs(search)));
    setSearchErr('');
    setSugPlaces(() => {
      const places = [];
      Object.keys(provinvesMap).forEach(key => {
        if (key.includes(normalizeStr(rmWs(search)))) places.push(provinvesMap[key]);
      });
      return places;
    });
  }, [search]);

  const onSearch = () => {
    if (!rmWs(search)) return setSearchErr('Vui lòng nhập tên tỉnh thành / thành phố bạn muốn đến');

    if (!Object.keys(provinvesMap).includes(norSearchVal)) {
      return setSearchErr('Hiện tại chúng tôi chỉ hỗ trỡ tìm kiếm các tỉnh thành ở VN');
    }

    navigate({
      pathname: '/search',
      search: createSearchParams({
        city: provinvesMap[norSearchVal],
        start: new Date().valueOf(),
        end: new Date().valueOf(),
      }).toString(),
    });
  };

  const [type, setType] = useState('Hồ Chí Minh');
  const [show, setShow] = useState(false);

  return (
    <div className={style.HOME} id='Home'>
      <div className={style.search_wrapper}>
        <div className={style.tile_script}>
          <h1 className={style.script1}>TÌM TỔ ẤM VỚI AGODA HOMES</h1>
          <h2 className={style.script2}>
            Rộng rãi hơn, chân thực hơn, nhiều lý do để đi du lịch hơn.
          </h2>
        </div>
        <div className={style.search_box}>
          <ul className={style.search_option}>
            <li className={style.detail_list}>
              <span className={style.tile_icon}>
                <FontAwesomeIcon icon={faHotel} />
              </span>
              <div className={style.tile_act}>Khách sạn & nhà</div>
            </li>
            <li className={style.detail_list}>
              <span className={style.tile_icon}>
                <FontAwesomeIcon icon={faHouseChimneyWindow} />
              </span>
              <div className={style.tile_act}>Chỗ ở riêng</div>
            </li>
            <li className={style.detail_list}>
              <span className={style.tile_icon}>
                <FontAwesomeIcon icon={faPlane} />
              </span>
              <div className={style.tile_act}>Máy bay + K.sạn</div>
            </li>
            <li className={style.detail_list}>
              <span className={style.tile_icon}>
                <FontAwesomeIcon icon={faPlaneDeparture} />
              </span>
              <div className={style.tile_act}>Chuyến bay</div>
            </li>
            <li className={style.detail_list}>
              <span className={style.tile_icon}>
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>

              <div className={style.tile_act}>Ở dài ngày</div>
            </li>
            <li className={style.detail_list}>
              <span className={style.tile_icon}>
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <div className={style.tile_act}>Hoạt động</div>
            </li>
          </ul>
          <div className={style.tab_content}>
            <div className={style.DN_select}>
              <span className={style.night_select}>Chỗ ở qua đêm </span>
              <span className={style.day_select}>Chỗ ở trong ngày </span>
            </div>
            <div className={style.input_length}>
              <InputSearch />
            </div>
            <div className={style.select_option}>
              <DatePlant />
              <Member />
            </div>
          </div>
          <button className={style.search_btn}>TÌM</button>
        </div>
      </div>
      <div className={style.home_body}>
        <HomeAttrVN />
        <HomeSuggest />
        <HomeAttrForeign />
      </div>
      <HomeSubFooter />
    </div>
  );
};

export default Home;
