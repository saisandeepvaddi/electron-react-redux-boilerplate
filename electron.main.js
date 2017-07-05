const electron = require("electron");
require("./main/window");
require("./main/app");
// Only in Development mode
require("electron-reload")(__dirname);
