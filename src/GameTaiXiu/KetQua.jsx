import React, { Component } from 'react'
import { connect } from 'react-redux'


class KetQua extends Component {
  render() {
    console.log(this.props);
    let { banChon, tongBan, soBanThang } = this.props.game
    return (
      <div className="result text-center py-5">
        <p>bạn chọn : <span className='text-danger'>{banChon ? "Tài" : "Xỉu"}</span></p>
        <p>số bàn thăng : <span className='text-success'>{soBanThang}</span></p>
        <p>tôngt số bàn chơi : <span className='text-danger'>{tongBan}</span></p>

        <button className='btn btn-info' onClick={()=>{
          let action = {
            type:"LAC_XUC_XAC"
          }
          this.props.dispatch(action);
        }}>play</button>

      </div>
    )
  }
}




const mapStateToProps = (rootReducer) => {
  return {
    game: rootReducer.gameReduce
  }

}




export default connect(mapStateToProps)(KetQua);
