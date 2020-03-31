const calculateSupply = (age, amountPerDay) => {
    let supplyPerYear = age * 365;
    let supplyNeeded = Math.round(supplyPerYear * amountPerDay);
    console.log("You will need " + supplyNeeded + " to last you until the ripe age of " + age);
}

calculateSupply(30, 2);
calculateSupply(58, 8);
calculateSupply(81, 5);
calculateSupply(81.6, 3)
