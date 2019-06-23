
// zbytecne. Label by nemel byt UI Element

class Label {//extends UIElement {
    constructor(innerHTML, for_) {
        const elem = document.createElement("label");
        this._activeElem = null;

        elem.htmlFor = for_;
        elem.innerHTML = innerHTML;
        
        //if (typeof for_ === "string") {
        //    elem.htmlFor = for_;
        //    elem.innerHTML = text;
        //} else if (for_ instanceof UIElement){
        //    if (for_ instanceof Checkbox) {
        //        elem.appendChild(for_.elem);
        //        elem.appendChild(document.createTextNode(text));
        //    }
        //    this._activeElem = for_;
        //}

        //super("", labelElem);
        this.elem = elem;
        this.style = elem.style;
    }

    //get activeElem() {
    //    return this._activeElem;
    //}
//
    //get containsActive() {
    //    return Boolean(this._activeElem);
    //}
}

module.exports = Label;

