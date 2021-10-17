exports.downloadUrl = (req,res,next)=>{    
    res.locals.zip_url = req.session.zip_url;
    next();
}