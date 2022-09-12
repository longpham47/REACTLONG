
//! state

import React, { Component } from 'react'

export default class DemoSTATE extends Component {
    // tạo 1 biến chứa trạng thái đang nhập
    //tạo hàm kiểm tra khi click button logon => đỏi giá trị islogin sang true
    // kiêmt tra : nếu là true =>> đang nhập =>> heảder hiển thị tên usname , ngược lịa hiển thị button login

    isLogin = false; // chưa đăng nhập


    // chuyển gía trị cần đổi vào state (thuọc tính co săn rcc)

    state = {
        isLogin: false
    }
    // phương hức kiểm tra đang nhập


    checkLogin = () => {
        if (this.isLogin) {
            return <p className='text-white'>nguyễn thị khách hàng</p>
        }
        return <button onClick={() => {
            // alert("hello")
            // click đổi islogin =>> true => Ui sẽ loanding lại và hiển thị tên clicent
            this.isLogin = true;
            console.log(this.isLogin);
            // load lại UI
            // this.render();// hàm render chỉ chạy 1 lần khi load ứng dụng
            //để đổi dk ggiá trị và render lại UI khi giá trị thay đổi => state


            // xét lại giá trị mới cho state và redern lại uigit

            //? nếu chứa nhiều tham sô
            // let newstay ={
            //    isLogin:true
            // }
            // this.setState(newstay,() = >{
            //     console.log(this.state.isLogon)
            // });
            // nếu dặt clg dưới setate  sẻ bị sai kết quả thông báo do bất đòng bộ dữ liệu



            this.setState({
                isLogin: true
            });

        }} className='btn btn-info'>login</button>
    }

    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <div>
                        {/* hiển thị button login hoặc username */}
                        {this.checkLogin()}
                    </div>
                </nav>
            </div>

        )
    }
}
