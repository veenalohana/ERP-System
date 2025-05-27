document.addEventListener("DOMContentLoaded", () => {
  
  const featureCards = document.querySelectorAll(".feature-card")

  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function handleScrollAnimation() {
    featureCards.forEach((card) => {
      if (isInViewport(card) && !card.classList.contains("animated")) {
        card.classList.add("animated")
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  featureCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  window.addEventListener("scroll", handleScrollAnimation)

  handleScrollAnimation()

  featureCards.forEach((card) => {
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
      this.style.transform = "translateY(0)"
    })
  })
})
