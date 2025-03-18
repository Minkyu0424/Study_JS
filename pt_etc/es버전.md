✅ ES(ECMAScript) 버전별 차이 & ES6의 주요 변화
스크립트 언어가 어떻게 생겨야 하는지에 관한 사양

버전	출시년도	주요 변화
ES3	1999	try/catch, getter/setter, strict mode 도입
ES5	2009	JSON, strict mode, Array.prototype.map/filter/reduce
ES6 (ES2015)	2015	let, const, arrow function, class, Promise, import/export
ES7 (ES2016)	2016	Array.prototype.includes(), ** (Exponentiation Operator)
ES8 (ES2017)	2017	async/await, Object.entries(), Object.values()
ES9 (ES2018)	2018	Rest/Spread 개선, Promise.finally()
ES10 (ES2019)	2019	Array.flat(), trimStart()/trimEnd()
ES12 (ES2021)	2021	String.replaceAll(), Promise.any()
ES13 (ES2022)	2022	class fields, Error.cause, top-level await

📌 2. ES6(ES2015)의 큰 변화

✅ 1) let & const 도입 (var 대체)
	•	let: 블록 스코프를 가짐
	•	const: 값 재할당 불가능

⸻
✅ 2) Arrow Function (=>)
	•	function 키워드 없이 간결하게 함수 작성 가능
	•	this 바인딩 자동 처리

⸻
✅ 3) Template Literal (백틱 ``)
	•	문자열 내에서 변수 삽입 가능 (${} 사용)

const name = "Alice";
console.log(`Hello, ${name}!`);  // Hello, Alice!

⸻
✅ 4) Default Parameter (기본 매개변수)
	•	함수의 매개변수에 기본값 설정 가능

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest

⸻
✅ 5) Destructuring (구조 분해 할당)
	•	배열, 객체에서 값을 쉽게 추출

const [a, b] = [1, 2];
const { name, age } = { name: "Alice", age: 25 };



⸻
✅ 6) Spread & Rest Operator (...)
	•	배열, 객체를 펼치거나(Spread), 남은 값을 모으는(Rest) 역할
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread
console.log(newArr); // [1, 2, 3, 4, 5]

function sum(...numbers) { // Rest
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10



⸻
✅ 7) Class 문법 추가
	•	ES5의 prototype 기반 문법보다 가독성 높아짐

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
const alice = new Person("Alice");
alice.greet(); // Hello, I'm Alice



⸻
✅ 8) Promise 도입
	•	비동기 처리를 위한 객체 기반 방식 도입

const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Data Loaded"), 2000));

fetchData().then(console.log); // Data Loaded (2초 후)



⸻

✅ 9) import/export 모듈 시스템
	•	기존 require() 방식 대신 import/export 사용 가능

// module.js
export const name = "Alice";

// main.js
import { name } from "./module.js";
console.log(name); // Alice



⸻

🚀 결론
	1.	**ES6(ES2015)**에서 let/const, arrow function, class, Promise, import/export 등의 대규모 개선이 이루어짐!
	2.	이후 버전(ES7~ES13)에서는 편의 기능 추가 중심으로 발전!
	3.	최신 JS 문법을 사용하려면 Babel과 같은 트랜스파일러가 필요할 수도 있음.

ES6 이후의 변화를 잘 활용하면 더 깔끔하고 효율적인 JavaScript 코드를 작성할 수 있어! 🔥