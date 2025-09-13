const e = require('express')
const mongoose = require('mongoose')

const addressesSchema = new mongoose.Schema({
 street:{type:String},
        city:{type:String},
        state:{type:String},
        country:{type:String},
        zip:{type:Number},


})


const userSchema = new mongoose.Schema({ 
     
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, },
    fullName:{
        firstName:{type:String, required:true},
        lastName:{type:String, required:true}
      },
      role:{ 
        type:String,
        enum:['user','seller'],
        default:'user'
      }
    , 
    addresses:[
        addressesSchema
    ]

})

const User = mongoose.model('User', userSchema);
module.exports = User;
