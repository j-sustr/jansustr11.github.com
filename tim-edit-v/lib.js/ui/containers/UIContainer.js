import UIElement from '../UIElement.js';

export default class UIContainer extends UIElement {
    constructor(id, elem) {
        super(id, elem);

        this._uiElems = new Map();
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
        } else {
            throw new Error('Invalid elem');
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