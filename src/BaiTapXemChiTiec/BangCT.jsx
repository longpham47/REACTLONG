import React, { Component } from 'react'

export default class BangCT extends Component {

  

  render() {
    let {chiTiecPhone}= this.props
    return (
      <div className="row">
        <div className="col-4">
          <h3>{chiTiecPhone.tenSP}</h3>
          <img className='img-fluid' src={chiTiecPhone.hinhAnh} alt="" />
        </div>
        <div className="col-8">
          <h2>THông số Kỹ Thuật</h2>
          <table className="table">
            <thead>
              <tr>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>màng hình</td>
                <td>{chiTiecPhone.manHinh}</td>

              </tr>
              <tr>
                <td>HĐH</td>
                <td>{chiTiecPhone.heDieuHanh}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
