import style from './HotelBooking.module.css';
import PageDisplay from '../../components/Section/PageDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserFriends, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TRANS_TYPES } from '../../utils/constants';
import Sidebar from '../../components/HotelBooking/Sidebar';
import ProgressStep from '../../components/HotelBooking/ProgressStep';
import { Loading } from '../../components';
import useBookingContext from '../../hooks/useBookingContext';
import { useAddBookMutation } from '../../app/features/api/booksSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
};

const HotelBooking = () => {
  const { hotelId, serviceId } = useParams();
  const [searchParams] = useSearchParams();
  const start = searchParams.get('start');
  const end = searchParams.get('end');
  const { id } = useAuth();

  const {
    page,
    setPage,
    value,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    canSubmit,
    submitHide,
    formData,
  } = useBookingContext();
  const [addBook, { isLoading }] = useAddBookMutation();

  const prevPage = () => setPage(curPage => curPage - 1);
  const nextPage = () => setPage(curPage => curPage + 1);

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    try {
      // Get customer info and card info
      let cusInfo;
      let cardInfo;
      Object.keys(formData).forEach(key => {
        if (key.startsWith('cus')) {
          cusInfo[key] = formData[key].value;
        } else {
          cardInfo[key] = formData[key].value;
        }
      });
      const submitData = {
        userId: id,
        cusInfo,
        hotelId: hotelId,
        serviceId: serviceId,
        start: start,
        end: end,
        card: cardInfo,
        value,
        transType: TRANS_TYPES.BOOKING,
      };
      console.log(submitData);

      // await addBook(submitData).unwrap();
      // setPage(2);
    } catch (err) {
      console.log(err);
      if (!err.status) {
        console.log('No Server Response');
      }
    }
  };

  return (
    <>
      {/* Progress */}
      <ProgressStep />
      {/* Main form */}
      <div className={style.container}>
        <div className={style.show}>
          {/* Multipage form */}
          {isLoading && <Loading />}
          <PageDisplay />
          {/* Redirect button */}
          {page != 2 && (
            <div className={style.Booking}>
              <div>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck2'
                  onChange={e => e.target}
                />
                <label className='form-check-label' htmlFor='exampleCheck2'>
                  {' '}
                  Nhận email khuyến mãi độc quyền từ chúng tôi
                </label>
              </div>
              <p>
                Thực hiện bước tiếp theo đồng nghĩa với việc bạn chấp nhận tuân theo Điều khoản sử
                dụng và Chính sách bảo mật của Wygo.
              </p>
              <button
                onClick={prevPage}
                type='button'
                className={`button ${prevHide}`}
                disabled={disablePrev}>
                Quay lại bước trước
              </button>
              <button
                onClick={nextPage}
                type='button'
                className={`button ${nextHide}`}
                disabled={disableNext}>
                {!disableNext ? 'Bước tiếp theo' : 'Vui lòng hoàn thiện thông tin'}
              </button>
              <button
                onClick={onSubmit}
                type='button'
                className={`button ${submitHide}`}
                disabled={!canSubmit}>
                {canSubmit ? 'Đặt phòng' : 'Vui lòng hoàn thiện thông tin'}
              </button>
              {formData.cusEmail.value && page == 1 && (
                <div>
                  <hr />
                  <FontAwesomeIcon icon={faEnvelope} />

                  <span>
                    {' '}
                    Chúng tôi sẽ gửi xác nhận phòng qua địa chỉ email{' '}
                    <strong>{formData.cusEmail.value}</strong>
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Fixed Sidebar */}
        <Sidebar hotel={hotel} hotelId={hotelId} serviceId={serviceId} />
      </div>
      {/* Footer */}
      <div className={style.footer}>footer</div>
    </>
  );
};

export default HotelBooking;
