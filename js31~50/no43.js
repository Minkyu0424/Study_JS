let num = parseInt(prompt("숫자를 입력하세요."));
let nums = [];
while (num != 0) {
  nums.push(num % 2);
  num = parseInt(num / 2);
}
console.log(nums.reverse().join(""));
