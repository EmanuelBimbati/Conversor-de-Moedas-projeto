const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 4.99
    const euroToday = 5.38
    const libraToday = 6.20


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday )
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}


convertButton.addEventListener("click", convertValues)


function changeCurrency (){
    const currencyName = document.querySelector(".currency-name")
    const currencyImg = document.querySelector(".currency-img-converted")
    
    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dol.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/libra 1.png"
    }
    convertValues()
}


currencySelect.addEventListener("change",changeCurrency )