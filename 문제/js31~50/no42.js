//22년 기준
num = prompt("월과 일을 칸을 구분해서 적어주세요").split(" ");
a = parseInt(num[0]);
b = parseInt(num[1]);
var days = 0;
const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ["FRI", "SAT", "SUN", "MON","TUE","WED", "THU"];
for (let i = 0; i < a - 1; i++) {
  days += month[i];
}
days = days + b;
console.log(day[days % 7]);
