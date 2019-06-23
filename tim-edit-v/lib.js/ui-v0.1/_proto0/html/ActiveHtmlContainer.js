

class ActiveHtmlContainer extends ActiveHtmlElement {
    constructor(elem=null) {
        super(elem);
        this._activeChildren = new Map();
    }
}