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

console.log('path.normalize():', path.normalize('C://users\\\\soc00\\\path.js'));
console.log('----------------------------');

console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('----------------------------');

console.log('path.sep():', path.relative('C:\\users\\soc00\\path.js', 'C:\\' ));
console.log('path.sep():', path.join(__dirname,'..' , '/users', '.', '/soc00'));
console.log('path.sep():', path.resolve(__dirname, '..', 'users', '.', '/soc00'));

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