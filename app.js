const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
}

const fromDollarToYen = function(valueInDolar) {
    let euro = valueInDolar / oneEuroIs["USD"];
    return euro * oneEuroIs["JPY"];
}

const fromYenToPound = function(valueInYen) {
    const euro = valueInYen / oneEuroIs["JPY"];
    return euro * oneEuroIs["GBP"];
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};