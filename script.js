const mainContainerEl = document.querySelector('.main-container')
const popupContainerEl = document.querySelector('.popup-container')
const btnEl = document.querySelector('.btn')
const closeIconEl = document.querySelector('.close-icon')
const videoEl = document.querySelector('video')

btnEl.addEventListener("click", ()=>{
  popupContainerEl.classList.remove("active")
})

closeIconEl.addEventListener("click", ()=>{
  popupContainerEl.classList.add("active")
  videoEl.pause()
  videoEl.currentTime = 0;
})