// async/await 

// function findAndSaveUser(Users) {
//   Users.findOne({})
//     .then((user) => {
//       user.name = 'wy';
//       return user.save();
//     })
//     .then((user) => {
//       return Users.findOne({ gender: 'm' });
//     })
//     .then((user) => {
//       // 생략
//     })
//     .catch(err => {
//       console.error(err);
//     });
// } 2.1.7의 코드 -->

// async function findAndSaveUser(Users) {
//     let user = await Users.findOne({});
//     user.name = 'wy';
//     user = await user.save();
//     user = await Users.findOne({ gender: 'm' });
// }

//-> 에러 처리 
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'wy';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
    }catch (error) {
        console.error(error);
    }
}
//화살표 함수
const findAndSaveUser2 = async (Users) => {
    try {
      let user = await Users.findOne({});
      user.name = 'wy';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
    } catch (error) {
      console.error(error);
    }
};