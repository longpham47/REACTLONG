
//! Binding

import React, { Component } from 'react'

export default class DataBinding extends Component {
  // thuộc tính của class
  userInfo = {
    name: "bánh trung thu",
    avatar: "https://source.unsplash.com/random/?mooncake",
    price: 5000
  }

  renderFood = () => {
    // trả về đoói tượng JSX
    //! thẻ mở luôn nằm cừng hàng vs lệnh return ,nếu muốn xuông dòng thì dung dáu () : return()
    return <div className="card" >
      <img src={this.userInfo.avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{this.userInfo.name}</h5>
        <p className="card-text">{this.userInfo.price}$</p>

      </div>
    </div>

  }

  render() {
    // biến trong hàm
    let usename = "user123";
    return (
      <div className='container'>
        {/*     {}: dấu binding dữ liệu */}
        <h1> hello {usename}</h1>
        <div className="row">
          <div className="col-4">
            <div className="card" >
              <img src={this.userInfo.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{this.userInfo.name}</h5>
                <p className="card-text">{this.userInfo.price}$</p>

              </div>
            </div>

          </div>
          <div className="col-4">
            {/* biding hàm có retuên UI , giá trị tính toán  */}
            {this.renderFood()}
          </div>
        </div>
      </div>

    )
  }
}
