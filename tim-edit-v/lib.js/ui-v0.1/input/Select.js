const UIElement = require('../UIElement');

class Select extends UIElement {
    constructor(id) {
        const elem = document.createElement('select');
        
        super(id, elem);
    }

    appendOption(innerHTML, value) {
        const opt = document.createElement('option');
        opt.innerHTML = innerHTML;
        if (value) opt.value = value;
        this.elem.appendChild(opt);
    }

    removeAllOptions() {
        this.elem.innerHTML = "";
    }

    get selected() {
        const selectedIndex = this.elem.selectedIndex;
        return this.elem.options[selectedIndex];
    }
}

module.exports = Select;