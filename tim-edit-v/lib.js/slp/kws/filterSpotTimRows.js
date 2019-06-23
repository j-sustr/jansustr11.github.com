function filterSpotTimRows(rows, trueSpots, irrelevant, faCtxSize=2) {
    const lastColIdx = rows[0].length - 1;
    const remove = new Array(rows.length + 2 * faCtxSize).fill(false); // oznaci se radky ktere maji zustat
    if (trueSpots) {
        for (let i = 0, I = rows.length; i < I; i++) { // ts condition
            if (rows[i][lastColIdx] === "ts") {
                remove[i + faCtxSize] = true;
            }
        } 
    }
    if (irrelevant) {
        for (let i = 0, I = rows.length; i < I; i++) { 
            if (rows[i][lastColIdx] === "--") { // other condition
                remove[i + faCtxSize] = true;
            }
        }
        for (let i = 0, I = rows.length; i < I; i++) {
            if (rows[i][lastColIdx] === "fa") { // fa condition
                console.log('sasas')
                for (let j = i - faCtxSize; j < i; j++) {
                    remove[j + faCtxSize] = false;
                }
                for (let j = i + 1, J = i + faCtxSize + 1; j < J; j++) {
                    remove[j + faCtxSize] = false;
                }
            }
        }
    }
    //console.log(remove)
    return rows.filter((r, i) => !remove[i + faCtxSize]);
}

module.exports = filterSpotTimRows;
