const num=prompt("숫자를 입력하세요.").split("");
var sum=0;
for (const i in num) {
    sum=sum+parseInt(num[i]);
}
console.log(sum);