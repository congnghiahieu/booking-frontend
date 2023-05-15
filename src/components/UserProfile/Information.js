import Rename from './Rename';
import RePassword from './RePassword';
import RePhoneNumber from './RePhoneNumber';
import { useState } from 'react';
import style from './UserProfile.module.css';
import useInput from '../../hooks/useInput';

const Information = ({ user }) => {
  const [showName, setShowName] = useState(false);
  const [name, nameAttrs, nameReset] = useInput(user.name);

  const [showPhone, setShowPhone] = useState(false);
  const [phone, phoneAttrs, phoneReset] = useInput(user.contact.phone);

  const [showPwd, setShowPwd] = useState(false);

  function handleClick(e) {
    if (e.target.id === 'name') {
      setShowName(true);
    }
    if (e.target.id === 'phoneNumber') {
      setShowPhone(true);
    }
    if (e.target.id === 'password') {
      setShowPwd(true);
    }
  }
  return (
    <>
      <div id='information' className={style.YourInfo}>
        <h2>Thông tin người dùng</h2>
        {!showName && (
          <div className={style.display}>
            <div className={style.avatar}>
              <div className={style.icon}>D</div>
              <div className={style.name}>
                <h2>Họ & tên</h2>
                <span>{name}</span>
              </div>
            </div>
            <div id='name' className={style.edit} onClick={handleClick}>
              Chỉnh sửa
            </div>
          </div>
        )}
        {showName && <Rename setShowName={setShowName} input={[name, nameAttrs, nameReset]} />}
        <div className={style.display}>
          <div className={style.name}>
            <h2>Email</h2>
            <span>{user.contact.email}</span>
          </div>
        </div>
        {!showPhone ? (
          <div className={style.display}>
            <div className={style.name}>
              <h2>Số điện thoại</h2>
              <span>{phone}</span>
            </div>
            <div id='phoneNumber' className={style.edit} onClick={handleClick}>
              Chỉnh sửa
            </div>
          </div>
        ) : (
          <RePhoneNumber setShowPhone={setShowPhone} input={[phone, phoneAttrs, phoneReset]} />
        )}
        {!showPwd && (
          <div className={style.display}>
            <div className={style.name}>
              <h2>Mật khẩu</h2>
              <span>*****</span>
            </div>
            {user.id && !user.googleId && (
              <div id='password' className={style.edit} onClick={handleClick}>
                Chỉnh sửa
              </div>
            )}
          </div>
        )}
        {showPwd && <RePassword setShowPwd={setShowPwd} />}
      </div>
    </>
  );
};
export default Information;
