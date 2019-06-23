export default class Binding {
    constructor(b) {
        this.elementBindings = [];
        this.value = b.object[b.property]

        this.valueGetter = () => {
            return this.value;
        }

        this.valueSetter = (val) => {
            this.value = val;
            for (let i = 0, len = this.elementBindings.length; i < len; i++) {
                const binding = this.elementBindings[i];
                const convertedVal = binding.converter.convert(val);
                binding.element[binding.attribute] = convertedVal;
                //console.log(`setting element "${binding.element.id}" to value ${convertedVal}`);
            }
        }

        Object.defineProperty(b.object, b.property, {
            get: this.valueGetter,
            set: this.valueSetter
        });
    
        b.object[b.property] = this.value;
    }
    
    add(element, attribute, eventName, converter) {
        if (!converter) {
            converter = { convert: val => val, convertBack: val => val, }
        }
        const binding = {
            element: element,
            attribute: attribute,
            converter: converter,
        }
        if (eventName) {
            element.addEventListener(eventName, (event) => {
                const convertedVal = binding.converter.convertBack(element[attribute]);
                this.valueSetter(convertedVal);
            });
            binding.event = eventName;
        }
        this.elementBindings.push(binding);
        element[attribute] = binding.converter.convert(this.value);
        return this;
    }

    delete(element, attribute) {
        const bindings = this.elementBindings;
        for (let i = 0, I = bindings.length; i < I; i++) {
            if (bindings[i].element === element && bindings[i].attribute === attribute) {
                bindings.splice(i, 1);
            }
        }
    }
}

/*function Binding(b) {
    _this = this
    this.elementBindings = []
    this.value = b.object[b.property]
    this.valueGetter = function () {
        return _this.value;
    }
    this.valueSetter = function (val) {
        _this.value = val
        for (var i = 0; i < _this.elementBindings.length; i++) {
            var binding = _this.elementBindings[i]
            binding.element[binding.attribute] = val
            console.log('setting element', binding.element, 'to value', val);
        }
    }
    this.addBinding = function (element, attribute, event) {
        var binding = {
            element: element,
            attribute: attribute
        }
        if (event) {
            element.addEventListener(event, function (event) {
                _this.valueSetter(element[attribute]);
            })
            binding.event = event
        }
        this.elementBindings.push(binding)
        element[attribute] = _this.value
        return _this
    }

    Object.defineProperty(b.object, b.property, {
        get: this.valueGetter,
        set: this.valueSetter
    });

    b.object[b.property] = this.value;
}*/



//var obj = { a: 123 }
//var myInputElement1 = document.getElementById("myText1")
//var myInputElement2 = document.getElementById("myText2")
//var myDOMElement = document.getElementById("myDomElement")
//
//new Binding({
//    object: obj,
//    property: "a"
//})
//    .addBinding(myInputElement1, "value", "keyup")
//    .addBinding(myInputElement2, "value", "keyup")
//    .addBinding(myDOMElement, "innerHTML")
//
//obj.a = 456;