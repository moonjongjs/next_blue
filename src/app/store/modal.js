import { createSlice } from "@reduxjs/toolkit";

// modal 리듀서 생성
const modal = createSlice({
    name:'모달',
    initialState: {
        "글제목": '',
        "글내용": '',
        "날짜": '',
        isOpen: false
    },
    reducers: {
        // 액션메서드 => 섹션3 데이터 전송
        setModalCotentsAction(state, action){
            state.글제목 = action.payload.글제목;
            state.글내용 = action.payload.글내용;
            state.날짜 = action.payload.날짜;
        },
        // 모달 창 => 열기 / 닫기
        setModalAction(state, action){
            state.isOpen = action.payload
        }
    }
});

export default modal.reducer;
export const {setModalCotentsAction, setModalAction} = modal.actions;
