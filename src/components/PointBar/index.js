import style from './PointBar.module.css';
import { useState } from 'react';
import { getRan } from '../../utils/random';
const PointBar = ({ name }) => {
  const [point] = useState(getRan(8, 10, 1));

  return (
    <li>
      <div>
        <div className={style.point_bar}>
          <div className={style.point_barfilled} style={{ width: `${point * 10}%` }}></div>
        </div>
        <span className={style.point_text}>{name}</span>
      </div>
      <div className={style.point_script}>
        <span className={style.point_recent}>{point}</span>
      </div>
    </li>
  );
};
export default PointBar;
