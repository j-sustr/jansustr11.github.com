function countSpotTimRows(rows) {
    const lastColIdx = rows[0].length - 1;
    
    let trueSpots = 0;
    let missedDetections = 0;
    let falseAlarms = 0;
    let others = 0;

    for (let i = 0, I = rows.length; i < I; i++) {
        switch (rows[i][lastColIdx]) {
            case "ts": trueSpots++; break;
            case "md": missedDetections++; break;
            case "fa": falseAlarms++; break;
            default: others++; break;
        }
    }

    return { trueSpots, missedDetections, falseAlarms, others };
}

module.exports = countSpotTimRows;

