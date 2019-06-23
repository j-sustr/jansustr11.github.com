const Column = require('./Column');
const { parseFloatFormat } = require('../../../utils/format');


class DataColumn extends Column {
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
            if (format.endsWith("f")) {
                const fractionDigits = parseFloatFormat(format);
                return value => value ? value.toFixed(fractionDigits) : value;
                    //if (x === "---") {
                    //    return x;
                    //}
                    //console.log('x', x)
                    //console.log('fractionDigits', fractionDigits)
            }
        }
        return value => value;
    }

    toArray() {

    }
}


module.exports = DataColumn;