### SPA
- 최초 한번 페이지 전체 로딩 후 전체 페이지 다시 로드없이 데이터만 변경해서 사용하는 방식
- 페이지 새로고침 x, 불필요한 리소스 로딩 줄어듦, 이후 JS가 동적으로 DOM을 조작해 화면을 변경
>> 서버 부담 감소, 클라이언트에서 데이터를 관리하기에 메모리 부담 큼

### CSR
- 최초 로드시 필요한 파일들을 전부 받고, 사용자의 인터렉션에 따라 클라이언트 단에서 받아와 렌더링을 함 브라우저에서 동작해 DOM을 그림
>> 단점 : 초반에 뼈대만 다운받기 때문에, SEO에 취약, 초기화면의 렌더링 속도가 느림

### SSR
- 요청시 마다 새로고침 및 다 만들어진 DOM으로 이루어진 새로운 페이지를 요청
>> 단점 : 매 렌더링마다 서버를 거쳐 속도 느림, 초기화면의 렌더링 속도가 빠름, SEO 최적화

### SSG
- 	미리 HTML 파일을 생성: 서버에서 매번 페이지를 렌더링하는 대신, 컴파일 시점에 HTML 파일을 생성해서 배포.
	•	빠른 응답 속도: 이미 생성된 정적 파일을 반환하기 때문에 속도가 매우 빠르다.
	•	서버 부하 감소: 동적 렌더링 없이 정적 파일을 제공하기 때문에 서버에 부담이 적다.
	•	SEO 최적화: 미리 생성된 HTML 페이지가 검색 엔진에 잘 노출되어 SEO에 유리하다.