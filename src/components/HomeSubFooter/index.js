import style from './HomeSubFooter.module.css';

const HomeSubFooter = () => {
  return (
    <div className={style.footer1_wrapper}>
      <div className={style.footer1}>
        <div className={style.footer_func}>
          <span className={style.footer_header}>Trợ giúp </span>
          <li>Trung tâm trợ giúp</li>
          <li>Câu hỏi thường gặp</li>
          <li>Chính sách Bảo mật</li>
          <li>Chính sách về cookie</li>
          <li>Điều khoản sử dụng</li>
          <li>Quản lý thiết lập cookie</li>
        </div>
        <div className={style.footer_func}>
          <span className={style.footer_header}>Công ty</span>
          <li>Về chúng tôi</li>
          <li>Tuyển dụng</li>
          <li>Báo chí</li>
          <li>Nhật ký Mạng</li>
          <li>PointsMax</li>
        </div>
        <div className={style.footer_func}>
          <span className={style.footer_header}>Điểm du lịch</span>
          <li>Quốc gia</li>
          <li>Thành Phố</li>
        </div>
        <div className={style.footer_func}>
          <span className={style.footer_header}>Đối tác của chúng tôi</span>
          <li>Cổng thông tin đối tác YCS</li>
          <li>Partner Hub</li>
          <li>Quảng cáo trên Wygo</li>
          <li>Đối tác liên kết</li>
          <li>Đối tác kết nối</li>
        </div>
        <div className={style.footer_func}>
          <span className={style.footer_header}>Tải ứng dụng</span>
          <li>Ứng dụng IOS</li>
          <li>Ứng dụng Android</li>
        </div>
      </div>
    </div>
  );
};

export default HomeSubFooter;
