import Binding from './Binding.js';

export function bind(object, property, elements) {
    /*  id, attribute, event
        [["", "", ""]
         ["", "", ""]]
    */
    const binding = new Binding({ object: object, property: property });
    //this._bindings.push(binding);

    for (const elemSpec of elements) {
        const [elem, attribute, event, converter] = elemSpec;

        //elem = this._elementGetter(elemId);

        if (typeof elem !== "object") {
            throw new Error(`Element is not an object.`);
        }          

        binding.add(elem, attribute, event, converter);
    }

    return binding;
}