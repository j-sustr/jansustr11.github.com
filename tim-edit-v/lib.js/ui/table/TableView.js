import EventEmitter from '../../events/EventEmitter.js';
import ColumnView from './ColumnView.js';

// pravidlo:  ve view jen to, co je videt + row index


export default class TableView extends EventEmitter {
    constructor(model, table, config, bindEvents=true) {
        super();
        this._rowNumberCol = new ColumnView("#", "#");
        this._columns = null;
        this._model = model;
        this._table = table;
        this._table.classList.add('table-view');
        this.configure(config);
        this._onModelEvents = {
            'rows-inserted': (r, n) => this.insertRows(r, n),
            'rows-deleted' : (r, n) => this.deleteRows(r, n),
            'cell-updated': (c, r) => this.updateCell(c, r)
        }
        if (bindEvents) {
            this.bindEvents();
        }
    }

    get table() { return this._table; }
    get head() { return this._head; }
    get body() { return this._body; }

    assignColumns(columns) {
        this._columns = [...columns];
        this._columns.forEach((col, i) => {
            if (col.key) {
                col._tableModelRows = this._model.rows;
                let modelColIdx = this._model.colIdx(col.key);
                if (typeof modelColIdx !== 'number') {
                    throw new Error(`Invalid column key "${col.key}"`);
                }
                col._tableModelColIdx = modelColIdx;
            }
            
            //col._tableView = this;
            //col._atTableViewIdx = i;
            //for (const event in col.tableEvents) {
            //    if (col.tableEvents.hasOwnProperty(event)) {
            //        this._table.addEventListener(event, col.tableEvents[event]);
            //    }
            //}
        });
        this._columns.unshift(this._rowNumberCol);
    }

    build() {
        this._head = this.buildHead();
        this._body = this.buildBody();
        //this.pinHead();
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
    }

    row(r) {
        return this._body.rows[r];
    }

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
        this._columns.forEach((col, i) => {
            cell = document.createElement("th");
            cell.innerText = col._name;
            row.appendChild(cell);
        });
        head.appendChild(row);
        this._setupHeadClasses(head);
        return head;
    }

    buildBody() {
        const body = this._table.createTBody();
        return body;
    }

    _setupHeadClasses(head) {
        const leftThInGroupClass = "leftThInGroup";
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

    updateCell(c, r) {
        let col;
        for (let i = 0, I = this.numCols; i < I; i++) {
            if (this._columns[i]._tableModelColIdx === c) {
                col = this._columns[i];
                this._body.rows[r].cells[i].innerHTML = col.renderCell(col.cellData(r));
                this.updateHeadDimensions();
                this.emit('cell-updated', r, this._columns[i].key);
                // return - kdyz bunku modelu zobrazuje pouze 1 sloupec
            }
        }
    }

    insertRows(r, n) {
        const numCols = this.numCols;
        let cellHtml, rowHtml, col;
        for (let i = 0; i < n; i++) {
            rowHtml = this._body.insertRow(r + i);
            rowHtml.appendChild(document.createElement("td"));
            for (let j = 1; j < numCols; j++) {
                cellHtml = document.createElement("td");
                col = this._columns[j];
                cellHtml.innerHTML = col.renderCell(col.cellData(r + i));
                rowHtml.appendChild(cellHtml);
            }
        }
        this.resetRowNumbers(r);
        this.updateHeadDimensions();
        this.emit('rows-inserted', r, n);
    }

    updateRows(r, n) {

        this.updateHeadDimensions();
        this.emit('rows-updated', r, n);
    }

    deleteRows(start=0, end=-1) {
        if (end < 0) end = this.numRows + end + 1;
        for (let i = start; i < end; i++) {
            this._body.deleteRow(start);
        }
        this.updateHeadDimensions();
        this.emit('rows-deleted', start, end);
    }

    resetRowNumbers(fromRow) {
        const rowNumberColIdx = this._columns.indexOf(this._rowNumberCol);
        const rows = this._body.rows;
        for (let i = fromRow, len = this._body.rows.length; i < len; i++) {
            rows[i].cells[rowNumberColIdx].innerHTML = i + 1;
        }
    }

    pinHead() {
        let tableY = this._table.offsetTop; //getBoundingClientRect().y;
        let headHeight = this._head.offsetHeight; //getBoundingClientRect().height;
        Object.assign(this._head.style, {
            position: 'fixed',
            top: `${tableY}px`,
        });
        Object.assign(this._table.style, {
            paddingTop: `${headHeight}px`,
        });
    }

    updateHeadDimensions() {
        //this.pinHead();
        this._head.style.width = `${this._body.offsetWidth}px`;
        if (this._body.rows.length > 0) {
            const cells = this._body.rows[0].cells;
            for (let i = 0, I = cells.length; i < I; i++) {
                this._head.rows[0].cells[i].style.width = `${cells[i].offsetWidth}px`;
            }
        }
    }

// UNUSED ---------------------------------------------------------------------

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