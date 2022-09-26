import React, { Component } from 'react';

//chỉ nên dung khi import it hinh ( 2 3 hình)
import XucXatImg from "../asset/img/1.png";

import "./GameTaiXiu.css";
import KetQua from './KetQua';
import XucXat from './XucXat';

export default class GameTaiXiu extends Component {
    render() {
        return (
            <div className='container-fluid py-5 bgGame'>
                <h1 className='text-center'>game tài xiu</h1>
                <XucXat />
                <KetQua />


            </div>
        )
    }
}
