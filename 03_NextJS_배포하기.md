03 NextJS 닷홈 정적 배포하기

3-1. package.json

- "export": "next export" 추가

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",

    "export": "next export"
  },
```

3-2. next.config.js
- 배포 url
http://moonjong7.dothome.co.kr/next_pureunmaeul

- 배포 폴더 명 지정 : /next_pureunmaeul
const nextConfig = {
    output: 'export',  // 정적배포
    basePath: '/next_pureunmaeul',
    images: {
        unoptimized: true  // 이미지 최적화 기능 끄기(정적 배포 필수)
    },
    trailingSlash: true  // SPA 새로고침 404 해결 
}

3-3. .env.local  환경 변수 파일 생성
```JS
NEXT_PUBLIC_BASE_PATH=/next_pureunmaeul
```

3-4. HTTP 통신 fetch api, axios api 경로지정 
```JSX
        fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/data/section1.json`, {method: 'GET'})

        axios({
            url:`${process.env.NEXT_PUBLIC_BASE_PATH}/data/section3.json`,
            method: 'GET'
        })

        axios({
            url:`${process.env.NEXT_PUBLIC_BASE_PATH}/data/header.json`,
            method: 'GET' 
        })

```


3-5. 컴포넌트 이미지 경로 
 
./ 상대경로

```JSX
<img src={`./images/${item.이미지}`} alt={item.타이틀}/>
```

3-6. 빌드(Build)
- 현재 서버 끄고
- npm i

```JS
npm run build
```

결과
[out]


3-7. 배포 => 닷홈 => FTP 업로드

