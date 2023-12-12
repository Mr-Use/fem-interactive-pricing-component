let toggleButton = document.querySelector('.toggle-button')
let pageviews = document.querySelector('input[type="range"]')
let viewsCount = document.querySelector('#views-count')
let pricingValue = document.querySelector('#pricing-value')
let checkbox = document.querySelector('input[type="checkbox"]')
let price = 0;

document.addEventListener('DOMContentLoaded', () => {
    pageviews.value = 0;
    printViews()
})

pageviews.addEventListener('input', () => {
    let views = Number(pageviews.value)

    if(views >= 1000) {
        price = 36;
    } else if(views >= 500) {
        price = 24;
    } else if(views >= 100) {
        price = 16;
    } else if(views >= 50) {
        price = 12;
    } else if(views >= 10) {
        price = 8;
    } else {
        price = 0;
    }

    printViews()
    printPrice(price)
})

toggleButton.addEventListener('click', () => {
    checkbox.checked ? checkbox.checked = false : checkbox.checked = true;
    printPrice()
    
    let plan = 'month'
    if(checkbox.checked) {
        plan = 'year'
    }
    pricingValue.nextElementSibling.textContent = plan;

})

function printViews() {
    if(pageviews.value > 0) {
        if(pageviews.value == 1000) {
            viewsCount.textContent = `1M`
        } else {
            viewsCount.textContent = `${pageviews.value}k`
        }
    } else {
        viewsCount.textContent = 0
    }
}

function printPrice() {
    if(price > 0) {
        if (checkbox.checked) {
            pricingValue.textContent = `$${(price -(price * .25)).toFixed(2)}`
        } else {
            pricingValue.textContent = `$${price.toFixed(2)}`
        }
    } else {
        pricingValue.textContent = `$00.00`
    }
}

// have an original value and dont change it so you can get back to it
// change the representation instead
// make the original value a global variable so it can be accessed freely