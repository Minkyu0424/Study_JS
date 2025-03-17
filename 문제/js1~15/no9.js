// 첫번째 방법
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
console.log(result);

// var result값 채우기 concat사용법? 두번째 방법
var result2 = year.concat(
  ":",
  month,
  ":",
  day,
  "",
  hour,
  ":",
  minute,
  ":",
  second
);

console.log(result2);
