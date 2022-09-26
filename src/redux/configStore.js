


// Store : chứa các giá trị cần đổi (state)
import { combineReducers, createStore } from "redux";
import { gioHangReduce } from "./reducer/gioHangReduc";
import { gameReduce } from "./reducer/gameReduce";

//state ở rcc là đói tượng


//redux là state lưu trên stoẻe đeux
// rootReducer : chưa tất cả cac state

//khai báo giá tị mạt đinh cho state
// const gioHang = [
//     // { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", giaBan: 5700000, hinhAnh: "./imgPhone/img/vsphone.jpg", soLuong: 1 }
// ]
const rootReducer = combineReducers({
    // khai báo và lưu trữ các state của ứng dụng
    // reduce là một hàm trả về state
    //nhận tất cả data lên store => để phân loại nghjiẹp vụ càn xu lý
    //=> kiểm tra type cua action

    
       
    gioHangReduce, //  gioHangReduce: gioHangReduce (objject literal)
    gameReduce

})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());