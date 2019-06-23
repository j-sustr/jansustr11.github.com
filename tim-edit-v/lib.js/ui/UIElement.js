// html events => https://developer.mozilla.org/en-US/docs/Web/Events

export default class UIElement {
    constructor(id, elem) {
        //this._id = id;
        if (id) elem.id = id;
        this._elem = elem;

        //this.addEventListener = this._htmlElem.addEventListener;
        //this.addClass = 
    }

    get id() { return this._elem.id; }
    //set id(value) { this._elem.id = value; }

    get elem()  { return this._elem; }
    get classList() { return this._elem.classList; }
    set disabled(value) { this._elem.disabled = value; }
    get disabled() { return this._elem.disabled; }

    on(eventType, eventHandler) {
        // *register event* 
        this._elem.addEventListener(eventType, (event) => {
            eventHandler(this, event);
        });
        return this;
    }

    onClick(eventHandler) {
        this.on('click', eventHandler);
        return this;
    }

    setStyle(style) {
        Object.assign(this._elem.style, style);
        return this;
    }

    addClass(className) {
        this.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.classList.remove(className);
    }

    setAttr(name, value) {
        this._elem.setAttribute(name, value);
        return this;
    }

    attr(name) {
        return this._elem.getAttribute(name);
    }
}