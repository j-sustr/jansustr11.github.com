const UIElement = require('../UIElement');


class NumberInput extends UIElement {
    constructor(id, value, min, max, step=1) {
        const elem = document.createElement('input');
        elem.type = 'number';
        elem.value = value;
        elem.min = min;
        elem.max = max;
        elem.step = step;
        super(id, elem);
    }

    get value() { return this.elem.value; }
}

module.exports = NumberInput;