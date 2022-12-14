


const initialState = {
    mangNguoiDung: [
        {
            taiKhoan: "user1", hoTen: "nguyên văn A", matKhau: "123456", sdt: "0123456789",
            email: "test@gmail.com", maloaiND: "khachHang"
        },
        {
            taiKhoan: "user2", hoTen: "nguyên văn B", matKhau: "123456", sdt: "0123456789",
            email: "test@gmail.com", maloaiND: "khachHang"
        },
    ],
    nguoiDung : {
        value: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            sdt: "",
            email: "",
            maloaiND: "khachHang"
        },
        error: {
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            sdt: "",
            email: "",
            maloaiND: "",
        }
    }
    
}

export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE" :
            console.log(action.nguoiDung)
            state.nguoiDung = action.nguoiDung;



            return {...state}

        case "THEM_ND":
            console.log(action.nguoiDung)
            // state.mangNguoiDung.push(action.nguoiDung);
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]

            return { ...state }
        case "XOA_ND":

            // console.log(action.taiKhoanXoa);
            state.mangNguoiDung = state.mangNguoiDung.filter((nd) => {
                return nd.taiKhoan !== action.taiKhoanXoa


            })
            return { ...state }

        case "XEM_CT":
            console.log(action.ndChiTiet)
            state.nguoiDungChiTiet = action.ndChiTiet;



            return { ...state }

        default:
            return state
    }
}
