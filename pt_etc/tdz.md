✅ TDZ (Temporal Dead Zone)란?
**TDZ(Temporal Dead Zone, 일시적 사각지대)**는 let과 const로 선언된 변수가 초기화되기 전에 접근할 수 없는 구간을 의미해.

✅ TDZ 예제
```js

console.log(x); // ❌ ReferenceError (TDZ)
let x = 10;

```
변수 x는 선언은 되었지만 초기화되기 전이므로 접근하면 에러가 발생해.

✅ TDZ 특징
	1.	let과 const에서만 발생 (var는 TDZ가 없음)
	2.	선언 이전에 접근하면 ReferenceError 발생
	3.	스코프 시작부터 변수 초기화 전까지 TDZ에 존재

✅ TDZ 회피 방법

let x;
console.log(x); // ✅ undefined (초기화 이후라서 접근 가능)
x = 10;

변수를 선언 후 초기화된 상태에서 접근하면 문제가 없어! 🚀