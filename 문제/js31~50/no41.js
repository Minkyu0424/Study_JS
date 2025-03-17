num = parseInt(prompt("소수 판별을 위한 숫자 입력"));
let count = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}
if (count === 2) {
  console.log(num + "은 소수입니다.");
} else {
  console.log(num + "(는)은 소수가 아닙니다.");
}
