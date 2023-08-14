
let containerProductLapTop = document.querySelector('#containerProductLapTop')
let containerProductMobile = document.querySelector('#containerProductMobile')
let containerProductMonitor = document.querySelector('#containerProductMonitor')
let showProductDiscount = document.querySelector('#containerProductDiscount')
let productLapTop = listProduct.filter(function (product) {
    return product.grouping === "LapTop"
})
productLapTop.forEach(function (laptop) {
    templateProduct(containerProductLapTop, laptop)
})
let productMobile = listProduct.filter(function (product) {
    return product.grouping === 'Mobile'
})
productMobile.forEach(function (mobile) {
    templateProduct(containerProductMobile, mobile)
})
let productMonitor = listProduct.filter(function (product) {
    return product.grouping === 'Monitor'
})
productMonitor.forEach(function (monitor) {
    templateProduct(containerProductMonitor, monitor)
})
let productDiscount = listProduct.filter(function (discount) {
    return discount.discount !== '0%' && discount.existence === 'yes'
})
productDiscount.forEach(function (productDiscount) {
    templateProduct(showProductDiscount, productDiscount)
})
function templateProduct(container, product) {
    container.insertAdjacentHTML('beforeend', '<div class="product" id="'+product.id+'">\n' +
        '    <div class="nameProduct">\n' +
        '        <h3> ' + product.name + ' ' + product.number + '</h3>\n' +
        '    </div>\n' +
        '    <div class="imgProduct">\n' +
        '        <img src="' + product.srcImg + '" alt="">\n' +
        '    </div>\n' +
        '    <div class="infoProduct">\n' +
        '        <div>\n' +
        '            <span>توضیحات :</span>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '        <span>' + product.details + '</span>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="priceProduct">\n' +
        '        <span>قیمت :</span><span>' + product.price + '</span>\n' +
        '        <span>تخفیف :</span><span> ' + product.discount + '</span>\n' +
        '    </div>\n' +
        '    <div class="btn-addCart-favorite">\n' +
        '        <button>افزودن به سبد خرید</button>\n' +
        '        <button>افزودن به علاقه مندی</button>\n' +
        '    </div>\n' +
        '</div>')

}

function informationProduct(productId) {
    location.href = 'productInfo.html?id=' + productId + ''
}

let divProduct = document.querySelectorAll('.product')
divProduct.forEach(function (divPro) {
    divPro.addEventListener('click', function () {
        informationProduct(divPro.id)
    })
})

//                      showMenuBarMO               //
let showMenuBarMO = document.querySelector('#showMenuBarMO')
let menuBarMo = document.querySelector('.menuBarMo')
let closedMenuBarMO = document.querySelector('#closedMenuBarMO')
let menuMO = document.querySelector('.menuMO')
showMenuBarMO.addEventListener('click', function () {
    menuMO.style.left = '1rem'
    menuBarMo.style.visibility = 'visible'

})
closedMenuBarMO.addEventListener('click', function () {
    menuMO.style.left = '500px'
    menuBarMo.style.visibility = 'hidden'
})


