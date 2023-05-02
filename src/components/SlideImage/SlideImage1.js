import { useState, memo } from 'react';
import Modal from './Modal';
import './style.css';
const data = [
  {
    'link': 'http://placeimg.com/640/360/any',
  },
  {
    'link': 'http://placeimg.com/640/360/animals',
  },
  {
    'link': 'http://placeimg.com/640/360/people',
  },
  {
    'link': 'http://placeimg.com/640/360/tech',
  },
  {
    'link':
      'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768',
  },
  {
    'link':
      'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768',
  },
  {
    'link':
      'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768',
  },
  {
    'link':
      'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768',
  },
  {
    'link':
      'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768',
  },
  {
    'link':
      'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768',
  },
  {
    'link':
      'https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768',
  },
];

const SlideImage = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter(item => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter(item => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className='wrapper1'>
      <img id='two' src={data[0].link} alt={data[0].text} onClick={() => handleClick(data[0], 0)} />
      {data.map((item, index) => {
        if (index == 0) return <></>;
        if (index > 6) return <></>;
        return (
          <img
            key={index}
            className='wrapper-images'
            src={item.link}
            alt={item.text}
            onClick={() => handleClick(item, index)}
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
