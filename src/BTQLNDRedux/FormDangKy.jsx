import React, { Component } from 'react'
import { connect } from 'react-redux'


// c2 : lưu giá trị từ form ở redux
class FormDangKy extends Component {





    // valueForm = {};

    imputChange = (event) => {
        console.log(event.target)
        console.log(event.target.value, event.target.name);
        let { value, name } = event.target;

        // tổ chưc luiư dữ liệu từ stăte
        let newValue = { ...this.props.nguoiDung.value, [name]: value }
        // console.log(newValue);

        let newError = { ...this.props.nguoiDung.error }
        let errorMSG = "";
        if (value.trim() == "") {
            // lổi 
            errorMSG = name + "nội dung khồn được đẻ trống !"
        }

        // kiểm tra email
        // lấy giá trị của  typeinput 

        let typeVal = event.target.getAttribute("typeinput");
        if (typeVal == "email") {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regex.test(value)) {
                //không hợp lệ
                errorMSG = "email không đúng định dạng"

            }
        }
        //obj.tenthuoctih ; obj[tenthuoctinh]
        newError[name] = errorMSG

        // đảy giá trị từ form và thông báo lổi về ređux
        let action = {
            type: "HANDLE_CHANGE",
            nguoiDung: {
                value: newValue,
                error: newError,
            }
        }
        this.props.dispatch(action)

    }

    handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        // kiêm tra các lỗi còn không
        // key : tên thuộc tính 
        for (const key in this.props.nguoiDung.error) {
            if (this.props.nguoiDung.error[key] !== "") {
                // còn lổi
                isValid = false;
                break; // dừng duyệt đói tượng

            }
        }

        // kiểm tra dữ liệu rổng khi không change value
        for (const key in this.props.nguoiDung.value) {
            if (this.props.nguoiDung.value[key] === "") {
                // giá trị rổng
                isValid = false;
                break; // dừng duyệt đói tượng

            }
        }


        if (!isValid) {
            //ko hợp lệ
            alert("dữ liệu khong hơp lệ")
            return; // đưng hàm

        }
        //đảy dữ liệu ng dung lên ređux
        // console.log("đưa lên ređux");
        let action = {
            type: "THEM_ND",
            nguoiDung: this.props.nguoiDung.value
        }
        this.props.dispatch(action)

    }



    render() {
        console.log(this.props);
        let { taiKhoan, hoTen, matKhau, sdt, email, maloaiND } = this.props.nguoiDung.value;
        return (
            <div className='py-5'>
                <form onSubmit={(event) => {
                    this.handleSubmit(event);
                }}>
                    <div className="row">
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} value={taiKhoan} type="text" name='taiKhoan' className="form-control" placeholder="tài khoản" />
                            <p className='text-danger'>{this.props.nguoiDung.error.taiKhoan}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} value={hoTen} type="text" name='hoTen' className="form-control" placeholder="họ tên" />
                            <p className='text-danger'>{this.props.nguoiDung.error.hoTen}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} value={matKhau} type="password" name='matKhau' className="form-control" placeholder="mật khẩu" />
                            <p className='text-danger'>{this.props.nguoiDung.error.matKhau}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} value={sdt} type="text" name='sdt' className="form-control" placeholder="số điện thoại" />
                            <p className='text-danger'>{this.props.nguoiDung.error.sdt}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} value={email} type="text" typeinput="email" name='email' className="form-control" placeholder="Email" />
                            <p className='text-danger'>{this.props.nguoiDung.error.email}</p>
                        </div>
                        <div className="col-6  mb-5">

                            <select value={maloaiND} onChange={(event) => {

                                this.imputChange(event)

                            }} className="form-control" name="maLoaiND" id="">
                                <option className='text-danger'>{this.props.nguoiDung.error.maloaiND}</option>
                                <option value="khachHang">khách hàng</option>
                                <option value="quangTri">quảng trị viên</option>
                            </select>
                        </div>
                        <div className="col-12 text-center ">
                            <button className='btn btn-info'>đăng ký</button>
                            <button className='btn btn-success'>cập nhật</button>
                        </div>

                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        nguoiDung: rootReducer.QLNDReducer.nguoiDung
    }

}


export default connect(mapStateToProps)(FormDangKy)