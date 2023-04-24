import "./FeedBack.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faHouse,
  faDoorOpen,
  faBanSmoking,
  faShower,
  faSink,
  faCheck,
  faDollarSign,
  faChildren,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";

function FeedBack({ hotelName, hotelPoint }) {
  var comment = "";
  if (hotelPoint > "9") {
    comment = "Trên cả tuyệt vời";
  } else if (hotelPoint > "8") {
    comment = "Tuyệt vời";
  }
  return (
    <div>
      <div className="feedback_content">
        <span className="feedback_header">
          <span className="feedback_h1">
            Bài đánh giá {hotelName} - Cuộc sống quý phái từ khách thật
          </span>
          <p className="feedback_h2">Đánh giá tổng thể</p>
        </span>
        <div className="point_list">
          <div className="overall">
            <div className="overall_point">{hotelPoint}</div>
            <div className="overall_script">
              <p className="overall_text">{comment}</p>
              <p className="overall_subtext">
                Dựa trên 515 bài đánh giá
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#59a923"
                  className="icon_green"
                />
              </p>
            </div>
          </div>
          <div className="point_detail">
            <p className="detail_point">9,8</p>
            <span className="detail_type">
              Sự thoải mái và chất lượng phòng
            </span>
          </div>
          <div className="point_detail">
            <p className="detail_point">9,6</p>
            <span className="detail_type">Độ sạch sẽ</span>
          </div>
          <div className="point_detail">
            <p className="detail_point">9,5</p>
            <span className="detail_type">Dịch vụ</span>
          </div>
        </div>
        <div className="point">
          <div className="agoda_point">
            <span className="feedback_h2">Điểm số qua Agoda</span>
            <p className="point_on10">{hotelPoint}<span className="on10">/10</span></p>
            <p className="overall_text">{comment}</p>
            <p className="overall_subtext1">
            <FontAwesomeIcon
                  icon={faCheck}
                  color="#59a923"
                  className="icon_green"
                />
                Dựa trên 515 bài đánh giá
                
              </p>
          </div>
          <div className="agoda_listPoint"></div>
        </div>
      </div>
    </div>
  );
}
export default FeedBack;
