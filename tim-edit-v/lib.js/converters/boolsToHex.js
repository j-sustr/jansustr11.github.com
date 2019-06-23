export default function boolsToHex(bools) {
    let bit, nibble = '';
    let hexNums = new Array(Math.ceil(bools.length / 4));
    
    let n = 0;
    for (let i = 0, len = bools.length; i < len; i++) {
        bit = bools[i] ? '1' : '0';
        nibble += bit;
        if (nibble.length >= 4) {
            hexNums[n++] = parseInt(nibble, 2).toString(16);
            nibble = '';
        }
    }
    if (nibble) {
        nibble = nibble.padEnd(4, '0');
        hexNums[n] = parseInt(nibble, 2).toString(16);
    }
    return hexNums.join('');
}