//버전 1 한줄로 공백을 기준으로 입력//
const weightMax = prompt("최대무게 입력");
const numOfMan = prompt("사람 수 입력");
const weight = prompt("친구들의 무게 입력").split(" ");
var maxMan = 0;
var people = 0;
for (const i in weight) {
  if (maxMan + parseInt(weight[i]) <= weightMax) {
    maxMan += parseInt(weight[i]);
    people += 1;
  }
}
console.log(people + "명 입장 가능합니다.");

//버전 2 입력 즉시 반영
let total = 0;
let people2 = 0;
const weightMax2 = prompt("최대무게 입력");
const n = prompt("사람 수 입력");
var weight2 = 0;
for (let i = 0; i < n; i++) {
  weight2 = parseInt(prompt("몸무게 입력"));
  if (total + weight2 <= weightMax2) {
    total += weight2;
    people2++;
  }
}
console.log(people2);
