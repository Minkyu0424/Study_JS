const str = prompt("문자열을 입력해주세요.").split("");
for (const i in str) {
  if (str[i] < "a") {
    str[i] = str[i].toLowerCase();
  } else if (str[i] >= "A") {
    str[i] = str[i].toUpperCase();
  }
}
console.log(str.join(""));
