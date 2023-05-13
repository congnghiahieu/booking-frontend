import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import style from "./Card.module.css"
const Card = () => {
    return (
        <div className={style.card}>
            <div className={style.hotelInfor}>
                <div className={style.hotel}>
                    <img src="https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=828x464&ar=16x9"></img>
                    <div className={style.info}>
                        <p id={style.name}>Teen khach san</p>
                        <p id={style.location}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>Dia chi</span>
                        </p>
                        <div className={style.comment}>
                            <p id={style.point}>8.6</p>
                            <p id={style.rate}>rating from point</p>
                            <p id={style.sumOfComment} >sumOfComment</p>
                        </div>
                    </div>
                    <div className={style.discount}>
                        <p id={style.two}>20%</p>
                        <p id={style.one}>GIẢM GIÁ</p>
                    </div>

                </div>
                <div className={style.payment}>
                    <button id={style.booking}>Đặt phòng ngay</button>
                    <button id={style.delete}>Xóa bỏ</button>
                </div>
            </div>
            <div className={style.bookingInfor}>
                <div className={style.booking}>
                    <p id={style.one}> 1 x Căn hộ 1 phòng ngủ</p>
                    <p id={style.two}>Từ ngày nào - đến ngày nào</p>
                </div>
                <div className={style.price}>
                    <p id={style.three}>Gia goc</p>
                    <p id={style.one}>Giá</p>
                    <p id={style.two}>Bao gồm cả thuế và phí</p>
                </div>
            </div>
        </div>
    )
}
export default Card