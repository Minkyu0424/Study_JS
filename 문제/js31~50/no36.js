const num=parseInt(prompt("구구단이 궁금한 수를 입력하세요."));
const numArr=[];
for (let i = 1; i < 10; i++) {
    numArr.push((num*i));    
}
const nums=numArr.join(" ")
console.log(nums);