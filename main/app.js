const electron = require("electron");
const { app, Menu } = electron;
const path = require("path");
const window = require("./window");
const { menuTemplate } = require("./menu");

let win;

app.on("ready", () => {
  win = window.createWindow();
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    window.createWindow();
  }
});

module.exports = app;
