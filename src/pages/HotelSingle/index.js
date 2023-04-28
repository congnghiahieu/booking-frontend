import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faPersonWalking, faCar } from '@fortawesome/free-solid-svg-icons';
import style from './HotelSingle.module.css';
import {
  InputSearch,
  DatePlant,
  Member,
  NearBy,
  HotelSuggest,
  FeedBack,
  HotelIntro,
  HotelCmt,
  HotelService,
} from '../../components';
import { Link, useParams } from 'react-router-dom';

const HotelSingle = () => {
  const { hotelId } = useParams();

  return (
    <div className={style.HotelSingle}>
      <div className={style.head_search}>
        <div className={style.inputLength}>
          <InputSearch placeholder="Căn hộ Nikko - Cuộc sống quý phái" />
        </div>

        <DatePlant />
        <Member />
        <button className={style.search_btn}>
          <span>TÌM</span>
        </button>
      </div>

      <HotelIntro hotelId={hotelId} />


      <HotelService hotelId={hotelId} />

      <div className={style.feedback}>
        <div className={style.subfeedBack}>
          <FeedBack hotelName='Căn hộ Nikko' hotelPoint='9,1' />
        </div>
      </div>
      {/* {isCmtLoad && <Loading />}
      {!isCmtLoad && isCmtErr && <Error />}
      {!isCmtLoad && isCmtOk ? <HotelCmt cmts={cmts} /> : <></>} */}
      <HotelCmt hotelId={hotelId} />
    </div>
  );
};

export default HotelSingle;
