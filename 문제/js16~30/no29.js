alphabet=prompt("알파벳 하나를 입력하세요.");
if((alphabet<="Z")&&(alphabet>="A")){
    console.log("YES");
}else if((alphabet<="z")&&(alphabet>="a")){
    console.log("NO");
}
else{
    console.log("알파벳을 입력하세요.");
}