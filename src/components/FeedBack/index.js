import style from './FeedBack.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useRef, memo } from 'react';
import { getRan, getDiscount } from '../../utils/random';

function FeedBack({ hotelName, hotelPoint }) {
  var comment = '';
  if (hotelPoint > '9') {
    comment = 'Trên cả tuyệt vời';
  } else if (hotelPoint > '8') {
    comment = 'Tuyệt vời';
  }
  const point = useRef(getRan());

  return (
    <div className={style.feedback}>
      <div className={style.feedback_content}>
        <span className={style.feedback_header}>
          <span className={style.feedback_h1}>
            Bài đánh giá {hotelName} - Cuộc sống quý phái từ khách thật
          </span>
          <p className={style.feedback_h2}>Đánh giá tổng thể</p>
        </span>
        <div className={style.point_list}>
          <div className={style.overall}>
            <div className={style.overall_point}>{hotelPoint}</div>
            <div className={style.overall_script}>
              <p className={style.overall_text}>{comment}</p>
              <p className={style.overall_subtext}>
                Dựa trên 515 bài đánh giá
                <FontAwesomeIcon icon={faCheck} color='#59a923' className={style.icon_green} />
              </p>
            </div>
          </div>
          <div className={style.point_detail}>
            <p className={style.detail_point}>9,8</p>
            <span className={style.detail_type}>Sự thoải mái và chất lượng phòng</span>
          </div>
          <div className={style.point_detail}>
            <p className={style.detail_point}>9,8</p>
            <span className={style.detail_type}>Sự thoải mái và chất lượng phòng</span>
          </div>
          <div className={style.point_detail}>
            <p className={style.detail_point}>9,8</p>
            <span className={style.detail_type}>Sự thoải mái và chất lượng phòng</span>
          </div>
        </div>
        <div className={style.point}>
          <div className={style.agoda_point}>
            <span className={style.feedback_h2}>Điểm số qua Agoda</span>
            <p className={style.point_on10}>
              {hotelPoint}
              <span className={style.on10}>/10</span>
            </p>
            <p className={style.overall_text}>{comment}</p>
            <p className={style.overall_subtext1}>
              <FontAwesomeIcon icon={faCheck} color='#59a923' className={style.icon_green} />
              Dựa trên 515 bài đánh giá
            </p>
          </div>
          <ul className={style.agoda_listPoint}>
            <div className={style.list_column1}>
              <li>
                <div className={style.point_bar}>
                  <div
                    className={style.point_barfilled}
                    style={{ width: `${point.current * 10}%` }}></div>
                </div>
                <div className={style.point_script}>
                  <span className={style.point_text}>Độ sạch sẽ</span>
                  <span className={style.point_recent}>{point.current}</span>
                </div>
              </li>
              <li>
                <div className={style.point_bar}>
                  <div
                    className={style.point_barfilled}
                    style={{ width: `${point.current * 10}%` }}></div>
                </div>
                <div className={style.point_script}>
                  <span className={style.point_text}>Vị trí</span>
                  <span className={style.point_recent}>{point.current}</span>
                </div>
              </li>
              <li>
                <div className={style.point_bar}>
                  <div
                    className={style.point_barfilled}
                    style={{ width: `${point.current * 10}%` }}></div>
                </div>
                <div className={style.point_script}>
                  <span className={style.point_text}>Đáng giá tiền</span>
                  <span className={style.point_recent}>{point.current}</span>
                </div>
              </li>
            </div>
            <div className={style.list_column2}>
              <li>
                <div className={style.point_bar}>
                  <div
                    className={style.point_barfilled}
                    style={{ width: `${point.current * 10}%` }}></div>
                </div>
                <div className={style.point_script}>
                  <span className={style.point_text}>Tiện nghi</span>
                  <span className={style.point_recent}>{point.current}</span>
                </div>
              </li>
              <li>
                <div className={style.point_bar}>
                  <div
                    className={style.point_barfilled}
                    style={{ width: `${point.current * 10}%` }}></div>
                </div>
                <div className={style.point_script}>
                  <span className={style.point_text}>Dịch vụ</span>
                  <span className={style.point_recent}>{point.current}</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(FeedBack);
