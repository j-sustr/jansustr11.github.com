import Table from '../../dataStructures/Table.js';


export default class Spot extends Table {
    constructor(rows) {
        super();
        this._rows = rows;

        this.setColKeys(["id", "keyword", "score", "timeFrom", "timeTo", "frameFrom", "duration", "auxScore", "filler"]); 
    }

    createTimeMidCol() {
        const col = new Array(this.numRows);
        const timeFromCI = this.colIdx("timeFrom");
        const timeToCI = this.colIdx("timeTo");

        const rows = this._rows;
        for (let i = 0, len = this.numRows; i < len; i++) {
            col[i] = Math.round(0.5 * (rows[i][timeToCI] - rows[i][timeFromCI])) + rows[i][timeFromCI];
        }
        return col;
    }

    applyThreshold(threshold) {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);
        cloned._cols = new Map(this._cols);
        const scoreCI = this.colIdx('score');
        cloned._rows = this._rows.filter(row => row[scoreCI] >= threshold);
        return cloned;
    }

    peek(rStart, rEnd) {
        if (rEnd < 0) {
            rEnd = this.numRows + rEnd;
        }
        const padLength = 15;

        let string = 'idx ' + this.colKeys.map(x => String(x).padStart(padLength)).join('') + '\n';

        this._rows.slice(rStart, rEnd).forEach((row, i) => {
            row = row.map(x => String(x).padStart(padLength))
            string += `${String(i).padStart(3)} ${row.join('')}\n`;
        });
        return string;
    }
}


//const data = {
        //    filename:  Array(nLines),
        //    keyword:   Array(nLines),
        //    score:     Float32Array(nLines),
        //    timeFrom:  Int32Array(nLines),
        //    timeTo:    Int32Array(nLines),
        //    frameFrom: Int32Array(nLines),
        //    duration:  Int32Array(nLines),
        //    auxScore:  Float32Array(nLines),
        //    filler:    Array(nLines)
        //}




