import TableSet from '../../dataStructures/TableSet.js';
import { timeStringToMiliseconds } from '../../utils/time.js';
import Spot from './Spot.js';


export default class SpotSet extends TableSet {
    constructor(data, filePath, srcFileNames=null) {
        super();

        this._filePath = filePath;

        const {rows} = this._parse(data);
        const rowGroups = this._groupRowsBySrc(rows);

        if (Array.isArray(srcFileNames)) {
            srcFileNames.forEach((srcName, idx) => this._nameIdxs[srcName] = idx);
        } else {
            Object.keys(rowGroups).forEach((key, idx) => {
                const srcName = this._filePathToName(key)
                this._nameIdxs[srcName] = idx;
            });
        }

        for (const srcPath in rowGroups) {
            if (rowGroups.hasOwnProperty(srcPath)) {
                const srcName = this._filePathToName(srcPath);
                this._items[this._nameIdxs[srcName]] = new Spot(rowGroups[srcPath]);
            }
        }
    }

    get filePath() { return this._filePath; }

    createTimeMidCols() {
        this._items.forEach(item => {
            item.appendCol('timeMid', item.createTimeMidCol());
        });
    }

    _filePathToName(fpath) {
        //return path.basename(p).split('.')[0];
        return fpath.split(/[\\\/]/).pop().split('.')[0];
    }

    _groupRowsBySrc(rows) {
        //const srcNames = new Set(rows.map(row => row[0]));
        //const rowGroups = {}

        const handler = {
            get: function(obj, prop) {
                if (!(prop in obj)) {
                    obj[prop] = [];
                }
                return obj[prop];
            }
        };
        
        const rowGroups = new Proxy({}, handler);

        for (let i = 0, len = rows.length; i < len; i++) {
            rowGroups[rows[i][0]].push(rows[i]);
            rows[i][0] = i + 1;
        }

        return {...rowGroups};
    }

    _parse(strData) {
        const TIME_COEF = 10;
        let arrayOfLines = strData.match(/[^\r\n]+/g);
        let nLines = arrayOfLines.length;

        for (let i = 0, len = arrayOfLines.length; i < len; i++) {
            arrayOfLines[i] = arrayOfLines[i].split(/\s+/);
            arrayOfLines[i][2] = parseFloat(arrayOfLines[i][2]);
            arrayOfLines[i][3] = TIME_COEF * timeStringToMiliseconds(arrayOfLines[i][3]);
            arrayOfLines[i][4] = TIME_COEF * timeStringToMiliseconds(arrayOfLines[i][4]);
            arrayOfLines[i][5] = parseInt(arrayOfLines[i][5]);
            arrayOfLines[i][6] = parseInt(arrayOfLines[i][6]);
            arrayOfLines[i][7] = parseFloat(arrayOfLines[i][7]);
        }
    
        let header = arrayOfLines.shift();
    
        return {
            header: header,
            rows  : arrayOfLines
        };
    }

    restore() {
        this._items.forEach(spot => {
            Object.setPrototypeOf(spot, Spot.prototype);
            spot.restore()
        });
    }

    peek(idx, rStart, rEnd) {
        return this._items[idx].peek(rStart, rEnd);
    }
}
