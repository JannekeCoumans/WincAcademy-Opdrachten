/*

Broodje Kaas

take a slice of bread
put cheese on the slice
put a slice of bread on top

*/

const broodjeKaas = function (){
    console.log("take a slice of bread");
    console.log("put cheese on the slice");
    console.log("put a slice of bread on top");
}

broodjeKaas();

// Hier declare ik de function
const makeSandwich = function (topping){
    console.log("There you go, a sandwich with", topping);
}

// hier call ik de function
makeSandwich('cheese');
makeSandwich('ham');

const calculateDiscountedPrice = function(totalAmount, discount){
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(10, 2));

const calculateDiscountedPriceClone = function(totalAmount, discount){
    if (totalAmount > 25){
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
}

console.log(calculateDiscountedPriceClone(26, 2));