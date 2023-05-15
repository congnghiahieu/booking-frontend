import { useState } from 'react';
import style from './SearchHotel.module.css';
import { Loading, SearchHeader } from '../../components';
import Sidebar from '../../components/SearchHotel/Sidebar.js';
import HotelInfo from '../../components/SearchHotel/HotelInfo.js';
import HotelPrice from '../../components/SearchHotel/HotelPrice';
import SlideImage from '../../components/SlideImage/SlideImage';
import HomeSubFooter from '../../components/HomeSubFooter';
import { useSearchParams, Navigate } from 'react-router-dom';
import { useGetAllHotelsQuery, selectFilteredIds } from '../../app/features/api/hotelsSlice';
import { SORT_TYPE, TABS, SEARCH_FIELD } from '../../utils/constants';
import useTitle from '../../hooks/useTitle';
import { selectSearchField, selectSearch } from '../../app/features/search/searchSlice';
import { useSelector } from 'react-redux';

const SearchHotel = () => {
  const [searchParams] = useSearchParams();
  const [searchValue] = useSelector(selectSearch);
  const searchField = useSelector(selectSearchField);
  let findField;
  if (searchField === SEARCH_FIELD.BY_PROVINCE) {
    findField = {
      province: searchParams.get('province'),
    };
  } else {
    findField = {
      name: searchParams.get('name'),
    };
  }

  useTitle(`Wygo.com | ${searchValue || 'Tìm kiếm'} `);
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
    { page, ...findField },
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
                    tab === type
                      ? { backgroundColor: '#5392f9', color: '#fff' }
                      : { backgroundColor: 'white' }
                  }
                  onClick={() => setType(tab)}>
                  {tab}
                </div>
              );
            })}
          </div>
          {isLoading || (isFetching && <Loading />)}
          {!isLoading &&
            !isFetching &&
            isSuccess &&
            (hotels?.ids?.length ? (
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
            ) : !hotels?.ids?.length && filterStar.length === 0 && filterPrices.length === 0 ? (
              <Navigate to='/error' replace={true} />
            ) : (
              <p>Không tìm thấy kết quả phù hợp</p>
            ))}
        </div>
      </div>
      <HomeSubFooter />
    </>
  );
};

export default SearchHotel;
