/* ==================================================
   手機版選單
================================================== */

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("main-nav");


if(menuButton && mainNav){

    menuButton.addEventListener(
        "click",
        function(){

            const isOpen =
                mainNav.classList.toggle(
                    "active"
                );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            if(isOpen){

                menuButton.textContent = "✕";

            }else{

                menuButton.textContent = "☰";

            }

        }
    );

}



/* ==================================================
   點選選單後，自動關閉手機選單
================================================== */

const navLinks =
    document.querySelectorAll(
        "#main-nav a"
    );


navLinks.forEach(
    function(link){

        link.addEventListener(
            "click",
            function(){

                mainNav.classList.remove(
                    "active"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuButton.textContent =
                    "☰";

            }
        );

    }
);



/* ==================================================
   FAQ
================================================== */

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(
    function(item){

        const question =
            item.querySelector(
                ".faq-question"
            );


        question.addEventListener(
            "click",
            function(){

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                /*
                先把全部FAQ關閉
                */

                faqItems.forEach(
                    function(otherItem){

                        otherItem.classList.remove(
                            "active"
                        );

                    }
                );


                /*
                如果目前不是開啟狀態，
                就打開目前這一題
                */

                if(!isActive){

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* ==================================================
   捲動時 Header 陰影
================================================== */

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    function(){

        if(window.scrollY > 20){

            header.style.boxShadow =
                "0 7px 25px rgba(15,55,70,.10)";

        }else{

            header.style.boxShadow =
                "0 4px 20px rgba(20,60,70,.04)";

        }

    }
);



/* ==================================================
   如果瀏覽器尺寸變大，
   自動關閉手機選單
================================================== */

window.addEventListener(
    "resize",
    function(){

        if(window.innerWidth > 760){

            mainNav.classList.remove(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent =
                "☰";

        }

    }
);