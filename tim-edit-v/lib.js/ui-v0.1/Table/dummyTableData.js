function generateDummySpotTimData(numRows) {
    let types = ["int", "string", "float", "int", "int", "int", "int", "float", "string", "int", "int", "string", "string"];
    let rows = generateDummyData(types, numRows);
    rows.forEach((row, i) => {
        row[0] = i;
    });
    return rows;
}


function generateDummySpotData(numRows) {
    let types = ["int", "string", "float", "int", "int", "int", "int", "float", "string"];
    let data = generateDummyData(types, numRows);
    data.forEach((row, i) => {
        row[0] = i;
    });
    return data;
}


function generateDummyData(types, numRows) {
    let i, j, k, row, val;
    const intMax = 1000;
    const floatMax = 10000;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const stringLength = 6;
    const rows = [];
    for (i = 0; i < numRows; i++) {
        row = [];
        for (j = 0; j < types.length; j++) {
            switch (types[j]) {
                case "int":
                    val = Math.floor(Math.random() * intMax);
                    break;
                case "float":
                    val = Math.random() * floatMax;
                    break;
                case "time":
                    val = null;
                    break;
                case "string":
                    val = "";
                    for (k = 0; k < stringLength; k++)
                        val += chars.charAt(Math.floor(Math.random() * chars.length));
                    break
                default:
                    val = null;
                    break;
            }
            row.push(val);
        }
        rows.push(row);
    }
    return rows;
}