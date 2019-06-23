import Column from './Column.js';


export default class DataColumn extends Column {
    constructor(key, dtype, name="", format="") {
        super(key, dtype, name);

        this._format = format;

        // make formater
        //this._formater = 

        this.makeCell = this.determineCellMaker(format);
    }

    cellView(r) {
        return this.makeCell(this._model._rows[r][this.modelIdx]);
    }

    //makeCell(value) {
    //    if (this._formater) {
    //        return this._formater(value);
    //    }
    //    return value;
    //}

    format(r, n) { 
        /* co je nejrycheljsi?
         delat foramatovani tady nebo v insertRows? */

    }

    determineCellMaker(format) {
        if (format) {
            if (typeof format === "function") {
                return value => value ? format(value) : value;
            } else if (typeof format === "string") {
                if (format.endsWith("f")) {
                    let fractionDigits = format.match(/\.(\d+)f/);
                    if (!fractionDigits) {
                        throw new Error(`Invalid fration digits format`);
                    }
                    fractionDigits = parseInt(fractionDigits[1]);
                    return value => value ? value.toFixed(fractionDigits) : value;
                    //if (x === "---") {
                    //    return x;
                    //}
                    //console.log('x', x)
                    //console.log('fractionDigits', fractionDigits)
                }
            }
        }
        return value => value;
    }

    toArray() {

    }
}