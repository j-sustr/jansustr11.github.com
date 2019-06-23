const EventEmitter = require('../../events/EventEmitter');
const TableUtil = require('./TableUtil');
const DataColumn = require('./column/DataColumn');


class TableModel extends EventEmitter {
    
    constructor(properties) {
        super();

        this._cols = new Map();

        this._rows = [];

        this.configure(properties);
    }

    get cols()    { return this._cols; }
    get rows()    { return this._rows; }
    get numRows() { return this._rows.length; }
    get numCols() { return this._cols.size; }
    get colKeys() { return [...this._cols.keys()]; }
    colIdx(key)   { return [...this._cols.keys()].indexOf(key); }
    row(r)        { return this._rows[r]; }
    data(c, r)    { return this.row(r)[c]; }
    setData(c, r, val) { this.row(r)[c] = val; }

    col(c) {
        const col = new Array(this.numRows);
        const rows = this.rows;
        for (let r = 0, len = this.numRows; r < len; r++) {
            col[r] = rows[r][c];
        }
        return col;
    }

    configure(properties) {
        this.validateProperties(properties);

        this._validation = properties.validation;
    }

    assignColumns(cols)  {
        //this._columns = [...columns];
        cols.forEach((col, i) => {
            this._cols.set(col.key, col);
            col.model = this;
            col.modelIdx = i;
        });
    }

    validateProperties(properties) {      
        if (false) {
            throw new Error(`Properties are not valid`);
        }
    }

    validateRow(row) {
        for (let i = 0, len = row.numCols - 1; i < len; i++) {
            //if (!this.columns[i] instanceof DataColumn) {
            //    continue;
            //}
            if (row[i] !== "---" && typeof(row[i]) !== this._cols[i].dataType) {
                throw new Error(`Invalid row cell: ${row[i]} in row[${i}] (${row})`);
            }
        }
    }

    insertRows(r, rows, keys=null) {
        if (keys) {
            const colKeys = [...this._cols.keys()]; //this._columns.map(col => col.key);
            const insertionMap = {}; // cellIndex -> columnIndex
            let newRow;

            keys.forEach((key, i) => {
                insertionMap[i] = colKeys.indexOf(key);
            });
            console.log('insertionMap', insertionMap)

            for (let i = 0, len = rows.length; i < len; i++) {
                newRow = new Array(colKeys.lenght);
                for (let j = 0, len1 = keys.length; j < len1; j++) {
                    if (insertionMap[j] < 0) continue;
                    newRow[insertionMap[j]] = rows[i][j];
                }
                
                this._rows.splice(r + i, 0, newRow);
                
                if (this._validation) this.validateRow(this._rows[r + i]);
            }
        } else {
            for (let i = 0, len = rows.length; i < len; i++) {
                if (this._validation) this.validateRow(rows[i]);
    
                this._rows.splice(r + i, 0, rows[i]);
            }
        }

        this.emit('rows:inserted', r, rows.length);
    }

    deleteRows(r=0, n=-1) {
        if (n === -1) {
            n = this.numRows;
        }
        this._rows.splice(r, n)

        this.emit('rows:deleted', r, n);
    }

/* // NEPATRI SEM!!!
    setCell(r, c, node) {
        const row = this._rows[r];
        const cell = row[c];

        while (cell.firstChild) {
            cell.removeChild(cell.firstChild);
        }

        cell.appendChild(node);
    }
*/
}

module.exports = TableModel;