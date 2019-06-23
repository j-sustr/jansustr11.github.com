

class ActiveElement { // Element protoze nazev tridy by melo byt podst. jmeno
    constructor(id) {

        this._id = id;

        this.callOnEvent = () => {};
        
        this.callOnNewListener = () => {};


        //this.callOnAction = () => {}; 
        //this.callOnUpdate = () => {};

        // defaultOnAction ne -> bude onActionOverride
        
        //this.onAction = () => {};
    }

    get id() {
        return this._id;
    }

    //set callOnAction(value) {
    //    this._onAction = value;
    //}
    //set callOnUpdate(value) {
    //    this._onUpdate = value;
    //}
    set callOnNewListener(value) {
        this._onNewListener = value;
    }

    onAction() {

    }

    onUpdate() {

    }

    listenFor() {

    }

}