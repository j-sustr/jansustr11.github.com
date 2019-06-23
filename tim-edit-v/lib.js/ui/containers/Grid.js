import UIContainer from './UIContainer.js';


//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

export default class Grid extends UIContainer {
    /* style:
        position, zIndex, 
        gridTemplateRows, gridTemplateColumns, gridGap 
    */

    constructor(id, div=null, giveId=false) {
        if (!div) {
            div = document.createElement('div');
        }
        super(id, div, giveId);
        //this._div = div;

        div.style.display = "grid";
    }

    //get div() { return this._html; }

    put(area, elem) {
        if (typeof elem === "string") {
            if (!elem.trim()) return;
            this._elem.insertAdjacentHTML('beforeend', elem);
            elem = this._elem.lastElementChild;
        } else {
            if (elem.elem) {
                this.add(elem);
                elem = elem.elem;
            }
            //console.log(elem)
            this._elem.appendChild(elem);
        }

        if (area) {
            elem.style.gridColumn = `${area[0]} / span ${area[2]}`;
            elem.style.gridRow =    `${area[1]} / span ${area[3]}`;
        }
    }

    putAll(...elems) {
        elems.forEach(([area, elem]) => this.put(area, elem));
    }
}


//set position(value) { this.style.position = value; }
    //set zIndex(value)   { this.style }
    //set gridTemplateRows(value) { this.style.gridTemplateRows = value; }
    //set gridTemplateColumns(value) { this.style.gridTemplateColumns = value;}
    //set gridGap(value) { this.div.style.gridGap = value; }

    //setGridTemplateRows() {  // [100,100,100, "auto"]
    //    
    //}


/*
    top: "0",
    left: "0",
    width: `350px`,
    height: "100vh",
    paddingLeft: "64px",
    zIndex: 10
*/