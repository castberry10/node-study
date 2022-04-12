const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    },
    name:'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads 폴더가 존재하지않아 생성합니다. ');
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage:multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits:{fileSize: 5 * 1024 * 1024},
});

//한 파일을 입력하는 경우
app.post('/upload',upload.single('image'), (req, res) => {
    console.log(req.file, req.body);
    res.send('ok');
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html')); 
})
//여러 파일을 입력하는 경우 
app.post('/upload', upload.array('many'), (req, res) => { 
    console.log(req.files, req.body);
    res.send('ok');
});

//파일을 여러 개 업로드하지만 input 태그나 폼 데이터키가 다른경우
app.post('/upload', 
    upload.fields([{name: 'image1'},{name : 'image2'}]),
        (req, res) => {
        console.log(req.files, req.body);
        res.send('ok');
    },
);

//파일을 업로드하지 않고 멀티파트 형식으로 업로드 하는 경우
app.post('/upload', upload.none(), (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.get('/', (req,res,next) => {
    console.log('GET / 요청에서만 실행됩니다. ');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들 웨어로 ')
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port') , () => {
    console.log(app.get('port'), '빈 포트에서 대기 중');
})