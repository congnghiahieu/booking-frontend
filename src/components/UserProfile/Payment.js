import style from "./UserProfile.module.css"
const Payment = () => {
    return (
        <>
            <div id="payment" className={style.YourPayment}>
                <h2>Phương thức Payment</h2>
                <div className={style.display}>
                    <h2>Lưu thông tin thẻ tín dụng của tôi</h2>
                    <div className={style.edit}>
                        <span>CÓ</span>
                        <label className='switch'>
                            <input type='checkbox' />
                            <span className='slider round'></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Payment;