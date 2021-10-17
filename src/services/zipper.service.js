const AdmZip = require('adm-zip');
const path = require('path');
exports.compress = (filename)=>{
    return new Promise((resolve)=>{
        try {
            // creating archives
            const zip = new AdmZip();
            // add local file
            zip.addLocalFile(`public/files/${filename}`);
            // or write everything to disk 
            const zipFilename = generateFilename("file.zip");
            const targetZipFileName = `public/files/${zipFilename}`;
            zip.writeZip(targetZipFileName);
            resolve(zipFilename);
        } catch (error) {
            console.error('error ', error)
            resolve(false);
        }
        
    })
}

exports.extract= (req,res)=>{
    console.log('bodyf' ,req.body)
}

const generateFilename = (filename)=>{
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    return uniqueSuffix+'-'+filename;
}