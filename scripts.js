const convertButton = document.querySelector(".convert-button")
const currencyConverted = document.querySelector(".currency-converted")
const currencyToConvert = document.querySelector(".currency-to-convert")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if(currencyConverted.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday )
    }

    if(currencyConverted.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencyConverted.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencyConverted.value == "iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

    if(currencyConverted.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("bit", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
}


convertButton.addEventListener("click", convertValues)


function changeCurrencyConverted (){
    const currencyName = document.querySelector(".currency-name")
    const currencyImg = document.querySelector(".currency-img-converted")

    
    if (currencyConverted.value == "dolar"){
        // Se o select estiver selecionado o valor de "dolar", entre aqui
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dol.png"
    }

    if (currencyConverted.value == "euro"){
        // Se o select estiver selecionado o valor de "euro", entre aqui
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    
    if (currencyConverted.value == "libra"){
        // Se o select estiver selecionado o valor de "libra", entre aqui
        currencyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/libra 1.png"
    }

    if(currencyConverted.value == "iene"){
        // Se o select estiver selecionado o valor de "iene", entre aqui
        currencyName.innerHTML = "Iene japonês"
        currencyImg.src = "./assets/japao.png"
    }
    
    if(currencyConverted.value == "bitcoin"){
        // Se o select estiver selecionado o valor de "bitcoin", entre aqui
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}


currencyConverted.addEventListener("change",changeCurrencyConverted)


function changeCurrencyToConvert (){
    const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
    const currencyImgToconvert = document.querySelector(".currency-img")

    if(currencyToConvert.value == "real"){
        currencyNameToConvert.innerHTML = "Real"
        currencyImgToconvert.src = "./assets/real.png"
        
    }

    if(currencyToConvert.value == "dolar"){
        currencyNameToConvert.innerHTML = "dolar"
        currencyImgToconvert.src = "./assets/dol.png"
    }

    if(currencyToConvert.value == "libra"){
        currencyNameToConvert.innerHTML = "Libra Esterlina"
        currencyImgToconvert.src = "./assets/libra 1.png"
    }

    if(currencyToConvert.value == "euro"){
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToconvert.src = "./assets/euro.png"
    }

    if(currencyToConvert.value == "bitcoin"){
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImgToconvert.src = "./assets/bitcoin 1.png"
    }

    if(currencyToConvert.value == "iene"){
        currencyNameToConvert.innerHTML = "Iene japonês"
        currencyImgToconvert.src = "./assets/japao.png"
    }


    convertValues()
}

currencyToConvert.addEventListener("change",changeCurrencyToConvert)


        let dolarToday = 4.99
        let euroToday = 5.38
        let libraToday = 6.20
        let bitcoinToday = 137308.38
        let ieneToday = 0.0364