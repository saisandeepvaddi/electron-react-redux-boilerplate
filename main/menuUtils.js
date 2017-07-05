// Write your click functions here for better separation from menu template file 'menu.js'

const { ipc, BrowserWindow } = require("electron");

// To send some ipc message to renderer process from main process when some Menu Item clicked
const sendToWebContents = action => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  const contents = mainWindow.webContents;
  contents.send(action);
};

exports.sample = () => {
  sendToWebContents("lock");
};
