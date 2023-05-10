import style from "./Edit.module.css"
const RePassword = ({setPassWord}) => {
    return (
        <>
            <div className={style.replace}>
                <div>
                    <label>Mật khẩu hiện tại</label>
                    <br></br>
                    <input></input>
                </div>
                <div>
                    <label>Mật khẩu mới</label>
                    <br></br>
                    <input ></input>
                </div>
                <div>
                    <label>Xác thực mật khẩu mới</label>
                    <br></br>
                    <input ></input>
                </div>
                <div className={style.button}>
                    <button className={style.discard} onClick={() => setPassWord(false)}>Hủy</button>
                    <button className={style.save} onClick={() => setPassWord(false)}>Lưu</button>
                </div>
            </div>
        </>
    )
}
export default RePassword