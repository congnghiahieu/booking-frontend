import "./HotelSuggest.css";
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

function HotelSuggest({ hotelType, hotelPoint }) {
  var comment = "";
  if (hotelPoint > "9") {
    comment = "Trên cả tuyệt vời";
  } else if (hotelPoint > "8") {
    comment = "Tuyệt vời";
  }
  return (
    <div className="HotelSuggest">
      <div className="hotel_header">
        <span className="hotel_type">
          <div>{hotelType}</div>
        </span>
        <div></div>
        <span className="hotel_feedback">
          <p className="comment">
            <p className="text1">{comment}</p>
            <p className="text2">Chất lượng phòng ốc</p>
          </p>
          {/* <div></div> */}
          <p className="hotel_point">{hotelPoint}</p>
        </span>
      </div>
      <div className="hotel_sample">
        <div className="room_type">
          <span className="room_text">Loại Phòng</span>
          <div className="room_image">
            <div className="big_image"></div>
            <div className="small_image">
              <div></div>
              <div></div>
            </div>
          </div>
          <a href="https://www.facebook.com/" className="more">
            Xem ảnh và chi tiết
          </a>
          <ul className="room_list">
            <li className="list_things">
              <FontAwesomeIcon icon={faBed} className="icon_things" />
              <div>1 giường đôi lớn</div>
            </li>
            <li className="list_things">
              <FontAwesomeIcon icon={faHouse} className="icon_things" />
              <div>Diện tích phòng: 25 m²</div>
            </li>
            <li className="list_things">
              <FontAwesomeIcon icon={faDoorOpen} className="icon_things" />
              <div>Hướng phòng: Street</div>
            </li>
            <li className="list_things">
              <FontAwesomeIcon icon={faBanSmoking} className="icon_things" />
              <div>Không hút thuốc</div>
            </li>
            <li className="list_things">
              <FontAwesomeIcon icon={faShower} className="icon_things" />
              <div>Vòi sen</div>
            </li>
            <li className="list_things">
              <FontAwesomeIcon icon={faSink} className="icon_things" />
              <div>Bếp nhỏ</div>
            </li>
          </ul>
        </div>
        <div className="room_price">
          <div className="price_header">
            <span className="room_text">Giá này đã gồm</span>
            <span className="room_text">Sức chứa</span>
            <span className="room_text">Thanh toán và hủy bỏ</span>
            <span className="room_text">Giá phòng/đêm</span>
          </div>
          <div className="price_detail">
            <div className="benefit">
              <span className="subtext">Lợi ích</span>
              <div className="benefits">
                <li className="be_details">
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#59a923"
                    className="icon_green"
                  />
                  <span>Miễn phí hủy bỏ trước khi nhận phòng</span>
                </li>
                <li className="be_details">
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#59a923"
                    className="icon_green"
                  />
                  <span>Thanh toán tại nơi ở</span>
                </li>
                <li className="be_details">
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#59a923"
                    className="icon_green"
                  />
                  <span>WiFi miễn phí</span>
                </li>
                <li className="be_details">
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#59a923"
                    className="icon_green"
                  />
                  <span>Đặt không cần thẻ tín dụng</span>
                </li>
              </div>
              <span className="other">
                <span className="subtext">
                  Chương trình thưởng và giảm giá khác
                </span>

                <div className="other_subtext">
                  <div className="icon_dollar">
                    <FontAwesomeIcon icon={faDollarSign} />
                  </div>
                  <span>Thưởng hoàn tiền mặt: 142.130 ₫</span>
                </div>
              </span>
            </div>
            <div className="storage">
              <div className="people">
                <div className="icon_people">
                  <FontAwesomeIcon icon={faChildren} className="icon_couple" />
                  <FontAwesomeIcon
                    icon={faChildReaching}
                    className="icon_children"
                  />
                </div>
                <span className="people_text">2 người lớn,1 trẻ con</span>
              </div>
              <span className="storage_note">
                <p className="note">
                  <span className="notetext">NOTE: </span>1 bé dưới 13 tuổi được
                  ở <span className="free">MIỄN PHÍ!</span>
                </p>
              </span>
            </div>
            <div className="pay_cancel">
              <div className="p_c">
                <span className="subtext">Hủy bỏ</span>
                <div className="p_c1">
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#59a923"
                    className="icon_green"
                  />
                  <a href="" className="more">
                    Chính sách hủy
                  </a>
                </div>
              </div>
              <div className="p_c">
                <span className="subtext">Thanh toán</span>
                <div className="p_c1">
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="#59a923"
                    className="icon_green"
                  />
                  <a href="" className="more">
                    Thanh toán ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="priceD_N">
              <div className="discout"> – 46% CHỈ HÔM NAY!</div>
              <div className="price">
                <span className="old_price">1.352.161 đ</span>
                <span className="new_price">725.958đ</span>
              </div>
              <div className="book">
                <button className="booking">Đặt trước</button>
                <button className="push_list">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSuggest;
