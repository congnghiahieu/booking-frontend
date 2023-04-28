import React from "react";
import style from "./Progress.module.css";



const ProgressStep = ({page}) => {
    return (
        <>
            <div className={style.header}>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhaycafe.vn%2Fhinh-anh-hoat-hinh-de-thuong-cute%2F&psig=AOvVaw2lDAXvk2ipL0NBJiIjiobO&ust=1681805643891000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCx37G8sP4CFQAAAAAdAAAAABAd" />
                <div className={style.progress}>
                    <div className={style.progressStep}>
                        <div className={`${style.circle} ${page >= 0 ? style.active: ''}`}>1</div>
                        <p id={style.three}>Thông tin khác hàng</p>
                    </div>
                    <div className={style.progressStep}>
                        <span className={page >=1 ? style.active : ''}></span>
                        <div className={`${style.circle} ${page >= 1 ? style.active: ''}`}>2</div>
                        <p>Chi tiết thanh toán</p>
                    </div>
                    <div className={style.progressStep}>
                        <span className={page >=2 ? style.active : ''}></span>
                        <div className={`${style.circle} ${page >= 2 ? style.active: ''}`}>3</div>
                        <p id={style.two}>Đã xác nhận đặt phòng!</p>
                    </div>
                </div>
                <div>abc</div>
            </div>
        </>
    )
}
export default ProgressStep;