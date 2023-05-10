import Rename from "./Rename";
import RePassword from "./RePassword";
import RePhoneNumber from "./RePhoneNumber";
import { useState } from "react";
import style from "./UserProfile.module.css"
const Information = () => {
    const [name, setName] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(false);
    const [password, setPassWord] = useState(false);
    function handleClick(e) {
        if (e.target.id == 'name') {
            setName(true);
        }
        if (e.target.id == 'phoneNumber') {
            setPhoneNumber(true);
        }
        if (e.target.id == 'password') {
            setPassWord(true);
        }
    }
    return (
        <>
            <div id="information" className={style.YourInfo}>
                <h2>Thông tin người dùng</h2>
                {!name && <div className={style.display}>
                    <div className={style.avatar}>
                        <div className={style.icon}>D</div>
                        <div className={style.name}>
                            <h2>Họ & tên</h2>
                            <span>Duy Ngô</span>
                        </div>
                    </div>
                    <div id="name" className={style.edit} onClick={handleClick}>Chỉnh sửa</div>
                </div>}
                {name && <Rename setName={setName} />}
                <div className={style.display}>
                    <div className={style.name}>
                        <h2>Email</h2>
                        <span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                    </div>
                </div>
                {!phoneNumber ? <div className={style.display}>
                    <div className={style.name}>
                        <h2>Số điện thoại</h2>
                        <span>0123123</span>
                    </div>
                    <div id="phoneNumber" className={style.edit} onClick={handleClick}>Chỉnh sửa</div>
                </div> : <RePhoneNumber setPhoneNumber={setPhoneNumber} />}
                {!password && <div className={style.display}>
                    <div className={style.name}>
                        <h2>Mật khẩu</h2>
                        <span>*****</span>
                    </div>
                    <div id="password" className={style.edit} onClick={handleClick}>Chỉnh sửa</div>
                </div>}
                {password && <RePassword setPassWord={setPassWord} />}
            </div>
        </>
    )

}
export default Information