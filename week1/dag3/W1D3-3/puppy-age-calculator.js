const calculateDogAge = (agePuppy) => {
    let dogToHumanAge = agePuppy * 7;
    console.log("Your doggie is", dogToHumanAge, "years old in dog years!")
}

const calculateHumanAge = (ageHuman) => {
    let humanToDogAge = Math.round(ageHuman / 7);
    console.log("You are", humanToDogAge, "dogyears old!");
}

calculateDogAge(2);
calculateDogAge(6);
calculateDogAge(10);

calculateHumanAge(30);
calculateHumanAge(15);
calculateHumanAge(60);