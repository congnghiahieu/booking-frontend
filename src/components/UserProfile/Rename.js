import style from "./Edit.module.css"
const Rename = ({ setName }) => {
    return (
        <>
            <div className={style.replace}>
                <div>
                    <label>Tên</label>
                    <br></br>
                    <input ></input>
                </div>
                <div>
                    <label>Họ</label>
                    <br></br>
                    <input ></input>
                </div>
                <div className={style.button}>
                    <button className={style.discard} onClick={() => setName(false)}>Hủy</button>
                    <button className={style.save} onClick={() => setName(false)}>Lưu</button>
                </div>
            </div>
        </>
    )
}
export default Rename;