const mergeByLinks = require('../../algorithms/mergeByLinks');


function* mergeSpotWithTim(spot, tim, links, trueSpots, vocab) {
    const colKeysS = spot.colKeys;
    const colKeysT = tim.colKeys;
    colKeysS[colKeysS.indexOf('id')] = 'idS';
    colKeysS[colKeysS.indexOf('timMid')] = 'timeMidS';
    colKeysT[colKeysT.indexOf('id')] = 'idT';
    colKeysT[colKeysT.indexOf('timMid')] = 'timeMidT';
    const keys = [...colKeysS, ...colKeysT, 'spotClass'];
    yield keys;

    const wordG_CI = colKeysT.indexOf('wordG');

    const emptySpot = new Array(spot.numCols);//.fill("---");
    const emptyTim =  new Array(tim.numCols);//.fill("---");
    
    const spotRows = spot.rows;
    const timRows = tim.rows;
    let spotClass;

    vocab = vocab.map(word => word.toLowerCase());
    
    for (const [sIdx, tIdx] of mergeByLinks(links, tim.numRows)) {
        //console.log('pair:', pair)
        if (sIdx === -1) {
            yield [...emptySpot, ...timRows[tIdx], vocab.includes(timRows[tIdx][wordG_CI].toLowerCase()) ? "md" : "--"];
        } else if (tIdx === -1) {
            yield [...spotRows[sIdx], ...emptyTim, "fa"];
        } else {
            spotClass = trueSpots[sIdx] ? "ts" : "fa";
            yield [...spotRows[sIdx], ...timRows[tIdx], spotClass];
        }
    }
}

module.exports = mergeSpotWithTim;