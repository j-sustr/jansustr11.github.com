class Binding {
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
                binding.element[binding.attribute] = val;
                console.log(`setting element "${binding.element.id}" to value ${val}`);
            }
        }

        Object.defineProperty(b.object, b.property, {
            get: this.valueGetter,
            set: this.valueSetter
        });
    
        b.object[b.property] = this.value;
    }
    
    addBinding(element, attribute, event) {
        const binding = {
            element: element,
            attribute: attribute,
        }
        if (event) {
            element.addEventListener(event, (event) => {
                this.valueSetter(element[attribute]);
            });
            binding.event = event;
        }
        this.elementBindings.push(binding);
        element[attribute] = this.value;
        return this;
    }
}

module.exports = Binding;

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