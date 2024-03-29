const WebSocket = require('ws');

module.exports = (server) => {
	const wss = new WebSocket.Server({server});
	
	wss.on('connection', (ws, req) => {
		const ip = req.header['x-forwarded-for'] || req.connection.remoteAddress;
		console.log('새로운 클라이언트 접속', 10);
		ws.on('message', (message) =>{ // 새 메세지 
			console.log(message.toString());
		});
		ws.on('error', (error) =>{// 에러시
			console.error(error);
		});
		ws.on('close', () =>{ // 
			console.log('클라이언트 접속 해제', ip);
			clearInterval(ws.interval);
		});
		
		ws.interval = setInterval(() => {
			if(ws.readyState === ws.OPEN){
				ws.send('서버에서 클라이언트로 메세지를 보냅니다.');
			}
		}, 3000);
	});
};