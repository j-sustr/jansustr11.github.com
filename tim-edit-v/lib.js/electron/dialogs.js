const { dialog } = require('electron');

function showDialog(p, window=null, callback) {
    switch (p.type) {
        case "open-dialog":
            dialog.showOpenDialog(window, p.options, (filePaths) => {
                callback('dialog-result', {id: p.id, filePaths})
            });
            break;
        case "save-dialog":
            dialog.showSaveDialog(window, options, (filename) => {
                console.log(filename);
            });
          break;
        case "error-box":
            dialog.showErrorBox(p.title, p.content);
            break;
        case "message-box":
            dialog.showMessageBox(window, p.options, (response, checkboxChecked) => {
                callback('dialog-result', {id: p.id, response, checkboxChecked});
            });
            break;
        default:
            throw new Error(`Invalid dialog type ${p.type}`);
            break;
    }
}


module.exports = { showDialog };