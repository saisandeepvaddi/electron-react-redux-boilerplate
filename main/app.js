const electron = require("electron");
const { app, Menu } = electron;
const path = require("path");
const window = require("./window");
const { menuTemplate } = require("./menu");

let win;

app.on("ready", () => {
  win = window.createWindow();

  const contents = win.webContents;

  contents.on("dom-ready", () => {
    win.show();
  });

  // Attaches Menu to the Window
  contents.on("did-finish-load", () => {
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
  });
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// For MacOS applications
app.on("activate", function() {
  if (win === null) {
    window.createWindow();
  }
});

module.exports = app;
