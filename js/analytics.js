document.addEventListener("DOMContentLoaded", () => {
  
  const dateButtons = document.querySelectorAll(".date-btn")

  dateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      
      dateButtons.forEach((btn) => btn.classList.remove("active"))

      this.classList.add("active")

    })
  })

  function animateCharts() {
    const chartBars = document.querySelectorAll(".card-chart .chart-bar")

    chartBars.forEach((bar, index) => {
      const height = bar.style.height
      bar.style.height = "0"

      setTimeout(() => {
        bar.style.height = height
      }, 50 * index)
    })

    const chartColumns = document.querySelectorAll(".mock-chart .chart-column")

    chartColumns.forEach((column, index) => {
      const height = column.style.height
      column.style.height = "0"

      setTimeout(() => {
        column.style.height = height
      }, 100 * index)
    })
  }

  setTimeout(animateCharts, 500)

  const summaryCards = document.querySelectorAll(".summary-card")

  summaryCards.forEach((card) => {
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
