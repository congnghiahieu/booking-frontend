import style from './WelcomeBack.module.css';
import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';

const WelcomeBack = () => {
  const { name } = useAuth();

  return (
    <div className={style.WelcomeBack}>
      <span className={style.WB_text}>
        Chào mừng trở lại {name}! Quý khách là
        <div className={style.vip_quality}>
          <span className={style.vip}>
            <FontAwesomeIcon icon={faStar} />
            VIP
          </span>
          <span className={style.quality}> Đồng</span>
        </div>
      </span>
      <div className={style.quality_content}>
        <div className={style.quality_frame}>
          <span className={style.quality_text1}>
            <FontAwesomeIcon icon={faStar} />
            VIP Bronze
          </span>
          <div className={style.quality_color1}></div>
          <div className={style.quality_color2}></div>
          <span className={style.quality_subtext1}>Welcome Agoda VIP Member</span>
        </div>
        <div className={style.quality_text}>
          <span className={style.text_passage}>
            Mỗi khi quý khách thấy mác VIP, điều này có nghĩa là quý khách đang nhận được giảm giá
            đặc biệt hoặc lợi ích chỉ dành cho người dùng VIP. Có được các ưu đãi dành riêng và thu
            thập nhiều đơn đặt phòng hơn để leo cấp và nhận được nhiều ưu đãi dành riêng hơn!
          </span>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} className='free' />
              Đảm Bảo Giá Tốt Nhất
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className='free' />
              Ưu đãi nội bộ
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className='free' />
              Ưu đãi VIP giảm giá tới 10%
            </li>
          </ul>
          <div className={style.quality_process}>
            <div className={style.process}>
              <div className={style.quality_color3}>
                <FontAwesomeIcon icon={faStar} className='bronze' />
              </div>
              <span>Bronze</span>
            </div>
            <div className={style.process_barBS}></div>

            <div className={style.process}>
              <div className={style.quality_color3}>
                <FontAwesomeIcon icon={faStar} className='sliver' />
              </div>
              <span>Sliver</span>
              <i className={style.text4}>2 lượt đặt phòng</i>
            </div>
            <div className={style.process_barSG}></div>
            <div className={style.process}>
              <div className={style.quality_color3}>
                <FontAwesomeIcon icon={faStar} className='gold' />
              </div>
              <span>Gold</span>
              <i className={style.text4}>5 lượt đặt phòng</i>
            </div>
            <div className={style.process_barGP}></div>
            <div className={style.process}>
              <div className={style.quality_color3}>
                <FontAwesomeIcon icon={faStar} className='plantinum' />
              </div>
              <span>Plantinum</span>
              <i className={style.text4}>10 lượt đặt phòng</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(WelcomeBack);
