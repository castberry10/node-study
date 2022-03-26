console.log('require가 가장 위에 오지않아도 됩니다.');

module.exports = '저를 찾아보세요';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);

//print
// require가 가장 위에 오지않아도 됩니다.
// require.cache입니다.
// [Object: null prototype] {
//   'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require\\require.js': Module {
//     id: '.',
//     path: 'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require',
//     exports: '저를 찾아보세요',
//     filename: 'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require\\require.js',
//     loaded: false,
//     children: [ [Module] ],
//     paths: [
//       'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require\\node_modules',
//       'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\node_modules',
//       'D:\\node-study\\wychoi\\ch3-node-basic\\node_modules',
//       'D:\\node-study\\wychoi\\node_modules',
//       'D:\\node-study\\node_modules',
//       'D:\\node_modules'
//     ]
//   },
//   'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require\\var.js': Module {
//     id: 'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require\\var.js',
//     path: 'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require',
//     exports: { odd: '홀수', even: '짝수' },
//     filename: 'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require\\var.js',
//     loaded: true,
//     children: [],
//     paths: [
//       'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\5-module-export-require\\node_modules',
//       'D:\\node-study\\wychoi\\ch3-node-basic\\4-built-in-object\\node_modules',
//       'D:\\node-study\\wychoi\\ch3-node-basic\\node_modules',
//       'D:\\node-study\\wychoi\\node_modules',
//       'D:\\node-study\\node_modules',
//       'D:\\node_modules'
//     ]
//   }
// }
// require.main입니다.
// true
// D:\node-study\wychoi\ch3-node-basic\4-built-in-object\5-module-export-require\require.js