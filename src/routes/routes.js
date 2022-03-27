const express = require('express');
const csrf = require('csurf')
const uploadService = require('../services/upload.service');
const path = require('path');
const router = express.Router();
const {
    zipperController,
    downloadController
} = require('../controllers/index');

const multer  = require('multer')
const upload = multer({ dest: path.join(__dirname,'./public/files/upload/') })

// setup route middlewares
const csrfProtection = csrf({ cookie: true })

router.get('/',csrfProtection,zipperController.index);
router.get('/download/:filename',downloadController.download);
router.post('/zipper/compress',upload.single('zip_file'),function(req,res) {
    console.log('file',req.file);
    res.status(200).send('haloo '+req.body.zip_file)
});
// router.post('/zipper/compress',csrfProtection,zipperController.compress);
router.post('/zipper/extract',csrfProtection,zipperController.extract)

module.exports = router;
