const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user =null;
    res.locals.folloerCount = 0;
    res.locals.followingCount = 0;
    res.locals.folloerIdList =[];
    next();
});

router.get('/profile', (req, res) => {
    res.render('profile', {title: '내정보 - NodeDird'});

});

router.get('/join', (req, res) => {
    res.render('join', {title: '내정보 - NodeDird'});

});

router.get('/', (req, res) => {
    const twits = [];
    res.render('main', {
        title: 'NodeBird',
        twits,
   });
});

module.exports = router;