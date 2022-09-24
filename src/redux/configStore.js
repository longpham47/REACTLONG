


// Store : chứa các giá trị cần đổi (state)
import {combineReducers,createStore} from "redux" ;

//state ở rcc là đói tượng


//redux là state lưu trên stoẻe đeux
// rootReducer : chưa tất cả cac state

//khai báo giá tị mạt đinh cho state
const gioHang = [
    { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", giaBan: 5700000, hinhAnh: "./imgPhone/img/vsphone.jpg",soLuong:1 }
]
const rootReducer = combineReducers ({
    // khai báo và lưu trữ các state của ứng dụng
    // reduce là một hàm trả về state
    

    gioHangReduce:(state = gioHang,action) => {
        console.log(action);
        return state;
    }

})

export const store = createStore(rootReducer);