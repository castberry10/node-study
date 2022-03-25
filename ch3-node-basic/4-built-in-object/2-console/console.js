const string = 'abc';
const number = 1;
const boolen = true
const obj = {
    outside: { 
        inside:{
            key: 'value',
        },
    },
};
console.time('전체시간');
console.log('로그입니다.');
console.log(string, number, boolen);
console.error('에러 메시지');

console.table([{aa : '11', bb : '22'} , {AA : '11', BB : '22'}])

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정');

function b() {
  console.trace('에러 위치 추적');
}
function a() {
  b();
}
a();

console.timeEnd('전체시간');