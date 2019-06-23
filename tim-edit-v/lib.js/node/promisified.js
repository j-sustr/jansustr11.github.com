const fs = require('fs');
const { promisify } = require('util');

module.exports = {
    readFile: promisify(fs.readFile),
    writeFile: promisify(fs.writeFile),
    readdir: promisify(fs.readdir),
    unlink: promisify(fs.unlink),
    stat: promisify(fs.stat),
}