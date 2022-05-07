const express = require('express');
const passport = require('passport');
const bcrypy = require('bcrypy');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const User = require('../models/user');

const router = express.Router();
router.post('/join', isNotLoggedIn,async(req,res,next)=>{

});