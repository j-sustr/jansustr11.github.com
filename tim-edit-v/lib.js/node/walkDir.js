const fs = require('fs');
const path = require('path');
const { readdir, stat } = require('./promisified');


async function* walkDir(dir) {
    const dirItems = await readdir(dir);
    for(const item of dirItems) {
        let itemPath = path.join(dir, item);
        let itemStat = await stat(itemPath);
        let isDirectory = itemStat.isDirectory();
        if (isDirectory) {
            yield* walkDir(itemPath);
        } else {
            yield path.join(dir, item);
        }
    }
};

function walkDirSync(dir, callback) {
    fs.readdirSync(dir).forEach(item => {
        let itemPath = path.join(dir, item);
        let isDirectory = fs.statSync(itemPath).isDirectory();
        isDirectory ? walkDirSync(itemPath, callback) : callback(path.join(dir, item));
    });
};

module.exports = { 
    walkDir,
    walkDirSync,
};

//async function main() {
//    for await(const filePath of walkDir(String.raw`C:\Users\jansu\OneDrive\Plocha\kws_data`)) {
//        console.log(filePath);
//    };
//}
//
//main();