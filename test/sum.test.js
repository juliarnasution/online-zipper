const {sum} = require('../src/services/zipper.service.js');
test('add a and b',()=>{
    expect(sum(1,2)).toBe(3);
})