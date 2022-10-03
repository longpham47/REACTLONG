import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {

    renderMangND = () => {
        let stt = 1;
        console.log(this.props)
        return this.props.mangND.map((nd) => {
            return <tr key={nd.taiKhoan}>
                <td>{stt++}</td>
                <td>{nd.taiKhoan}</td>
                <td>{nd.hoTen}</td>
                <td>{nd.matKhau}</td>
                <td>{nd.sdt}</td>
                <td>{nd.email}</td>
                <td>{nd.email}</td>
                <td>{nd.maLoaiND}</td>
                <td>
                    <button onClick={()=>{
                        let action = {
                            type :"XOA_ND",
                            taiKhoanXoa: nd.taiKhoan
                        }
                        this.props.dispatch(action);
                    }} className='btn btn-danger'>xoá</button>
                    <button onClick={()=>{
                        let action ={
                            type : "XEM_CT",
                            ndChiTiet : nd
                        }
                        this.props.dispatch(action)
                    }} className='btn btn-info'>xem</button>
                </td>

            </tr>
        })
    }




    render() {
        return (
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>stt</th>
                            <th>tài khoảng</th>
                            <th>họ tên</th>
                            <th>mật khẩu</th>
                            <th>sdt</th>
                            <th>email</th>
                            <th>lại nd</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMangND()}
                    </tbody>
                </table>
            </div>

        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        mangND: rootReducer.QLNDReducer.mangNguoiDung
    }
}

export default connect(mapStateToProps)(TableNguoiDung)
