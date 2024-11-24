function loadHTML(id, file) {
    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        return response.text();
      })
      .then((html) => {
        document.getElementById(id).innerHTML = html;
      })
      .catch((error) => {
        console.error(error);
        document.getElementById(id).innerHTML = `<p>Error loading ${file}</p>`;
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header",  "/pages/header.html");
    loadHTML("footer",  "/pages/footer.html");
  });
  