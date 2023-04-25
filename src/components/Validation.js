export default function Validation(values){
    const errors = {}
    const email_patter = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/


    //Name
    if(values.name === ''){
        errors.name = "Vui lòng nhập họ và tên"
    }
    //Email
    if(values.email === ''){
        errors.email = "Vui lòng nhập Email"
    }
    // else if(!email_patter.test(values.email)){
    //     errors.email = "Email is not exist"
    // }

    //Email Verification
    if(values.emailVerification === ''){
        errors.emailVerification = "Vui lòng nhập lại email"
    }
    // else if(values.emailVerification != values.email){
    //     errors.emailVerification = "Email khong khop"
    // }

    //Phone Number
    if(values.phoneNumber === ''){
        errors.phoneNumber = "Vui lòng nhập số điện thoại"
    }
    return errors;
}