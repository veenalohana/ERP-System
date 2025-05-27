document.addEventListener("DOMContentLoaded", () => {
 
  const tabButtons = document.querySelectorAll(".settings-nav li")
  const tabPanels = document.querySelectorAll(".settings-panel")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabPanels.forEach((panel) => panel.classList.remove("active"))

      this.classList.add("active")

      const tabId = this.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  const themeToggle = document.getElementById("theme-toggle")
  const themeLabel = document.getElementById("theme-label")
  const body = document.body

  if (themeToggle && themeLabel) {
    themeToggle.addEventListener("change", function () {
      if (this.checked) {
        body.classList.add("dark-mode")
        themeLabel.textContent = "Dark_Mode"
      } else {
        body.classList.remove("dark-mode")
        themeLabel.textContent = "Light_Mode"
      }
    })
  }

  const colorOptions = document.querySelectorAll(".color-option")

  colorOptions.forEach((option) => {
    option.addEventListener("click", function () {
     
      colorOptions.forEach((opt) => opt.classList.remove("active"))

      this.classList.add("active")

      const selectedColor = this.style.backgroundColor

      document.documentElement.style.setProperty("--primary-color", selectedColor)
    })
  })
})
