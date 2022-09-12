import React, { Component } from 'react'

// (1) code css ứng dụng cho toàn wed
import "./demoStyling.css";

//!    import loại file module  css (3)
import styleModule from "./StylComponent.module.css";



export default class DemoStyling extends Component {
    render() {
        // (2)
        let stylerObj = {
            color:"red",
            backgroundColor: "yellow",
        }
        return (
            <div>
            {/* (1) External CSS - impor link css */}
                <p className='demoCSS'>DemoStyling</p>

                 {/* (2) code css chỉ có tác dung riêng ở 1 component : inline css    */}

                <p style={stylerObj}>Inline css</p>
                <p style={{fontSize:"40px"}}>css 1 thuộc tính</p>

            {/* (3)  module css */}
                <p className={styleModule.stylerFontSize}>demo module css</p>

                <p className={`${styleModule.stylerFontSize} ${styleModule["color-red"]}`}>demo nhiều class name </p>

            </div>
        )
    }
}
