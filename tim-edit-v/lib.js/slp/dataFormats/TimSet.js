import TableSet from '../../dataStructures/TableSet.js';
import Tim from './Tim.js';


export default class TimSet extends TableSet {
    constructor(dataArray, fileNames) {
        super();
        let id = 1;
        let name = '';
        this._nameIdxs = {};
        dataArray.forEach((data, i) => {
            //console.log(paths[i])
            name = fileNames[i].split('.')[0];
            const tim = new Tim(data, fileNames[i], id);
            id += tim.numRows;
            this._items.push(tim);
            this._nameIdxs[name] = i;
        });

        //this._paths = paths;
    }

    createTimeMidCols() {
        this._items.forEach(item => {
            item.appendCol('timeMid', item.createTimeMidCol());
        });
    }

    // obsolete
    filterWords(words, save=true) {
        this._items.forEach(tim => {
            tim.filterWords(words, save);
        });
        return this;
    }

    restore() {
        this._items.forEach(tim => {
            Object.setPrototypeOf(tim, Tim.prototype);
            tim.restore()
        });
    }

    peek(idx, rStart, rEnd) {
        return this._items[idx].peek(rStart, rEnd);
    }

    findRowById(id) {
        let items = this._items;
        for (let i = 0, I = items.length; i < I; i++) {
            let rows = items[i].rows;
            let lastRowIdx = rows.length - 1;
            if (id <= rows[lastRowIdx][0]) {
                for (let j = 0, J = rows.length; j < J; j++) {
                    if (rows[j][0] === id) {
                        return { itemIdx: i, rowIdx: j, row: rows[j] };
                    }
                }
                return null;
            }
        }
    }
}