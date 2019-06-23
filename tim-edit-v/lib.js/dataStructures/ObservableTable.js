import Table from './Table.js';
import EventEmitter from '../events/EventEmitter.js';


export default class ObservableTable extends Table {
    constructor (colKeys, rows) {
        super(colKeys, rows);

        this._eventEmitter = new EventEmitter();
    }

    emit(evt, ...args) {
        this._eventEmitter.emit(evt, ...args)
    }

    on(evt, listener) {
        this._eventEmitter.on(evt, listener);
    }

    setCell(c, r, val) {
        super.setCell(c, r, val);
        this.emit('cell-updated', c, r);
    }

    insertRows(r, rows, keys=null) {
        super.insertRows(r, rows, keys);
        this.emit('rows-inserted', r, rows.length);
    }

    deleteRows(start=0, end=-1) {
        super.deleteRows(start, end);
        this.emit('rows-deleted', start, end);
    }
}