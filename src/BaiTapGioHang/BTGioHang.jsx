import React, { Component } from 'react'
import SanPham from '../BaiTapXemChiTiec/SanPham'
import DanhSachSP2 from './DanhSachSP2'
import GioHang from './GioHang'

export default class BTGioHang extends Component {

    phonelist = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./imgPhone/img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./imgPhone/img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./imgPhone/img/applephone.jpg" }
    ]

    state = {
        gioHang: [
            // { maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./imgPhone/img/vsphone.jpg", soLuong: 1 }
        ]
    }



  


  


    //input : thoonf tin san r phaamr ddang duwocj click
    //output : sanpham được thêm vào gĩo hàng
    addToCard = (spClick) => {
        console.log(spClick); // chưua có số lượng

        let newGioHang = [...this.state.gioHang]

        // tìm san tphảm trong giõ hang có mã trùng với mã spclick
        // find : trả về đối tượng ; finđinex trả về vị trí phan tu
        let spFind = this.state.gioHang.find((spGh) => {
            return spClick.maSP === spGh.maSP;
        })
        if (spFind) {
            spFind.soLuong = spFind.soLuong + 1 // số luọng sp mới  =solupong củ +1sp
        } else {

            let spNewGioHang = { ...spClick, soLuong: 1 } // coppy thuộc tính của spclịck và thêm thuọc tính mới Soluong

            newGioHang = [...newGioHang, spNewGioHang] // newGioHang : sản phẩm của giỏ hang củ và thêm của giỏ hang spNewGioHang
            //  newGioHang.push(spNewGioHang) //! push
        }

        // nếu sản phẩm cầnthêm dả tồn tại (dụa vào maSP) thì tăng số luong
        // ngược lịa thêm 1 sản phâm mới

        this.setState({

            gioHang: newGioHang //LƯU vào state mang giõ hang mới chuwa các sản pảm n=mới thêm
        })


    }





    removeCart = (maXoa) => {
        
        console.log(maXoa);
        let GioHangCapNhat = [...this.state.gioHang]
        // tìm dực vi j tri cần xoá trong giỏ hàng finđInex
        // splice xoá phần tử theo vitrí

            //! cách 1 : ffinđIndex
    //    let indexXoa =  GioHangCapNhat.findIndex((spGH) => { 
    //     return spGH.maSP === maXoa;
    //     })
    //     if(indexXoa > -1){
    //         // tìm thấy  : tìm ko thấy -1
    //         GioHangCapNhat.splice(indexXoa,1);
    //     }

    //! cách 2 : filter

    // lọc ra các sản phâm có mã khác vs san phảm cần xoa
    //filter trả về mảng mới khoong chứa sản phẩm 

    GioHangCapNhat = GioHangCapNhat.filter((spGH) => { 
        return spGH.maSP !== maXoa;
     })



        this.setState({
            gioHang:GioHangCapNhat
        })
    }



    // thay đổi sô luọng (+-)
    changeSL = (maSP,sl) =>{
        let GioHangCapNhat = [...this.state.gioHang]
        let spFind = GioHangCapNhat.find((spGH) => { 
            return spGH.maSP === maSP;
            
         })
         if(spFind){
                spFind.soLuong = spFind.soLuong + sl; // số loupngj mới = so luọng củ + 1  hoặt só luọng củ + (-1)
                if(spFind.soLuong < 1){
                    alert("sô luọng tối thiểu là 1")
                    
                    // spFind.soLuong -= sl : rútgon
                    spFind.soLuong = spFind.soLuong - sl
                }
            }
        this.setState({
            gioHang:GioHangCapNhat
        })

    }




    //! thay đổi tổng số luọng trên giỏ hàng .reduce((KẾT QUẢ ,TỪNG PHẦN TỬ, VỊ TRÍ)=>{},giá trị khoi toạ kết quả):

    tinhTongSL = () => {
        // reduce ((KẾT QUẢ ,TỪNG PHẦN TỬ, VỊ TRÍ)=>{},giá trị khoi toạ kết quả): duyệt mảng ,dựa vào công thưc tính toán 
        // return một kết quả tính toán 


        let tong = this.state.gioHang.reduce((tongSL,sanPham,index) => {
            //công thức tính toán 
            return tongSL += sanPham.soLuong;

          }, 0);
          return tong.toLocaleString();

    }






        render() {
            return (
                <div className='container'>

                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <a className="navbar-brand" href="#!">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#!">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Link</a>
                                </li>

                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                <p className="text-white">Giở Hàng ({this.tinhTongSL()}) </p>
                            </div>
                        </div>
                    </nav>
                    <DanhSachSP2  addToCard={this.addToCard} phonelist={this.phonelist}/>

                   <GioHang  removeCart={this.removeCart} changeSL={this.changeSL} gioHang={this.state.gioHang}/>

                </div>
            )
        }
}
