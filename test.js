

test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('One euro should be 1.07 dollars', () => {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(expected);
});

test('One dollar should be 156.5 yen', () => {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(5);
    const expected = 5 * 156.5; 
    expect(yen).toBe(expected);
});

test('One yen should be 0.87 british pound', () => {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(2);
    const expected = 2 * 0.87; 
    expect(pounds).toBe(expected);
});