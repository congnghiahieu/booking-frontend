import style from "./UserComment.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSuitcase,faCalendarDays} from "@fortawesome/free-solid-svg-icons"
const UserComment = () => {
    return (
        <>
            <div className={style.comment}>
                <div className={style.hotel}>
                    <h3>Teen can ho</h3>
                    <img/>
                    {/* <p>
                        <FontAwesomeIcon icon={faSuitcase} className='icon1' />
                        <span>Du lịch một mình</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCalendarDays} className='icon1' />
                        <span>Đã ở ... đêm vào tháng tư 2023</span>
                    </p> */}
                </div>
                <div className={style.UserComment}>
                    <div className={style.subComment}>
                        <div className={style.title}>asdasdsad</div>
                        <div className={style.content}>basdas</div>
                        <div className={style.timeComment}>
                            Đã nhận xét vào .....
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserComment