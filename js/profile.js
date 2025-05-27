document.addEventListener("DOMContentLoaded", () => {

  const profileCards = document.querySelectorAll(".profile-card")

  profileCards.forEach((card) => {
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

  const editButtons = document.querySelectorAll(".edit-btn")

  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cardContent = this.closest(".profile-card").querySelector(".card-content")
      const isEditing = cardContent.classList.contains("editing")

      if (isEditing) {
        cardContent.classList.remove("editing")
        this.innerHTML = '<i class="fas fa-edit"></i> Edit'

        const inputs = cardContent.querySelectorAll("input")
        inputs.forEach((input) => {
          const parent = input.parentElement
          const value = input.value
          parent.innerHTML = value
        })
      } else {
        cardContent.classList.add("editing")
        this.innerHTML = '<i class="fas fa-save"></i> Save'

        const infoValues = cardContent.querySelectorAll(".info-value")
        infoValues.forEach((info) => {
          const value = info.textContent
          info.innerHTML = `<input type="text" value="${value}">`
        })
      }
    })
  })
})
