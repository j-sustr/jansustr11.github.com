import { cTypeToType } from '../../../utils/type.js';


export default class Column {
    constructor(key, dtype, name) {

        this._key = key;
        this._dtype = cTypeToType(dtype); // ctype je zatim k nicemu
        this._name = name;

        this._model = null;
        this._view = null;

        this.modelIdx = -1;
        this.viewIdx = -1;
    }

    set model(value) { this._model = value; }
    // console.log(`Setting model ${value} for column ${this._key}`);
         
    set view(value) { this._view = value }
    

    get key()  { return this._key; }
    get dataType() { return this._dtype; }

    get name() { return this._name; }

    get idx() {

    }

    cellData(r) {
        return this._model._rows[r][this.modelIdx];
    }

    cellView(r) {}

    makeCell(value) {}

    setPosition(idx) {

    }

    addClass(className) {

    }

    removeClass(className) {

        
    }


}