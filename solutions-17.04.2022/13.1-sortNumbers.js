const numbers = [1, -5, 666, 2, 400, 11];

const ascNumbers = numbers.slice().sort((a, b) => a - b);

const descNumbers = numbers.slice().sort((a, b) => b - a);

console.log(ascNumbers); //[ -5, 1, 2, 11, 400, 666 ]

console.log(descNumbers); //[ 666, 400, 11, 2, 1, -5 ]
