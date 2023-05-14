import React from "react";
import style from './FeedBackPoint.module.css'
import { getReview } from "../../utils/random";

const FeedBackPoint = ({hotel}) => {
  return (
    <div className={style.hotel_feedback}>
      <h3 className={style.hotel_point}>{hotel.point + " " + getReview(hotel.point)}</h3>
      <p className={style.hotel_numfeed}>{hotel.cmtSum} bài đánh giá</p>
    </div>
  );
};

export default FeedBackPoint;
