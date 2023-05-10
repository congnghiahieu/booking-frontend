import style from "./SearchOption.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHotel,faHouseChimneyWindow,faPlane,faPlaneDeparture,faCalendarDays,faUsers} from "@fortawesome/free-solid-svg-icons"
const SearchOption = () => {
    return (
        <>
            <ul className={style.search_option}>
                <li className={style.detail_list}>
                    <span className={style.tile_icon}>
                        <FontAwesomeIcon icon={faHotel} />
                    </span>
                    <div className={style.tile_act}>Khách sạn & nhà</div>
                </li>
                <li className={style.detail_list}>
                    <span className={style.tile_icon}>
                        <FontAwesomeIcon icon={faHouseChimneyWindow} />
                    </span>
                    <div className={style.tile_act}>Chỗ ở riêng</div>
                </li>
                <li className={style.detail_list}>
                    <span className={style.tile_icon}>
                        <FontAwesomeIcon icon={faPlane} />
                    </span>
                    <div className={style.tile_act}>Máy bay + K.sạn</div>
                </li>
                <li className={style.detail_list}>
                    <span className={style.tile_icon}>
                        <FontAwesomeIcon icon={faPlaneDeparture} />
                    </span>
                    <div className={style.tile_act}>Chuyến bay</div>
                </li>
                <li className={style.detail_list}>
                    <span className={style.tile_icon}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </span>

                    <div className={style.tile_act}>Ở dài ngày</div>
                </li>
                <li className={style.detail_list}>
                    <span className={style.tile_icon}>
                        <FontAwesomeIcon icon={faUsers} />
                    </span>
                    <div className={style.tile_act}>Hoạt động</div>
                </li>
            </ul>
        </>
    )
}
export default SearchOption;