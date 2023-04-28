import style from "./Confirm.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
const Page3 = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.header}>Thông tin thanh toán</div>
                <FontAwesomeIcon icon={faCheckCircle} style={{color: "#088c4e",}} className="success"/>
                <h1>Đặt phòng thành công !</h1>
                <p>Cảm ơn bạn đã sử dụng dịch vụ đặt phòng của chúng tôi</p>
                <p>Bộ phận phụ trách sẽ chủ động liên hệ cho anh(chị) trong thời gian sớm nhất có thể. Trong trường hợp cần gấp vui lòng liên hệ Hotline:0327892024 </p>
                <p>Chân thành cảm ơn </p>
                <div className={style.button}>
                    <a href="/"><button >Về trang chủ</button></a>
                    <a href="/user/booking/a"><button>Xem thông tin đặt phòng </button></a>

                </div>
            </div>
        </>
    )

}
export default Page3;