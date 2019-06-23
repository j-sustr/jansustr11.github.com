

function alignSortedArraysByMaxDist(arrA, arrB, maxDist=Infinity) {
    const lengthA = arrA.length;
    const alignmentA = new Array(lengthA).fill(-1);
    let idxA = 0;
    let idxB = 0;
    let nearestIdxB = -1;
    let nearestDist = Infinity;
    let dist = 0;
    let nextIdxA = 0;
    let nextDist = 0;
    let valA = 0;

    arrB = [...arrB, Infinity];

    for(; idxA < lengthA; idxA++) {
        for(;; idxB++) {
            dist = Math.abs(arrA[idxA] - arrB[idxB]);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestIdxB = idxB;
            } else if (dist > nearestDist) {
                valA = arrA[idxA];
                nextIdxA = idxA + 1;
                if (nextIdxA === lengthA) {
                    if (nearestDist <= maxDist) {
                        alignmentA[idxA] = nearestIdxB;
                    }
                    break;
                }
                for (; nextIdxA < lengthA && valA === arrA[nextIdxA]; nextIdxA++) { 
                    valA = arrA[nextIdxA];
                }
                nextDist = Math.abs(arrA[nextIdxA] - arrB[nearestIdxB]);
                if (nextDist < nearestDist) {
                    idxA = nextIdxA - 1;
                    idxB = nearestIdxB;
                    nearestDist = nextDist;
                    break;
                } else {
                    if (nearestDist <= maxDist) {
                        alignmentA[idxA] = nearestIdxB;
                    }
                    idxB = nearestIdxB + 1;
                    nearestDist = Infinity;
                    break;
                }
            } else if (nearestDist === Infinity) {
                idxA = lengthA;
                break;
            }
        }
    }
    return alignmentA;
}

module.exports = alignSortedArraysByMaxDist;