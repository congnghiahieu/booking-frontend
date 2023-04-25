import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faHouseChimneyWindow,
  faPlane,
  faPlaneDeparture,
  faCalendarDays,
  faUsers,
  faMagnifyingGlass,
  faCalendarCheck,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { DatePlant, InputSearch, Member } from "../../components";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("url");
      Array.apply();
    };

    // fetchData()
  }, []);
  // const [place, setplace]=useState('')
  // const [places,setplaces]=useState([])
  const handle = () => {
    // setplaces(prev=>[...prev,place]);
    // console.log(setplaces)
    var tilecontainer = document.getElementsByClassName(tilecontainer);
  };

  return (
    <div className={style.HOME}>
      <div className={style.homecontainer}>
        <section className={style.tilecontainer}>
          <div className={style.tile_background}></div>
          <div className={style.tile_content}>
            <div className={style.tile_script}>
              <h1 className={style.script1}>TÌM TỔ ẤM VỚI AGODA HOMES</h1>
              <h2 className={style.script2}>
                Rộng rãi hơn, chân thực hơn, nhiều lý do để đi du lịch hơn.
              </h2>
            </div>
          </div>
          <div className={style.tile_box}>
            <ul className={style.tablist}>
              <li className={style.detail_list}>
                <span className={style.tile_icon}>
                  <FontAwesomeIcon icon={faHotel} />
                </span>
                <div className={style.tile_act}>Khách sạn & nhà</div>
              </li>
              <li className={style.detail_list}>
                <span className={style.tile_icon}>
                  <FontAwesomeIcon icon={faHouseChimneyWindow} />
                </span>
                <div className={style.tile_act}>Chỗ ở riêng</div>
              </li>
              <li className={style.detail_list}>
                <span className={style.tile_icon}>
                  <FontAwesomeIcon icon={faPlane} />
                </span>
                <div className={style.tile_act}>Máy bay + K.sạn</div>
              </li>
              <li className={style.detail_list}>
                <span className={style.tile_icon}>
                  <FontAwesomeIcon icon={faPlaneDeparture} />
                </span>
                <div className={style.tile_act}>Chuyến bay</div>
              </li>
              <li className={style.detail_list}>
                <span className={style.tile_icon}>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>

                <div className={style.tile_act}>Ở dài ngày</div>
              </li>
              <li className={style.detail_list}>
                <span className={style.tile_icon}>
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <div className={style.tile_act}>Hoạt động</div>
              </li>
            </ul>
            <div className={style.searchBox_container}>
              <div className={style.table_content}>
                <div className={style.searchBox_wrapper}>
                  <div className={style.search_option}>
                    <button className={style.option1}>Chỗ Ở Qua Đêm</button>
                    <button className={style.option2}>Chỗ Ở Trong Ngày</button>
                  </div>
                  <div className={style.search_bar_wrapper}>
                    <div className={style.input_length}>
                      <InputSearch placeholder="Nhập điểm du lịch hoặc tên khách sạn" />
                    </div>
                    <div className={style.select_option}>
                      <div className={style.date_option}>
                        <DatePlant />
                      </div>
                      <div className={style.member_option}>
                        <Member />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.search_box}>
                <button className={style.search_btn}>
                  <span>TÌM</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className={style.homebody}>
          
        </div>
      </div>
    </div>
  );
};

export default Home;