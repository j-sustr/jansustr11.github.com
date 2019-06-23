export default function* findSeqOfSameNonneg(arr) {
    let prevVal = -1;
    let isSeq = false;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === prevVal) {
            if (!isSeq && arr[i] >= 0) {
                isSeq = true;
                yield i - 1;
            }
        } else {
            isSeq = false;
        }
        prevVal = arr[i];
    }
}