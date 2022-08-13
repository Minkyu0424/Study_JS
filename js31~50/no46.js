const num='1011121314151617181920';
var sum=0;
console.log(num);
num.split("");
for (const i in num) {
    sum=sum+parseInt(num[i]);
}
console.log(sum);