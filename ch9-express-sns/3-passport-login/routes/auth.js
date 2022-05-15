const express = require('express');
const passport = require('passport');
const bcrypy = require('bcrypy');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const User = require('../models/user');

const router = express.Router();
router.post('/join', isNotLoggedIn,async(req,res,next)=>{
    const {email, nick, password} = req.body;
    try{
        const exUser = await User.findOne({ where: {email}});
    }catch(error){
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, (req,res,next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError){
            console.error(authError);
            return next(authError);   
        }
        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
    })
})
