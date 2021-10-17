const express = require('express');
const csrf = require('csurf')
const router = express.Router();
const {
    zipperController,
    downloadController
} = require('../controllers/index');

// setup route middlewares
const csrfProtection = csrf({ cookie: true })

router.get('/',csrfProtection,zipperController.index);
router.get('/download/:filename',downloadController.download);
router.post('/zipper/compress',csrfProtection,zipperController.compress);
router.post('/zipper/extract',csrfProtection,zipperController.extract)

module.exports = router;
