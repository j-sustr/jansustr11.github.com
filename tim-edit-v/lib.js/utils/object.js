/* 
    proposal:
        object tree == tree

*/

export function assignByMapping(target, source, mapping) {
    for (const key in mapping) {
        if (source.hasOwnProperty(key)) {
            const mappingValue = mapping[key];
            if (typeof mappingValue === "object") {
                assignByMapping(target, source[key], mappingValue);
            } else if (typeof mappingValue === "string") {
                target[mappingValue] = source[key];
            }
        }
    }
    return target;
}

function reversedAssignByMapping() {

}


// This function handles arrays and objects
export function walkObjTree(obj, callback, keys=null) {
    if (keys === null) {
        keys = ['-'];
    }
    for (var k in obj) {
        keys[keys.length - 1] = k;
        if (typeof obj[k] == "object" && obj[k] !== null) {
            keys.push('-')
            walkObjTree(obj[k], callback, keys);
        } else {
            callback(obj[k], keys);
        }
    }
    keys.pop();
}

export function assignObjTreeLeaves(target, source) {
    let obj;
    walkObjTree(source, (value, keys) => {
        obj = target;
        for (let i = 0, len = keys.length - 1; i < len; i++) {
            obj = obj[keys[i]];
            if (!obj) {
                throw new Error(`Source object tree branch [${keys}] is too long`);
            }
        }
        obj[keys[keys.length - 1]] = value;
    });
}

/**
 * Returns: obj[key0][key1][key2]...
 * @param {Object} obj
 * @param {string[]} keys 
 */
function getObjLeaf(obj, keys) {
    const numKeys = keys.length;
    let branch = obj;
    let result = null;
    keys.forEach((key, i) => {
        if (i + 1 >= numKeys) {
            result = [branch, key];
        }
        branch = branch[key];
    });
    return result;
}

/**
 * 
 * @param {Object} obj 
 * @param {Function} condition 
 * @param {Function} callback 
 */
export function objSearch(obj, condition, callback) { // search, conditionalWalkObjLeafs
    for (var k in obj) {
        if (condition(obj[k])) {
            callback(obj, k)
        } else if (typeof obj[k] == "object" && obj[k] !== null) {
            objSearch(obj[k], condition, callback);
        }
    }
}

function copy(src) {
    return {...src};
    //return Object.assign({}, src);
}



//this.appDataMapping = {
//    "spot-file": { "path": "spot-file.path", },
//    "voc-file":  { "path": "voc-file.path", },
//    "tim-dir":   { "path": "tim-dir.path", },
//    "test": {
//        "max-word-dist": "test.max-word-dist",
//        "spot-threshold": "test.spot-threshold",
//    },
//}

//const source = {
//    "a": 10,
//    "b": {
//        "x": 30,
//        "y": 50
//    },
//    "c": {
//        "d": {
//            "i": "qwe",
//            "j": "asd",
//        }
//    }
//}


//
//walkObjTree(source, (value, keys) => {
//    console.log(value, keys)
//});



//
//const mapping = {
//    "a": "prop1",
//    "b": "prop2",
//    "c": {
//        "d": {
//
//        } 
//    }
//}
//
//x = assignByMapping({}, source, mapping)
//
//console.log(x)