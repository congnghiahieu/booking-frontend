import React from "react";
import  style from "./HotelPrice.module.css";

const reviews = ['Trên cả tuyệt vời', 'Tuyệt vời', 'Rất tốt', 'Tốt', 'Điểm nhận xét']
const HotelPrice = ({hotel}) => {
    var review = Math.floor(10 - hotel.point);
    if(review > 4) {review = 4};
    return (
        <>
            <div className={style.price}>
                <div className={style.feedBack}>
                    <div className={style.comment}>
                        <h4>{reviews[review]}</h4>
                        <span>{hotel.numOfComments} Nhận xét</span>
                    </div>
                    <div className={style.point}>{hotel.point}</div>
                </div>

                <div className={style.discount}>
                    {hotel.discount != 0 && <p>Còn 1 phòng GIẢM {hotel.discount}</p>}
                    <span>Giá mỗi đêm rẻ nhất từ</span>
                    <span id={style.orginalPrice}>{hotel.orginalPrice}</span>
                    <span id={style.discountPrice}>{hotel.discountPrice}</span>
                    <span className={style.destroy}>+ Hủy miễn phí</span>

                </div>

            </div>
        </>
    )
}
export default HotelPrice;