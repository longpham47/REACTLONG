import React, { Component } from 'react'
import { connect } from 'react-redux'

// c1 : lưu giá trị từ form ở state từ componet
// c2 : lưu giá trị từ form ở redux
class FormDangKy extends Component {





    // chưia giá trị từ form ; chưua nội dung error 
    state = {
        value: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            sdt: "",
            email: "",
            maloaiND: "KHACHHANG"
        },
        error: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            sdt: "",
            email: "",
            maloaiND: "",
        }
    }


    // valueForm = {};

    imputChange = (event) => {
        console.log(event.target)
        console.log(event.target.value, event.target.name);
        let { value, name } = event.target;

        // tổ chưc luiư dữ liệu từ stăte
        let newValue = { ...this.state.value, [name]: value }
        console.log(newValue);

        let newError = { ...this.state.error }
        let errorMSG = "";
        if (value.trim() == "") {
            errorMSG = name + "nội dung khồn được đẻ trống !"
        }

        //obj.tenthuoctih ; obj[tenthuoctinh]
        newError[name] = errorMSG
        this.setState({
            value: newValue,
            error: newError,
        })
    }

    render() {
        return (
            <div className='py-5'>
                <form>
                    <div className="row">
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} type="text" name='taiKhoan' className="form-control" placeholder="tài khoản" />
                            <p className='text-danger'>{this.state.error.taiKhoan}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} type="text" name='hoTen' className="form-control" placeholder="họ tên" />
                            <p className='text-danger'>{this.state.error.hoTen}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} type="password" name='matKhau' className="form-control" placeholder="mật khẩu" />
                            <p className='text-danger'>{this.state.error.matKhau}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} type="text" name='sdt' className="form-control" placeholder="số điện thoại" />
                            <p className='text-danger'>{this.state.error.sdt}</p>
                        </div>
                        <div className="col-6  mb-5">
                            <input onChange={(event) => {

                                this.imputChange(event)

                            }} type="text" name='email' className="form-control" placeholder="Email" />
                            <p className='text-danger'>{this.state.error.email}</p>
                        </div>
                        <div className="col-6  mb-5">

                            <select onChange={(event) => {

                                this.imputChange(event)

                            }} className="form-control" name="maLoaiND" id="">
                            <p className='text-danger'>{this.state.error.maloaiND}</p>
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


export default connect()(FormDangKy)