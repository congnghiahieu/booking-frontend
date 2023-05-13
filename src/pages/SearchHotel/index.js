import { useState } from 'react';
import style from './SearchHotel.module.css';
import { Loading, SearchHeader } from '../../components';
import Sidebar from '../../components/SearchHotel/Sidebar.js';
import HotelInfo from '../../components/SearchHotel/HotelInfo.js';
import HotelPrice from '../../components/SearchHotel/HotelPrice';
import SlideImage from '../../components/SlideImage/SlideImage';
import HomeSubFooter from '../../components/HomeSubFooter';
import { useSearchParams } from 'react-router-dom';
import { useGetAllHotelsQuery, selectFilteredIds } from '../../app/features/api/hotelsSlice';
import { SORT_TYPE, TABS } from '../../utils/constants';
import useTitle from '../../hooks/useTitle';

const SearchHotel = () => {
  const [searchParams] = useSearchParams();
  const province = searchParams.get('province');
  useTitle(`Wygo.com | ${province || 'Tìm kiếm'} `);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(SORT_TYPE.MOST_FIT);
  const [filterStar, setFilterStar] = useState([]);
  const [filterPrices, setFilterPrices] = useState([]);

  const {
    data: hotels,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetAllHotelsQuery(
    { page, province },
    {
      refetchOnReconnect: true,
      selectFromResult: result => {
        const { data } = result;
        if (data) {
          const newIds = selectFilteredIds(data, type, filterStar, filterPrices);
          return {
            ...result,
            data: {
              ...data,
              ids: newIds,
            },
          };
        }

        return result;
      },
    },
  );

  return (
    <>
      <SearchHeader />
      <div className={style.container}>
        <Sidebar setFilterPrices={setFilterPrices} setFilterStar={setFilterStar} />
        <div className={style.show}>
          <div className={style.suggesstion}>
            {/* <span className={style.vl}>Sắp xếp</span> */}
            {TABS.map(tab => {
              return (
                <div
                  key={tab}
                  className={style.options}
                  style={
                    tab == type
                      ? { backgroundColor: '#5392f9', color: '#fff' }
                      : { backgroundColor: 'white' }
                  }
                  onClick={() => setType(tab)}>
                  {tab}
                </div>
              );
            })}
          </div>
          {!isLoading || (!isFetching && isSuccess) ? (
            hotels?.ids?.length ? (
              hotels.ids.map(id => {
                const hotel = hotels.entities[id];
                return (
                  <div key={id} className={style.card}>
                    <div className={style.hotelImage}>
                      <SlideImage hotel={hotel} />
                    </div>
                    <HotelInfo hotel={hotel} />
                    <HotelPrice hotel={hotel} />
                  </div>
                );
              })
            ) : (
              <p>Xin lỗi không tìm thấy kết quả</p>
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <HomeSubFooter />
    </>
  );
};

export default SearchHotel;
