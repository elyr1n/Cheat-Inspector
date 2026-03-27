document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");

  const folders = window.api.loadFolders();

  folders.then((paths) => {
    paths.forEach((path) => {
      const li = document.createElement("li");

      li.textContent = path;
      li.style.cursor = "pointer";

      li.addEventListener("click", () => {
        window.api.openFolder(path);
      });

      result.appendChild(li);
    });
  });
});
