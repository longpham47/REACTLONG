


// Store : chứa các giá trị cần đổi (state)
import { combineReducers, createStore } from "redux";

//state ở rcc là đói tượng


//redux là state lưu trên stoẻe đeux
// rootReducer : chưa tất cả cac state

//khai báo giá tị mạt đinh cho state
const gioHang = [
    // { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", giaBan: 5700000, hinhAnh: "./imgPhone/img/vsphone.jpg", soLuong: 1 }
]
const rootReducer = combineReducers({
    // khai báo và lưu trữ các state của ứng dụng
    // reduce là một hàm trả về state
    //nhận tất cả data lên store => để phân loại nghjiẹp vụ càn xu lý
    //=> kiểm tra type cua action

    gioHangReduce: (state = gioHang, action) => {
        console.log(action);
        switch (action.type) {
            case "THEM_GIO_HANG":


                // kiểm tra ản phảm có tồn taihj trong gio hàng chưa
                let spFind = state.find((sp) => {
                    return sp.maSP === action.sanPham.maSP;
                });
                if (spFind) {
                    //tìm thấy  ( có sp trong gh)
                    spFind.soLuong += 1;
                } else {
                    // tạo sp gio hàng
                    let spGH = { ...action.sanPham, soLuong: 1 };
                    state.push(spGH);

                }
                console.log(state);
                // return giá trị mới về state
                // imutable tinh bất biên => tham trj và tham chiếu ( địa chỉ ô nhơs)
                // =>redux sẻ kiểm tra ô nhớ state nếu địa chỉ ko  đổi = > giá trị ko đổi



                return [...state];


            case "XOA_GIO_HANG":
                // dilter về mảng mới
                let gioHngCapNhat = state.filter((sp) => {
                    // trả về mảng mới chứa sp cần giữ lại
                    return sp.maSP !== action.maSPXoa;
                })
                // update về state
                // khi gán vào state =>state có địa chi mới

                state = gioHngCapNhat;
                return state;

            case "DOI_SO_LUONG":

                let spFindDoi = state.find((sp) => {
                    return sp.maSP === action.maSPDoi
                });
                if (spFindDoi) {
                    spFindDoi.soLuong += action.soLuong
                }
                

                return [...state];// 
            default:
                return state;
        }

    }

})

export const store = createStore(rootReducer);