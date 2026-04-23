const { app, BrowserWindow, ipcMain, shell, dialog } = require("electron");
const checkFolders = require("./src/modules/check_folders");
const path = require("path");
const fs = require("fs");
const os = require("os");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    maximizable: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icon.ico"),
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

ipcMain.handle("load-folders", async (event) => {
  return await checkFolders();
});

ipcMain.handle("open-folder", async (event, pathFolder) => {
  const splitPath = pathFolder.split("\\");
  const splitPathWithoutExst = splitPath
    .splice(0, splitPath.length - 1)
    .join("\\");

  if (!fs.existsSync(pathFolder)) {
    await dialog.showMessageBox(mainWindow, {
      type: "error",
      title: "Ошибка",
      message: `Папка не найдена!\n[${pathFolder}]`,
    });
    return;
  }

  if (fs.statSync(pathFolder).isDirectory()) {
    await shell.openPath(pathFolder);
  } else if (path.extname(pathFolder) === ".exe") {
    await shell.openPath(splitPathWithoutExst);
  } else {
    await shell.openPath(pathFolder);
  }
});

ipcMain.handle("get-home-dir", (event) => {
  return os.homedir();
});
