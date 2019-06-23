


// This is passed in an unsigned 16-bit integer array. It is converted to a 32-bit float array.
// The first startIndex items are skipped, and only 'length' number of items is converted.
function int16ToFloat32(inputArray, startIndex=0, length=null) {
    if(!length) {
        length = inputArray.length;
    }
    let output = new Float32Array(inputArray.length - startIndex);
    let int, float;
    for (let i = startIndex; i < length; i++) {
        int = inputArray[i];
        // If the high bit is on, then it is a negative number, and actually counts backwards.
        float = (int >= 0x8000) ? -(0x10000 - int) / 0x8000 : int / 0x7FFF;
        output[i] = float;
    }
    return output;
}


module.exports = {
    int16ToFloat32: int16ToFloat32,
}