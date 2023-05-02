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
import {
  DatePlant,
  InputSearch,
  Member,
  HighLightPlace,
  HomeStay,
} from "../../components";
import {} from "../Home";
import { Link, useParams } from "react-router-dom";

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
    <div className={style.HOME} id="Home">
      <div className={style.search_wrapper}>
        <div className={style.tile_script}>
          <h1 className={style.script1}>TÌM TỔ ẤM VỚI AGODA HOMES</h1>
          <h2 className={style.script2}>
            Rộng rãi hơn, chân thực hơn, nhiều lý do để đi du lịch hơn.
          </h2>
        </div>
        <div className={style.search_box}>
          <ul className={style.search_option}>
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
          <div className={style.tab_content}>
            <div className={style.DN_select}>
              <span className={style.night_select}>Chỗ ở qua đêm </span>
              <span className={style.day_select}>Chỗ ở trong ngày </span>
            </div>
            <div className={style.input_length}>
              <InputSearch />
            </div>
            <div className={style.select_option}>
              <DatePlant />
              <Member />
            </div>
          </div>
          <button className={style.search_btn}>TÌM</button>
        </div>
      </div>
      <div className={style.home_body}>
        <div className={style.highlight}>
          <div className={style.text_script}>
            Các điểm đến thu hút nhất Việt Nam
          </div>
          <div className={style.highlight_place}>
            <HighLightPlace placeName="Hồ Chí Minh" />
            <HighLightPlace placeName="Vũng Tàu" />
            <HighLightPlace placeName="Đà Nẵng" />
            <HighLightPlace placeName="Hà Nội" />
            <HighLightPlace placeName="Đà Lạt" />
            <HighLightPlace placeName="Nha Trang" />
          </div>
        </div>
        <div className={style.highlight_homeStay}>
          <div className={style.text_script}>
            Những chỗ nghỉ nổi bật khuyến nghị cho bạn:
          </div>
          <div className={style.homeStay_list}>
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
          </div>
          <div className={style.homeStay_list}>
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
            <HomeStay HomeStayName="Căn hộ dịch vụ NTA (NTA Serviced Apartments)" />
          </div>
        </div>
        <div className={style.highlight}>
          <div className={style.text_script}>
            Các điểm đến nổi tiếng ngoài Việt Nam
          </div>
          <div className={style.highlight_place}>
            <HighLightPlace placeName="Osaka" />
            <HighLightPlace placeName="Tokyo" />
            <HighLightPlace placeName="Nagoya" />
            <HighLightPlace placeName="Phnom Penh" />
            <HighLightPlace placeName="Seoul" />
            <HighLightPlace placeName="Singapore" />
          </div>
        </div>
      </div>
      <div className={style.footer1_wrapper}>
        <div className={style.footer1}>
          <div className={style.footer_func}>
            <span className={style.footer_header}>Trợ giúp </span>
            <li>Trung tâm trợ giúp</li>
            <li>Câu hỏi thường gặp</li>
            <li>Chính sách Bảo mật</li>
            <li>Chính sách về cookie</li>
            <li>Điều khoản sử dụng</li>
            <li>Quản lý thiết lập cookie</li>
          </div>
          <div className={style.footer_func}>
            <span className={style.footer_header}>Công ty</span>
            <li>Về chúng tôi</li>
            <li>Tuyển dụng</li>
            <li>Báo chí</li>
            <li>Nhật ký Mạng</li>
            <li>PointsMax</li>
            
          </div>
          <div className={style.footer_func}>
            <span className={style.footer_header}>Điểm du lịch</span>
            <li>Quốc gia</li>
            <li>Thành Phố</li>
          </div>
          <div className={style.footer_func}>
            <span className={style.footer_header}>Đối tác của chúng tôi</span>
            <li>Cổng thông tin đối tác YCS</li>
            <li>Partner Hub</li>
            <li>Quảng cáo trên TDH2</li>
            <li>Đối tác liên kết</li>
            <li>Đối tác kết nối</li>
          </div>
          <div className={style.footer_func}>
            <span className={style.footer_header}>Tải ứng dụng</span>
            <li>Ứng dụng IOS</li>
            <li>Ứng dụng Android</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
