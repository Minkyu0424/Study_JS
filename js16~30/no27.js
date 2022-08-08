const student = prompt("이름을 공백을 띄어 두 개 입력하세요.");
const score = prompt("점수를 공백을 띄어 두 개 입력하세요.");
const students = student.split(" ");
const scores = score.split(" ");
var student1 = students[0];
const student2 = students[1];
var score1 = scores[0];
const score2 = scores[1];
const obj={
     [student1]:score1,
     [student2]:score2,
}
console.log(obj);


