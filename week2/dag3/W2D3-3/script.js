console.log("\nOpdracht A")

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}];

const findSpiderMan = function(findSuperhero) {
   return findSuperhero.find(function (superhero) {
       return superhero.name === "Spiderman"
   });
};

console.log(findSpiderMan(superheroes))



console.log("\nOpdracht B")

const doubleArrayValues = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 2);
    });
    return newArray;
  };

console.log(doubleArrayValues([1, 2, 3]));



console.log("\nOpdracht C")

const containsNumberBiggerThan10 = function(array) {
    return array.some(number => {
     return number > 10;
    });
};

console.log("My array contains a number > 10: " + containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));



console.log("\nOpdracht D")

const isItalyInTheGreat7 = function(array) {
    return array.some(string => {
        return string === 'Italy';
    });
}

// function isItalyInTheGreat7(array) {
//     return array.includes("Italy");
//   }

console.log('Italy is in the great 7: ' + isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));



console.log("\nOpdracht E")

//forEach method
const tenfold = function(array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10);
    });
    return newArray;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

//map method
const tenfold2 = function(array) {
    return array.map(x => x * 10);
  };
  
console.log(tenfold2([1, 4, 3, 6, 9, 7, 11]));



console.log("\nOpdracht F")

const isBelow100 = function(array) {
    return array.every(number => {
        return number < 100;
    })
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));



console.log("\nOpdracht G")

const bigSum = function(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))