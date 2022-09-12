

import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showName = () => {
        alert("nguyen thị khách hàng")
    }

    showName2 = (name) => {
        // truyền biến vào chuổi string
        alert( `hello ${name}`);
    }

    render() {
        return (
            <div className='container'>
            {/* chờ người dung  click bunton mới chạy hàm => không có dâu () */}
            {/* {}: truyền dữ liệu vào thẻ JSX */}
                <button onClick={this.showName} className='btn btn-info'>click</button>



                <button onClick={()=>{
                    this.showName2("nguyễn thị khách hangd");
                    
                    
                }} className='btn btn-danger'>click có tham số</button>
            </div>
        )
    }
}
