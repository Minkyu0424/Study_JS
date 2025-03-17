const score = prompt("점수를 3개 입력해주세요.");
const scores = score.split(" ");
console.log(
  (parseInt(scores[0]) + parseInt(scores[1]) + parseInt(scores[2])) / 3
);
