//구조분해할당

// var candyMachine = {
//     status: {
//       name: 'node',
//       count: 5,
//     },
//     getCandy: function () {
//       this.status.count--;
//       return this.status.count;
//     },
//   };
//   var getCandy = candyMachine.getCandy;
//   var count = candyMachine.status.count;
// 이 코드를 다음과 같이 바꿀 수 있다. 

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    },
};

const {getCandy, status: {count}} = candyMachine;

//-------------------------
// var array = ['nodejs', {}, 10, true];
// var node = array[0];
// var obj = array[1];
// var bool = array[3];
//이 코드를 다음과 같이 바꿀 수 있다. 

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;