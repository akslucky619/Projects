var session = require('express-session');
var Users = require('../models/user')

exports.isUserLogged = (req, res, next)=>{
    if(req.session && req.session.userId){
        next()
    }
    else{
        res.redirect('/users/login')
    }
}

exports.userSession = (req, res, next)=>{
    if(req.session && req.session.userId){
        Users.findById(req.session.userId, (err, user)=>{
            if(err) return next(err)
            req.user = user;
            res.locals.user = user;
            next()
        })
    }
    else{
        req.user = null;
        res.locals.user = null;
        next()
    }
}

module.exports = {
    addUser: (req, res) => {
        console.log(req.body, 'checking req');
    }
}