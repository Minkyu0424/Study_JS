const arr = prompt("괄호기호를 입력해주세요.").split("");
var num = 0;
if (arr.length % 2 === 0) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] == "(") {
      if (arr[arr.length - (i+1)] == ")") {
        num += 1;
      }
    } else if (arr[i] == "{") {
      if (arr[arr.length - (i+1)] == "}") {
        num += 1;
      }
    } else if (arr[i] == "[") {
      if (arr[arr.length - (i+1)] == "]") {
        num += 1;
      }
    } else {
      console.log("No");
      break;
    }
  }
  if (num == arr.length / 2) {
    console.log("Yes");
  }
} else {
  console.log("NO");
}
