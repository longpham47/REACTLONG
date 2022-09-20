import React, { Component } from 'react'

export default class SanPham extends Component {


  render() {
    let { phone ,showDetail } = this.props
    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{phone.tenSP}</h5>
          <p className="card-text">{phone.giaBan}$</p>
          <button onClick={() => {
           showDetail(phone)
          }} className="btn btn-primary">Xem chi tiet</button>
        </div>
      </div>
    )
  }
}
