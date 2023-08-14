const $ = document
let getDataLog = $.querySelector('.getDataLog')
let getDataSing = $.querySelector('.getDataSing')
let buttonLog = $.querySelector('.buttonLog')
let buttonSing = $.querySelector('.buttonSing')
let laterLogIn = $.querySelector('.laterLogIn')
let laterSingUP = $.querySelector('.laterSingUP')
let aLog = $.querySelector('.aLog')
let aSing = $.querySelector('.aSing')
buttonSing.addEventListener('click', function () {
    getDataLog.style.display = 'none'
    getDataSing.style.display = 'flex'
    laterSingUP.style.display = 'none'
    laterLogIn.style.display = 'flex'
})
buttonLog.addEventListener('click', function () {
    getDataLog.style.display = 'flex'
    getDataSing.style.display = 'none'
    laterSingUP.style.display = 'flex'
    laterLogIn.style.display = 'none'
})
aLog.addEventListener('click', function (e) {
    e.preventDefault()
    getDataLog.style.display = 'flex'
    getDataSing.style.display = 'none'
})

aSing.addEventListener('click', function (e) {
    e.preventDefault()
    getDataLog.style.display = 'none'
    getDataSing.style.display = 'flex'
})
