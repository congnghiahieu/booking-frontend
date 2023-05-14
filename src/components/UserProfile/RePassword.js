import style from './Edit.module.css';
import { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { useSelector } from 'react-redux';
import { useResetMutation } from '../../app/features/auth/authApiSlice';
import { selectUserInfo } from '../../app/features/auth/authSlice';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RePassword = ({ setShowPwd }) => {
  const { id } = useSelector(selectUserInfo);
  const [resetPwd, { isLoading }] = useResetMutation();

  const [oldPwd, oldAttrs, resetOld] = useInput('');
  const [newPwd, newAttrs, resetNew] = useInput('');
  const [cfPwd, cfAttrs, resetCf] = useInput('');

  const [validPwd, setValidPwd] = useState(false);
  const [match, setMatch] = useState(false);
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setErr('');
  }, [oldPwd, newPwd, cfPwd]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(newPwd));
    setMatch(cfPwd === newPwd);
  }, [newPwd, cfPwd]);

  const onCancel = () => {
    resetOld();
    resetNew();
    resetCf();
    setShowPwd(false);
  };

  const onSubmit = async () => {
    try {
      await resetPwd({ userId: id, oldPassword: oldPwd, newPassword: newPwd }).unwrap();
      resetOld();
      resetNew();
      resetCf();
      setSuccess('Đổi mật khẩu thành công');
      // setShowPwd(false);
    } catch (err) {
      setErr('Đổi mật khẩu không thành công');
    }
  };

  return (
    <>
      <div className={style.replace}>
        <p className={style.note}>
          Lưu ý: Mật khẩu mới từ 8 đến 24 kí tự, phải bao gồm chữ thường, chữ hoa, số và ít nhất 1
          trong các kí tự đặc biệt (!, @, #, $, %)
        </p>
        {success && <p className={style.success}>{success}</p>}
        {err && <p className={style.err}>{err}</p>}
        <div>
          <label>Mật khẩu hiện tại</label>
          <br></br>
          <input type='password' {...oldAttrs} />
        </div>
        <div>
          <label>Mật khẩu mới</label>
          <br></br>
          <input type='password' {...newAttrs} />
        </div>
        <div>
          <label>Xác thực mật khẩu mới</label>
          <br></br>
          <input type='password' {...cfAttrs} />
        </div>
        <div className={style.button}>
          <button className={style.discard} onClick={onCancel} disabled={isLoading}>
            Hủy
          </button>
          <button
            className={style.save}
            onClick={onSubmit}
            disabled={isLoading || !validPwd || !match}>
            Lưu
          </button>
        </div>
      </div>
    </>
  );
};
export default RePassword;
