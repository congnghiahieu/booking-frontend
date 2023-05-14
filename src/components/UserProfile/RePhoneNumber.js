import style from './Edit.module.css';
import { useUpdateUserMutation } from '../../app/features/api/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, setPhone } from '../../app/features/auth/authSlice';
import { useState, useEffect } from 'react';

const PHONE_REGEX = /(84|0[3|5|7|8|9])+([0-9]{8})/;

const RePhoneNumber = ({ setShowPhone, input }) => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectUserInfo);
  const [phone, phoneAttrs, phoneReset] = input;
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [err, setErr] = useState('');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setErr('');
    setValid(() => {
      if (phone === '') return true;
      else return PHONE_REGEX.test(phone);
    });
  }, [phone]);

  const onCancel = () => {
    phoneReset();
    setShowPhone(false);
  };

  const onSubmit = async () => {
    try {
      await updateUser({ id, phone }).unwrap();
      dispatch(setPhone(phone));
      setShowPhone(false);
    } catch (err) {
      setErr('Sửa số điện thoại không thành công. Vui lòng thử lại');
    }
  };

  return (
    <>
      <div className={style.replace}>
        {err && <p className={style.err}>{err}</p>}
        <div>
          <label>Số điện thoại</label>
          <br></br>
          <input type='text' {...phoneAttrs} />
        </div>
        <div className={style.button}>
          <button className={style.discard} onClick={onCancel} disabled={isLoading}>
            Hủy
          </button>
          <button className={style.save} onClick={onSubmit} disabled={isLoading || !valid}>
            Lưu
          </button>
        </div>
      </div>
    </>
  );
};
export default RePhoneNumber;
