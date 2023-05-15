import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRegisterMutation } from '../../app/features/auth/authApiSlice';
import useTitle from '../../hooks/useTitle';
import { useRegisterContext } from '../../hooks/useContext';
import { Loading, GoogleIcon } from '../../components';
import RegisterInput from '../../components/RegisterLoginInput';
import { GOOGLE_AUTH_LINK } from '../../utils/constants';

const Register = () => {
  useTitle('Wygo.com | Đăng ký tài khoản');
  const navigate = useNavigate();
  const [regis, { isLoading }] = useRegisterMutation();
  const { formData, onDataChange, canRegis } = useRegisterContext();

  const [regisErr, setRegisErr] = useState('');

  useEffect(() => {
    setRegisErr('');
  }, [formData]);

  const onRegis = async e => {
    e.preventDefault();
    if (!canRegis) {
      setRegisErr('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    try {
      await regis({
        username: formData.username.value,
        name: formData.name.value,
        email: formData.email.value,
        password: formData.password.value,
      }).unwrap();

      navigate('/login');
    } catch (err) {
      if (!err.status) {
        setRegisErr('Không có phản hồi');
      } else if (err.status === 400) {
        setRegisErr('Thiếu thông tin');
      } else if (err.status === 409) {
        setRegisErr('Tên tài khoản đã tồn tại');
      } else {
        setRegisErr(err.data?.message);
      }
    }
  };

  const onGoogleLogin = async () => {
    window.open(GOOGLE_AUTH_LINK, '_self');
  };

  const inputs = [
    {
      id: 'username',
      name: 'username',
      type: 'text',
      placeholder: 'Vui lòng nhập tên tài khoản',
      label: 'Tên tài khoản',
      pattern: '^[A-z][A-z0-9-_]{3,23}$',
      required: true,
      minLength: 4,
      maxLength: 24,
      title: 'Vui lòng nhập tài khoản',
      autoComplete: 'username',
      autoFocus: true,
      error:
        'Tên tài khoản từ 4 đến 24 kí tự, bắt đầu bằng chữ cái, gạch chân và gạch ngang được chấp nhận',
    },
    {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Vui lòng nhập họ tên',
      label: 'Họ và tên',
      required: true,
      title: 'Vui lòng nhập họ và tên',
      maxLength: 254,
      autoComplete: 'name',
      error: 'Vui lòng nhập họ tên',
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Vui lòng nhập email',
      label: 'Email',
      // pattern: ,
      required: true,
      autoComplete: 'email',
      maxLength: '254',
      // disablePaste: true, // experimental
      title: 'Vui lòng kiểm tra thông tin trong "Email"',
      error: 'Vui lòng kiểm tra thông tin trong "Email"',
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Nhập mật khẩu',
      label: 'Mật khẩu',
      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$',
      minLength: 8,
      maxLength: 24,
      required: true,
      autoComplete: 'password',
      error:
        'Không hợp lệ. Mật khẩu từ 8 đến 24 kí tự, phải bao gồm chữ thường, chữ hoa, số và ít nhất 1 trong các kí tự đặc biệt (!, @, #, $, %)',
    },
    {
      id: 'passwordVerification',
      name: 'passwordVerification',
      type: 'password',
      placeholder: 'Vui lòng nhập chính xác',
      label: 'Nhập lại mật khẩu',
      pattern: formData.password.value,
      required: true,
      autoComplete: 'off',
      maxLength: '254',
      disablePaste: true, // experimental
      title: 'Vui lòng kiểm tra thông tin trong "Mật khẩu" và "Nhập lại mật khẩu" trùng khớp.',
      error: 'Vui lòng kiểm tra thông tin trong "Mật khẩu" và "Nhập lại mật khẩu" trùng khớp.',
    },
  ];

  return (
    <div className='form-container'>
      {isLoading && <Loading />}
      <h2 className='form-title'>Đăng ký</h2>
      {regisErr && <p>{regisErr}</p>}
      <form className='form'>
        {/* Register inputs */}
        {inputs.map(input => (
          <RegisterInput
            key={input.id}
            input={input}
            formData={formData}
            onDataChange={onDataChange}
          />
        ))}
        {/* TODO: CSS cả lúc button bị disabled */}
        <div className='form-group'>
          <button onClick={onRegis} disabled={!canRegis}>
            Đăng ký
          </button>
        </div>
        <div className='form-redirect'>
          <p>Bạn đã có tài khoản ?</p>
          <Link to='/login'>Đăng nhập</Link>
        </div>
        <div className='Google_login' onClick={onGoogleLogin}>
          <span className='Google_Icon'>
            <div className='G_icon'>
              <GoogleIcon />
            </div>
            Google
          </span>
        </div>
        {/* <div className='HadAccount'>
            <p>Bạn đã có tài khoản?</p>
            <Link to='/login'>Đăng nhập</Link>
          </div> */}
        <div className='license'>
          Khi đăng ký, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Wygo.
        </div>
      </form>
    </div>
  );
};

export default Register;
