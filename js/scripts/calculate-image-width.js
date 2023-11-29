let homeSpotlightSection = document.getElementById('recipe-spotlight')
let imgList = homeSpotlightSection.querySelectorAll('img')
imgList.forEach((element) => {
    let width = element.offsetWidth
    element.style.height = `${width}px`
})