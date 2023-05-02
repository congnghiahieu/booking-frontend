import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faPersonWalking, faCar } from '@fortawesome/free-solid-svg-icons';
import style from './HotelInfo.module.css';
import { NearBy, HotelOverview, HotelOptionBar } from '../../components';
import { Link, useParams } from 'react-router-dom';

const HotelInfo = ({ hotel }) => {
  console.log(hotel);
  return (
    <div>
      <div>
        <HotelOptionBar />
      </div>
      <div className={style.hotel_overview}>
        <div className={style.hotel_overview1}>
          <div className={style.hotel_content1}>
            <HotelOverview hotel={hotel} />
            <div className={style.hotel_highlight}>
              <p className={style.highlight_script}>Điểm nổi bật nhất</p>
              <div className={style.highlight_example}>
                <div className={style.example}>
                  <img
                    src='https://cdn6.agoda.net/images/property/highlights/spray.svg'
                    alt=''
                    width='auto'
                    height='32px'></img>
                  <span className={style.text}>Sạch bóng</span>
                </div>
                <div className={style.example}>
                  <img
                    src='https://cdn6.agoda.net/images/property/highlights/medal.svg'
                    alt=''
                    width='auto'
                    height='32px'></img>
                  <span className={style.text}>Đáng tiền nhất </span>
                </div>
                <div className={style.example}>
                  <img
                    src='https://cdn6.agoda.net/images/property/highlights/baggage-pay.svg'
                    alt=''
                    width='auto'
                    height='32px'></img>
                  <span className={style.text}>Khách đi công tác đánh giá rất cao</span>
                </div>
                <div className={style.example}>
                  <img
                    src='https://cdn6.agoda.net/images/property/highlights/door.svg'
                    alt=''
                    width='auto'
                    height='32px'></img>
                  <span className={style.text}>Nhận phòng [24 giờ]</span>
                </div>
                <div className={style.example}>
                  <img
                    src='https://cdn6.agoda.net/images/property/highlights/bedKing.svg'
                    alt=''
                    width='auto'
                    height='32px'></img>
                  <span className={style.text}>Chất lượng và tiện nghi phòng tuyệt vời</span>
                </div>
              </div>
            </div>
            <div className={style.hotel_clean}>
              <div className={style.clean_script}>
                <p className={style.clean_header}>Thêm vệ sinh</p>
                <span className={style.clean_p}>
                  Chỗ nghỉ này đã tự lựa chọn và tự chứng nhận các biện pháp vệ sinh sau đây.
                </span>
              </div>
              <div className={style.clean_example}>
                <div className={style.clean_sample}>
                  <img
                    src='https://cdn6.agoda.net/images/default/SafetyFeatures.svg'
                    alt=''
                    width='auto'
                    height='32px'
                    className={style.img_sample}></img>
                  <span className={style.clean_text}>
                    <p className={style.text1}>Đặc điểm An toàn</p>
                    <p className={style.text2}>Nhân viên được đào tạo về giao thức an toàn</p>
                  </span>
                </div>
                <div className={style.clean_sample}>
                  <img
                    src='https://cdn6.agoda.net/images/default/PreventiveEquipment.svg'
                    alt=''
                    width='auto'
                    height='32px'></img>
                  <span className={style.clean_text}>
                    <p className={style.text1}>Thiết bị Phòng ngừa</p>
                    <p className={style.text2}>Nước rửa tay</p>
                  </span>
                </div>
                <div className={style.clean_sample}>
                  <img
                    src='https://cdn6.agoda.net/images/default/HealthAndMedical.svg'
                    alt=''
                    width='auto'
                    height='32px'></img>
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
                  <FontAwesomeIcon icon={faCheck} className={style.icon1} color='#5392f9 ' />
                  <span color='#5392f9'>Bàn tiếp tân [24 giờ]</span>
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
              <span className={style.booked_noti}>Phòng ở đây đang bán rất chạy!</span>
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
                  <span className={style.hotel_point}>9,2 Trên cả tuyệt vời</span>
                  <p>Điểm đánh giá vị trí</p>
                </div>
                <div className={style.text3}>
                  <FontAwesomeIcon icon={faStar} className={style.icon2} />
                  <p>Vị trí hiếm có</p>
                </div>
                <div className={style.text3}>
                  <FontAwesomeIcon icon={faPersonWalking} className={style.icon2} />
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
                TileNear='Nơi có thể đi bộ'
                place1='Siêu thị Sky 1'
                distance1='330 m'
                place2='Siêu thị Fivimart'
                distance2='360 m'
                place3='Siêu thị K-mart'
                distance3='360 m'
                place4='AEON Citimart'
                distance4='410 m'
                place5='Co.opmart Nam Sài Gòn'
                distance5='490 m'
                place6='Co.opmart Bắc Sài Gòn'
                distance6='580 m'
              />
              <NearBy
                TileNear='Các địa danh nổi tiếng'
                place1='Tòa nhà tài chính Bitexco'
                distance1='5,0 km'
                place2='Quảng trường Hồ Chí Minh'
                distance2='5,1 km'
                place3='Chợ Bến Thành'
                distance3='5,2 km'
                place4='Dinh Độc Lập'
                distance4='5,8 km'
                place5='Nhà thờ Đức Bà Sài Gòn'
                distance5='6,0 km'
                place6='Bưu điện trung tâm Sài Gòn'
                distance6='6,0 km'
              />
              <div className={style.more}>
                <a href='https://vinpearl.com/vi/20-dia-diem-du-lich-viet-nam-noi-tieng-nhat-dinh-nen-den-mot-lan'>
                  Đừng bấm vào đây
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HotelInfo);
