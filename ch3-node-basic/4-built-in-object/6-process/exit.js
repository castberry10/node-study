//process.exit는 서버가 끊기기에 굳이 쓰지않ㄹ앙요~ 

let i = 1;
setInterval(() => {
    if (i == 5){
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i+= 1;
}, 1000);