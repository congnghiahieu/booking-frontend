import style from './Edit.module.css';
import { useUpdateUserMutation } from '../../app/features/api/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, setName } from '../../app/features/auth/authSlice';
import { useState, useEffect } from 'react';

const Rename = ({ setShowName, input }) => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectUserInfo);
  const [name, nameAttrs, nameReset] = input;
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [err, setErr] = useState('');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setErr('');
    setValid(Boolean(name));
  }, [name]);

  const onCancel = () => {
    nameReset();
    setShowName(false);
  };

  const onSubmit = async () => {
    try {
      await updateUser({ id, name }).unwrap();
      dispatch(setName(name));
      setShowName(false);
    } catch (err) {
      setErr('Sửa tên không thành công. Vui lòng thử lại');
    }
  };
  return (
    <>
      <div className={style.replace}>
        {err && <p className={style.err}>{err}</p>}
        <div>
          <label>Tên</label>
          <br></br>
          <input type='text' {...nameAttrs} />
        </div>
        {/* <div>
          <label>Họ</label>
          <br></br>
          <input></input>
        </div> */}
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
export default Rename;
