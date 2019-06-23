import { ENG_PAC } from '../transcription/phoneneticAlphabet.js';
import { tmsToHMSTMS } from '../../utils/time.js';


export default function mlfToTim(strData) {
    const TIME_COEF = 0.00001;
    let arrOfLines = strData.match(/[^\r\n]+/g);
    arrOfLines.shift();
    arrOfLines.pop();
    let recPath = arrOfLines.shift().trim().replace(/"/g, '');
    for (let i = 0, I = arrOfLines.length; i < I; i++) {
        arrOfLines[i] = arrOfLines[i].split(/\s+/);
    }
    let timRows = [];
    let phonemes = [];
    let newTimRow;
    arrOfLines.unshift(new Array(4));
    arrOfLines.push(new Array(5));
    timRows.push(new Array(4));
    for (let i = 1, I = arrOfLines.length; i < I; i++) {
        if (arrOfLines[i].length === 5) {
            newTimRow = new Array(4);
            lastTimRow = timRows[timRows.length - 1];
            newTimRow[0] = Math.round(parseInt(arrOfLines[i][0]) * TIME_COEF);
            newTimRow[2] = arrOfLines[i][4];
            lastTimRow[1] = Math.round(parseInt(arrOfLines[i-1][1]) * TIME_COEF);
            lastTimRow[3] = phonemes.join('');
            phonemes = [ENG_PAC[arrOfLines[i][2]]];
            timRows.push(newTimRow);
        } else if (arrOfLines[i].length === 4) {
            phonemes.push(ENG_PAC[arrOfLines[i][2]]);
        } else {
            console.log(arrOfLines[i])
            throw new Error(`Invalid line lenght`);
        }
    }
    timRows.shift();
    timRows.pop();
    
    for (let i = 0, I = timRows.length; i < I; i++) {
        //console.log(timRows[i])
        if (timRows[i][2] === 'SIL') timRows[i][2] = '-';

        timRows[i] = [
            '  ', tmsToHMSTMS(100 * timRows[i][0]), '    ', tmsToHMSTMS(100 * timRows[i][1]),
            '   ', timRows[i][2], '   ', timRows[i][3]
        ].join('');
    }
    return timRows.join('\n');
    //console.log()
}