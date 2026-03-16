const button = document.getElementById("mobile-menu-button")
button.addEventListener("click", () => {
  const menu_page = document.getElementById("mobile-menu-screen")
  const isClassShowAppear = menu_page.classList.contains("show")
  if (isClassShowAppear) {
    menu_page.classList.remove("show")
  } else {
    menu_page.classList.add("show")
  }
})