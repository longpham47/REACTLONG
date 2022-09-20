import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSP extends Component {

  renderPhoenList = () => {
    return this.props.phonelist.map((phone) => {
        return <div className="col-4" key={`phone-${phone.maSP}`}>
          <SanPham phone={phone} showDetail={this.props.showDetail}/>
        </div>

    })
}

  render() {
    return (
      <div className="row">

      {this.renderPhoenList()}


  </div>
    )
  }
}
