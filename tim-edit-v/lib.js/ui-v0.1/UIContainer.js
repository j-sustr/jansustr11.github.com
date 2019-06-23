const UIElement = require('./UIElement');
const Label = require('./Label');

class UIContainer extends UIElement {
    constructor(id, elem, giveId) {
        super(id, elem);

        this._giveId = giveId;

        this._uiElems = new Map();

        this.sepChar = '.';
    }

    get items() { // members
        return this._uiElems;
    }

    get(id) {
        return this._uiElems.get(id);
    }

    add(elem) {

        let uiEl = null;
        if (elem instanceof UIElement) {
            uiEl = elem;
        } else if (elem instanceof Label) {
            if (this._giveId) {
                elem.elem.htmlFor = this.id + this.sepChar + elem.htmlFor;
            }
            return;
        } else {
            throw new Error('Invalid elem');
        }

        if (this._giveId) {
            uiEl.elem.id = this.id + this.sepChar + uiEl.id;
        }

        this._uiElems.set(uiEl.id, uiEl);
        
        //if (!Array.isArray(uiElem)) {
        //    uiElem = [uiElem];
        //}
        //uiElem.forEach(uiEl => {
        //    this._uiElems.set(uiEl.id, uiEl);
        //    if (this._giveId) {
        //        uiEl.elem.id = this.id + this.sepChar + uiEl.id;
        //    }
        //});
    }

    remove(uiElem) {

    }

    forEach(callback) {
        this._uiElems.forEach((elem) => {
            callback(elem);
        });

        //for (let i = 0, len = this._uiElems.size; i < len; i++) {
            //callback(this._uiElems[i], i);
        //}
    }

    disableItems() {
        this._uiElems.forEach(elem => elem.disabled = true);
    }

    enableItems() {
        this._uiElems.forEach(elem => elem.disabled = false);
    }
}

module.exports = UIContainer;