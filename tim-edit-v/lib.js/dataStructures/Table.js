// ver 0.3

export default class Table {
    constructor(colKeys, rows) {
        this._cols = null; // Map ( Názvy sloupců => idx)  
        if (colKeys) this.setColKeys(colKeys);
        this._rows = rows ? rows : [];
        this._colTypes = null; // for typeCheck
        this._typeCheck = false;
    }
    set typeCheck(val) { this._typeCheck = val; }
    set colTypes(val) { this._colTypes = val; } // neupdatuje se pri zmene tabulky (musi se updatovat externe).
    
    get cols() { return this._cols; }
    get rows() { return this._rows; }
    get numRows() { return this._rows.length }
    get numCols() { return this._cols.size }
    get colKeys() { return [...this._cols.keys()]; }
    colIdx(key) { return this._cols.get(key); }
    cell(c, r)    { return this._rows[r][c]; }
    setCell(c, r, val) { this._rows[r][c] = val; }
    row(r) { return this._rows[r]; }
    
    setColKeys(keys) {
        this._cols = new Map(); // Map ( název sloupce => idx) 
        keys.forEach((key, idx) => this._cols.set(key, idx));
    }
    
    //colByKey(key) { return this.col(key); }
    col(key) {
        const colIdx = this.colIdx(key);
        const col = new Array(this.numRows);
        const rows = this.rows;
        for (let r = 0, len = this.numRows; r < len; r++) {
            col[r] = rows[r][colIdx];
        }
        return col;
    }

    insertCol(c, key, col) {

    }

    appendCol(key, col) {
        this._cols.set(key, this.numCols);
        const rows = this.rows;
        for (let i = 0, len = this.numRows; i < len; i++) {
            rows[i].push(col[i]);
        }
    }

    deleteCols(...keys) {
        const cols = this._cols;
        const rows = this._rows;

        const dropColIdxs = keys.map((key) => cols.get(key));
        dropColIdxs.sort((a, b) => b - a);

        keys.forEach(key => cols.delete(key));
        Array.from(cols.keys()).forEach((key, i) => cols.set(key, i));

        const numRows = rows.length;
        const numDropCols = dropColIdxs.length;

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numDropCols; j++) {
                rows[i].splice(dropColIdxs[j], 1);
            }
        }
    }

    deleteCol(key) {
        const cols = this._cols;
        cols.delete(key);
        Array.from(cols.keys()).forEach((key, i) => cols.set(key, i));
        const colIdx = this.colIdx(key);
        const rows = this._rows;
        for (let i = 0, len = rows.length; i < len; i++) {
            rows[i].splice(colIdx, 1);
        }
    }

    insertRows(r, rows, keys=null) {
        const rowsLen = rows.length;
        if (keys) {
            //const colKeys = [...this._cols.keys()]; //this._columns.map(col => col.key);
            const insertionMap = {}; // cellIndex -> columnIndex
            keys.forEach((key, i) => insertionMap[i] = this._cols.get(key));//colKeys.indexOf(key));
            //console.log('insertionMap', insertionMap)
            
            let newRow;
            const numCols = this.numCols;
            const numKeys = keys.length;
            for (let i = 0; i < rowsLen; i++) {
                newRow = new Array(numCols);
                for (let j = 0; j < numKeys; j++) {
                    if (insertionMap[j] === undefined) continue;
                    newRow[insertionMap[j]] = rows[i][j];
                }
                this._rows.splice(r + i, 0, newRow);
            }
        } else {
            for (let i = 0; i < rowsLen; i++) {
                this._rows.splice(r + i, 0, rows[i]);
            }
        }
        if (this._typeCheck) this.typeCheckRows(r, r + rowsLen);
    }

    typeCheckRows(start=0, end=-1) {
        if (end < 0) end = this.numRows + end + 1;
        const rows = this._rows;
        const numCols = this.numCols;
        for (let i = start; i < end; i++) {
            for (let j = 0; j < numCols; j++) {
                if (rows[i][j] !== undefined && typeof(rows[i][j]) !== this._colTypes[j]) { // or empty cell?
                    throw new TypeError(`Invalid cell type of "${rows[i][j]}" in row[${j}] (${rows[i]})`);
                }
            }
        }
    }

    deleteRows(start=0, end=-1) {
        if (end < 0) end = this.numRows + end + 1;
        this._rows.splice(start, end)
    }

    restore() {
        this._cols = new Map(this._cols);
    }

    toJSON() {
        //console.log('Serializing Table to JSON');
        return {
            _cols: [...this._cols],
            _rows: this._rows,
        };
    }

    toString(showIdx = true, truncLT = 30) {
        const colKeys = this.colKeys;
        const rows = this.rows.map(row => [...row]);

        // TODO: floats alignment
        const allowedStrCellSize = truncLT;
        const colSpace = '  ';
        const trueString = '1';
        const falseString = '0';

        if (showIdx) {
            colKeys.unshift('i');
            for (let i = 0, len = rows.length; i < len; i++) {
                rows[i].unshift(i);
            }
        }

        const numCols = colKeys.length;
        const numRows = rows.length;
        const truncCol = new Array(numCols).fill(false);
        const maxCellSizes = new Array(numCols);
        let maxCellSize;
        let cell;

        for (let i = 0; i < numCols; i++) {
            maxCellSize = 0;
            for (let j = 0; j < numRows; j++) {
                cell = rows[j][i];
                switch (typeof cell) {
                    case "string": break;
                    case "number": cell = cell.toString(); break;
                    case "boolean": cell = trueString; break;
                    default:
                        throw new Error(`Unsupported data type "${typeof cell}"`); break;
                }
                if (cell.length > maxCellSize) {
                    maxCellSize = cell.length;
                    if (maxCellSize > allowedStrCellSize && typeof rows[j][i] === "string") {
                        truncCol[i] = true;
                        maxCellSize = allowedStrCellSize;
                        break;
                    }
                }
            }
            maxCellSizes[i] = maxCellSize;
        }

        for (let i = 0; i < numCols; i++) {
            if (typeof colKeys[i] !== 'string') {
                throw new Error('Array "colKeys" must only contain strings');
            }
            if (colKeys[i].length > maxCellSizes[i]) {
                maxCellSizes[i] = colKeys[i].length;
            }
        }

        let stringRows = new Array(numRows + 2);
        stringRows[0] = colKeys.map((cell, i) => cell.padEnd(maxCellSizes[i], " ")).join(colSpace);
        stringRows[1] = '-'.repeat(maxCellSizes.reduce((a, b) => a + b) + numCols * colSpace.length)

        const stringCells = new Array(numCols);

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                cell = rows[i][j];
                switch (typeof cell) {
                    case "string":
                        if (cell.length > allowedStrCellSize) {
                            cell = cell.substring(0, allowedStrCellSize - 1);
                        }
                        cell = cell.padEnd(maxCellSizes[j]);
                        break;
                    case "number":
                        cell = cell.toString().padStart(maxCellSizes[j]);
                        break;
                    case "boolean":
                        cell = cell ? trueString : falseString;
                        cell = cell.padStart(maxCellSizes[j]);
                        break;
                    default:
                        throw new Error(`Unsupported data type "${typeof cell}"`); break;
                }
                stringCells[j] = cell;
            }
            stringRows[i + 2] = stringCells.join(colSpace)
        }
        return stringRows.join('\n');
    }
}









