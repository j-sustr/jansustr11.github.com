

export function cTypeToType(ctype) {
    if(typeof(ctype) !== "string") {
        throw new TypeError(`Argument "ctype" must be of type "string"`);
    }
    const typeParts = ctype.split("-");
    switch (typeParts[0]) {
        case "int":
        case "float":  return "number";
        case "string": return "string"; 
        case "bool":   return "boolean";
        default:       return undefined;
    }
    //console.log(`column types: ${types} \n converted to data types: ${dataTypes}`);
}