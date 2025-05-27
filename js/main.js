document.addEventListener("DOMContentLoaded", () => {
  
  const sidebarToggle = document.getElementById("sidebar-toggle")
  const sidebar = document.querySelector(".sidebar")

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })
  }

 
  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 768 &&
      !event.target.closest(".sidebar") &&
      !event.target.closest("#sidebar-toggle") &&
      sidebar &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active")
    }
  })

  
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && sidebar && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active")
    }
  })

  const cards = document.querySelectorAll(".card")

  cards.forEach((card) => {
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
})
