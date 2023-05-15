import style from './DefaultFooter.module.css';

const DefaultFooter = () => {
  return (
    <div className={style.defaultFooter}>
      <div className={style.footer_content}>
        <div className={style.company}>
          <div className={style.company_name1}></div>
          {/* <div className={style.company_name2}></div>
            <div className={style.company_name3}></div>
            <div className={style.company_name4}></div>
            <div className={style.company_name5}></div>
            <div className={style.company_name6}></div> */}
        </div>
        <div className={style.the_end}>Wygo Travel</div>
        <div className={style.footer_script}>
          Mọi nội dung tại đây © 2023 Công ty TNHH Tư nhân Wygo. Bảo Lưu Mọi Quyền. <br></br>
          Wygo.com là thành viên của Tập đoàn CNPM-UET, nhà cung cấp dịch vụ du lịch trực tuyến &
          các dịch vụ có liên quan hàng đầu thế giới.
        </div>
      </div>
    </div>
  );
};

export default DefaultFooter;
