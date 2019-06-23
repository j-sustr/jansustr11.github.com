

function str2bin(string) {
    return string.split('')
        .map(char => char.charCodeAt(0).toString(2)).join('');
}

module.exports = {
    str2bin: str2bin
}