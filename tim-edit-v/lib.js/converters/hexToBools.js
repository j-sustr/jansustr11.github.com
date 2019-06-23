export default function hexToBools(hex, length) {
    const bools = new Array(length);
    let nibble;
    let i = 0;
    for (const hexNum of hex) {
        nibble = parseInt(hexNum, 16).toString(2).padStart(4, '0');
        for (const bit of nibble) {
            if (i < length) {
                bools[i++] = (bit === '1');
            } else {
                break;
            }
        }
    }
    return bools;
}