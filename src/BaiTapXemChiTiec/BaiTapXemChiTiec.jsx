import React, { Component } from 'react'
import BangCT from './BangCT'
import DanhSachSP from './DanhSachSP'

export default class Btxemchitiet extends Component {
    phonelist = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./imgPhone/img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./imgPhone/img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./imgPhone/img/applephone.jpg" }
    ]

    // luwu 1 đối tượng phone vào state
    // khai báo giá trị mặt định cho chi tiếc phone
    state = {
        chiTiecPhone: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./imgPhone/img/vsphone.jpg" },

    }

  


    showDetail = (phone) => {
        console.log(phone);
        this.setState({
            chiTiecPhone: phone
        })
    }


    render() {
        let { chiTiecPhone } = this.state;
        return (
            <div className='container'>
               <DanhSachSP phonelist={this.phonelist}/>
               <BangCT chiTiecPhone={chiTiecPhone}/>
            </div>
        )
    }
}