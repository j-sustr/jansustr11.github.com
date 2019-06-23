const fs = require('fs');
const { readFile } = require('./promisified');
const iconvlite = require('iconv-lite');


//let text = windows1250.decode(encodedData, { 'mode': 'fatal'});
//new Iconv('CP1250', 'UTF-8//TRANSLIT//IGNORE');
//var buffer = iconv.convert(content);
///return buffer.toString('utf8');


// readFileSync rozsirena o iconvlite dekoder
function readFileIconvSync(path, encoding) {
    let data = fs.readFileSync(path);
    if (encoding) {
        return iconvlite.decode(data, encoding);
    }
    return data;
}

async function readFileIconv(path, encoding) {
    let data = await readFile(path);
    if (encoding) {
        return iconvlite.decode(data, encoding);
    }
    return data;
}


module.exports = { readFileIconv, readFileIconvSync };