import { useState, memo } from 'react';
import { useGetAllHotelsQuery } from '../../app/features/api/hotelsSlice';
import HomeSuggestPlace from '../HomeSuggestPlace';
import HomeSuggestHotel from '../HomeSuggestHotel';
import Loading from '../Loading/Loading';
import Error from '../Error';

const places = ['Hồ Chí Minh', 'Vũng Tàu', 'Đà Nẵng', 'Hà Nội', 'Đà Lạt'];
const HomeSuggest = () => {
  const [curCity, setCurCity] = useState(places[0]);
  const [errMsg, setErrMsg] = useState('');
  const {
    data: hotels,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useGetAllHotelsQuery({ page: 1, perPage: 8, city: curCity });

  const isQueryData = isLoading || isFetching;

  return (
    // Đặt tên class để phân biệt, mới chỉ CSS inline tạm thời
    <div
      className='suggest-container'
      style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '200px' }}>
      <h3>Những chỗ nghỉ nổi bật khuyến nghị cho bạn:</h3>
      <ul className='suggest-places' style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        {places.map(place => (
          <HomeSuggestPlace key={place} place={place} setCurPlace={setCurCity}>
            {place}
          </HomeSuggestPlace>
        ))}
      </ul>
      {isQueryData && <Loading />}
      {!isQueryData && isError && <Error />}
      {!isQueryData && isSuccess ? (
        <div className='hotels-container'>
          {/* Layout Grid 4 x 2 */}
          <ul
            className='suggest-list'
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {hotels.ids.map(id => {
              const hotel = hotels.entities[id];
              return <HomeSuggestHotel key={id} hotel={hotel} />;
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(HomeSuggest);
