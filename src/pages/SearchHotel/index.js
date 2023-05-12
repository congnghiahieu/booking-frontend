import { useState } from "react";
import style from "./SearchHotel.module.css";
import { Loading, SearchHeader, HomeSubFooter } from "../../components";
import Sidebar from "../../components/SearchHotel/Sidebar.js";
import HotelInfo from "../../components/SearchHotel/HotelInfo.js";
import HotelPrice from "../../components/SearchHotel/HotelPrice";
import SlideImage from "../../components/SlideImage/SlideImage";
import { useSearchParams } from "react-router-dom";
import { useGetAllHotelsQuery } from "../../app/features/api/hotelsSlice";

const tabs = [
  "Phù hợp nhất",
  "Được đánh giá nhiều nhất",
  "Giá thấp nhất trước",
];
const SearchHotel = () => {
  const [searchParams] = useSearchParams();
  const province = searchParams.get("province");
  const {
    data: hotels,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useGetAllHotelsQuery({ page: 1, province }, { refetchOnReconnect: true });

  const [type, setType] = useState("Phù hợp nhất");
  const [show, setShow] = useState(false);
  return (
    <>
      <SearchHeader />
      <div className={style.container}>
        <Sidebar />
        <div className={style.show}>
          <div className={style.suggesstion}>
            <span className={style.vl}>Sắp xếp</span>
            {tabs.map((tab) => {
              return (
                <div
                  key={tab}
                  className={style.options}
                  style={
                    tab == type
                      ? { backgroundColor: "#5392f9", color: "#fff" }
                      : { backgroundColor: "white" }
                  }
                  onClick={() => setType(tab)}
                >
                  {tab}
                </div>
              );
            })}
          </div>
          {hotels ? (
            hotels.ids.map((id) => {
              const hotel = hotels.entities[id];
              return (
                <div key={id} className={style.card}>
                  <SlideImage hotel={hotel} />
                  <HotelInfo hotel={hotel} />
                  <HotelPrice hotel={hotel} />
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <HomeSubFooter/>
    </>
  );
};

export default SearchHotel;
