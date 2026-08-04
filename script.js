const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
}

document.querySelectorAll("#main-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (!mainNav || !menuButton) return;
    mainNav.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");
  if (!question) return;

  question.addEventListener("click", function () {
    const isActive = item.classList.contains("active");

    faqItems.forEach(function (otherItem) {
      otherItem.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (!header) return;

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 7px 25px rgba(15,55,70,.10)";
  } else {
    header.style.boxShadow = "0 4px 20px rgba(20,60,70,.04)";
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 760 && mainNav && menuButton) {
    mainNav.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }
});
