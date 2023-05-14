import style from './FeedBack.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import { getRan } from '../../utils/random';
import { PointBar } from '../../components';
import { getReview } from '../../utils/random';
import { useGetHotelByIdQuery } from '../../app/features/api/hotelsSlice';
import LoadingImg from '../Loading/LoadingImg';
import { Error } from '../../components';

const point = Array(3)
  .fill(0)
  .map(_ => getRan());

const FeedBack = ({ hotelId }) => {
  const {
    data: hotel,
    isLoading: isHtLoad,
    isSuccess: isHtOk,
    isError: isHtErr,
  } = useGetHotelByIdQuery(hotelId);

  return (
    <>
      {isHtLoad && <LoadingImg />}
      {!isHtLoad && isHtErr && <Error />}
      {!isHtLoad && isHtOk ? (
        <>
          <div className={style.feedback}>
            <div className={style.feedback_content}>
              <span className={style.feedback_header}>
                <span className={style.feedback_h1}>
                  Bài đánh giá {hotel.name} - Cuộc sống quý phái từ khách thật
                </span>
                <p className={style.feedback_h2}>Đánh giá tổng thể</p>
              </span>
              <div className={style.point_list}>
                <div className={style.overall}>
                  <div className={style.overall_point}>{hotel.point.toFixed(1)}</div>
                  <div className={style.overall_script}>
                    <p className={style.overall_text}>{getReview(hotel.point)}</p>
                    <p className={style.overall_subtext}>
                      Dựa trên {hotel.cmtSum} bài đánh giá
                      <FontAwesomeIcon
                        icon={faCheck}
                        color='#59a923'
                        className={style.icon_green}
                      />
                    </p>
                  </div>
                </div>
                {point.map((p, i) => (
                  <div key={i} className={style.point_detail}>
                    <p className={style.detail_point}>{p}</p>
                    <span className={style.detail_type}>Sự thoải mái và chất lượng phòng</span>
                  </div>
                ))}
              </div>
              <div className={style.point}>
                <div className={style.agoda_point}>
                  <span className={style.feedback_h2}>Điểm số qua Agoda</span>
                  <p className={style.point_on10}>
                    {hotel.point}
                    <span className={style.on10}>/10</span>
                  </p>
                  <p className={style.overall_text}>{getReview(hotel.point)}</p>
                  <p className={style.overall_subtext1}>
                    <FontAwesomeIcon icon={faCheck} color='#59a923' className={style.icon_green} />
                    Dựa trên {hotel.cmtSum} bài đánh giá
                  </p>
                </div>
                <ul className={style.agoda_listPoint}>
                  <div className={style.list_column1}>
                    <PointBar name='Độ sạch sẽ' />
                    <PointBar name='Vị trí' />
                    <PointBar name='Đáng giá tiền' />
                  </div>
                  <div className={style.list_column2}>
                    <PointBar name='Tiện nghi' />
                    <PointBar name='Dịch vụ' />
                    <PointBar name='Không gian' />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default memo(FeedBack);
