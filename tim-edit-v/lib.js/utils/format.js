export function parseFloatFormat(format) {
    return parseInt(format.slice(1, format.length - 1)); //.7f
}

function formatToTypes(format) { // nepouziva se
    if (typeof(format) === "string") {
        if (format === "d" || format.endsWith("f")) {
            return "number";
        } else if (format === "s") {
            return "string";
        } else if (format === "b") {
            return "boolean";
        }
    } else {
        return "object";
    }
}

function cTypeToFormat(ctype) {
    if(typeof(ctype) !== "string") {
        throw new TypeError(`Argument "ctype" must be of type "string"`);
    }
    const typeParts = ctype.split("-");
    switch (typeParts[0]) {
        case "int": return "d";
        case "string": return "s";
        case "float":
            if (typeParts.length === 2) {
                return `.${typeParts[1]}f`;
            } else {
                return `.7f`;
            }
        default:
            return "-";
    }
}