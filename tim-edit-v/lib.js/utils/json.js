import {objSearch} from './object.js';


export function obj2json(obj) {
    objCpy = JSON.parse(JSON.stringify(obj));
    const symbol = "!%$%!";
    leafArrays = [];
    objSearch(objCpy,
        item => (Array.isArray(item) && !item.some(x => typeof x === "object")),
        (o, k) => {
            leafArrays.push(o[k]);
            o[k] = symbol + (leafArrays.length - 1).toString();
        });
    
    let c = "";
    let jsonStr = JSON.stringify(objCpy, null, 1);
    leafArrays.forEach((arr, i) => {
        jsonStr = jsonStr.replace("\"" + symbol + i.toString() + "\"", JSON.stringify(arr));
    });
    return jsonStr;
}


function mapToJson(map) {
    return JSON.stringify([...map]);
}
function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}



/*function formatJSON(str) { // NEFUNKCNI
    
     //   najit [] bez []{}   ->         spocitat, jesti neni moc znaku mezi         ->   odebrat newlines mezi 
    
   const cleanArrays = [];
   const cleanArraysStart = [];
   const cleanArraysNumChars = [];

   let cleanArrayStart = 0;
   let isCleanArray = false;
   let numCleanArrayChars = 0;
   let char = "", i = 0;
   const strLen = str.length;
   for (i = 0; i < strLen; i++) {
        char = str[i];
        if (isCleanArray) {
            numCleanArrayChars++;
            if (char === "]") {
                isCleanArray = false;
                cleanArrays.push(str.substring(cleanArrayStart, numCleanArrayChars + 1).replace(/\s+/g," "));
                cleanArraysStart.push(cleanArrayStart);
                cleanArraysNumChars.push(cleanArraysNumChars);
            } else if ("{}[".includes(char)) {
                isCleanArray = false;
            }
        } else if (char === "[") {
            isCleanArray = true;
            cleanArrayStart = i;
            numCleanArrayChars = 0;
        }
   }

   return cleanArrays;
}*/




// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g;

export function stringify(passedObj, options) {
  var indent, maxLength, replacer;

  options = options || {};
  indent = JSON.stringify(
    [1],
    undefined,
    options.indent === undefined ? 2 : options.indent
  ).slice(2, -3);
  maxLength =
    indent === ""
      ? Infinity
      : options.maxLength === undefined
      ? 80
      : options.maxLength;
  replacer = options.replacer;

  return (function _stringify(obj, currentIndent, reserved) {
    // prettier-ignore
    var end, index, items, key, keyPart, keys, length, nextIndent, prettified, start, string, value;

    if (obj && typeof obj.toJSON === "function") {
      obj = obj.toJSON();
    }

    string = JSON.stringify(obj, replacer);

    if (string === undefined) {
      return string;
    }

    length = maxLength - currentIndent.length - reserved;

    if (string.length <= length) {
      prettified = string.replace(stringOrChar, function(match, stringLiteral) {
        return stringLiteral || match + " ";
      });
      if (prettified.length <= length) {
        return prettified;
      }
    }

    if (replacer != null) {
      obj = JSON.parse(string);
      replacer = undefined;
    }

    if (typeof obj === "object" && obj !== null) {
      nextIndent = currentIndent + indent;
      items = [];
      index = 0;

      if (Array.isArray(obj)) {
        start = "[";
        end = "]";
        length = obj.length;
        for (; index < length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, index === length - 1 ? 0 : 1) ||
              "null"
          );
        }
      } else {
        start = "{";
        end = "}";
        keys = Object.keys(obj);
        length = keys.length;
        for (; index < length; index++) {
          key = keys[index];
          keyPart = JSON.stringify(key) + ": ";
          value = _stringify(
            obj[key],
            nextIndent,
            keyPart.length + (index === length - 1 ? 0 : 1)
          );
          if (value !== undefined) {
            items.push(keyPart + value);
          }
        }
      }

      if (items.length > 0) {
        return [start, indent + items.join(",\n" + nextIndent), end].join(
          "\n" + currentIndent
        );
      }
    }

    return string;
  })(passedObj, "", 0);
};


