import { useState } from 'react';
import style from './ImageSlide.module.css';
import { BACKEND_ADDRESS } from '../../utils/constants';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageSlide = ({ imgs }) => {
  const total = imgs.length;
  const [curPage, setCurPage] = useState(1);

  const nextPage = () => {
    setCurPage(prev => (prev === total ? 1 : prev + 1));
  };

  const prevPage = () => {
    setCurPage(prev => (prev === 1 ? total : prev - 1));
  };

  return (
    <div className={style.container}>
      {total ? (
        <>
          {imgs.map((img, i) => (
            <div
              key={img}
              className={`${style.slide} ${style.fade} ${
                curPage !== i + 1 ? `${style.hidden}` : ''
              }`}>
              <div className={style.number}>{`${i + 1}/${total}`}</div>
              <img className={style.image} src={`${BACKEND_ADDRESS}/${img}`} alt='hotel preview' />
            </div>
          ))}
          <button className={style.prev} onClick={prevPage}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className={style.next} onClick={nextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </>
      ) : (
        <p>Không có ảnh để hiện thị</p>
      )}
    </div>
  );
};

export default ImageSlide;
