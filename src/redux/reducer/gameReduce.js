


//! rxr

// ggiá trị mặt đinh của state
// gaem : mangXxucXac ,banChon,tongBan,soBanTahng
const initialState = {
    mangXucXac: [
        { hinh: "./img/gamexx/1.png", diem: 1 },
        { hinh: "./img/gamexx/2.png", diem: 2 },
        { hinh: "./img/gamexx/3.png", diem: 3 },
    ],
    banChon: true,
    tongBan: 0,
    soBanThang: 0,
}

export const gameReduce = (state = initialState, action) => {
    switch (action.type) {
        case "DAT_CUOC":

            // console.log(action)
            state.banChon = action.datCuoc;
            return { ...state };// đổi dịa chỉ state
        case "LAC_XUC_XAC":

            // Math.floor(Math.random() * 7);
            let mangNgauNhien = [];// mảng đói tượng xúc xắc
            for (let i = 0; i < 3; i++) {
                let matXucXac = Math.floor(Math.random() * 6) + 1;
                let xucxac = {
                    hinh: `./img/gamexx/${matXucXac}.png`,
                    diem: matXucXac
                }
                mangNgauNhien.push(xucxac);

            }
            // console.log(mangNgauNhien);
            state.mangXucXac = mangNgauNhien;

            // tổng điểm <= 11 xỉu ; >11 tài
            let tongDiem = state.mangXucXac.reduce((tong, xucxac, index) => {
                return tong += xucxac.diem;
            }, 0);
            console.log(tongDiem);

            // diểu kiện thắng : th1 : bạn chon true(tài) && >= 11 :   win
                                // th2 : xỉu && < 11 :  win
            if ((state.banChon && tongDiem >= 11 )||( !state.banChon && tongDiem < 11)){
                // win 
                state.soBanThang += 1;
            } 
            state.tongBan += 1;


            return { ...state }
        default:
            return state
    }
}
