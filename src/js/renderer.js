document.addEventListener("DOMContentLoaded", async () => {
  const result = document.getElementById("result");
  const scanBtn = document.getElementById("scanBtn");
  const openRecentBtn = document.getElementById("openRecentBtn");
  const directories = document.getElementById("directories");
  const openPrefetchBtn = document.getElementById("openPrefetchBtn");
  const openRecyclesBtn = document.getElementById("openRecyclesBtn");
  const openCrashDumpsBtn = document.getElementById("openCrashDumpsBtn");

  const homeDir = await window.api.getHomeDir();

  const openFolder = async (path) => {
    window.api.openFolder(path);
  };

  const renderFolders = async () => {
    result.innerHTML = "";

    const paths = await window.api.loadFolders();

    if (paths.length === 0) {
      result.innerHTML = `
        <li class="animate-item opacity-0 bg-panel border border-border p-4 hover:border-gray-500 hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center text-sm">
          <span class="text-gray-600 mr-4 text-[12px]">Ничего не найдено</span>
        </li>
      `;
    }

    paths.forEach((path, index) => {
      const li = document.createElement("li");

      li.className = `
        animate-item opacity-0
        bg-panel border border-border p-4
        hover:border-gray-500 hover:translate-x-1
        transition-all duration-200 cursor-pointer
        flex items-center text-sm
      `;

      li.innerHTML = `
        <span class="text-gray-600 mr-4 text-[16px]">[${index + 1}]</span>
        <span class="truncate">${path}</span>
      `;

      li.addEventListener("click", () => {
        window.api.openFolder(path);
      });

      result.appendChild(li);
    });
  };

  openRecentBtn.addEventListener("click", async () => {
    await openFolder(`${homeDir}\\Recent`);
  });

  openCrashDumpsBtn.addEventListener("click", async () => {
    await openFolder(`${homeDir}\\AppData\\Local\\CrashDumps`);
  });

  openPrefetchBtn.addEventListener("click", async () => {
    await openFolder("C:\\Windows\\Prefetch");
  });

  openRecyclesBtn.addEventListener("click", async () => {
    await openFolder("C:\\$Recycle.Bin");
    await openFolder("D:\\$Recycle.Bin");
  });

  scanBtn.addEventListener("click", async () => {
    scanBtn.textContent = "Сканирование...";
    scanBtn.classList.add("opacity-50");

    await renderFolders();

    directories.textContent = "Найденные директории:";

    scanBtn.textContent = "Запустить проверку";
    scanBtn.classList.remove("opacity-50");
  });
});
