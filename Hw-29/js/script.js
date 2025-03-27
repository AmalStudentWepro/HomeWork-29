document.addEventListener("DOMContentLoaded", function () {
    //1
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector("[data-close]");
    const modalTriggers = document.querySelectorAll("[data-modal]");

    modalTriggers.forEach(function (btn) {
        btn.addEventListener("click", function () {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });

    modalClose.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = "";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    //2
    const menuLinks = document.querySelectorAll(".header__link");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(".offer");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const tabs = document.querySelectorAll(".tabheader__item");
    const tabContents = document.querySelectorAll(".tabcontent");

    function hideTabs() {
        tabContents.forEach(function (content) {
            content.style.display = "none";
        });
        tabs.forEach(function (tab) {
            tab.classList.remove("tabheader__item_active");
        });
    }

    function showTab(index) {
        tabContents[index].style.display = "block";
        tabs[index].classList.add("tabheader__item_active");
    }

    hideTabs();
    showTab(0);

    tabs.forEach(function (tab, index) {
        tab.addEventListener("click", function () {
            hideTabs();
            showTab(index);
        });
    });
});
