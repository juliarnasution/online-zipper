const multer = require("multer")

exports.uploadFile = (req,res)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/public/files')
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })
    const upload = multer({ storage: storage }).single('file');
    
    return new Promise((resolve,reject)=>{
        upload(req,res,(err)=>{
            if (err) {
                reject(err)
            }
            console.log(req.file)
            resolve(req.file);
        })
    });
    
}