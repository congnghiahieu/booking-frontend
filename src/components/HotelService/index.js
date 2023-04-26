import { useGetServiceByHotelIdQuery } from '../../app/features/api/servicesSlice';
import style from './HotelService.module.css';
import HotelSuggest from '../HotelSuggest';
import Error from '../Error';
import Loading from '../Loading';

const HotelService = ({ hotelId }) => {
  const {
    data: services,
    isLoading: isSvLoad,
    isSuccess: isSvOk,
    isError: isSvErr,
  } = useGetServiceByHotelIdQuery({ hotelId });

  return (
    <div className={style.svContainer}>
      {isSvLoad && <Loading />}
      {!isSvLoad && isSvErr && <Error />}
      {!isSvLoad && isSvOk ? (
        <>
          <span className={style.header}>Chọn phòng</span>
          <div className={style.list}>
            {services.ids.length ? (
              services.ids.map(id => {
                const service = services.entities[id];
                return <HotelSuggest key={id} service={service} />;
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

export default HotelService;