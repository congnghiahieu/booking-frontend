import style from "./UserProfile.module.css"
import { useState } from "react";
const Follow = () => {
    const [check, setCheck] = useState(true);
    return (
        <>
            <div id="follow" className={style.YourFollow}>
                <h2>Theo dõi</h2>
                <div className={style.display}>
                    <div className={style.name}>
                        <h2>Bản tin</h2>
                        <span>
                            <input type='radio' id='Everyday' name='news' value='Everyday' />
                            <label htmlFor='Everyday'>Hằng ngày</label>
                        </span>
                        <span>
                            <input type='radio' id='2times/week' name='news' value='2times/week' />
                            <label htmlFor='2times/week'>Hai lần một tuần</label>
                        </span>
                        <span>
                            <input type='radio' id='Everyweek' name='news' value='Everyweek' />
                            <label htmlFor='Everyweek'>Hằng tuần</label>
                        </span>
                        <span>
                            <input type='radio' id='Never' name='news' value='Never' checked />
                            <label htmlFor='Never'>Không bao giờ</label>
                        </span>
                    </div>
                </div>

                <div className={style.display}>
                    <h2>Bạn muốn nhận thông tin nhắc nhở hỗ trợ đặt phòng</h2>
                    <div className={style.edit}>
                        <span>KHÔNG</span>
                        <label className='switch'>
                            <input type='checkbox' />
                            <span className='slider round'></span>
                        </label>
                    </div>
                </div>
                <div className={style.display}>
                    <h2>Tôi muốn nhận email về khuyến mãi</h2>
                    <div className={style.edit}>
                        <span>KHÔNG</span>
                        <label className='switch'>
                            <input type='checkbox' />
                            <span className='slider round'></span>
                        </label>
                    </div>
                </div>
                <div className={style.display}>
                    <h2>Tôi muốn biết thông tin và ưu đãi liên quan đến chuyến đi sắp tới của mình</h2>
                    <div className={style.edit}>
                        <span>CÓ</span>
                        <label className='switch'>
                            <input type='checkbox' checked={check} onChange={e => setCheck(prev => !prev)} />
                            <span className='slider round'></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Follow