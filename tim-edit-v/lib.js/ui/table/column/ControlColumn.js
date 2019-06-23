import Column from './Column.js';
import Row from '../Row.js';


export default class ControlColumn extends Column {
    constructor(key, dtype, name, cellType, properties) {
        super(key, dtype, name);

        this._cellType = cellType;
        //this._sclass = sclass;

        // parametr bude obsahovat informace o akci
        //this._callback = callback;

        this.tableEvents = {};

        // make cell maker
        this.makeCell = this.determineCellMaker(cellType, properties);
    }

    get controlType() { return this._cellType; }


    cellView(r) {
        return this.makeCell();
    }


    determineCellMaker(ctype, p) { // cellMakers
        switch (ctype) {
            case "active-div": return this.createActiveDivCellMaker(p.className, p.innerHTML, p.onEvents);
            case "checkbox": return this.createCheckboxCellMaker(p.className, p.callback);
            case "custom":   return this.createCustomCellMaker(p.html);
            default:         return null;
        }
    }

    cellIdxIsEqualViewIdx(cell) {
        const row =  cell.parentElement;
        const cellArray = Array.from(row.cells);
        const cellIdx = cellArray.indexOf(cell);
        return cellIdx === this.viewIdx;
    }

    createActiveDivCellMaker(className, innerHTML, onEvents) {
        // event delegation
        if (!innerHTML) innerHTML = "";

        // util funkce pro stylovani elementu podle stylů v js objektu (NE STYLY DO CSS, POUZE CLASSES)
        for (const eventType in onEvents) {
            if (onEvents.hasOwnProperty(eventType)) {
                const callback = onEvents[eventType];
                this.tableEvents[eventType] = (e) => {
                    if (e.target.tagName === "DIV") {
                        const cell = e.target.parentElement;
                        if (this.cellIdxIsEqualViewIdx(cell)) {
                            callback(new Row(cell.parentElement, this._model, this._view), cell.firstChild);
                        }
                    }
                };
                
            }
        }

        return function buttonCellMaker() {
            return `<div class="${className}">${innerHTML}</input>`;;
        }
    }

    createCheckboxCellMaker(className, callback) {
        // button event delegation
        this.tableEvents['click'] = (e) => {
            if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
                const cell = e.target.parentElement;
                if (this.cellIdxIsEqualViewIdx(cell)) {
                    callback(new Row(cell.parentElement, this._model, this._view));
                }
            }
        };

        return function checkboxCellMaker() {
            //const elem = document.createElement('input');
            //elem.type = "checkbox";
            ////elem.innerHTML = properties.innerHTML;
            //elem.classList.add(properties.class);
            return `<input type="checkbox" class="${className}"></input>`;
        }
    }

    createCustomCellMaker(properties) { // customColumn
        if (properties.hasOwnProperty('onTableEvents')) {
            for (const eventType in properties.onTableEvents) {
                this._table.addEventListener(eventType, properties.onTableEvents[eventType]); // event delegation
            }
        }
        return properties.cellMaker;
    }
}