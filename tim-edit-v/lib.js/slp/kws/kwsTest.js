import spotTimComparison from './spotTimComparison.js';


export function spotTimSetComparison(spotSet, timSet, spotThreshold, maxWordTimeDist, returnData=false) {
    const names = spotSet.names;
    let numSpotRows = 0;
    let numTrueSpots = 0;
    let comparisonData;
    if (returnData) comparisonData = [];

    names.forEach(name => {   
        //console.log(name)
        const spotTh = spotSet.get(name).applyThreshold(spotThreshold);
        const tim = timSet.get(name);
        const result = spotTimComparison(spotTh, tim, maxWordTimeDist);

        numSpotRows += spotTh.numRows;
        result.trueSpots.forEach(v => v ? numTrueSpots++ : v);
        if (returnData) comparisonData.push({ spotTh, ...result });
    });

    const spotCounts = {
        trueSpots: numTrueSpots,
        falseAlarms: numSpotRows - numTrueSpots,
        missedDetections: timSet.numRows - numTrueSpots,
    };
    if (returnData) return { spotCounts, comparisonData };
    return spotCounts;
}

export function* multipleSpotTimSetComparisons(spotSet, timSet, settings) {
    let iter = 0;
    for (const { spotThreshold, maxWordTimeDist } of settings) {
        const spotCounts = spotTimSetComparison(spotSet, timSet, spotThreshold, maxWordTimeDist)
        //spotCountsArray.push(spotCounts);
        yield {spotCounts, iter: iter++};
    }
}