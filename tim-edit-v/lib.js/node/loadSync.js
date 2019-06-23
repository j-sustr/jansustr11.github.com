const fs = require('fs');
const path = require('path');
const { readFileIconvSync } = require('./readFileIconv');

function loadDataSync(src) { // presunout do loaders
    const { path, encoding } = src;
    return readFileIconvSync(path, encoding);
}

function* loadDataArraySync(srcArray) {
    if (!Array.isArray(srcArray)) {
        throw new Error("parameter is not an array");
    }
    for (const src of srcArray) {
        const data = readFileIconvSync(src.path, src.encoding);
        yield data;
    }
}

function makeSrcArraySync(src) {
    if (!src.hasOwnProperty('file-ext')) {
        throw new Error(`Src is not a dir source: ${src}`);
    }

    const srcArray = [];
    fs.readdirSync(src['path']).forEach(fname => {
        if (fname.endsWith(`.${src['file-ext']}`)) {
            srcArray.push({
                path: path.join(src['path'], fname),
                encoding: src['encoding']
            });
        }
    });
    return srcArray;
}


//function makeSrcArrayIfPathIsDir(src) {
//    let pathIsDir = fs.lstatSync(src.path).isDirectory();
//
//    if (pathIsDir) {
//        const srcArray = [];
//        fs.readdirSync(src.path).forEach(fname => {
//            if (fname.endsWith(src.fileExt)) {
//                srcArray.push({
//                    path: path.join(src.path, fname),
//                    encoding: src.encoding
//                });
//            }
//        });
//        return srcArray;
//    }
//
//    return src;
//}

module.exports = {
    loadDataSync,
    loadDataArraySync,
    //makeSrcArrayIfPathIsDir: makeSrcArrayIfPathIsDir   
    makeSrcArraySync,
}