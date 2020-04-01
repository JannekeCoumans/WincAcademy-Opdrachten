// Opdracht 1

const simpleFunction = (...argumenten) => {
    return argumenten.reduce((acc, item ) => {
        return acc + item;
    })
}

console.log(simpleFunction(3, 7, 8, 1));

// Opdracht 2


const simpleFunction2 = (num1, num2, num3, num4) => {
    return num1 + num2 + num3 + num4;
    };

const numbers = [11, 15, 2, 21];
console.log(simpleFunction2(...numbers));