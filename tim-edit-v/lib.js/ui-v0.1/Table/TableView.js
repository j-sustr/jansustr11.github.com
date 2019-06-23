const EventEmitter = require('../../events/EventEmitter');
const DataColumn = require('./column/DataColumn');
//const ControlColumn = require('./column/ControlColumn');

/*
    pravidlo:
        - ve view jen to, co je videt + row index
        - [idx, visible, rowProps]
*/


class TableView extends EventEmitter {
    constructor(model, table, properties, bindEvents=true) {
        super();

        this._emptyCellView = "---";

        this._rowNumberCol = new DataColumn("#", "int", "#");

        this._columns = null;

        this._model = model;
        this._table = table;


        this.configure(properties);

        this._onModelEvents = {
            'rows-inserted': (r, n) => this.insertRows(r, n),
            'rows-deleted' : (r, n) => this.deleteRows(r, n)
        }
        
        //this.pinHeader();

        //this._afterRowsInsertion = () => {};

        if (bindEvents) {
            this.bindEvents();
        }
    }

    assignColumns(columns) {
        this._columns = [...columns];

        this._columns.unshift(this._rowNumberCol);
        this._rowNumberCol.model = this._model;
        //this._rowIdxCol.view = this;
        //this._rowIdxCol.viewIdx = 0;

        this._columns.forEach((col, i) => {
            col.view = this;
            col.viewIdx = i;
            for (const event in col.tableEvents) {
                if (col.tableEvents.hasOwnProperty(event)) {
                    this._table.addEventListener(event, col.tableEvents[event]);
                }
            }
        });
    }

    build() {
        this._head = this.buildHead();
        this._body = this.buildBody();
    }

    bindEvents(overrides) {
        Object.assign(this._onModelEvents, overrides);

        for (const evt in this._onModelEvents) {
            this._model.on(evt, this._onModelEvents[evt]);
        }
    }

    configure(properties) {
        this._showRowIndex = properties.showRowIndex;
        this._colGroupNames = properties.colGroupNames;
        this._colGroupLengths = properties.colGroupLengths;
        this._style = properties.style;

        //this._colIsData = this._colFormats.map(x => x !== "-");
        //this._colIsData.unshift(true); // row index

        //this._cellMakers = new Array(this.numCols);

        //this.createCellMakers();
    }

    row(r) {
        return this._body.rows[r];
    }

    //set afterRowsInsertion(value) { this._afterRowsInsertion = value; }

    get numRows() {
        return this._body.rows.length;
    }

    get numCols() {
        return this._columns.length;
    }

    get size() {
        return [this.numRows, this.numCols];
    }

    buildHead() {
        const head = this._table.createTHead();
        let row, cell;

        if (this._colGroupNames) {
            row = head.insertRow();
            //cell = document.createElement("th");
            //row.appendChild(cell);
            this._colGroupNames.forEach((groupName, i) => {
                cell = document.createElement("th");
                cell.innerText = groupName;
                cell.setAttribute("colspan", this._colGroupLengths[i].toString());
                row.appendChild(cell);
            });
        }

        row = head.insertRow();
        //if (this._showRowIndex) {
        //    cell = document.createElement("th");
        //    cell.innerText = "#";
        //    row.appendChild(cell);
        //}

        this._columns.forEach((col, i) => {
            cell = document.createElement("th");
            cell.innerText = col.name;
            row.appendChild(cell);
        });

        head.appendChild(row);

        this._setupHeadClasses(head);

        return head;
    }

    buildBody() {
        const body = this._table.createTBody();
        return body
    }

    _setupHeadClasses(head) {
        const leftThInGroupClass = "leftThInGroup";

        //const head = this._head;
        let i, j, k, cells;
        if (head.childElementCount === 2) { // jsou colGroups?
            cells = head.rows[0].cells;
            for (i = 1; i < cells.length; i++) {
                cells[i].classList.add(leftThInGroupClass);
            }
            cells = head.rows[1].cells;
            j = k = 0;
            //cells[1].classList.add(leftThInGroupClass);
            for (i = 0; i < cells.length; i++) {
                if (k >= this._colGroupLengths[j]) {
                    cells[i].classList.add(leftThInGroupClass);
                    k = 0;
                    j++;
                }
                k++;
            }
        }
    }

    insertRows(r, n) {
        const numCols = this.numCols;
        //const rows = this._model.rows;

        let cellHtml, rowHtml, cellView;
        for (let i = 0; i < n; i++) {
            rowHtml = this._body.insertRow(r + i);
            rowHtml.appendChild(document.createElement("td"));
            for (let j = 1; j < numCols; j++) {
                cellHtml = document.createElement("td");

                // rowModel to row View
                cellView = this._columns[j].cellView(r + i)
                cellHtml.innerHTML = cellView ? cellView : this._emptyCellView;
                //makeCell(rows[i]);

                rowHtml.appendChild(cellHtml);
            }
        }
        
        this.resetRowNumbers(r);
        
        //if (this._afterRowsInsertion) {
        //    this._afterRowsInsertion(r, n, rows, this._body.rows);
        //}

        console.log(`inserted rows from ${r} to ${n}`);

        this.emit('rows-inserted', r, n);
    }

    deleteRows(start=0, end=-1) {
        if (end < 0) end = this.numRows + end + 1;
        for (let i = start; i < end; i++) {
            this._body.deleteRow(start);
        }
    }

    resetRowNumbers(fromRow) {
        const rowNumberColIdx = this._columns.indexOf(this._rowNumberCol);
        const rows = this._body.rows;
        for (let i = fromRow, len = this._body.rows.length; i < len; i++) {
            rows[i].cells[rowNumberColIdx].innerHTML = i + 1;
        }
    }

    show() {
        this.rebuild();
    }

    rebuild() {
        const rows = this._model.rows;
        for (let i = 0, len = rows.length; i < len; i++) {
            const row = rows[i];
            
        }
    }

    setCell() {
        const tableRow = this.table.rows[row];
        const tableCell = tableRow.cells[col];

        while (tableCell.firstChild) {
            tableCell.removeChild(tableCell.firstChild);
        }

        tableCell.appendChild(node);
    }

    addClassToCell(r, c, className) { // funkce pro kazdou operaci zvlast, aby nemusela byt zbytecna podminka

    }

    removeClassFromCell(r, c, className) {
        
    }
    
    getCellCenter(row, column) {
        const tableRow = this._table.rows[row];
        const tableCell = tableRow.cells[column];
        
        const offset = $(tableCell).offset();
        const width = $(tableCell).innerWidth();
        const height = $(tableCell).innerHeight();
        
        return {
          x: offset.left + width / 2,
          y: offset.top + height / 2
        }
    }

    scale(s) { 
        /*
        1 ... výchozí
        
        v config budou vychozi rozmery

        velikost pisma
        velikost radku


        */

    }


    // UNUSED----------------------------------
    pinHeader(container) {
        //function scrollHandle(e) {
        //    console.log('handling scroll', e)
        //    //let scrollTop = this.scrollTop;
        //    //this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
        //    this._table.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
        //    console.log('handling scroll, scrollTop: ', scrollTop);
        //}
        //this._table.parentElement.addEventListener('scroll', scrollHandle);
        //container.addEventListener('scroll', () => {
        //    this
        //});

        console.log('pinning table header, to container', container);
    }


    // static

    
    *createRowFormater(row) {
        for (let i = 0, len = row.length - 1; i < len; i++) {
            if (typeof(this._rowFormater[i]) === "function") {
                yield this._rowFormater[i](row[i + 1])
            } else {
                yield row[i + 1];
            }
        }
    }

    formatRows(rows) {
        this._rowFormater.forEach((formater, c) => { // columns
            c++;
            if (formater) {
                //rows.forEach(row => formater(row[i]));
                rows.forEach((row, r) => {
                    rows[r][c] = formater(row[c]);
                });
            }
        });
    }
}

module.exports = TableView;