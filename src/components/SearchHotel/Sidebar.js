import React from "react";
import style from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const TypeOfHotels = ['HomeStay', 'Resort', 'Hotel'];
    return (
        <>
            <div className={style.sideBar}>
                <div className={style.filter}>
                    <h3 style={{ color: '#5a5b5b' }}>Giá mỗi đêm</h3>
                    <span>
                        <input type="checkbox" name="5" />
                        <label htmlFor="5" /> 500 - 1000
                    </span>
                    <span>
                        <input type="checkbox" name="4" />
                        <label htmlFor="4" /> 1000 - 1500
                    </span>
                    <span>
                        <input type="checkbox" name="3" />
                        <label htmlFor="3" /> 1500 - 2000
                    </span>
                    <span>
                        <input type="checkbox" name="2" />
                        <label htmlFor="2" /> 2000 +
                    </span>
                </div>
                <div className={style.filter}>
                    <h3 style={{ color: '#5a5b5b' }}>Xếp hạng sao</h3>
                    <span>
                        <input type="checkbox" name="5" />
                        <label htmlFor="5" >
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </label>
                    </span>
                    <span>
                        <input type="checkbox" name="4" />
                        <label htmlFor="4" >
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </label>
                    </span>
                    <span>
                        <input type="checkbox" name="3" />
                        <label htmlFor="3">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" /></label>
                    </span>
                    <span>
                        <input type="checkbox" name="2" />
                        <label htmlFor="2">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </label>
                    </span>
                    <span>
                        <input type="checkbox" name="1" />
                        <label htmlFor="1">
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </label>
                    </span>
                    <span>
                        <input type="checkbox" name="none" />
                        <label htmlFor="none" /> Chưa xếp hạng
                    </span>
                </div>
                <div className={style.filter}>
                    <h3 style={{ color: '#5a5b5b' }}>Loại hình nơi ở</h3>
                    {TypeOfHotels.map(type => {
                        return <span key={type}>
                            <input type="checkbox" name={type} />
                            <label htmlFor={type} /> {type}
                        </span>
                    })}
                </div>

                <div className={style.filter}>
                    <h3 style={{ color: '#5a5b5b' }}>Khoảng cách đến trung tâm</h3>
                    <span>
                        <input type="checkbox" name="5" />
                        <label htmlFor="5" /> Bên trong trung tâm thành phố
                    </span>
                    <span>
                        <input type="checkbox" name="4" />
                        <label htmlFor="4" /> Cách trung tâm 2 km
                    </span>
                    <span>
                        <input type="checkbox" name="3" />
                        <label htmlFor="3" /> Cách trung tâm 2-5 km
                    </span>
                    <span>
                        <input type="checkbox" name="2" />
                        <label htmlFor="2" /> Cách trung tâm 5-10 km
                    </span>
                    <span>
                        <input type="checkbox" name="1" />
                        <label htmlFor="1" /> Cách trung tâm 5 km
                    </span>

                </div>
            </div>
        </>
    )

}
export default Sidebar;