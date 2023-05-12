import { useState } from 'react';
import style from './SearchHotel.module.css';
import { Loading, SearchHeader } from '../../components';
import Sidebar from '../../components/SearchHotel/Sidebar.js';
import HotelInfo from '../../components/SearchHotel/HotelInfo.js';
import HotelPrice from '../../components/SearchHotel/HotelPrice';
import SlideImage from '../../components/SlideImage/SlideImage';
import { useSearchParams } from 'react-router-dom';
import { useGetAllHotelsQuery } from '../../app/features/api/hotelsSlice';
import { SORT_TYPE, TABS } from '../../utils/constants';
import useTitle from '../../hooks/useTitle';
import { createSelector } from '@reduxjs/toolkit';
// const selectFilter = createSelector();

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
          let newIds = data.ids.slice(0);

          // Sort
          switch (type) {
            case SORT_TYPE.MOST_CMT:
              newIds.sort((a, b) => {
                const cmtA = data.entities[a].cmtSum;
                const cmtB = data.entities[b].cmtSum;
                return cmtA - cmtB;
              });
              break;
            case SORT_TYPE.MOST_STAR:
              newIds.sort((a, b) => {
                const starA = data.entities[a].stars;
                const starB = data.entities[b].stars;
                return starB - starA;
              });
              break;
            case SORT_TYPE.MOTST_CHEAP:
              newIds.sort((a, b) => {
                const pricesA = data.entities[a].cheapest || 500000;
                const pricesB = data.entities[b].cheapest || 500000;
                return pricesA - pricesB;
              });
              break;
            case SORT_TYPE.MOST_EXPENSIVE:
              newIds.sort((a, b) => {
                const pricesA = data.entities[a].cheapest || 500000;
                const pricesB = data.entities[b].cheapest || 500000;
                return pricesB - pricesA;
              });
              break;
            default:
              break;
          }

          // Filter star
          if (filterStar.length !== 0) {
            newIds = newIds.filter(id => {
              const hotelStar = data.entities[id].stars;
              return filterStar.includes(hotelStar);
            });
          }
          // Filter prices
          if (filterPrices.length !== 0) {
            newIds = newIds.filter(id => {
              const hotelPrices = data.entities[id].cheapest || 500000;
              return filterPrices.some(range => {
                // start <= hotel price <= end
                if (hotelPrices < range.start) return false;
                if (!range.end) return true;
                return hotelPrices <= range.end;
              });
            });
          }
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
