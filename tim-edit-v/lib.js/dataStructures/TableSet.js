
export default class TableSet {
    constructor() {
        this._items = [];
        this._nameIdxs = {};
    }

    get(name)      { return this._items[this._nameIdxs[name]]; }
    get items()    { return this._items; }
    get names()    { return Object.keys(this._nameIdxs); }
    get numCols()  { return this._items[0].numCols; }
    get numRows()  { return this._items.reduce((n, table) => n + table.numRows, 0); }
    get numItems() { return this._items.length; }
    get colKeys()  { return this._items[0].colKeys; }
    get lengths()  { return this._items.map(table => table.numRows); }
    row(s, r)      { return this._items[s].rows[r]; }
    idxOf(name)    { return this._nameIdxs[name]; }
    colIdx(name)   { return this._items[0].colIdx(name); }
    colSlice(idx, name, start, end) { 
        return this._items[idx].colSlice(name, start, end); 
    }

    filter(callback) {
        this._items.forEach(item => {
            item._rows = item.rows.filter(callback);
        });
    }

    deleteCols(...keys) {
        this._items.forEach(item => item.deleteCols(...keys));
    }

    get startIdxs() {
        const n = this._items.length;
        const startIdxs = new Array(n);
        let lastIdx = 0;
        for (let i = 0; i < n; i++) {
            startIdxs[i] = lastIdx;
            lastIdx += this._items[i].numRows;
        }
        return startIdxs;
    }
}



//function startIdxs(items) {
//    const n = items.length;
//    const startIdxs = new Array(n);
//    let lastIdx = 0;
//    for (let i = 0; i < n; i++) {
//        startIdxs[i] = lastIdx;
//        lastIdx += items[i].length;
//    }
//    return startIdxs;
//}
//
//
//let idxs =  startIdxs([[0,0,0], [0,0], [0,0,0,0], [0,0,0,0,0,0], [4]])

//console.log(idxs)


