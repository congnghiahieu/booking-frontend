import { useState } from "react";
import style from "./HotelBooking.module.css"
import Page1 from "../../components/Section/Validation.js"
import Page2 from "../../components/Section/Payment.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faUserFriends} from "@fortawesome/free-solid-svg-icons"

const HotelBooking = () => {
  const [page, setPage] = useState(0)
  // const pageTile = ['Validatation', 'Section', 'State']
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailVerification: '',
    phoneNumber: '',
  })
  // var nextStep = false;
  const PageDisplay = () => {
    if (page === 0) {
      return <Page1 formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <Page2 />
    }
  }
  function nextPage() {
    // nextStep = true;
    setPage((curPage) => curPage + 1);
  }
  function backPage() {
    setPage((curPage) => curPage - 1);
  }

  return (
    <>
      <div className={style.header}>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhaycafe.vn%2Fhinh-anh-hoat-hinh-de-thuong-cute%2F&psig=AOvVaw2lDAXvk2ipL0NBJiIjiobO&ust=1681805643891000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCx37G8sP4CFQAAAAAdAAAAABAd" />
        <div className={style.progress}>
          <div className={style.progressStep}>
            <div className={style.circle}>1</div>
            <span></span>
            <p>Thông tin khác hàng</p>
          </div>
          <div className={style.progressStep}>
            <div className={style.circle}>2</div>
            <span></span>
            <p>Thông tin khác hàng</p>
          </div>
          <div className={style.progressStep}>
            <div className={style.circle}>3</div>
            {/* <p>Thông tin khác hàng</p> */}
          </div>
        </div>
        <div>abc</div>
      </div>
      <div className={style.container}>
        <div className={style.show}>
          {PageDisplay()}
          <div className={style.Booking}>
            <div >
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1"> Nhận email khuyến mãi độc quyền từ chúng tôi</label>
            </div>
            <button onClick={nextPage}>Kế tiếp</button>
            <button onClick={backPage}>Quay lại</button>
          </div>
        </div>
        <div className={style.Sidebar}>
          <div className={style.card}>
            <div className={style.info}>
              <img src="https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768" style={{ width: '80px', height: '120px' }} />
              <div className={style.cardBody}>
                <h3 className={style.cardTitle}>Căn hộ LuxHomes Saigon – Vinhomes Central Park (LuxHomes Saigon - Vinhomes Central Park)</h3>
                <p className={style.cardText}>Landmark Building, Vinhomes Central Park, 208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Bình Thạnh, Hồ Chí Minh, Hồ Chí Minh, Việt Nam, 700000</p>
              </div>
            </div>

          </div>

          <div className={style.card}>
            <h4>21 tháng 4 2023 - 22 tháng 4 2023</h4>
            <h4>1 x Căn Hộ 1 Phòng Ngủ (One-Bedroom Apartment)</h4>
            <div className={style.feedBack}>
              <p className={style.point}>9</p>
              <div className={style.comment}>
                <p id={style.one}>Vô cùng sạch sẽ</p>
                <p id={style.two}>Từ ... bài viết</p>
              </div>
            </div>
            <hr/>
            <div className={style.info}>
              <img src="https://pix8.agoda.net/hotelImages/28445719/446868994/21a3e3bd464b525469f219bbbbeec544.jpg?ca=28&ce=0&s=1024x768" style={{ width: '120px' }} />
              <div>
                <p> 
                <FontAwesomeIcon icon={faUserFriends} />
                <span> Tối đa: 2 người lớn, 1 Trẻ em (0-12 tuổi)</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="free" />
                  <span> Cà phê & trà </span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="free"/>
                  <span> Wifi miễn phí</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheck} className="free"/>
                  <span> Nước uống</span>
                </p>
              </div>
            </div>
            <hr/>
            <span style={{ color: '#1aac5b' }}>Hủy KHÔNG CÓ RỦI RO</span>
            <p id={style.one}>Đặt phòng ngay hôm nay để nhận những ưu đãi mới nhất từ khách sạn</p>
          </div>
          <div className={style.card}>
            <div className={style.bookingInfo}>
              <div className={style.priceSection}>
                <p>Giá gốc:</p>
                <p>1tr ₫</p>
              </div>
              <div className={style.priceSection}>
                <p>Giá ưu đãi:</p>
                <p>1tr ₫</p>
              </div>
              <div className={style.priceSection}>
                <p>Phí đặt trước:</p>
                <p style={{ color: '#488bf8' }}>MIỄN PHÍ</p>
              </div>
              <div className={style.priceSection} style={{ fontWeight: '600' }}>
                <p> Tổng chi phí phải thanh toán:</p>
                <p> 1tr2 ₫</p>
              </div>
              <p style={{ fontSize: '12px' }}>Giá đã bao gồm: VAT 147.273 ₫</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer}>footer</div>
    </>
  )
};

export default HotelBooking;
