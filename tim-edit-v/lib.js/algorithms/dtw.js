
export function dtwMatrix(refLen, hypLen, dist) {
    const I = refLen + 1, J = hypLen + 1;
    const distMat = new Array(I);
    for (let i = 0; i < I; i++) {
        distMat[i] = new Array(J);
        distMat[i].fill(Infinity);
    }
    distMat[0][0] = 0;

    let ad;
    for (let i = 1; i < I; i++) {
        for (let j = 1; j < J; j++) {
            ad = distMat[i - 1][j - 1];
            if (distMat[i - 1][j] < ad) ad = distMat[i - 1][j];
            if (distMat[i][j - 1] < ad) ad = distMat[i][j - 1];
            distMat[i][j] = ad + dist(i - 1, j - 1);
        }
    }
    return distMat;
}

export function dtwLinks(distMat) {
    const I = distMat.length, J = distMat[0].length;
    const links = [];
    let dir = 0;
    let ad;
    let i = I - 1, j = J - 1;
    while (i > 0 || j > 0) {
        dir = 0;
        ad = distMat[i - 1][j - 1];
        if (distMat[i][j - 1] < ad) { dir = -1; }
        if (distMat[i - 1][j] < ad) { dir = 1; }
        if (dir === 0) { 
            links.unshift(i - 1); 
            i--; j--;
        } 
        else if (dir === -1) { 
            links.unshift(-1); 
            j--; 
        } 
        else { 
            i--; 
        }
    }
    return links;
}