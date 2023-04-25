import React from "react";
import style from './UserProfile.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarCheck, faCaretDown, faCircle, faMessage } from "@fortawesome/free-solid-svg-icons"

const UserProfile = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Sidebar}>
          <a href="/user/booking/a">
            <FontAwesomeIcon icon={faCalendarCheck} className="iconProfile" />
            <span>Đơn đặt chỗ của tôi</span>
          </a>
          <a href="/user/comments/a">
          <FontAwesomeIcon icon={faMessage} className="iconProfile"/>
            <span>Nhận xét</span>
          </a>
          <div className={style.profile}>
            <FontAwesomeIcon icon={faUser} className="iconProfile" />
            <span>Hồ sơ</span>
            <FontAwesomeIcon icon={faCaretDown} className="iconProfile" />
          </div>
          <li>
            <a>
              <FontAwesomeIcon icon={faCircle} className="iconCircle"/>
              <span>Thông tin người dùng</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faCircle} className="iconCircle" />
              <span>Thông tin người dùng</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faCircle} className="iconCircle"/>
              <span>Thông tin người dùng</span>
            </a>
          </li>
          <hr></hr>
        </div>
        <div className={style.Show}>
          <div className={style.YourInfo}>
            <h2>Thông tin người dùng</h2>
            <div className={style.display}>
              <div className={style.avatar}>
                <div className={style.icon}>D</div>
                <div className={style.name}>
                  <h2>Họ & tên</h2>
                  <span>Duy Ngô</span>
                </div>
              </div>
              <div className={style.edit}>Chỉnh sửa</div>
            </div>

            <div className={style.display}>
              <div className={style.name}>
                <h2>Email</h2>
                <span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
              </div>
            </div>
            <div className={style.display}>
              <div className={style.name}>
                <h2>Số điện thoại</h2>
                <span>0123123</span>
              </div>
              <div className={style.edit}>Thêm</div>
            </div>
            <div className={style.display}>
              <div className={style.name}>
                <h2>Mật khẩu</h2>
                <span>*****</span>
              </div>
              <div className={style.edit}>Chỉnh sửa</div>
            </div>
          </div>

          <div className={style.YourPayment}>
            <h2>Phương thức Payment</h2>
            <div className={style.display}>
              <h2>Lưu thông tin thẻ tín dụng của tôi</h2>
              <div className={style.edit}>
                <span>CÓ</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>

          <div className={style.YourFollow}>
            <h2>Theo dõi</h2>
            <div className={style.display}>
              <div className={style.name}>
                <h2>Bản tin</h2>

                <span>
                  <input type="radio" id="Everyday" name="news" value="Everyday" />
                  <label htmlFor="Everyday">Hằng ngày</label>
                </span>
                <span>
                  <input type="radio" id="2times/week" name="news" value="2times/week" />
                  <label htmlFor="2times/week">Hai lần một tuần</label>
                </span>
                <span>
                  <input type="radio" id="Everyweek" name="news" value="Everyweek" />
                  <label htmlFor="Everyweek">Hằng tuần</label>
                </span>
                <span>
                  <input type="radio" id="Never" name="news" value="Never" />
                  <label htmlFor="Never">Không bao giờ</label>
                </span>

              </div>
            </div>

            <div className={style.display}>
              <h2>Bạn muốn nhận thông tin nhắc nhở hỗ trợ đặt phòng</h2>
              <div className={style.edit}>
                <span>KHÔNG</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className={style.display}>
              <h2>Tôi muốn nhận email về khuyến mãi</h2>
              <div className={style.edit}>
                <span>KHÔNG</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className={style.display}>
              <h2>Tôi muốn biết thông tin và ưu đãi liên quan đến chuyến đi sắp tới của mình</h2>
              <div className={style.edit}>
                <span>CÓ</span>
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div >
    </>
  )
};

export default UserProfile;
