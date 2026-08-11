const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const open = mainNav.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.textContent = open ? "✕" : "☰";
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      mainNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }
  });
}

// Subsidy calculator
const calcInputs = document.querySelectorAll(".calc-options input[type='checkbox']");
const calcTotal = document.getElementById("calcTotal");
const calcDetail = document.getElementById("calcDetail");

function updateCalculator() {
  let total = 0;
  const selected = [];

  calcInputs.forEach(input => {
    if (input.checked) {
      total += Number(input.value || 0);
      selected.push(input.dataset.name);
    }
  });

  if (calcTotal) {
    calcTotal.textContent = total.toLocaleString("zh-TW") + " 元";
  }

  if (calcDetail) {
    calcDetail.textContent = selected.length
      ? "已勾選：" + selected.join("＋")
      : "尚未勾選任何補助項目";
  }
}

calcInputs.forEach(input => input.addEventListener("change", updateCalculator));
updateCalculator();

// FAQ accordion
document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-question");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const wasOpen = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(other => {
      other.classList.remove("active");
    });

    if (!wasOpen) item.classList.add("active");
  });
});

// Hide remote official image if it cannot be loaded, leaving the local fallback visible.
document.querySelectorAll(".remote-official").forEach(image => {
  image.addEventListener("error", () => {
    image.style.display = "none";
  });
});
