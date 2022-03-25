const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('----------------------------');

console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('----------------------------');

console.log('path.parse():', path.parse(string));

console.log('path.format():', path.format({
    dir: 'C:\\Users\\soc00',
    name:'path',
    ext: '.js',
}));

console.log('path.normalize():', path.normalize('C://users\\\\soc00\\\path.js')); //정상적인 경로로 변환 
console.log('----------------------------');

console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('----------------------------');

console.log('path.relative():', path.relative('C:\\users\\soc00\\path.js', 'C:\\' ));//경로 두개 넣으면 어디로 가야하는지 알려줌
console.log('path.join():', path.join(__dirname,'..' , '/users', '.', '/soc00'));//여러인수 넣으면 합쳐준다. 
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/soc00'));// /를 만나면 절대경로로 인식해서 앞의 경로 무시한다. 


//-----------------------print-----------------------------
// path.sep: \
// path.delimiter: ;
// ----------------------------
// path.dirname(): D:\node-study\wychoi\ch3-node-basic\5-internal-module
// path.extname(): .js
// path.basename(): 2-path.js
// ----------------------------
// path.parse(): {
//   root: 'D:\\',
//   dir: 'D:\\node-study\\wychoi\\ch3-node-basic\\5-internal-module',
//   base: '2-path.js',
//   ext: '.js',
//   name: '2-path'
// }
// path.format(): C:\Users\soc00\path.js
// path.normalize(): C:\users\soc00\path.js
// ----------------------------
// path.isAbsolute(C:\): true
// path.isAbsolute(./home): false
// ----------------------------
// path.sep(): ..\..\..
// path.sep(): D:\node-study\wychoi\ch3-node-basic\users\soc00
// path.sep(): D:\soc00