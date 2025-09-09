# 02_NextJS_제이쿼리삭제_구현

# NextJS 구조

[public]
    [css]
    [images]
    [script]
    
[src]
    [app]
        layout.js  => index.html 구조 비슷
        page.js    => MainComponent.jsx 컴포넌트 구조 비슷
        [sub1]
            page.js
        [sub2]
            page.js
    [components]    
        HeaderComponet.jsx
        [main]
            Section1Componet.jsx
            Section2Componet.jsx
            Section3Componet.jsx
        FooterComponet.jsx


1. 프로젝트 node_modules 생성

npm i

2. 프로젝트 실행

npm run dev


3. 패키지 설치
npm i axios
npm i @reduxjs/toolkit react-redux

4. 리덕스
    4-1. [app] => [store]
    4-2. [app] => [store] => index.js / modal.js
    4-3. [app] => ProviderComponent.js

    