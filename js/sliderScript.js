const $ = document
//                slider            //
const imgTagSlider = $.querySelector('.imgSlider')
const btnRight = $.querySelector('.icofont-curved-double-right')
const btnLeft = $.querySelector('.icofont-curved-double-left')
let imgSrcArray = ['image/kala1.jpg', 'image/kala2.jpg', 'image/kala3.jpg']
let count = 0
let circle = $.querySelectorAll('.circle')
for (let i = 0; circle.length > i; i++) {
    circle[i].addEventListener('click', function () {
        removeClassActive()
        imgTagSlider.src = imgSrcArray[i]
        circle[i].classList.add('active')
    })
}

function removeClassActive() {
    circle.forEach(function (cir) {
        cir.classList.remove('active')
    })
}

circle[0].classList.add('active')

function preImgSlider() {
    circle[count].classList.remove('active')
    count++
    imgTagSlider.src = imgSrcArray[count]
    if (count > imgSrcArray.length - 1) {
        count = 0
        imgTagSlider.src = imgSrcArray[count]
        circle[count].classList.add('active')
    }
    circle[count].classList.add('active')
}

function nextImgSlider() {
    circle[count].classList.remove('active')
    if (count === 0) {
        count = imgSrcArray.length
        imgTagSlider.src = imgSrcArray[count]
    }
    count--
    circle[count].classList.add('active')
    console.log(count)
    imgTagSlider.src = imgSrcArray[count]
}

setInterval(preImgSlider, 5000)
btnRight.addEventListener('click', nextImgSlider)
btnLeft.addEventListener('click', preImgSlider)

