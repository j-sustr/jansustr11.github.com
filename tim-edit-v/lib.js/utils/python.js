
function linspace(start, stop, num=50) {
    //console.log(start, stop, num)
    const arr = new Array(num);
    const currValue = start;
    const step = (stop - start) / (num - 1);
    for (let i = 0; i < num; i++) {
        arr[i] = currValue + (step * i);
    }
    return arr;
}


const pyFunctions = {
    "linspace": {
        argTypes: ["number", "number", "number"],
        func: linspace
    },
}

function getFuncName(expr) {
    return expr.substring(expr.lastIndexOf(".") + 1, expr.lastIndexOf("("));
}

function getFuncArgs(expr, argTypes) {
    const argsStr = expr.substring(expr.lastIndexOf("(") + 1, expr.lastIndexOf(")"));
    const argStrings = argsStr.split(",");
    const args = new Array(argStrings.length);
    for (let i = 0, len = argTypes.length; i < len; i++) {
        switch (argTypes[i]) {
            case "string":
                args[i] = argStrings[i];
                break
            case "number":
                if (argStrings[i].includes(".")) {
                    args[i] = Number.parseFloat(argStrings[i]);
                } else {
                    args[i] = Number.parseInt(argStrings[i]);
                }
                break;
            default:
                break;
        }
    }
    return args;
}

// is python expression
export function isPy(expr) {
    if (typeof expr !== "string") return false;
    expr = expr.replace(/ /g, '')
    return expr.substring(0, 2) == "@.";
}

export function evalPy(expr) {
    const funcName = getFuncName(expr);
    const funcObj = pyFunctions[funcName];
    const funcArgs = getFuncArgs(expr, funcObj.argTypes);

    //console.log(funcArgs)
    return funcObj.func(...funcArgs);
}

export function evalIfPy(expr) {
    return isPy(expr) ? evalPy(expr) : expr;
}

function pythonSlice() {
    // array[1:-1:2]
    array[[1,-1,2]]


    //imp/ort slice from 'slice.js';
    // for array
    const arr = slice([1, '2', 3, '4', 5, '6', 7, '8', 9, '0']);

    arr['2:5'];         // [3, '4', 5]
    arr[':-2'];         // [1, '2', 3, '4', 5, '6', 7, '8']
    arr['-2:'];         // [9, '0']
    arr['1:5:2'];       // ['2', '4']
    arr['5:1:-2'];      // ['6', '4']

    // for string
    const str = slice('1234567890');
    str['2:5'];         // '345'
    str[':-2'];         // '12345678'
    str['-2:'];         // '90'
    str['1:5:2'];       // '24'
    str['5:1:-2'];      // '64'
}


//str = '@.linspace(0, 100, 21)'

//out = isPy(str) ? evalPy(str) : str;

//console.log(evalIfPy(str))