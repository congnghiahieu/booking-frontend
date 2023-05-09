import style from './HomeAttrForeign.module.css';
import { memo } from 'react';
import HighLightPlace from '../HighLightPlace';

const ATTRACTIVE_PLACES_FOREIGN = [
  {
    name: 'Osaka',
    img: '1JU9S7zG35KuECkwLm-qIxAWGgdwr5oFb',
  },
  {
    name: 'Tokyo',
    img: '1_BfxYEaECBWwkwq4sWMECmDH9tsj_zQt',
  },
  {
    name: 'Băng Cốc',
    img: '1xXkyzHGJj8lkerDPly96e3R0J4ysShk3',
  },
  {
    name: 'Nagoya',
    img: '1lHh9JmzQm3_JRSXUGUOLl3ZrQWcOCoVC',
  },
  {
    name: 'Seoul',
    img: '1hRL1-04qPDNRbxOv272ezJfQ6ng0yrjw',
  },
  {
    name: 'Singapore',
    img: '1R40M0BoHtsuQPlcY6cXMw7zF0Ug-BEde',
  },
];

const HomeAttrForeign = () => {
  return (
    <div className={style.highlight}>
      <div className={style.text_script}>Các điểm đến nổi tiếng ngoài Việt Nam</div>
      <div className={style.highlight_place}>
        {ATTRACTIVE_PLACES_FOREIGN.map(place => (
          <HighLightPlace place={place} key={place.name} />
        ))}
      </div>
    </div>
  );
};

export default memo(HomeAttrForeign);
