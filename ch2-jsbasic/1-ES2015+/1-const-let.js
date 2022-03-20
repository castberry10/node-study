if (true) {
  var x = 3;
}
console.log(x); 
if (true) {
  const y = 3;
}
console.log(y);
//---------------------------------------


const a = 0;
a = 1 // const는 상수니까 error

let b = 0;
b = 1

//const c; //이러면 에러

//var은         함수 스코프 -> if문에 상관없이 왔다갔다
//const와 let은 블록 스코프 -> 블록 밖으로는 못 나감 

//const로 선언한 변수는 상수(다른 값으로 못바꿈)

//tip: js에서 한번 초기화한 변수는 또 바꿀일이 많지 않다. 기본적으로는 const쓰자!