exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticates()){
        next();
    }else{
        res.status(403).send('로그인필요');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticates()){
        next();
    }else{
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};