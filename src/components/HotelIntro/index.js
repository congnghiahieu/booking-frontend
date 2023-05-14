import HotelInfo from "../HotelInfo";
import style from "./HotelIntro.module.css";
import { useGetHotelByIdQuery } from "../../app/features/api/hotelsSlice";
import Loading from "../Loading/Loading";
import LoadingPost from "../Loading/LoadingPost";
import Error from "../Error";
import SlideImage1 from "../SlideImage/SlideImage1";
import { memo } from "react";
import LoadingImg from "../Loading/LoadingImg";
import useTitle from "../../hooks/useTitle";
import { Navigate } from "react-router-dom";
import { hotelLocationFormat } from "../../utils/formatter";

const HotelIntro = ({ hotelId }) => {
  const {
    data: hotel,
    isLoading: isHtLoad,
    isSuccess: isHtOk,
    isError: isHtErr,
  } = useGetHotelByIdQuery(hotelId);

  useTitle(
    hotel
      ? `${hotel.name} - ${hotelLocationFormat(hotel.location)}`
      : "Wygo.com"
  );

  return (
    <div className={style.introContainer}>
      {isHtLoad && <LoadingImg />}
      {!isHtLoad && isHtErr && <Error />}
      {!isHtLoad && isHtOk ? (
        <>
          {hotel ? (
            <>
              <SlideImage1 hotel={hotel} />
              <HotelInfo hotel={hotel} />
            </>
          ) : (
            <Navigate to="/error" />
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(HotelIntro);
