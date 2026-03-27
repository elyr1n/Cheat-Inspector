const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadFolders: () => ipcRenderer.invoke("load-folders"),
  openFolder: (path) => ipcRenderer.invoke("open-folder", path),
});
