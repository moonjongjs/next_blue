'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setModalAction, setModalCotentsAction } from "@/app/store/modal";
import { useDispatch } from 'react-redux';


export default function Section3Componet() {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        공지사항: [],
        갤러리: []
    });
   
    const [notice, setNotice] = React.useState(false);  // 상태관리 훅(Hook)


     useEffect(()=>{
        axios({
            url:`/data/section3.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                공지사항: res.data.공지사항,
                갤러리: res.data.갤러리
            })
        })
        .catch((err)=>{
            console.log( err );
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 공지사항 상태변수에 가져오면
    useEffect(()=>{

       try{             
          const obj = {
            "글제목": state.공지사항[0].글제목,
            "글내용": state.공지사항[0].공지글,
            "날짜": state.공지사항[0].날짜
          }
          dispatch(setModalCotentsAction(obj))        
       }
       catch(err){
          return;
       } 
           
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[state.공지사항]); // 의존성 배열

 
    // 갤러리 버튼 클릭 이벤트 => true
    const onClickGallery=(e)=>{
        e.preventDefault();
        setNotice(true);
    }
    // 공지사항 버튼 클릭 이벤트 => false
    const onClickNotice=(e)=>{
        e.preventDefault();
        setNotice(false);
    }

    // 공지사항 목록 클릭 이벤트
    // 모달창 열기
    const onClickOpenModal=(e, row)=>{
        e.preventDefault();
        // 최상위 컴포넌트에게 모달열기 함수 호출 실행
        // modalOpen(row);
        const obj = {
            "글제목": row.글제목,
            "글내용":  row.공지글,
            "날짜":  row.날짜,
        }
        dispatch(setModalCotentsAction(obj));
        dispatch(setModalAction(true))
    }




    return (
        <section id="section3">
            <div className="container">
                {/* 백틱 사용 표현식 => 탬플릿 리터럴 방식 */}
                <button 
                    className={`notice-btn${notice?' on':''}`}
                    onClick={onClickNotice}
                >공지사항</button>
                <button 
                    className={`gallery-btn${notice?' on':''}`}
                    onClick={onClickGallery}
                >갤러리</button>
                <div className={`notice-box${notice?' on':''}`}>
                    <ul>
                    {
                        state.공지사항.map((item)=>
                            <li key={item.코드번호} data-key={item.코드번호}>
                                <a href="!#" onClick={(e)=>onClickOpenModal(e, item )} className="open-btn">
                                    {item.공지글}
                                </a>
                                <span>
                                    {item.날짜}
                                </span>
                            </li>
                        )
                    }
                    </ul>
                </div>
                
                <div className={`gallery-box${notice?' on':''}`}>
                    <ul>
                    {
                       state.갤러리.map((item)=>
                            <li key={item.코드번호} data-key={item.코드번호}>
                                <a href="!#" title={item.코멘트}>
                                    <img src={`/images/${item.이미지}`} alt={item.코멘트} />
                                </a>
                            </li>
                        )                       
                    }
                    </ul>
                </div>

            
            </div>
        </section>
    );
}