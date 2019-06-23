

export default class Converter {
    constructor(elem) {
        this._elem = elem;
        this._convert;
        this._convertBack;

        
    }
    /* binding.element[binding.attribute] = val;
    [key] {
       this._elem[key] = this._convert(value);
    }
    */


    addEventListener(type, listener) {
        this._elem.addEventListener(type, listener);
    }
}