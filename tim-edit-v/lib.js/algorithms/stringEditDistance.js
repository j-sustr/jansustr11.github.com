export default function stringEditDistance(ref, edt) {
    const J = edt.length + 1, I = ref.length + 1;
    const distMat = new Array(I);
    for (let i = 0; i < I; i++) {
        distMat[i] = new Array(J);
    }
    for (let j = 0; j < J; j++) {
        distMat[0][j] = j;
    }
    for (let i = 0; i < I; i++) {
        distMat[i][0] = i;
    }

    let isSubst;
    for (let i = 1; i < I; i++) {
        for (let j = 1; j < J; j++) {
            isSubst = edt[j - 1] === ref[i - 1] ? 0 : 1;
            distMat[i][j] = Math.min(
                distMat[i][j - 1] + 1, // deletion
                distMat[i - 1][j] + 1, // insertion
                distMat[i - 1][j - 1] + isSubst, // substitution
            );
        }
    }
    return distMat[I - 1][J - 1];
}