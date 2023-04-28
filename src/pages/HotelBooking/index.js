import { useState } from "react";
import style from "./HotelBooking.module.css"
import Page1 from "../../components/Section/Validation.js"
import Page2 from "../../components/Section/Payment.js"
import Page3 from "../../components/Section/Confirm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserFriends, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Sidebar from "../../components/HotelBooking/Sidebar";
import ProgressStep from "../../components/HotelBooking/ProgressStep";

const hotel = {
  name: 'Khách sạn Mường Thanh Sài Gòn Center',
  address: 'Sài Gòn',
  location: 'Cách trung tâm 2km',
  star: 2,
  orginalPrice: '1.000.000 $',
  discountPrice: '800.000 $',
  img: 'https://pix8.agoda.net/hotelImages/1032041/-1/39ff37f5b391961283f9ade4c1f2ef68.jpg?ca=17&ce=1&s=450x450',
  discount: '30%',
  point: 9.5,
  numOfComments: '500',
}

const HotelBooking = () => {
  const [page, setPage] = useState(0)
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
    } else {
      return <Page3 />
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
      <ProgressStep page={page} />
      <div className={style.container}>
        <div className={style.show}>
          {PageDisplay()}
          {page != 2 && <div className={style.Booking}>
            <div >
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1"> Nhận email khuyến mãi độc quyền từ chúng tôi</label>
            </div>
            <p>Thực hiện bước tiếp theo đồng nghĩa với việc bạn chấp nhận tuân theo Điều khoản sử dụng và Chính sách bảo mật của Agoda.</p>
            {(page == 0 || page == 1) && <button onClick={nextPage}>Bước tiếp theo</button>}
            {(page == 1 || page == 2) && <button onClick={backPage}>Quay lại bước trước</button>}
            <hr />
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span> Chúng tôi sẽ gửi xác nhận phòng qua địa chỉ email đã được cung cấp</span>
            </div>
          </div>}

        </div>
        <Sidebar hotel={hotel} />
      </div>
      <div className={style.footer}>footer</div>
    </>
  )
};

export default HotelBooking;
