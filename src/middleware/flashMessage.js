exports.flashMessage = (req,res,next)=>{    
    res.locals.message = req.flash();
    next();
}