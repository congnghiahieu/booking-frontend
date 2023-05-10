import style from "./Edit.module.css"
const RePhoneNumber = ({setPhoneNumber}) => {
    return (
        <>
            <div className={style.replace}>
                <div>
                    <label>Số điện thoại hiện tại</label>
                    <br></br>
                    <input></input>
                </div>
                <div>
                    <label>Số điện thoại mới</label>
                    <br></br>
                    <input ></input>
                </div>
                <div className={style.button}>
                    <button className={style.discard} onClick={() => setPhoneNumber(false)}>Hủy</button>
                    <button className={style.save} onClick={() => setPhoneNumber(false)}>Lưu</button>
                </div>
            </div>
        </>
    )
}
export default RePhoneNumber