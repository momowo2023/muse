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
  
// v2版本

// v2版本
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".imageSlider");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;

  function updateSlider() {
      const slideWidth = slider.children[0].clientWidth;
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      // 更新指示器的樣式
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentIndex);
      });
  }

  // 添加指示器點擊事件
  indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
          currentIndex = index;
          updateSlider();
      });
  });

  // 初始化滑動視窗
  updateSlider();
});
