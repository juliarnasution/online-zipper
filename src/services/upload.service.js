// const multer = require("multer")
// const path = require('path');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname,'/public/files/upload'))
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

// exports.upload = multer({ storage: storage }).single('file');

// exports.uploadFile = (req,res)=>{
//     return new Promise((resolve,reject)=>{
//         upload(req,res,(err)=>{
//             console.log('multer error ',err)
//             if (err) {
//                 reject(err)
//             }
//             console.log('req file', req.file)
//             resolve(req.file);
//         })
//     });
    
// }