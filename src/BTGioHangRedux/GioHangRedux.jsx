import React, { Component } from 'react'

import { connect } from "react-redux" //!(*)


class GioHangRedux extends Component {
  renderCart = () => {
    return this.props.gioHang.map((spGh) => {
      return <tr key={`cart-${spGh.maSP}`}>

        <td>{spGh.maSP}</td>
        <td>
          <img style={{ width: "50px" }} src={spGh.hinhAnh} alt="" />
        </td>
        <td>{spGh.tenSP}</td>
        <td>
          <button onClick={() => {
            this.props.changeSL(spGh.maSP, 1)
          }} className='btn btn-info'>+</button>
          <span>{spGh.soLuong}</span>
          <button onClick={() => {
            this.props.changeSL(spGh.maSP, -1)
          }} className='btn btn-danger'>-</button>
        </td>
        <td>
          {spGh.giaBan.toLocaleString()}Vnd
        </td>
        <td>
          {(spGh.soLuong * spGh.giaBan).toLocaleString()}Vnd
        </td>
        <td>
          <button onClick={() => {
            // c1: sủ dụng hàm dispartch của redux
            // let action ={
            //   type:"XOA_GIO_HANG",
            //   maSPXoa : spGh.maSP
            // }
            // this.props.dispatch(action);


            this.props.xoaSP(spGh.maSP);
          }} className='btn btn-success'>xoá</button>
        </td>
      </tr>
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div className="modal fade" id="modelId" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">mã</th>
                    <th scope="col">hình ảnh</th>
                    <th scope="col">tên sản phẩm</th>
                    <th scope="col">số luọng</th>
                    <th>đơn giá</th>
                    <th>thanh tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCart()}

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

// c2 : sử dụng hàm định nghĩa lại tên cảu dispatch
// truyên tham ssố dispatch  vào hàm =>
const mapDispatchToProps = (dispatch) => {
  // lưu dispatch vào poprss
  return {
    // xoaSP :tênhàm mới của dispatch
    xoaSP: (maSP) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSPXoa: maSP
      }
      dispatch(action);
    },
    changeSL:(maSP,sl) => {
      let action = {
        type: "DOI_SO_LUONG",
        maSPDoi: maSP,
        soLuong: sl,
      }
      dispatch(action);
    }
  }
}









// tạo hàm lấy giá trị state(reduce) từ store cua redux : mapStateToProps
// mapStateToProps : đem state từ redux luuwu xuông props component
const mapStateToProps = (rootReducer) => {
  // lưu  state vào props cua component
  return {
    gioHang: rootReducer.gioHangReduce
  }
}

//! connect tạo ra 1 loại component mớibao gom tính năng cua class cpmponent react + redux (*)
//  connect(null, mapDispatchToProps) nêu ko có mapStateToProps
const componentGioHangRedux = connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
export default componentGioHangRedux;