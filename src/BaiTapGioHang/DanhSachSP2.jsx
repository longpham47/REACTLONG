import React, { Component } from 'react'
import SanPham from '../BaiTapXemChiTiec/SanPham'
import SanPham2 from './SanPham2'

export default class DanhSachSP2 extends Component {

  renderProductList = () => {
    return this.props.phonelist.map((phone) => {
        return <div className="col-4" key={phone.maSP}>
            <SanPham2   addToCard={this.props.addToCard} phone={phone}/>
        </div>

    })
}


  render() {
    // console.log(this.props)
    return (
      <div className="row py-5">
        {this.renderProductList()}
      </div>
    )
  }
}
