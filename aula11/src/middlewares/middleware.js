module.exports=(res,req,next)=>{
    console.log();
    console.log("Passei no global")
    next();
}