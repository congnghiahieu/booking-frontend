import HotelInfo from '../HotelInfo';
import ImageSlide from '../ImageSlide';
import style from './HotelIntro.module.css';
import { useGetHotelByIdQuery } from '../../app/features/api/hotelsSlice';
import Loading from '../Loading';
import Error from '../Error';
import SlideImage from '../SlideImage/SlideImage1';
import { memo } from 'react';

const HotelIntro = ({ hotelId }) => {
  const {
    data: hotel,
    isLoading: isHtLoad,
    isSuccess: isHtOk,
    isError: isHtErr,
  } = useGetHotelByIdQuery(hotelId);

  return (
    <div className={style.introContainer}>
      {isHtLoad && <Loading />}
      {!isHtLoad && isHtErr && <Error />}
      {!isHtLoad && isHtOk ? (
        <>
          <div className={style.slideImage}>
            <SlideImage />
          </div>
          <HotelInfo hotel={hotel} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(HotelIntro);
