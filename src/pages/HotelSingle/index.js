import React from "react";
import style from "./HotelSingle.module.css";
import {
  InputSearch,
  DatePlant,
  Member,
  NearBy,
  HotelSuggest,
  FeedBack,
  Comment,
} from "../../components";
import { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faStar,
  faPersonWalking,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

const HotelSingle = () => {
  return (
    <div className={style.HotelSingle}>
      <div className={style.head_search}>
        <div className={style.inputLength}>
          <InputSearch placeholder="Căn hộ Nikko - Cuộc sống quý phái" />
        </div>

        <DatePlant />
        <Member />
        <button className={style.search_btn}>
          <span>TÌM</span>
        </button>
      </div>
      <div className={style.hotel_demo}>
        <div className={style.hotel_image}>
          <div className={style.big_image}></div>
          <div className={style.small_image}>
            <span></span>
            <span></span>
          </div>
          <div className={style.small_image}>
            <span></span>
            <span></span>
          </div>
          <div className={style.small_image}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={style.hotel_option}>
        <div className={style.hotel_optionbar}>
          <div className={style.hotel_selectoption}>
            <div className={style.hotel_select}>Tổng quan</div>
            <div className={style.hotel_select}>Phòng nghỉ</div>
            <div className={style.hotel_select}>Tiện ích</div>
            <div className={style.hotel_select}>Đánh giá</div>
            <div className={style.hotel_select}>Vị trí</div>
            <div className={style.hotel_select}>Chính sách</div>
          </div>
          <div className={style.hotel_price}>1.344.123 đ</div>
        </div>
      </div>
      <div className={style.hotel_overview}>
        <div className={style.hotel_overview1}>
          <div className={style.hotel_content1}>
            <div className={style.hotel_name}>
              <div className={style.name_header}>
                <div className={style.logo_wrapper}>
                  <img
                    class={style.Accommodation_type_badge__homes_logo}
                    alt=""
                    src="//cdn6.agoda.net/images/agoda-homes/homes-logo.svg"
                  ></img>
                </div>
                <div className={style.header_script}>Toàn bộ căn hộ</div>
              </div>
              <div className={style.hotel_text}>
                <div className={style.hotel_header}>
                  <p>
                    Căn hộ Nikko - Cuộc sống quý phái (Nikko Apartments - The
                    Classy Life)
                  </p>
                  <span className={style.hotel_star}></span>
                </div>

                <p className={style.hotel_location}>
                  Quận 7, Hồ Chí Minh, Việt Nam
                </p>
                <p className={style.hotel_decription}>
                  Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở
                  lại khách sạn này, nơi có Wi-Fi miễn phí trong tất cả các
                  phòng. Nằm ở vị trí trung tâm tại Quận 7 của Hồ Chí Minh, chỗ
                  nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn
                  uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng
                  tích chiến tranh nổi tiếng. Chỗ nghỉ 5 sao này được trang bị
                  các tiện nghi ngay trong khuôn viên để nâng cao chất lượng và
                  niềm vui cho kỳ nghỉ của quý khách.
                </p>
              </div>
            </div>
            <div className={style.hotel_highlight}>
              <p className={style.highlight_script}>Điểm nổi bật nhất</p>
              <div className={style.highlight_example}>
                <div className={style.example}>
                  <img
                    src="https://cdn6.agoda.net/images/property/highlights/spray.svg"
                    alt=""
                    width="auto"
                    height="32px"
                  ></img>
                  <span className={style.text}>Sạch bóng</span>
                </div>
                <div className={style.example}>
                  <img
                    src="https://cdn6.agoda.net/images/property/highlights/medal.svg"
                    alt=""
                    width="auto"
                    height="32px"
                  ></img>
                  <span className={style.text}>Đáng tiền nhất </span>
                </div>
                <div className={style.example}>
                  <img
                    src="https://cdn6.agoda.net/images/property/highlights/baggage-pay.svg"
                    alt=""
                    width="auto"
                    height="32px"
                  ></img>
                  <span className={style.text}>
                    Khách đi công tác đánh giá rất cao
                  </span>
                </div>
                <div className={style.example}>
                  <img
                    src="https://cdn6.agoda.net/images/property/highlights/door.svg"
                    alt=""
                    width="auto"
                    height="32px"
                  ></img>
                  <span className={style.text}>Nhận phòng [24 giờ]</span>
                </div>
                <div className={style.example}>
                  <img
                    src="https://cdn6.agoda.net/images/property/highlights/bedKing.svg"
                    alt=""
                    width="auto"
                    height="32px"
                  ></img>
                  <span className={style.text}>
                    Chất lượng và tiện nghi phòng tuyệt vời
                  </span>
                </div>
              </div>
            </div>
            <div className={style.hotel_clean}>
              <div className={style.clean_script}>
                <p className={style.clean_header}>Thêm vệ sinh</p>
                <span className={style.clean_p}>
                  Chỗ nghỉ này đã tự lựa chọn và tự chứng nhận các biện pháp vệ
                  sinh sau đây.
                </span>
              </div>
              <div className={style.clean_example}>
                <div className={style.clean_sample}>
                  <img
                    src="https://cdn6.agoda.net/images/default/SafetyFeatures.svg"
                    alt=""
                    width="auto"
                    height="32px"
                    className={style.img_sample}
                  ></img>
                  <span className={style.clean_text}>
                    <p className={style.text1}>Đặc điểm An toàn</p>
                    <p className={style.text2}>
                      Nhân viên được đào tạo về giao thức an toàn
                    </p>
                  </span>
                </div>
                <div className={style.clean_sample}>
                  <img
                    src="https://cdn6.agoda.net/images/default/PreventiveEquipment.svg"
                    alt=""
                    width="auto"
                    height="32px"
                  ></img>
                  <span className={style.clean_text}>
                    <p className={style.text1}>Thiết bị Phòng ngừa</p>
                    <p className={style.text2}>Nước rửa tay</p>
                  </span>
                </div>
                <div className={style.clean_sample}>
                  <img
                    src="https://cdn6.agoda.net/images/default/HealthAndMedical.svg"
                    alt=""
                    width="auto"
                    height="32px"
                  ></img>
                  <span className={style.clean_text}>
                    <p className={style.text1}>Sức khỏe và Y tế</p>
                    <p className={style.text2}>Bộ dụng cụ sơ cứu</p>
                  </span>
                </div>
              </div>
            </div>
            <div className={style.hotel_convinient}>
              <div className={style.convinient_header}>Tiện nghi</div>
              <div className={style.convinient_list}>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={style.icon1}
                    color="#5392f9 "
                  />
                  <span color="#5392f9">Bàn tiếp tân [24 giờ]</span>
                </div>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} />
                  <span>Đưa đón sân bay</span>
                </div>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} />
                  <span>Bãi để xe</span>
                </div>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} />
                  <span>Dịch vụ đưa đón</span>
                </div>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} />
                  <span>Wi-Fi miễn phí trong tất cả các phòng!</span>
                </div>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} />
                  <span>Nhận/trả phòng [nhanh]</span>
                </div>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} />
                  <span>Tiện nghi nấu nướng ngoài trời</span>
                </div>
                <div className={style.convinient_eg}>
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} />
                  <span>Dịch vụ giặt là</span>
                </div>
              </div>
            </div>
            <div className={style.hotel_booked}>
              <span className={style.booked_noti}>
                Phòng ở đây đang bán rất chạy!
              </span>
              <p className={style.booked_number}>4 du khách đã đặt hôm nay.</p>
            </div>
          </div>
          <div className={style.hotel_content2}>
            <div className={style.hotel_feedback}>
              <h3 className={style.hotel_point}>9,3 Trên cả tuyệt vời</h3>
              <p className={style.hotel_numfeed}>514 bài đánh giá</p>
            </div>
            <div className={style.hotel_nearby}>
              <div className={style.feedback_position}>
                <div className={style.hotel_point1}>
                  <span className={style.hotel_point}>
                    9,2 Trên cả tuyệt vời
                  </span>
                  <p>Điểm đánh giá vị trí</p>
                </div>
                <div className={style.text3}>
                  <FontAwesomeIcon icon={faStar} className={style.icon2} />
                  <p>Vị trí hiếm có</p>
                </div>
                <div className={style.text3}>
                  <FontAwesomeIcon
                    icon={faPersonWalking}
                    className={style.icon2}
                  />
                  <p>Tuyệt vời để đi bộ</p>
                </div>
              </div>
              <div className={style.parking}>
                <div>
                  <FontAwesomeIcon icon={faCar} className={style.icon2} />
                  <span>Đỗ xe</span>
                </div>
                <div></div>
                <div className={style.free}>MIỄN PHÍ</div>
              </div>
              <NearBy
                TileNear="Nơi có thể đi bộ"
                place1="Siêu thị Sky 1"
                distance1="330 m"
                place2="Siêu thị Fivimart"
                distance2="360 m"
                place3="Siêu thị K-mart"
                distance3="360 m"
                place4="AEON Citimart"
                distance4="410 m"
                place5="Co.opmart Nam Sài Gòn"
                distance5="490 m"
                place6="Co.opmart Bắc Sài Gòn"
                distance6="580 m"
              />
              <NearBy
                TileNear="Các địa danh nổi tiếng"
                place1="Tòa nhà tài chính Bitexco"
                distance1="5,0 km"
                place2="Quảng trường Hồ Chí Minh"
                distance2="5,1 km"
                place3="Chợ Bến Thành"
                distance3="5,2 km"
                place4="Dinh Độc Lập"
                distance4="5,8 km"
                place5="Nhà thờ Đức Bà Sài Gòn"
                distance5="6,0 km"
                place6="Bưu điện trung tâm Sài Gòn"
                distance6="6,0 km"
              />
              <div className={style.more}>
                <a href="https://vinpearl.com/vi/20-dia-diem-du-lich-viet-nam-noi-tieng-nhat-dinh-nen-den-mot-lan">
                  Xem Thêm Tại đây
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.hotel_booking}>
        <div className={style.hotel_subbook}>
          <span className={style.book_header}>Chọn phòng</span>
          <HotelSuggest
            hotelType="Căn hộ Deluxe (Deluxe Apartment)"
            hotelPoint="9,1"
          />
          <HotelSuggest
            hotelType="Căn hộ dịch vụ NTA (NTA Serviced Apartments)"
            hotelPoint="8,8"
          />
        </div>
      </div>
      <div className={style.feedback}>
        <div className={style.subfeedBack}>
          <FeedBack hotelName="Căn hộ Nikko" hotelPoint="9,1" />

        </div>
      </div>
      <div className={style.comment}>
        <div className={style.subcomment}>
        <Comment hotelPoint="9,9" userName="Trung" />
        <Comment hotelPoint="9,9" userName="Trung" />

        </div>
        
        {/* <Comment 
        hotelPoint="9,9"
        userName="Trung"
        /> */}
      </div>
    </div>
  );
};

export default HotelSingle;
