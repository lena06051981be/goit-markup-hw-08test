(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-button-open"),
    closeMenuBtn: document.querySelector(".menu-button-close"),
    menu: document.querySelector(".mob-modal"),
    // окно не скролится
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    // окно не скролится
    refs.body.classList.toggle("no-scroll");
  }
})();
