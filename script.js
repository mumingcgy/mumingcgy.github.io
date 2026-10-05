const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const year = document.querySelector("#year");

document.documentElement.classList.add("js");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && siteNav) {
  menuButton.hidden = false;

  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "关闭导航菜单" : "打开导航菜单");
    siteNav.classList.toggle("is-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (menuButton.getAttribute("aria-expanded") === "true" && !siteNav.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });
}
