import style from './Payment.module.css';
import useBookingContext from '../../hooks/useBookingContext';
import FormInput from '../FormInput';

const MethodsOfPayment = ['THẺ TÍN DỤNG/GHI NỢ', 'THANH TOÁN ĐIỆN TỬ'];
const AMEX_CARD_REGEX = '^3[47][0-9]{13}$';
const JCB_CARD_REGEX = '^(?:2131|1800|35\\d{3})\\d{11}$';
const MASTER_CARD_REGEX =
  '^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$';
const VISA_CARD_REGEX = '^4[0-9]{12}(?:[0-9]{3})?$';

const Page2 = () => {
  const { formData, onDataChange } = useBookingContext();

  const inputs = [
    {
      id: 'cardName',
      name: 'cardName',
      type: 'text',
      placeholder: 'Vui lòng nhập họ tên chủ thẻ',
      title: 'Xin vui lòng điền họ tên chủ thẻ.',
      label: 'Tên chủ thẻ',
      // pattern: '^[a-zA-Z]+( [a-zA-Z]+)+$',
      required: true,
      maxLength: 128,
      autoComplete: 'cardholder-name',
      error: 'Xin vui lòng điền họ tên chủ thẻ',
    },
    {
      id: 'cardSeries',
      name: 'cardSeries',
      type: 'tel',
      placeholder: 'Vui lòng nhập chính xác',
      label: 'Số thẻ tín dụng / Thẻ ghi nợ',
      inputMode: 'numeric',
      // pattern: '[0-9]{1,16}',
      pattern: `(${AMEX_CARD_REGEX})|(${JCB_CARD_REGEX})|(${MASTER_CARD_REGEX})|(${VISA_CARD_REGEX})`,
      required: true,
      title: 'Vui lòng nhập số thẻ tín dụng hợp lệ.',
      maxLength: 16,
      autoComplete: 'cc-number',
      error: 'Vui lòng nhập số thẻ tín dụng hợp lệ.',
    },
    {
      id: 'cardExpiredate',
      name: 'cardExpiredate',
      type: 'text',
      placeholder: 'MM/YY',
      label: 'Ngày hết hạn',
      inputMode: 'numeric',
      required: true,
      pattern: '[0-9]{4}',
      autoComplete: 'cc-expiry',
      maxLength: 4,
      title: 'Vui lòng nhập ngày hết hạn thẻ tín dụng hợp lệ',
      error: 'Vui lòng nhập ngày hết hạn thẻ tín dụng hợp lệ',
    },
    {
      id: 'cardCvc',
      name: 'cardCvc',
      type: 'password',
      placeholder: '***',
      label: 'Mã bảo mật CVC',
      pattern: '\\d{3}',
      required: true,
      autoComplete: 'off',
      inputMode: 'numeric',
      maxLength: 3,
      title: 'Vui lòng nhập mã CVC hợp lệ (3 hoặc 4 con số tùy thuộc vào thẻ tín dụng của bạn).',
      error: 'Vui lòng nhập mã CVC hợp lệ (3 hoặc 4 con số tùy thuộc vào thẻ tín dụng của bạn).',
    },
  ];

  return (
    <>
      <div className={style.container}>
        <h3 className={style.header}>THẺ TÍN DỤNG/GHI NỢ</h3>
        <div className={style.Body}>
          <div>
            <label htmlFor='Payments'>Hình thức thanh toán</label>
            <br />
            <select id='Payments' name='Payments'>
              <option value='Visa/MasterCard/Amex?JCB'>Visa / MasterCard / Amex / JCB</option>
              <option value='UnionPay - CreditCard'>UnionPay - CreditCard</option>
            </select>
          </div>

          <div className={style.CardBody}>
            <div className={style.infoCard}>
              <div className={style.info}>
                {/* <label htmlFor='CardName'>Tên trên thẻ</label>
                <input name='CardName'></input> */}
                <FormInput input={inputs[0]} formData={formData} onDataChange={onDataChange} />
              </div>
              <div className={style.info}>
                {/* <label htmlFor='CardNumber'>Số thẻ tín dụng/thẻ ghi nợ</label>
                <input name='CardNumber'></input> */}
                <FormInput input={inputs[1]} formData={formData} onDataChange={onDataChange} />
              </div>
              <div className={style.Security}>
                <div className={style.info}>
                  {/* <label htmlFor='TimeDate'>Ngày hết hạn</label>
                  <input name='TimeDate'></input> */}
                  <FormInput input={inputs[2]} formData={formData} onDataChange={onDataChange} />
                </div>
                <div className={style.info}>
                  {/* <label htmlFor='CVC'>Mã bảo mật CVC</label>
                  <input name='CVC'></input> */}
                  <FormInput input={inputs[3]} formData={formData} onDataChange={onDataChange} />
                </div>
              </div>
            </div>
            <svg
              style={{ color: 'rgb(6, 67, 150)', width: '350px', height: '280px' }}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'>
              <path
                d='M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z'
                fill='#064396'></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
