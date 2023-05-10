import style from "./Card.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
const Card = () => {
    return (
        <>
            <div className={style.card}>
                <div className={style.booking}>
                    <div className={style.img}></div>
                    <div className={style.info}>
                        <p className={style.check}>Đã xác nhận đặt phòng</p>
                        <h4>Tên khách sạn</h4>
                        <span>Mã số đặt phòng: </span>
                        <span className={style.number}>0289301823</span>
                        <div className={style.state}>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#28871c' }} /> Thanh toán
                            thành công
                        </div>
                        <p id={style.one}>Căn hộ 2 phòng ngủ</p>
                        <p className={style.delete}>Miễn phí hủy phòng</p>
                    </div>
                    <div className={style.time}>
                        <div className={style.checking}>
                            <p>NHẬN PHÒNG</p>
                            <div className={style.date}>
                                <p>29</p>
                                <div className={style.month}>
                                    <p>th4</p>
                                    <p>th7</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.checking}>
                            <p>TRẢ PHÒNG</p>
                            <div className={style.date}>
                                <p>29</p>
                                <div className={style.month}>
                                    <p>th4</p>
                                    <p>th7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className={style.setting}>
                    <button>Chỉnh sửa đặt phòng</button>
                </div>
            </div>
        </>
    )
}
export default Card
