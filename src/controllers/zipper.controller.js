const {zipperService, uploadService} = require('../services/index');
exports.index = (req,res)=>{
    console.log('index ', res.locals)
    res.render('index',{
        csrfToken:req.csrfToken()
    });
}

exports.compress = async(req,res)=>{
    const filename = await uploadService.uploadFile(req,res);
    console.log('file name ',filename);
    let result = false;
    if (filename) {
        result =  await zipperService.compress(filename);//return url file if success
    }
    
    if (result) {
        req.session['zip_url'] = result;
        req.flash('success','Berhasil');
    }else{
        req.flash('error','Gagal');
    }
    
    res.redirect('/')
}

exports.extract = (req,res)=>{
    req.flash('success','Berhasil');
    res.redirect('/')
}