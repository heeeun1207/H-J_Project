# webpack setup


1. `npm install --save-dev webpack`

- webpack 기본모듈, devDependencies에 설치

2. `npm install --save-dev webpack-cli`

- webpack-cli 설치 REPL환경에서 사용하기 위한 조치

3. webpack용 eslint 설정을 위한 loder 설치
- 이전버전(과거의)에서는 eslint-loader를 사용했지만, 현재는 eslint-webpack-plugin을 사용한다.
`npm install --save-dev eslint-webpack-plugin`
으로 명령 진행

4. webpack용 prettier 설정을 위한 loader  플러그인 설치
`npm install --save-dev eslint-plugin-prettier`

5. `npm install --save-dev ts-loader`
- webpack 실행을 위한 ts-lodaer 설치

6. `npm install --save-dev @types/webpack`
- node.js 환경이 typescript 방식 사용을 위한 설치

