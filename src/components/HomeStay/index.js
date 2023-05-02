import style from "./HomeStay.module.css";
import { useRef } from "react";

function HomeStay({ HomeStayName }) {
  const getPoint = () => 8 + Math.round(Math.random() * (10 - 8) * 10) / 10;
  const point = useRef(getPoint());
  return (
    <div className={style.HomeStay}>
      <div className={style.HomeStay_img}>
        <div className={style.HomeStay_point}>{point.current}</div>
      </div>
      <div className={style.HomeStay_name}>{HomeStayName}</div>
      <div className={style.HomeStay_location}>Quận 1, Hồ Chí Minh</div>
      <div className={style.HomeStay_price}>VND 1.456.789</div>
    </div>
  );
}

export default HomeStay;
