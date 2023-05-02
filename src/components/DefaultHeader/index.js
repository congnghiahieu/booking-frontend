import style from './DefaultHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faEllipsis,
  faHouseCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DefaultHeader = () => {
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //       const res = await fetch('http://localhost:8888/hotels');
  //       const data = await res.json();
  //       setHotels(data);
  //   }

  //   fetchData();
  // }, [])

  //npx json-server -p 8888 -w ./src/data.json

  return (
    <div className={style.defaultHeader}>
      {/* {
        hotels.map(hotel => {
          return <p key={hotel.id}>{hotel.name}</p>
        })
      } */}
      <div className={style.homefunction}>
        <div className={style.logo}></div>
        <div className={style.functiondetail}>
          <Link to={'/'}>Home</Link>
        </div>
        <div className={style.functiondetail}>Máy bay + K.sạn</div>
        <div className={style.functiondetail}>Chỗ ở</div>
        <div className={style.functiondetail}>Phiếu giảm giá và ưu đãi</div>
        <div className={style.functiondetail}>
          <FontAwesomeIcon icon={faHouseCircleCheck} />
          Căn hộ
        </div>
        <div className={style.functiondetail}>
          {/* <button className="btn"></button> */}

          {/* <div className={style.hidden_function}>
            <label for="check">
              <FontAwesomeIcon icon={faEllipsis} />
            </label>
            <input type={"checkbox"} id="check"></input>
            <div className={style.hidden}>
              <div className={style.hidden_detail}>Hoạt động</div>
              <div className={style.hidden_detail}>Taxi sân bay</div>
              <div className={style.hidden_detail}>Thuê xe</div>
            </div>
          </div> */}
        </div>
      </div>

      <div className={style.homelogin}>
        <div className={style.login}>Đăng nhập</div>
        <div className={style.signup}>Tạo tài khoản</div>
      </div>
    </div>
  );
};

export default DefaultHeader;
