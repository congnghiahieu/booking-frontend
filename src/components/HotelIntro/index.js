import HotelInfo from '../HotelInfo';
import ImageSlide from '../ImageSlide';
import style from './HotelIntro.module.css';
import { useGetHotelByIdQuery } from '../../app/features/api/hotelsSlice';
import Loading from '../Loading/Loading';
import LoadingPost from '../Loading/LoadingPost';
import Error from '../Error';
import SlideImage1 from '../SlideImage/SlideImage1';
import { memo } from 'react';
import LoadingImg from '../Loading/LoadingImg';

const HotelIntro = ({ hotelId }) => {
  const {
    data: hotel,
    isLoading: isHtLoad,
    isSuccess: isHtOk,
    isError: isHtErr,
  } = useGetHotelByIdQuery(hotelId);

  return (
    <div className={style.introContainer}>
      {isHtLoad && <LoadingImg />}
      {!isHtLoad && isHtErr && <Error />}
      {!isHtLoad && isHtOk ? (
        <>
          <div className={style.slideImage}>
            <SlideImage1 hotel={hotel} />
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
