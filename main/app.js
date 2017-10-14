const electron = require("electron");
const { app, Menu } = electron;
const path = require("path");
const window = require("./window");
const { menuTemplate } = require("./menu");

let win;

const installDevToolsExtensions = function() {
  console.log("Installing Extensions");

  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS
  } = require("electron-devtools-installer");

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));

  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));
};

app.on("ready", () => {
  // Only in Dev Mode. Remove in production
  installDevToolsExtensions();

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
