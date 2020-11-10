const jdenticon = require('jdenticon');
const fs = require('fs');

const size = 200;
const value = 'icon value';

const png = jdenticon.toPng(value, size);
fs.writeFileSync('./testicon.png', png);
