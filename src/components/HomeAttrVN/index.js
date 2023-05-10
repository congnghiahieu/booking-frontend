import style from './HomeAttrVN.module.css';
import { memo } from 'react';
import VNHighLight from '../VNHighLight';

const ATTRACTIVE_PLACES_VN = [
  {
    name: 'Hồ Chí Minh',
    img: '12_P_NdfQrXKHa2pxNncwefddqV9giXRu',
  },
  { name: 'Vũng Tàu', img: '1ragXjd3Y2d0dqMPWFK65_yFYiwt0VTaa' },
  { name: 'Đà Nẵng', img: '1KUzMVbwNHxfFD0t0FsaKUXie5sOZRIc5' },
  { name: 'Hà Nội', img: '1K6SO4JAoUq3rWkczraQ3OACwRna4Lc6G' },
  { name: 'Đà Lạt', img: '1wPcD5bSDX0LbFNnC5XbMmLT1DEPwecUe' },
  { name: 'Nha Trang', img: '19Heq8IexHzUI3WGu2EFvcCtaCo0vZO_s' },
];

const HomeAttrVN = () => {
  return (
    <div className={style.highlight}>
      <div className={style.text_script}>Các điểm đến thu hút nhất Việt Nam</div>
      <div className={style.highlight_place}>
        {ATTRACTIVE_PLACES_VN.map(place => (
          <VNHighLight place={place} key={place.name} />
        ))}
      </div>
    </div>
  );
};

export default memo(HomeAttrVN);