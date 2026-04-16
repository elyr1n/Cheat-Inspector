const path = require("path");
const fs = require("fs");
const os = require("os");

const homedir = os.homedir();

const filePaths = [
  path.join(homedir, "Documents", "Rockstar Games", "GTA V"),
  path.join(homedir, "AppData", "Local", "Temp"),
  path.join(homedir, "AppData", "Roaming"),
  path.join(homedir, "AppData", "Local"),
  "C:\\Program Files (x86)",
  "C:\\Program Files",
];

const cheatsPaths = [
  "ret9_fun",
  "amph",
  "Rar$",
  "1337",
  "0x",
  "nightfall",
  "vanish",
  "leet",
  "imgui",
  "immunity",
  "build",
  "hydrogen",
  "Gta_loader",
  "loader",
  "opium",
  "millex",
  "skript",
  "orehware",
];

function checkFolders() {
  const findPaths = [];

  filePaths.forEach((dir) => {
    try {
      const files = fs.readdirSync(dir);

      files.forEach((file) => {
        if (cheatsPaths.some((cheat) => file.includes(cheat))) {
          findPaths.push(path.join(dir, file));
        }
      });
    } catch (err) {}
  });

  return findPaths;
}

module.exports = checkFolders;
