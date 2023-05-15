import { memo } from 'react';
import style from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { numFormatter } from '../../utils/formatter';
import { LIST_STARS, RANGE_OF_PRICES, TYPES_OF_HOTEL } from '../../utils/constants';

const Sidebar = ({ setFilterStar, setFilterPrices }) => {
  const onFilterPricesChange = range => {
    setFilterPrices(prev => {
      const existIndex = prev.findIndex(existRange => {
        return existRange.start === range.start;
      });
      if (existIndex === -1) {
        return [...prev, range];
      }

      return prev.filter(existRange => existRange.start !== range.start);
    });
  };

  const onFilterStarChange = star => {
    setFilterStar(prev => {
      if (!prev.includes(star)) {
        return [...prev, star];
      }
      return prev.filter(v => v !== star);
    });
  };

  return (
    <>
      <div className={style.sideBar}>
        <div className={style.filter}>
          <h3 style={{ color: '#5a5b5b' }}>Giá mỗi đêm</h3>
          {RANGE_OF_PRICES.map((range, i) => {
            return (
              <span key={range.start} className={style.checkbox_container}>
                <input
                  type='checkbox'
                  id={range.start}
                  onChange={() => onFilterPricesChange(range)}
                />
                <label htmlFor={range.start}>
                  {i !== RANGE_OF_PRICES.length - 1 ? (
                    // Not final element
                    <span>
                      {range.start !== undefined ? numFormatter.format(range.start) : ''}{' '}
                      {range.operator} {range.end ? numFormatter.format(range.end) : ''}{' '}
                    </span>
                  ) : (
                    <span>
                      {range.operator} {numFormatter.format(range.start)}
                    </span>
                  )}
                </label>
              </span>
            );
          })}
        </div>
        <div className={style.filter}>
          <h3 style={{ color: '#5a5b5b' }}>Xếp hạng sao</h3>
          {LIST_STARS.map(star => {
            return (
              <span key={star} className={style.checkbox_container}>
                <input type='checkbox' id={star} onChange={() => onFilterStarChange(star)} />
                <label htmlFor={star}>
                  {Array(star)
                    .fill()
                    .map((v, i) => (
                      <FontAwesomeIcon key={`${v}${i}`} icon={faStar} className='star' />
                    ))}
                </label>
              </span>
            );
          })}
          {/* <span>
            <input type='checkbox' name='none' />
            <label htmlFor='none' /> Chưa xếp hạng
          </span> */}
        </div>
        <div className={style.filter}>
          <h3 style={{ color: '#5a5b5b' }}>Loại hình nơi ở</h3>
          {TYPES_OF_HOTEL.map(type => {
            return (
              <span key={type}>
                <input type='checkbox' name={type} />
                <label htmlFor={type} /> {type}
              </span>
            );
          })}
        </div>

        <div className={style.filter}>
          <h3 style={{ color: '#5a5b5b' }}>Khoảng cách đến trung tâm</h3>
          <span>
            <input type='checkbox' name='5' />
            <label htmlFor='5' /> Bên trong trung tâm thành phố
          </span>
          <span>
            <input type='checkbox' name='4' />
            <label htmlFor='4' /> Cách trung tâm 2 km
          </span>
          <span>
            <input type='checkbox' name='3' />
            <label htmlFor='3' /> Cách trung tâm 2-5 km
          </span>
          <span>
            <input type='checkbox' name='2' />
            <label htmlFor='2' /> Cách trung tâm 5-10 km
          </span>
          <span>
            <input type='checkbox' name='1' />
            <label htmlFor='1' /> Cách trung tâm 5 km
          </span>
        </div>
      </div>
    </>
  );
};
export default memo(Sidebar);
