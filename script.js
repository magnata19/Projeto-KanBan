function showAll() {
  const elements = document.querySelectorAll(".cards p")
  let limit
  const showAll = document.querySelector(".showAll")

  for (let p of elements) {
    limit = 20
    const aboveLimit = p.innerText.length > limit
    const dotsOrEmpty = aboveLimit ? "..." : " "
    p.innerText = p.innerText.substring(0, limit) + dotsOrEmpty
  }
}

function log(message) {
  console.log(message)
}
//app
const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".dropzone")

//nossos cards
cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

function dragstart() {
  // log("CARD: START DRAGGING")
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"))
  //this = card
  this.classList.add("is-dragging")
}

function drag() {
  //log("CARD: IS DRAGGING")
}

function dragend() {
  // log("CARD: STOP DRAGGING")
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"))
  //this = card
  this.classList.remove("is-dragging")
}

//place where we will drop cards
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter)
  dropzone.addEventListener("dragover", dragover)
  dropzone.addEventListener("dragleave", dragleave)
  dropzone.addEventListener("drop", drop)
})

function dragenter() {
  // log("DROPZONE: Enter in zone")
}

function dragover() {
  //this = dropzone
  this.classList.add("over")
  //get dragging card
  const cardBeingDraggred = document.querySelector(".is-dragging")
  this.appendChild(cardBeingDraggred)
}

function dragleave() {
  //this = dropzone
  this.classList.remove("over")
}

function drop() {
  // log("DROPZONE: Drop zone")
  this.classList.remove("over")
}
