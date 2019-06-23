import Table from '../../dataStructures/Table.js';


const TIME_RE = /\d\d:\d\d:\d\d\.\d\d\d\d/;


export default class Tim extends Table {
    constructor(data, fileName, startId=0) {
        super();
        
        this._name = fileName;
        
        this._rows = this.parse(data, startId);


         // Názvy sloupců
        this.setColKeys(["id", "timeStart", "timeEnd", "wordG", "wordP"]);
    }

    get name() { return this._name; }

    parse(str, startId) {
        let id = startId;
        let lines = str.match(/[^\r\n]+/g);
        for (let i = 0, I = lines.length; i < I; i++) {
            lines[i] = lines[i].match(/\S+/g);
            if (lines[i].length !== 4) {
                throw new Error(`Invalid line ${i + 1} at "${this._name}"`);
            }
            if(!TIME_RE.test(lines[i][0]) || !TIME_RE.test(lines[i][1])) {
                throw new Error(`Invalid time format on line ${i + 1} at "${this._name}"`);
            }
            lines[i][0] = parseTimeHMSTMS(lines[i][0]);
            lines[i][1] = parseTimeHMSTMS(lines[i][1]);
            lines[i].unshift(id++);
        }
        return lines;
    }

    createTimeMidCol() {
        //this._cols.set("timeMid", this._cols.size);
        const col = new Array(this.numRows);
        const timeStartCI = this.colIdx("timeStart");
        const timeEndCI = this.colIdx("timeEnd");

        const rows = this._rows;
        for (let i = 0, len = this.numRows; i < len; i++) {
            col[i] = Math.round(0.5 * (rows[i][timeEndCI] - rows[i][timeStartCI])) + rows[i][timeStartCI];
        }
        return col;
    }

    toTimString() {
        //const TIME_COEF = 0.1;
        let strRows = new Array(this._rows.length);
        for (let i = 0, I = this._rows.length; i < I; i++) {
            strRows[i] = [
                '  ', tmsToHMSTMS(this._rows[i][1]), '    ', tmsToHMSTMS(this._rows[i][2]),
                '   ', this._rows[i][3], '   ', this._rows[i][4]
            ].join('');
        }
        return strRows.join('\n');
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

    // obsolete
    filterWords(words, save=true) {
        const wordGColIdx = this.colIdx('wordG');
        const filteredRows = this._rows.filter(row => words.includes(row[wordGColIdx])); // ponechat slova words
        if (save) {
            this._rows = filteredRows;
        }
        return this;
    }


}


function parseTimeHMSTMS(str) {
    let [hms, tms] = str.split('.');
    tms = parseInt(tms);
    let [h, m, s] = hms.split(':');
    h = parseInt(h);
    m = parseInt(m);
    s = parseInt(s);
    return (3600 * h + 60 * m + s) * 10000 + tms;
}

function tmsToHMSTMS(tms) {
    let h = Math.floor(tms / 36000000);
    tms -= (h * 36000000);
    let m = Math.floor(tms / 600000);
    tms -= (m * 600000);
    let s = Math.floor(tms / 10000);
    tms -= (s * 10000);

    h = h.toString().padStart(2, '0');
    m = m.toString().padStart(2, '0');
    s = s.toString().padStart(2, '0');
    tms = tms.toString().padStart(4, '0');

    return `${h}:${m}:${s}.${tms}`;
}