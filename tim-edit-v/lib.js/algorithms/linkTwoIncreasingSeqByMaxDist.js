export default function linkTwoIncreasingSeqByMaxDist(arrA, arrB, maxDist) {
    const lengthA = arrA.length;
    const linksA = new Array(lengthA).fill(-1);
    let idxA = 0;
    let idxB = 0;
    let shortestDiIdxB = -1;
    let shortestDi = Infinity;
    let dist = 0;

    arrB = [...arrB, Infinity];

    for(; idxA < lengthA; idxA++) {
        for(;;idxB++) {
            dist = Math.abs(arrA[idxA] - arrB[idxB]);
            if (dist < shortestDi) {
                shortestDi = dist;
                shortestDiIdxB = idxB;
            } else if (dist === shortestDi) {
                if (dist === Infinity) {
                    idxA = lengthA;
                    break;
                }
                //shortestDi = dist;  // link bude u posledni nejblizsi hodnoty
                //shortestDiIdxB = idxB;
            } else {
                if (shortestDi <= maxDist) {
                    linksA[idxA] = shortestDiIdxB;
                }
                idxB = shortestDiIdxB;
                shortestDi = Infinity;
                break;
            }
        }
    }
    return linksA;
}