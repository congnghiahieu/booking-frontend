import style from './HomeSuggest.module.css';
import { useState, memo } from 'react';
import { useGetAllHotelsQuery } from '../../app/features/api/hotelsSlice';
import HomeStay from '../HomeStay';
import Loading from '../Loading/Loading';
import Error from '../Error';

const HIGHLIGHT_VN = ['Hà Nội', 'Hồ Chí Minh', 'Quảng Ninh', 'Vũng Tàu', 'Đà Nẵng'];

const HomeSuggest = () => {
  const [curProvince, setCurProvince] = useState(HIGHLIGHT_VN[0]);

  const {
    data: hotels,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useGetAllHotelsQuery({ page: 1, perPage: 8, province: curProvince });

  const isQueryData = isLoading || isFetching;

  return (
    <div className={style.highlight_homeStay}>
      <div className={style.text_script}>Những chỗ nghỉ nổi bật khuyến nghị cho bạn:</div>
      <div className={style.suggesstion}>
        {HIGHLIGHT_VN.map(city => {
          return (
            <div
              key={city}
              className={style.options}
              style={
                city == curProvince
                  ? { borderBottom: '2px solid #5392f9', color: '#5392f9' }
                  : { backgroundColor: 'white' }
              }
              onClick={() => setCurProvince(city)}>
              {city}
            </div>
          );
        })}
      </div>
      {isQueryData && <Loading />}
      {!isQueryData && isError && <Error />}
      {!isQueryData && isSuccess ? (
        <div className={style.homeStay_list}>
          {/* Layout Grid 4 x 2 */}
          {hotels.ids.map(id => {
            const hotel = hotels.entities[id];
            return <HomeStay key={id} hotel={hotel} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(HomeSuggest);
