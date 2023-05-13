import style from './HotelSingle.module.css';
import { FeedBack, HotelIntro, HotelCmt, HotelService, SearchHeader } from '../../components';
import { useParams } from 'react-router-dom';

const HotelSingle = () => {
  const { hotelId } = useParams();

  return (
    <div className={style.HotelSingle}>
      <SearchHeader />
      <div className={style.HotelSingle_main}>
        <HotelIntro hotelId={hotelId} />
        <HotelService hotelId={hotelId} />
        <FeedBack hotelName='Căn hộ Nikko' hotelPoint='9,1' />
        <HotelCmt hotelId={hotelId} />
      </div>
    </div>
  );
};

export default HotelSingle;
