const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports.registerUser = async (data) => {
    const {name,email,password} = data
    const existingEmail = await User.findOne({email:email})

    if(existingEmail !== null){
        throw new Error(`Email ${existingEmail.email} alrady exist`)
    }
    if(name.length < 4){
        throw new Error(`name must be atleast minimum 4 letters...`)
    }
    const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    if(!email.match(emailRegex)){
        throw new Error(`email is not valid`)
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt) 

    const result = await User.create({name:name,email:email,password:hashPassword})
    const token =   jwt.sign({name:result?.name,email:result?.email},process.env.KEY)

     return token

};


module.exports.deleteUser = async (email) =>{
    const existingEmail = await User.findOne({email:email})

    if(existingEmail === null){
        throw new Error(`Email not found`)
    }
    const data = await User.findOneAndDelete({email:email})
    return data?.email

}