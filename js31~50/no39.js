words = prompt("문장을 입력하세요").split("");
for (const i in words) {
  if (words[i] == "q") {
    words[i] = "e";
  }
}
console.log(words.join(""));
//hello my namq is hyqwon
