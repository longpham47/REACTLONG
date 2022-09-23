import React, { Component } from 'react'

export default class SanPham2 extends Component {



  render() {
    // console.log(this.props);
    let { phone } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={phone.hinhAnh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className="card-text">{phone.giaBan}</p>
          <p className='card-text'>{phone.manHinh}</p>
          <button onClick={() => {
            this.props.addToCard(phone)
          }} data-toggle="modal" data-target="#modelId" className="btn btn-danger">Thêm Giỏ hàng</button>
        </div>
      </div>
    )
  }
}
