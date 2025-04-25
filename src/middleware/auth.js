const jwt = require('jsonwebtoken')


module.exports = (req,res,next) => {
   const bearerToken = req.headers.authorization

   if(!bearerToken){
    res.send({
        message:'token not found',
        status:false
    })
   }


   const token = bearerToken.split(' ')[1]

  const data = jwt.verify(token,process.env.KEY)
  req.body = {...data}
  next()
}