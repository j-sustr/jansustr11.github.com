const UIElement = require('../UIElement');


class Button extends UIElement {
    constructor(id, innerHTML, onClick=null) {
        const btnElem = document.createElement('button');
        btnElem.innerHTML = innerHTML;
        super(id, btnElem);

        if (onClick) {
            this.on('click', onClick);
        }
    }
}

module.exports = Button;


//const snippets = () => {
//
//    grid.forEach(elem => {
//        if (elem instanceof Button) {
//            elem.onClick(buttonClickHandler);
//        } else if (elem instanceof UIElement) {
//
//        } 
//    });
//
//}

/*
grid.put([1, 2, 3, 4], new Button("play-btn-1", "play", (target, event) => {

})
    ///  VS   /// 

... new Button("play-btn-1", "play").onClick((target, event) => {

})); */




