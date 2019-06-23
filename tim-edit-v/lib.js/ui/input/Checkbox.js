const UIElement = require('../UIElement');


class Checkbox extends UIElement {
    constructor(id) {
        const elem = document.createElement('input');
        elem.type = 'checkbox';

        super(id, elem);
    }

    get checked() { return this.elem.checked; }
    set checked(value) { this.elem.checked = value; }
}

module.exports = Checkbox;