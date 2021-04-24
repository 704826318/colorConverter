const index = require('./index.js');

test('test hexadecimal ', () => {
    expect(index.colorConvert('#000000')).toBe('rgb(0,0,0)')
});

test('test rgb ', () => {
    expect(index.colorConvert('rgb(0,0,0)')).toBe('#000')
});

test('test rgba ', () => {
    expect(index.colorConvert('rgba(255,255,255,1)')).toBe('#ffffffff')
});
