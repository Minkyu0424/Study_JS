
✅ REST (Representational State Transfer)
👉 HTTP를 기반으로 자원을 CRUD(Create, Read, Update, Delete) 방식으로 처리하는 API 스타일

>> api란 서로 다른 소프트웨어나 시스템이 소통하는 방식 (인터페이스, 규격)
⸻

🔹 REST API의 핵심 원칙

1️⃣ 자원(Resource) 기반 → URL을 통해 자원을 명확하게 식별
2️⃣ HTTP 메서드 사용 → CRUD를 HTTP 메서드로 표현
	•	GET → 조회
	•	POST → 생성
	•	PUT → 수정
	•	DELETE → 삭제
3️⃣ 무상태성(Stateless) → 서버가 요청 간 상태를 유지하지 않음
4️⃣ 표준 응답 사용 → JSON, XML 형식으로 응답

⸻

🔹 RESTful API 예시

📌 사용자 정보 관리 API

동작	HTTP 메서드	URL 예시
사용자 목록 조회	GET	/users
특정 사용자 조회	GET	/users/{id}
사용자 생성	POST	/users
사용자 수정	PUT	/users/{id}
사용자 삭제	DELETE	/users/{id}



⸻

✅ 정리 (한 줄 요약)

📌 REST API = “자원을 URL로 식별 + HTTP 메서드로 CRUD 처리 + 무상태성 유지” 🚀