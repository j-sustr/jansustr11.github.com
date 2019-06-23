const Binding = require('../binding/Binding');


class BindingMap {
    constructor() {

        //this._defaultElementType = ""; // htmlElem

        this._map = new Map();

        this._bindings = {};

        this._elementGetter = (id) => document.getElementById(id);

        // kazde binding muze mit svuj converter
        // muze mit checking, (checking typu i hodnoty) (pri debugovani)

        //nastavim jedno updatujou se vsevhny nabindovane

        /*
        example:
            bindable
                id: "test.spot-threshold" // object id / object key
                type: "htmlElem" // objectType / class
                key: "value" / value key
            
            object type
                getByIdMethod: document.getElementById('')​ //  getFunction / getObject / getter


            registarce: object ref + key - v controlleru nemam
                        id + key

          updateble
            button.innerHTML
            input.value

           exaple:
              numberinput.value => div.width
        */

        //this.onUpdate = {};
    }

    set elementGetter(value) { 
        this._elementGetter = value;  // id => document.getElementById(id)
    }

    get(id) {
        return this._map.get(id).value;
    }

    set(id, value) {
        console.log(`setting ${id} to ${value}`);
        this._map.get(id).value = value;
    }

    addBinding(id, elements) {
        /*  id, attribute, event
            [["", "", ""]
             ["", "", ""]]
        */
        //const bindingPropertyName = "value";
        const bindingObject = { value: undefined };
        this._map.set(id, bindingObject);

        const binding = new Binding({
            object: bindingObject,
            property: "value",
        });

        this._bindings[id] = binding;

        for (const elemInfo of elements) {
            const [elemId, attribute, event] = elemInfo;

            const elem = this._elementGetter(elemId);

            if (typeof elem !== "object") {
                throw new Error(`Element ${elemId} is not an object.`);
            }

            binding.addBinding(elem, attribute, event);
        }
    }
}

module.exports = BindingMap;

/*

let elementType;
        for (const bindingElemInfo of elements) {
            if (bindingElemInfo.length > 3) {
                elementType = bindingElemInfo[3];
            } else {
                elementType = this._defaultElementType;
            }
        }
*/


//addElementType(id, getter, defaultType=false) {
//
//}