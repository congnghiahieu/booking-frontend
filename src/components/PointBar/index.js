import style from "./PointBar.module.css";
import { useRef } from "react";

function PointBar({ name }) {
  const getPoint = () => 8 + Math.round(Math.random() * (10 - 8) * 10) / 10;

  const point = useRef(getPoint());
  return (
    <li>
      <div>
        <div className={style.point_bar}>
          <div
            className={style.point_barfilled}
            style={{ width: `${point.current * 10}%` }}
          ></div>
        </div>
        <span className={style.point_text}>{name}</span>
      </div>
      <div className={style.point_script}>
        <span className={style.point_recent}>{point.current}</span>
      </div>
    </li>
  );
}
export default PointBar;
