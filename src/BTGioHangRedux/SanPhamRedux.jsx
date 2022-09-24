import React, { Component } from 'react'

import { connect } from 'react-redux';


class SanPhamRedux extends Component {

    render() {
        // console.log(this.props)
        let { phone } = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={phone.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{phone.tenSP}</h4>
                    <p className="card-text">{phone.giaBan}</p>
                    <p className='card-text'>{phone.manHinh}</p>
                    <button onClick={() => {

                        //! đảy dữ liệu lên store (dispatch)

                        // (dispatch) : gui dữ loiệu từ component lên trên sôtrre
                        //để đảy dữ liệu lên store phải tạo action object
                        const action = {
                            type: " THEM_GIO_HANG", // BẮT BUỘC PHẢI CÓ TYPE
                            sanPham: phone
                        }
                        this.props.dispatch(action)


                    }} data-toggle="modal" data-target="#modelId" className="btn btn-danger">Thêm Giỏ hàng</button>
                </div>
            </div>
        )
    }
}


// mapstateToProps : chỉ tạo khi cần lấy dữ liệu từ store xuong component
// nếu ko cần lấy dữ liệu thì ko tạo



// có thể export trục tiếp conponent mới của connect tạo ra
export default connect()(SanPhamRedux);