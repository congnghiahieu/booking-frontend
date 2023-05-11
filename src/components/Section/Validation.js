import style from './Validation.module.css';
import { useBookingContext } from '../../hooks/useContext';
import FormInput from '../FormInput';

const Page1 = () => {
  const { formData, onDataChange } = useBookingContext();

  const inputs = [
    {
      id: 'cusName',
      name: 'cusName',
      type: 'text',
      placeholder: 'Vui lòng nhập họ và tên',
      label: 'Họ và tên',
      // pattern: '^[a-zA-Z]+( [a-zA-Z]+)+$',
      required: true,
      maxLength: 128,
      title: 'Vui lòng nhập tên',
      autoComplete: 'name',
      error: 'Họ và tên không hợp lệ',
    },
    {
      id: 'cusEmail',
      name: 'cusEmail',
      type: 'email',
      placeholder: 'Vui lòng nhập chính xác',
      label: 'Email',
      // pattern: '^[\\w-.]+@([\\w-]+.)+[\\w-]{2,4}$',
      required: true,
      title:
        'Vui lòng nhập địa chỉ email hợp lệ để chúng tôi có thể gửi xác nhận đặt phòng cho bạn.',
      maxLength: 254,
      autoComplete: 'email',
      error: 'Vui lòng kiểm tra thông tin trong "Email".',
    },
    {
      id: 'cusEmailVerification',
      name: 'cusEmailVerification',
      type: 'email',
      placeholder: 'Vui lòng nhập chính xác',
      label: 'Nhập lại Email',
      pattern: formData.cusEmail.value,
      required: true,
      autoComplete: 'retypeEmail',
      maxLength: '254',
      disablePaste: true, // experimental
      title: 'Vui lòng kiểm tra thông tin trong "Email" và "Nhập lại email" trùng khớp.',
      error: 'Vui lòng kiểm tra thông tin trong "Email" và "Nhập lại email" trùng khớp.',
    },
    {
      id: 'cusPhone',
      name: 'cusPhone',
      type: 'text',
      placeholder: 'Nhập số điện thoại',
      label: 'Số điện thoại',
      pattern: '(84|0[3|5|7|8|9])+([0-9]{8})\\b',
      required: true,
      autoComplete: 'tel',
      error: 'Số điện thoại không hợp lệ',
    },
  ];

  return (
    <>
      <div className={style.form}>
        <h1>Thông tin liên lạc</h1>
        <form className={style.Information}>
          {inputs.map(input => (
            <FormInput
              key={input.id}
              input={input}
              formData={formData}
              onDataChange={onDataChange}
            />
          ))}
          <span>
            Nếu quý khách nhập địa chỉ thư điện tử và không hoàn thành việc đặt phòng thì chúng tôi
            có thể nhắc nhở để giúp quý khách tiếp tục đặt phòng.
          </span>
          <div>
            <input type='checkbox' className='form-check-input' id='exampleCheck1' />
            <label className='form-check-label' htmlFor='exampleCheck1'>
              {' '}
              Đặt phòng này cho người khác
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page1;
