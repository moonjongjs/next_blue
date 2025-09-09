'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function HeaderComponent(){

    // 서브메뉴 상태관리
    const [path] = useState(['/sub1','/sub2','/sub3','/sub4']);
    const [sub, setSub] = useState([false,false,false,false]);
    const [state, setState] = useState({
        네비게이션: {}
    });

    useEffect(()=>{
        axios({
            url: `/data/header.json`,
            method: 'GET' 
        })
        .then((res)=>{
            setState({
               네비게이션: res.data
            })
        })
        .catch((err)=>{
            console.log( err );
        });
    }, []);

   

    // 각메인버튼에 마우스 오버시 각서브메뉴가 보인다.
    // 함수를 1개 가지고 여러개를 대신할 수 있는 방법은 함수(매개변수)
    // 변수는 1개 가지고 여러개를 대신할 수 있는 방법은  배열 []
    const onMouseEnterMain=(idx)=>{
       let imsi = [false,false,false,false];
       imsi[idx] = true;
       console.log( imsi ) ;
       setSub(imsi);
    }
   

    // nav 영역을 떠나면 
    // 모든서브메뉴 숨긴다.
    const onMouseLeaveNav=()=>{
        setSub([false, false, false, false])
    }


    return(
       
        <header id="header">
            <div className="row1">
                <h1><Link href="/" title="푸른마을"><span>푸른</span><em>마을</em></Link></h1>
            </div>
            <div className="row2">
                <nav id="nav"  onMouseLeave={onMouseLeaveNav}>
                    <ul>
                    {
                        Object.keys(state.네비게이션).length > 0 &&
                        Object.keys(state.네비게이션).map((item, idx)=>
                            <li key={item} data-key={item}>
                                <Link 
                                    href={path[idx]} /* 패스네임 pathname /sub1 */
                                    className="main-btn" 
                                    title={item}
                                    onMouseEnter={()=>onMouseEnterMain(idx)}
                                >{item}</Link>
                            {  sub[idx] &&
                                <div className={`sub sub${idx+1}`}>
                                    <ul>
                                    {
                                    state.네비게이션[item].map((item2, idx2)=>
                                            <li key={idx2} data-key={idx2}> {/* 줄 */}
                                                {
                                                    item2.map((item3, idx3)=>
                                                        <span key={idx3} data-key={idx3}>
                                                            <a href="!#">{item3}</a>
                                                        </span>
                                                    )
                                                }
                                            </li>
                                        )    
                                    }
                                    </ul>
                                </div>
                            }
                            </li>
                        )                            
                    }
                    </ul>
                </nav>
            </div>
        </header>

    )
}