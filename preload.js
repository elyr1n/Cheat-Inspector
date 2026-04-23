const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  getHomeDir: () => ipcRenderer.invoke("get-home-dir"),
  loadFolders: () => ipcRenderer.invoke("load-folders"),
  openFolder: (path) => ipcRenderer.invoke("open-folder", path),
});
