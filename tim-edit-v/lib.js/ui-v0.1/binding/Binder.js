const Binding = require('./Binding');
const Converter = require('./Converter');


class Binder {
    constructor() {

        console.log('BINDER CONTRUCTOR')
        //this._defaultElementType = ""; // htmlElem

        this._bindings = [];

        this._elementGetter = (id) => document.getElementById(id);

    }

    set elementGetter(value) { 
        this._elementGetter = value;  // id => document.getElementById(id)
    }

    bind(object, property, elements) {
        /*  id, attribute, event
            [["", "", ""]
             ["", "", ""]]
        */

        const binding = new Binding({ object: object, property: property });

        //this._bindings.push(binding);

        for (const elemInfo of elements) {
            const [elem, attribute, event] = elemInfo;


            //elem = this._elementGetter(elemId);

            if (typeof elem !== "object") {
                throw new Error(`Element is not an object.`);
            }          

            binding.addBinding(elem, attribute, event);
        }
    }
}

module.exports = Binder;