import linkTwoIncreasingSeqByMaxDist from '../../algorithms/linkTwoIncreasingSeqByMaxDist.js';
import findSeqOfSameNonnegNums from '../../algorithms/findSeqOfSameNonneg.js';


function resolveTrueSpots(links, spot, tim) {
    const spotRows = spot.rows;
    const timRows =  tim.rows;
    const spotWordCI = spot.colIdx('keyword');
    const timWordCI = tim.colIdx('wordG');

    const trueSpots = new Array(links.length).fill(false);

    for (let i = 0, mI = links.length; i < mI; i++) {        
        //if (links[i] !== -1 && spotRows[i][spotWordCI] === timRows[links[i]][timWordCI]) {
        if (links[i] !== -1 && timRows[links[i]][timWordCI].toLowerCase() === spotRows[i][spotWordCI].toLowerCase()) {
            trueSpots[i] = true;
        }
    }
    return trueSpots;
}

function fixLinks(links, spot, tim) {
    const numLinks = links.length;

    const nonuniqueMinLinkDistances = [];
    const spotTimeMidCI = spot.colIdx('timeMid');

    for (const sameLinkSeqIdx of findSeqOfSameNonnegNums(links)) {
        const sameLinks = [];
        let link = links[sameLinkSeqIdx];
        for (let i = sameLinkSeqIdx; i < numLinks; i++) {
            if (links[i] === link) {
                sameLinks.push({
                    idx: i, link: links[i], 
                    dist: Math.abs(spot.cell(spotTimeMidCI, i) - tim.cell(spotTimeMidCI, link))
                });
            } else { 
                break;
            }
        }

        const linkDistances = sameLinks.map(link => link.dist);
        const minLinkDist = Math.min(...linkDistances);
        const minLinkDistIdx = sameLinks[linkDistances.indexOf(minLinkDist)].idx;
        const minDistIsUnique = linkDistances.indexOf(minLinkDist) === linkDistances.lastIndexOf(minLinkDist) ? true : false;
        
        sameLinks.forEach(link => {
            if (link.idx !== minLinkDistIdx) {
                links[link.idx] = -1;
            }
        });

        if (!minDistIsUnique) {
            nonuniqueMinLinkDistances.push(sameLinks);
        }
    }

    const info = {
        'exceptions': nonuniqueMinLinkDistances
    }
    return info;
}

export default function spotTimComparison(spot, tim, maxWordTimeDist) {
    //let startTime = process.hrtime()

    const spotThTimeMidCol = spot.col('timeMid');
    const timTimeMidCol = tim.col('timeMid');

    const links = linkTwoIncreasingSeqByMaxDist(spotThTimeMidCol, timTimeMidCol, maxWordTimeDist);
    fixLinks(links, spot, tim);
    const trueSpots = resolveTrueSpots(links, spot, tim);

    //let testTime = process.hrtime(startTime);
    //testTime[1] *= 1e-6; 
    //showErrorDialog(`Execution time (hr) ${hrend[0]}s ${hrend[1] / 1000000}ms`);
    
    return { links, trueSpots };
}