import { useState, memo } from 'react';
import Modal from './Modal';
import './style.css';
import { getViewLinkGG } from '../../utils/getViewLinkGG';

const SlideImage = ({ hotel }) => {
  const imgs = hotel.imgsGG.map(v => getViewLinkGG(v));
  // // console.log(imgs);

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (imgId, index) => {
    setCurrentIndex(index);
    setClickedImg(imgId);
  };

  const handelRotationRight = () => {
    const totalLength = imgs.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = imgs[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = imgs.filter(imgId => {
      return imgs.indexOf(imgId) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = imgs.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = imgs[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = imgs.filter(item => {
      return imgs.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className='wrapper'>
      <img
        key={0}
        id='one'
        src={imgs[0]}
        alt={`${hotel.name}`}
        onClick={() => handleClick(imgs[0], 0)}
      />
      {imgs.map((imgLink, index) => {
        if (index === 0 || index > 3) return;
        return (
          <img
            key={index}
            className='wrapper-images'
            src={imgLink}
            alt={`${hotel.name}`}
            onClick={() => handleClick(imgLink, index)}
          />
        );
      })}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
  );
};

export default memo(SlideImage);
