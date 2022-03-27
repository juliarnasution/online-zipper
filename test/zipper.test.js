const fs = require('fs');
const path = require('path')
const {compress} = require('../src/services/zipper.service.js');
test('compress file',async ()=>{
    const imageStream = fs.createReadStream(path.join(__dirname,'public/files/file.zip'));
    await expect(compress('file.com')).resolves.toBe('file.zip');
})