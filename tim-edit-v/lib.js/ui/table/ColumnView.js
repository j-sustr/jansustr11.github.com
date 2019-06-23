
export default class ColumnView {
    constructor(key, name, renderCell) {

        this._key = key;
        this._name = name;
        //this._tableModel = null;
        //this._tableView = null;
        this._tableModelRows = null;
        this._tableModelColIdx = -1;

        this.emptyCellContent = "---";
        this.renderCell = renderCell ? renderCell : (d) => {
            return d !== undefined ? d : this.emptyCellContent;
        };
        this.cellData = (r) => {
            return this._tableModelRows[r][this._tableModelColIdx];
        }
        if (!key) {
            this.cellData = (r) => undefined;
        }
    }

    get key() { return this._key; }

    
}