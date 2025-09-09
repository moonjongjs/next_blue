'use client';
import React, { useEffect, useState } from 'react';

export default function Section1Component(){

    const [state, setState] = useState({
        슬라이드: [],
        바로가기: []
    });

    // 자바스크립트 에서 지원되는 API
    // API => fetch() => JSON
    // 프로미스 비동기 방식
    useEffect(()=>{
        fetch(`/data/section1.json`, {method: 'GET'})
        .then((res)=>res.json())  // JSON 형식 변환
        .then((data)=>{

            setState({
                ...state,
                슬라이드: data.메인슬라이드,
                바로가기: data.바로가기
            })

        })  // 결과 가져오기 상태변수에 저장한기
        .catch((err)=>{
            console.log('fetch 오류!')
        }); // 오류발생시
    },[])


    
    // 1. 상태변수
    const [cnt, setCnt] = React.useState(0);
    
    // 4. 선택자
    const slideWrap = React.useRef();


    // 2. 타이머
    React.useEffect(()=>{
        const id = setInterval(()=>{   // 마운트 때 실행
            setCnt(cnt=>cnt+1);
        }, 6000);
        return ()=> clearInterval(id); // 언마운트 때 실행
    }, []);

    // 3. cnt 변화 감지
    React.useEffect(()=>{

        if(cnt>3){
            slideWrap.current.style.transition = `none`;
            slideWrap.current.style.left = `${-100*0}%`;
            setTimeout(()=>{
                setCnt(1);
            },100);
        }
        else {
            slideWrap.current.style.transition = `left 0.6s`;
            slideWrap.current.style.left = `${-100*cnt}%`;
        }
       
    }, [cnt]);


    return(
        <section id="section1">
            <div className="slide-container">
                <div className="slide-view">
                    <ul ref={slideWrap} className="slide-wrap">
                    {
                        state.슬라이드.map((item)=> 
                            <li key={item.코드번호} data-key={item.코드번호}  className={`slide ${item.클래스} last`}>
                                <a href="!#" title={item.코멘트}>
                                    <img src={`/images/${item.이미지}`} alt={item.코멘트}/>
                                    <h2>{item.코멘트}</h2>
                                </a>
                            </li>
                        )
                    }
                    </ul>
                </div>
            </div>
            <div className="link">
                <ul>
                {
                    state.바로가기.map((item)=> {
                        if(item.타이틀!==''){
                            return(
                                <li key={item.코드번호}  data-key={item.코드번호}>
                                    <a href="!#" title={item.타이틀}>
                                        <img src={`./images/${item.이미지}`} alt={item.타이틀}/>
                                    </a>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={item.코드번호} data-key={item.코드번호}>
                                    <i></i>
                                </li>
                            )
                        }
                    })                   
                }
                </ul>
            </div>
        </section>
    )
}