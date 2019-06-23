
const UIContainer = require('../UIContainer');

class Div extends UIContainer {
    constructor(id) {
        const elem = document.createElement('div');
        super(id, elem);
    }

    appendChild(elem) {
        this.add(elem);
        this._elem.appendChild(elem.elem);
        return this;
    }

    appendChildren(...elems) {
        elems.forEach(elem => this.appendChild(elem));
        return this;
    }

    get innerHTML() {
        return this._elem.innerHTML;
    }

    set innerHTML(value) {
        this._elem.innerHTML = value;
    }
}

module.exports = Div;