
document.addEventListener("DOMContentLoaded", () => {
  
  const cards = document.querySelectorAll(".summary-cards .card")

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, 200 * index)
  })

  const activityItems = document.querySelectorAll(".activity-item")

  activityItems.forEach((item, index) => {
    setTimeout(
      () => {
        item.style.opacity = "1"
        item.style.transform = "translateX(0)"
      },
      100 * index + 500,
    )
  })
})
