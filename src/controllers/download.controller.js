const path = require('path');
exports.download = (req,res)=>{
    const file = path.join(__dirname,`../../public/files/${req.params.filename}`)
    res.download(file);
}