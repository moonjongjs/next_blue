'use client';
import { setModalAction } from '@/app/store/modal';
import { useSelector, useDispatch } from 'react-redux';

export default function ModalComponent(){

    // useSelector 선언
    const modal = useSelector((state)=>state.modal);
    const dispatch = useDispatch();

    // 모달닫기
    const onClickModalClose=(e)=>{
        e.preventDefault();
        dispatch(setModalAction(false))
    }

    return(
        <div className={`layer-popup${modal.isOpen?' on':''}`}>
            <div className="container">
                <div className="title">
                    <h2>{modal.글제목}</h2>
                    <span>{modal.날짜}</span>
                </div>
                <div className="content">
                    <ul>
                        <li>{modal.글내용}</li>
                    </ul>
                </div>
                <div className="button-box">
                    <button 
                        className="close-btn"
                        onClick={onClickModalClose}
                    >닫기</button>
                </div>
            </div>
        </div>
    )
}