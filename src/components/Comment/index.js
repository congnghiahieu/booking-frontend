import "./Comment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faBed,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

function Comment({ hotelPoint, userName }) {
  return (
    <div className="Comment">
      <div className="user_in4">
        <p className="userPoint">{hotelPoint}</p>
        <p>
          <b className="userName">{userName}</b>
          <span> từ Việt Nam</span>
        </p>
        <p className="user_info">
          <FontAwesomeIcon icon={faSuitcase} className="icon1" />
          <span>Du lịch một mình</span>
        </p>
        <p className="user_info">
          <FontAwesomeIcon icon={faBed} className="icon1" />
          <span>Căn hộ Deluxe</span>
        </p>
        <p className="user_info">
          <FontAwesomeIcon icon={faCalendarDays} className="icon1" />
          <span>Đã ở 1 đêm vào tháng tư 2023</span>
        </p>
      </div>
      <div className="user_comment">
        <div className="subcomment">
          <div className="comment1">"Nhân viên ko thân thiện”</div>
          <div className="comment2">Nhân viên tiếp tân ko thân thiện</div>
          <div className="time_comment">Đã nhận xét vào 06 tháng ba 2023</div>
          {/* <div className="returnHotel_btn">

          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Comment;
