

class ActiveHtmlElement extends Active {
    constructor(elem = null) {
        this._elem = elem;
        this._events = new Map();

        this._notifier = () => {};
        this._listener = () => {};
    }

    set notifier(value) { this._notifier = value }
    set listener(value) { this._listener = value }

    notify(eventType) {
        this._elem.addEventListener(eventType, (event) => {
            this._notifier()
        });
    }


    listen( ) {
        
    }

    setStyle() {

    }
}