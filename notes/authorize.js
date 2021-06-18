const authorize = (req, res ,next) =>{
    const {user} = req.query
    if(user){
        req.user = user
        next()
    }
    else{
        res.status(401).send("Unauthorized")
    }
}

module.exports = {authorize}