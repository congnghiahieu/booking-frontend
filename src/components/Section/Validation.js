import React,{useState} from "react";
import style from "./Validation.module.css"
import Validation from "../Validation.js"

const Page1 = ({formData, setFormData}) => {
      const [errors, setErrors] = useState({})
      function handleInput(event) {
        const newObj = {...formData, [event.target.name]: event.target.value }
        // setValues(newObj)
        setFormData(newObj);
      }
      function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(formData));
      }
    return (
        <>
            <div className={style.form}>
                <h1>Thông tin liên lạc</h1> 
                <form className={style.Information} onSubmit={handleValidation} >
                    <div className={style.informationElement}>
                        <label htmlFor="name" className="form-label">Họ và tên</label>
                        <input type="text" className="form-control" name="name" onChange={handleInput} value={formData.name}/>
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    <div className={style.informationElement}>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" onChange={handleInput} value={formData.email}/>
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div className={style.informationElement} >
                        <label htmlFor="emailVerification" className="form-label">Nhập lại email</label>
                        <input type="email" className="form-control" name="emailVerification"  onChange={handleInput} value={formData.emailVerification}/>
                        {errors.emailVerification && <p style={{ color: 'red' }}>{errors.emailVerification}</p>}
                    </div>
                    <div className={style.informationElement} >
                        <label htmlFor="phoneNumber" className="form-label">Số điện thoại </label>
                        <input type="text" className="form-control" name="phoneNumber" onChange={handleInput} value={formData.phoneNumber}/>
                        {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                    </div>
                    <span>Nếu quý khách nhập địa chỉ thư điện tử và không hoàn thành việc đặt phòng thì chúng tôi có thể nhắc nhở để giúp quý khách tiếp tục đặt phòng.</span>
                    <div >
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1"> Đặt phòng này cho người khác</label>
                    </div>
                    {/* <button>ABC</button> */}
                </form>
                {/* <div className={style.Booking}>
                    <div >
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1"> Nhận email khuyến mãi độc quyền từ chúng tôi</label>
                    </div>
                    <button>Kế tiếp</button>
                </div> */}
            </div>
        </>
    )
}

export default Page1;