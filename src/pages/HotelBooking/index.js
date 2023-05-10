import style from './HotelBooking.module.css';
import PageDisplay from '../../components/Section/PageDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserFriends, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TRANS_TYPES } from '../../utils/constants';
import Sidebar from '../../components/HotelBooking/Sidebar';
import ProgressStep from '../../components/HotelBooking/ProgressStep';
import LoadingImg from '../../components/Loading/LoadingImg';
import { useAddBookMutation } from '../../app/features/api/booksSlice';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import useBookingContext from '../../hooks/useBookingContext';
import { useGetHotelByIdQuery } from '../../app/features/api/hotelsSlice';
import { useGetServiceByIdQuery } from '../../app/features/api/servicesSlice';
import { useSelector } from 'react-redux';
import { selectTime } from '../../app/features/search/searchSlice';
import { differenceInDays } from 'date-fns';

const HotelBooking = () => {
  const { id } = useAuth();
  const { hotelId, serviceId } = useParams();
  const [start, end] = useSelector(selectTime);
  const {
    page,
    setPage,
    value,
    setValue,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    canSubmit,
    submitHide,
    formData,
  } = useBookingContext();

  const {
    data: hotel,
    isLoading: isHtLoad,
    isSuccess: isHtOk,
    isError: isHtErr,
  } = useGetHotelByIdQuery(hotelId);

  const {
    data: service,
    isLoading: isSvLoad,
    isSuccess: isSvOk,
    isError: isSvErr,
  } = useGetServiceByIdQuery(serviceId);

  useEffect(() => {
    if (service) {
      setValue(service.prices * differenceInDays(end, start));
    }
  }, [service]);

  const [addBook, { isLoading: isAddLoad }] = useAddBookMutation();

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
      {isHtLoad || (isSvLoad && <LoadingImg />)}
      {isHtErr || (isSvErr && <p>Fetch lỗi</p>)}
      {isHtOk && isSvOk && (
        <>
          {/* Progress */}
          <ProgressStep />
          {/* Main form */}
          <div className={style.container}>
            <div className={style.show}>
              {/* Multipage form */}
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
                    Thực hiện bước tiếp theo đồng nghĩa với việc bạn chấp nhận tuân theo Điều khoản
                    sử dụng và Chính sách bảo mật của Wygo.
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
            <Sidebar hotel={hotel} service={service} />
          </div>
          {/* Footer */}
          {/* <div className={style.footer}>footer</div>; */}
        </>
      )}
    </>
  );
};

export default HotelBooking;
