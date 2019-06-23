const fs = require('fs');
const { app, dialog } = require('electron');

let configPath = './config.json';
let config;

function setConfigPath(path) {
    configPath = path;
}

function showErrorAndExit(title, content) {
    dialog.showErrorBox(title, content);
    app.exit()
}

function loadConfigSync() {
    try {
        return JSON.parse(fs.readFileSync(configPath));
    } catch (error) {
        if (error.name === 'SyntaxError') {
            showErrorAndExit('Config file syntax error:', error.message);
        } else if (error.code && error.code === 'ENOENT') {
            showErrorAndExit('Config file not found:', error.message);
        } else {
            showErrorAndExit('Config file error:', error.message);
        }
    }
}

function getConfig() { // thunk
    if (config) return config;
    else {
        return loadConfigSync();
    }
}

function loadSettingsSync() {
    let settings;
    const config = getConfig();

    if (!config['settings-path']) {
         showErrorAndExit('Config error:', `Config file does not contain "settings-path"`);
    }

    try {
        settings = JSON.parse(fs.readFileSync(config['settings-path']));
    } catch(error) {
        if (error.name === 'SyntaxError') {
            showErrorAndExit('Settings file syntax error:', error.message);
        } else if (error.code && error.code === 'ENOENT') {
            showErrorAndExit('Settings file not found:', error.message);
        } else {
            showErrorAndExit('Settings file error:', error.message);
        }
    }
    return settings;
}


module.exports = {
    setConfigPath,
    loadSettingsSync,
}