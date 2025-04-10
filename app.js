const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * 1.07;
}

const fromDollarToYen = function(valueInDolar) {
    console.log(valueInDolar * 156.5);
    
    return valueInDolar * 156.5
}

const fromYenToPound = function(valueInYen) {
    console.log(valueInYen * 0.87);
    return valueInYen * 0.87;
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};