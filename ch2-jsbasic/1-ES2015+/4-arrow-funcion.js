function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x){
    return !x;
}

const not2 = x => !x;
const relationship2 ={
    name : 'wychoi',
    friends : ['abc', 'def', 'ghi'],
    logFriends(){
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};

relationship2.logFriends();