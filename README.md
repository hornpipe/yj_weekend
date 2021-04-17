# 21-03-20 프론트엔드 기초수업

## GITHUB 기초개념

> github 용어
- stage : commit할 대상을 선택
- commit : 수정한 내용의 스냅샷을 찍는것
- push : github 서버에 업로드
- pull : github 서버에서 다운로드 
- branch : 각각의 개발자가 독립적으로 개발하기 위한 가지
- pull request : 각각의 branch 에서 개발한것을 master branch로 병합하기 위한 ★요청
- merge : master branch로 병합


> 수업 사이트 링크

[코드팬](https://codepen.io/pen/tour/welcome/start)

[마크다운사용법](https://gist.github.com/ihoneymon/652be052a0727ad59601)

[w3cshcools](https://www.w3schools.com/)

## WEB/IT 기초개념

> 클라이언트-서버모델

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1200px-Client-server-model.svg.png" width="70%"/>

- 클라이언트-서버 모델에서 클라이언트는 사용자가 사용하는 디바이스를(PC, MOBILE) 의미하고,
- 서버는 클라이언트가 접속해서 데이터나 파일을 요청했을때 응답하는 시스템 
- 클라이언트와 서버는 네트워크를 통해서 연결된다

<img src="https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/course/2614/4971.png" width="70%"/>

- 클라이언트와 서버 모델은 실제 연결은 아니지만 개념적으로 클라이언트 관점에서 1:1로 연결되었다고 생각할 수 있음
- 클라이언트서 서버 모델에서 이루어지는 동작은 클라이언트의 요청(request)과 서버의 응답(response)의 1 사이클로 구성됨

- 클라이언트는 클라이언트 디바이스에서 실행되는 웹브라우저,
- 서버는 서버 디바이스에서 실행되는 서버 소프트웨어가 실제로 사용되는것


# HTML

> HTML introduction

[w3schools html introduction](https://www.w3schools.com/html/default.asp)





<br><br><br><br><br><br><br><br><br>

# 21-04-03 HTML 수업

## HTML Semantic Elements
> 특정 의미를 부여해준 container 요소 (contents를 의미하는 요소가 아님)
- header  로그인정보/로고등 
- nave  카테고리메뉴
- footer  사업자정보/연락처
> 레이아웃 구성할때 각각의 영역을 구분하기 위해 사용
  
  
  
- 참고링크
>html 기초 w3schools링크 https://www.w3schools.com/html/html5_semantic_elements.asp

>호환성 가능 검색 사이트 https://caniuse.com/

>웹사이트 디자인 템플릿사이트 https://freebiesbug.com/

>온라인 포토샵 https://www.photopea.com/





<br><br><br><br><br><br><br><br><br>

# 21-04-17 CSS 수업

## HTML Element에 이름붙이기
> id / class
```
<p id="paragraph1">단락</p>
<p calss="paragraph2">단락</p>
```

> id / class 의 차이
- a태그의 목적지에 이름을 붙일때 , 이동하고자 하는 위치의 대상
```
- id = 중복X / class = 중복 O
- Class = css styling , javascript 기능을 동시 적용할 수 있다
```

> float / display:flex 레이어 가로배치 
```
display:flex ->한줄로 배치됨 = float:left 같은효과
flex-wrap:wrap 가로값을 유지하면서 자연스러운 줄바꿈되어 정렬됨 
(*flex-wrap 없이는 가로값무시하여 무조건 한줄 정렬)
wrap-reverse 순서 반대로 정렬

justify-content : cneter -> flex박스 전체 가로를 정렬가능
(cneter flex-start flex-end)
space-around -> 왼쪽오른쪽 여백을 같게 만듬(여백이합쳐질수있음) 
space-between -> 박스 사이사이의 간격을 같게만듬

align-items:(cneter flex-start flex-end) -> flex 박스 전체 세로를 정렬가능
```

> 컨트롤+슬래시(/ ?) - 자동주석처리


