const checkFolders = require("../Cheat-Inspector/src/modules/check_folders");
const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 640,
    resizable: false,
    maximizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "src", "html", "main.html"));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.handle("load-folders", (event) => {
  return checkFolders();
});

ipcMain.handle("open-folder", (event, pathFolder) => {
  const splitPath = pathFolder.split("\\");
  const splitPathWithoutExst = splitPath
    .splice(0, splitPath.length - 1)
    .join("\\");

  if (fs.statSync(pathFolder).isDirectory()) {
    shell.openPath(pathFolder);
  } else if (path.extname(pathFolder) === ".exe") {
    shell.openPath(splitPathWithoutExst);
  } else {
    shell.openPath(pathFolder);
  }
});
