
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}
function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}


function bools2ab(bools) {
    let bufferPtr = 0;
    const bufferLen = 8;
    const boolsBuffer = new Array(bufferLen);
    const uint8Array = new Uint8Array(Math.ceil(bools.length / bufferLen))

    for (let i = 0, len = bools.length; i < len; i++) {
        if (bufferPtr === bufferLen) {
            bufferPtr = 0;
            uint8Array[i] = boolsBuffer.reduce((res, x) => res << 1 | x);
        }

    }
}

function ab2bools(ab) {
    const bools = ab ? [] : [false]

    while (b) {
        bools.push((b & 1) === 1)
        b >>= 1
    }
}