import { useGetServiceByHotelIdQuery } from '../../app/features/api/servicesSlice';
import { memo } from 'react';
import style from './HotelService.module.css';
import Service from '../Service';
import Error from '../Error';
import Loading from '../Loading/Loading';
import LoadingPost from '../Loading/LoadingPost';
import LoadingImg from '../Loading/LoadingImg';

const HotelService = ({ hotelId }) => {
  const {
    data: services,
    isLoading: isSvLoad,
    isSuccess: isSvOk,
    isError: isSvErr,
  } = useGetServiceByHotelIdQuery({ hotelId });

  return (
    <div className={style.svContainer} id='hotelSuggest'>
      {<LoadingImg />}
      {/* {isSvLoad && <LoadingPost />} */}
      {!isSvLoad && isSvErr && <Error />}
      {!isSvLoad && isSvOk ? (
        <>
          <span className={style.header}>Chọn phòng</span>
          <div className={style.list}>
            {services.ids.length ? (
              services.ids.map(id => {
                const service = services.entities[id];
                return <Service key={id} service={service} />;
              })
            ) : (
              <p>Khách sạn này không có dịch vụ nào</p>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(HotelService);
