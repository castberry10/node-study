const http = require('http');
const fs = require('fs').promises;

const users = {};
http.createServer(async (req, res) =>{
    try{
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile('./restFront.html');
            }
        }
    }
})