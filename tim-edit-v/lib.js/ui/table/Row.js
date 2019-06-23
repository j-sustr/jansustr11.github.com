
export default class Row {
    constructor(rowHtml, model, view) {
        
        this._rowHtml = rowHtml;

        this._model = model;
        this._view = view;
    }

    get idx() {
        return Number.parseInt(this._rowHtml.cells[0].innerHTML) - 1; // rowIndex = rowNumber - 1
    }

    data(key) {
        return this._model.row(this.idx)[this._model.colIdx(key)];
    }
}