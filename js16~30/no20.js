num = prompt("두 수를(a, b) 입력하세요.");
nums = num.split(" ");
const a = parseInt(nums[0]);
const b = parseInt(nums[1]);
console.log(parseInt(a/b),(a%b));