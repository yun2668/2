// ==========================================
// 手機版選單
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", () => {

    const open =
      mainNav.classList.toggle("active");

    menuBtn.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

    menuBtn.textContent =
      open ? "✕" : "☰";

  });


  // 點選選單項目後自動關閉
  mainNav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

        menuBtn.textContent = "☰";

      });

    });


  // 從手機版切回電腦版時
  // 自動將選單恢復
  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

      mainNav.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.textContent = "☰";

    }

  });

}



// ==========================================
// 補助金額快速試算
// ==========================================

const calcInputs =
  document.querySelectorAll(
    ".calc-options input[type='checkbox']"
  );

const calcTotal =
  document.getElementById("calcTotal");

const calcDetail =
  document.getElementById("calcDetail");


function updateCalculator() {

  let total = 0;

  const selected = [];


  calcInputs.forEach(input => {

    if (input.checked) {

      total +=
        Number(input.value || 0);

      selected.push(
        input.dataset.name
      );

    }

  });


  // 顯示總金額
  if (calcTotal) {

    calcTotal.textContent =
      total.toLocaleString("zh-TW")
      + " 元";

  }


  // 顯示目前勾選項目
  if (calcDetail) {

    if (selected.length > 0) {

      calcDetail.textContent =
        "已勾選："
        + selected.join("＋");

    }

    else {

      calcDetail.textContent =
        "尚未勾選任何補助項目";

    }

  }

}


// 每次點選補助項目
// 都重新計算
calcInputs.forEach(input => {

  input.addEventListener(
    "change",
    updateCalculator
  );

});


// 網頁載入時先計算一次
updateCalculator();



// ==========================================
// 常見問題 FAQ 展開 / 收合
// ==========================================

document
  .querySelectorAll(".faq-item")
  .forEach(item => {

    const button =
      item.querySelector(
        ".faq-question"
      );


    if (!button) return;


    button.addEventListener(
      "click",
      () => {

        const isOpen =
          item.classList.contains(
            "active"
          );


        // 先把其他問題全部關閉
        document
          .querySelectorAll(
            ".faq-item"
          )
          .forEach(otherItem => {

            otherItem.classList.remove(
              "active"
            );

          });


        // 原本沒開啟
        // 就開啟目前問題
        if (!isOpen) {

          item.classList.add(
            "active"
          );

        }

      }
    );

  });



// ==========================================
// 官方照片載入失敗時
// 自動顯示備用圖示
// ==========================================

document
  .querySelectorAll(
    ".remote-official"
  )
  .forEach(image => {

    image.addEventListener(
      "error",
      () => {

        image.style.display =
          "none";

      }
    );

  });
