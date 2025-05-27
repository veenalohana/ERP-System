document.addEventListener("DOMContentLoaded", () => {
  
  const viewButtons = document.querySelectorAll(".view-btn")
  const productsGrid = document.getElementById("products-view")
  const productsTable = document.getElementById("products-table")

  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      
      viewButtons.forEach((btn) => btn.classList.remove("active"))

      this.classList.add("active")

      const viewType = this.getAttribute("data-view")

      if (viewType === "card") {
        productsGrid.style.display = "grid"
        productsTable.style.display = "none"
      } else if (viewType === "table") {
        productsGrid.style.display = "none"
        productsTable.style.display = "block"
      }
    })
  })

  const productCards = document.querySelectorAll(".product-card")

  productCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = ""
    })
  })

  const filterSelect = document.querySelector(".filter-options select")

  if (filterSelect) {
    filterSelect.addEventListener("change", function () {
      const filterValue = this.value
      const productCards = document.querySelectorAll(".product-card")

      productCards.forEach((card) => {
        const status = card.querySelector(".product-status").classList.contains("in-stock")
          ? "in-stock"
          : "out-of-stock"

        if (filterValue === "all" || filterValue === status) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  }
})
