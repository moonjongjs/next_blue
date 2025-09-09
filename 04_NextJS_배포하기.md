# 04 NextJS 배포하기
1. CSR(정적배포) - 프론트앤드 - HTML + CSSS + JS 웹배포방식 => 닷홈
2. SSR(동적배포) - 백앤드(Vercel NodeJS 서버(익스프레스)) + 프론트앤드
# 2-1  package.json
# 2-2  next.config.js
# 2-3  HTTP 통신 API(fetch, axios) 
- url 상대경로 (./) => 절대 경로 변경(/)
- 이미지 경로  (./) => 절대 경로 변경(/)

# 2-4 깃허브 레파지토리 생성
    
- 레파지토리 next_blue   
- https://github.com/moonjongjs/next_blue.git


git init
git config user.name 'moonjongjs'
git config user.email 'moonseonjong@naver.com'
git remote add origin https://github.com/moonjongjs/next_blue.git
git add .
git commit -m 'Next SSR Vercel Deploy'
git push origin master

브랜치 생성하고 체크아웃
git checkout -b moon
git checkout -b jong


git branch moon
git branch jong
git branch jong

git branch
git branch -r

git checkout moon

git add .
git commit -m 'Branch moon'
git push origin moon


// 수정하면 커밋발생
git checkout jong

git add .
git commit -m '브랜치 jong'
git push origin jong
