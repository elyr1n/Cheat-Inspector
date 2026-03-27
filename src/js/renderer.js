document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const date = document.getElementById("date");
  const scanBtn = document.getElementById("scanBtn");

  const renderFolders = async () => {
    result.innerHTML = "";
    const paths = await window.api.loadFolders();

    paths.forEach((path, index) => {
      const li = document.createElement("li");

      li.className = `
        animate-item opacity-0
        bg-panel border border-border p-4 
        hover:border-gray-500 hover:translate-x-1 
        transition-all duration-200 cursor-pointer
        flex items-center text-sm
      `;

      li.style.animationDelay = `${index * 0.03}s`;

      li.innerHTML = `
        <span class="text-gray-600 mr-4 text-[10px]">${index + 1}</span>
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
