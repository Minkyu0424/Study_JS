const n = prompt("숫자를 입력하세요.");
for (var p = 1; p < parseInt(n)+1 ; p++) {
  const blank = [];
  const star = [];
  for (var i = p; i < n; i++) {
    blank.push(" ");
  };
  for (var j = 1; j <= 2 * p - 1; j++) {
    star.push("*");
  };
  console.log(blank.join("") + star.join(""));
};
