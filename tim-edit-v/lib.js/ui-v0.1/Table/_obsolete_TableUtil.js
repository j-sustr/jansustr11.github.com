
class TableUtil {
    static parseFloatFormat(format) {
        return parseInt(format.slice(1, format.length - 1));
    }

    static formatsToTypes(formats) { // nepouziva se
        const types = new Array(formats.length);
        let i, format;
        for (i = 0; i < formats.length; i++) {
            format = formats[i];
            if (typeof(format) === "string") {
                if (format === "d" || format.endsWith("f")) {
                    types[i] = "number";
                } else if (format === "s") {
                    types[i] = "string";
                } else if (format === "b") {
                    types[i] = "boolean";
                }
            } else {
                types[i] = "object";
            }
        }
        return types;
    }

    static columnTypesToFormats(types) {
        const formats = new Array(types.length);
        for (let i = 0, len = types.length; i < len; i++) {
            if(typeof(types[i]) !== "string") {
                formats[i] = "-";
                continue;
            }
            const typeParts = types[i].split("-");
            switch (typeParts[0]) {
                case "int": formats[i] = "d"; break;
                case "string": formats[i] = "s"; break;
                case "float":
                    if (typeParts.length === 2) {
                        formats[i] = `.${typeParts[1]}f`;
                    } else {
                        formats[i] = `.7f`;
                    }
                    break;
                default:
                    formats[i] = "-";
                    break;
            }
        }
        return formats;
    }

    static columnTypesToDataTypes(types) {
        const dataTypes = new Array(types.length);
        for (let i = 0, len = types.length; i < len; i++) {
            if(typeof(types[i]) !== "string") {
                dataTypes[i] = "void";
                continue;
            }
            const typeParts = types[i].split("-");
            switch (typeParts[0]) {
                case "int":
                case "float":
                    dataTypes[i] = "number"; 
                    break;
                case "string":
                    dataTypes[i] = "string"; 
                    break;
                case "bool":
                    dataTypes[i] = "boolean"; 
                    break;
                default:
                    dataTypes[i] = "void";
                    break;
            }
        }
        console.log(`column types: ${types} \n converted to data types: ${dataTypes}`);
        return dataTypes;
    }
}


//console.log(TableUtil.parseFloatFormat(".5f"))

module.exports = TableUtil;
