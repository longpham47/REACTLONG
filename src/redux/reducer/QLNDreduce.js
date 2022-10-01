


const initialState = {
    mangNguoiDung: [
        {
            taiKhoan: "user1", hoTen: "nguyên văn A", matKhau: "123456", sdt: "0123456789",
            email: "test@gmail.com", maloaiND: "KHACHHANG"
        },
        {
            taiKhoan: "user2", hoTen: "nguyên văn B", matKhau: "123456", sdt: "0123456789",
            email: "test@gmail.com", maloaiND: "KHACHHANG"
        },
    ],
}

export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
}
