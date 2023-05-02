import style from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserFriends, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useGetHotelByIdQuery } from '../../app/features/api/hotelsSlice';
import { useGetServiceByIdQuery } from '../../app/features/api/servicesSlice';

const Sidebar = ({ hotel: hotelFake, hotelId, serviceId }) => {
  //   const {
  //     data: hotel,
  //     isLoading: isHtLoad,
  //     isSuccess: isHtOk,
  //     isError: isHtErr,
  //   } = useGetHotelByIdQuery(hotelId);
  //   const {
  //     data: service,
  //     isLoading: isSvLoad,
  //     isSuccess: isSvOk,
  //     isError: isSvErr,
  //   } = useGetServiceByIdQuery(serviceId);

  return (
    <>
      <div className={style.Sidebar}>
        <div className={style.card}>
          <div className={style.info}>
            <img src='https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0&s=1024x768' />
            <div className={style.cardBody}>
              <div className={style.discount}>
                <p>{hotelFake.discount}</p>
                <span>GIẢM GIÁ</span>
              </div>
              <h3 className={style.cardTitle}>{hotelFake.name}</h3>
              <p className={style.cardText}>{hotelFake.address}</p>
            </div>
          </div>
        </div>

        <div className={style.card}>
          <h4>21 tháng 4 2023 - 22 tháng 4 2023</h4>
          <h4>1 x Căn Hộ 1 Phòng Ngủ (One-Bedroom Apartment)</h4>
          <div className={style.feedBack}>
            <p className={style.point}>{hotelFake.point}</p>
            <div className={style.comment}>
              <p id={style.one}>Vô cùng sạch sẽ</p>
              <p id={style.two}>Từ {hotelFake.numOfComments} bài viết</p>
            </div>
          </div>
          <hr />
          <div className={style.info}>
            <img
              src='https://pix8.agoda.net/hotelImages/28445719/446868994/21a3e3bd464b525469f219bbbbeec544.jpg?ca=28&ce=0&s=1024x768'
              style={{ width: '120px' }}
            />
            <div>
              <p>
                <FontAwesomeIcon icon={faUserFriends} />
                <span> Tối đa: 2 người lớn, 1 Trẻ em (0-12 tuổi)</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='free' />
                <span> Cà phê & trà </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='free' />
                <span> Wifi miễn phí</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className='free' />
                <span> Nước uống</span>
              </p>
            </div>
          </div>
          <hr />
          <span style={{ color: '#1aac5b' }}>Hủy KHÔNG CÓ RỦI RO</span>
          <p id={style.one}>Đặt phòng ngay hôm nay để nhận những ưu đãi mới nhất từ khách sạn</p>
        </div>
        <div className={style.card}>
          <div className={style.bookingInfo}>
            <span>GIẢM {hotelFake.discount} HÔM NAY</span>
            <div>
              <div className={style.priceSection}>
                <p>Giá gốc:</p>
                <p style={{ textDecoration: 'line-through' }}>{hotelFake.orginalPrice}</p>
              </div>
              <div className={style.priceSection}>
                <p>Giá ưu đãi:</p>
                <p>{hotelFake.discountPrice}</p>
              </div>
              <div className={style.priceSection}>
                <p>Phí đặt trước:</p>
                <p style={{ color: '#488bf8' }}>MIỄN PHÍ</p>
              </div>
            </div>
            <hr />
            <div className={style.priceSection} style={{ fontWeight: '600' }}>
              <p> Tổng chi phí phải thanh toán:</p>
              <p> 1tr2 ₫</p>
            </div>
            <p style={{ fontSize: '12px' }}>Giá đã bao gồm: VAT 147.273 ₫</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
