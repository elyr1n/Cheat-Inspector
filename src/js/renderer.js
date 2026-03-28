document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const scanBtn = document.getElementById("scanBtn");

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

      li.style.animationDelay = `${index * 0.05}s`;

      li.innerHTML = `
        <span class="text-gray-600 mr-4 text-[16px]">${index + 1}</span>
        <span class="truncate">${path}</span>
      `;

      li.addEventListener("click", () => {
        window.api.openFolder(path);
      });

      result.appendChild(li);
    });
  };

  scanBtn.addEventListener("click", async () => {
    scanBtn.textContent = "Сканирование...";
    scanBtn.classList.add("opacity-50");

    await renderFolders();

    scanBtn.textContent = "Запустить";
    scanBtn.classList.remove("opacity-50");
  });
});
