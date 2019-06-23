export default function preparseJSON(jsonStr) {
    const commentsRE = /\/\*\S*?\*\//g;
    jsonStr = jsonStr.replace(/\s/g, '');
    jsonStr = jsonStr.replace(commentsRE, ''); // odstraneni comments
    jsonStr = jsonStr.replace(/,}/g, '}');  // odstraneni comma before bracket
    return jsonStr.replace(/\\/g, '\\\\');
}