const score=prompt("학생들의 점수를 입력해주세요.").split(" ");
const scores={};
let hscore;
let candies=0;
for (let index in score) {
    let val = score[index];
    scores[val] = scores[val] === undefined ? 1 : scores[val] = scores[val] + 1;
  } /* 점수를 키로 값은 점수가 중복되는 개수를 기입 한다.
{"97":4, "95":1, "86":1, "85":1, "75":1, "66":1, "55:1"}  */
hscore=Object.keys(scores).reverse();
candies=(scores[hscore[0]]+scores[hscore[1]]+scores[hscore[2]]);
console.log("필요한 사탕의 수는 " +candies+"개 입니다.");
// 97 86 75 66 55 97 85 97 97 95