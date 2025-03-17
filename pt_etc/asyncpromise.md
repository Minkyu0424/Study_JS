### Promise 비동기 작업의 성공, 실패를 나타내는 객체
-> .then, .catch, .finally로 비동기 코드 실행
-> 비동기 작업을 체인으로 연결 가능

### async/await
-> Promise를 더 쉽게 다룰 수 있음
-> try/catch로 예외처리 await사용 시 병렬 실행 대신 직렬 실행
>> promise와는 다르게 순차적으로 실행되어 성능이 안좋음