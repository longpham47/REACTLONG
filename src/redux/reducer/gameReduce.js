


//! rxr

// ggiá trị mặt đinh của state
// gaem : mangXxucXac ,banChon,tongBan,soBanTahng
const initialState = {
    mangXucXac:[
        {hinh:"./img/gamexx/1.png",diem:1},
        {hinh:"./img/gamexx/2.png",diem:2},
        {hinh:"./img/gamexx/3.png",diem:3 },
    ],
    banChon:true,
    tongBan:0,
    soBanThang:0,
}

export const gameReduce = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
}
