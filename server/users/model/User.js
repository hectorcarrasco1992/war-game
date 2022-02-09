const mongoose = require('mongoose')
const moment = require('moment')
const now = moment()

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:'username is unique',
        unique:'Username already exists,please choose another'
        
    },
    
    password:{
        type:String,
        required:'password is required',

    },

    wins: {
        type:Number
    }
})


module.exports = mongoose.model('User',UserSchema)

//try again
// if this is it im going to jump out my window 