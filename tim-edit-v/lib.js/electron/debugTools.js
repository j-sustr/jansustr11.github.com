const electron = require('electron');
const { ipcMain } = electron;

//function showErrorDialog(title, content='') {
//    const dialog = {  type: "error-box", title, content };
//    ipcMain.emit('show-dialog', dialog);
//}
//
//module.exports = { showErrorDialog };