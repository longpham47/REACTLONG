import React, { Component } from 'react'

export default class TangGiamFont extends Component {
    // fontState = 16; // numbẻ dẽ tăng giãm
    state = {
        fontState: 16
    }

    changFontsize = (num) => {
        this.setState({
            fontState: this.state.fontState + num
        })
    }

    render() {
        return (
            <div className='container'>
                <h2>TangGiamFont</h2>
                <button onClick={() => {
                    // gọi sétState trong sự kiênk của button
                    //  => gán giá trị  mới cho stêt khi click , rendẻr lại ui
                    this.changFontsize(1);


                }} className='btn btn-success'>+</button>


                {/* <span style={{fontSize:"16px"}}>text tăng giãm</span> */}
                <span style={{ fontSize: `${this.state.fontState}px` }}>text tăng giãm</span>
                <button onClick={() => {

                    // this.setState({
                    //     fontState: this.state.fontState - 1
                    // })
                    this.changFontsize(-1);

                }} className='btn btn-info'>-</button>
            </div>
        )
    }
}
