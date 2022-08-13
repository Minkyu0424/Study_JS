const height = prompt("친구들의 키를 공백으로 구분해 적어주세요.");
const heights = height
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");
console.log(heights);
console.log(height);
if (heights === height) {
  console.log("YES");
} else {
  console.log("오름차순으로 키 순서를 입력하지 않았습니다.");
}