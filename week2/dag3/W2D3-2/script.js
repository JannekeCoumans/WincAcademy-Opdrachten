// Opdracht A

const arrayWithWords = ["nice","awesome","tof"]
const addTheWordCool = function(array){
    array.push('cool');
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// Opdracht B

const amountOfElementsInArray = function(array){
    return array.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// Opdracht C

const selectBelgiumFromBenelux = function(array) {
    return array[0];
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

// Opdracht D

const lastElementInArray = function(array) {
    return array[array.length -1];
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// Opdracht E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    const notImpeachedPresidents = array.slice(1, 4);
    return notImpeachedPresidents;
}

const impeachTrumpSplice = function(array) {
    array.splice(0, 1);
    return array;
}

console.log(impeachTrumpSlice(presidents)); 
console.log(impeachTrumpSplice(presidents));

// Opdracht F

const stringsTogether = function(array) {
    return array.join(' ');
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

// Opdracht G

const combineArrays = function(array1, array2){
    return array1.concat(array2);
}

console.log(combineArrays([1,2,3], [4,5,6]));