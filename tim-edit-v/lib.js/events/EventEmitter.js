
export default class EventEmitter {
    /*
        listeners jsou callbacky
    */

    constructor() {
        this._events = {};
    }
    on(evt, listener) {
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }
    emit(evt, ...args) {
        (this._events[evt] || []).slice().forEach(lsn => lsn(...args));
    }

    get subscribed() {
        return Object.keys(this._events);
        //Object.assign({}, this._events); // kopie, aby se nedalo modifikovat
    }
}