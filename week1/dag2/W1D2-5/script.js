const age = 25;

if (age >= 18){
    console.log("De persoon mag naar binnen!");
} else {
    console.log("U wordt vriendelijk verzocht om buiten te blijven");
}

const isFemale = true;

if (isFemale){
    console.log("Deze persoon is een vrouw");
}else {
    console.log("Deze persoon is geen vrouw");
}

const driverStatus = "bob"

if (driverStatus == "bob"){
    console.log("U heeft niks gedronken, dus u mag gewoon autorijden.")
} else {
    console.log("U bent geen bob, u mag daarom geen autorijden.");
}

if (age >= 18 && age <= 25){ 
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Sorry, je krijgt geen korting");
}

const name = "Lisa";

if (name === "Sarah" || name === "Bram"){
    console.log("Wat leuk dat je " + name + " heet, daarom krijg je een gratis biertje!");
} else {
    console.log ("Sorry " + name + ", je krijgt geen gratis biertje van ons.");
}

const totalAmount = 50;

if (totalAmount >= 25 && totalAmount < 50){
    console.log ("Je krijgt gratis een portie (vega)bitterballen bij je bestelling!");
} else if (totalAmount >= 50 && totalAmount < 100){
    console.log ("Je krijgt gratis een portie nachos bij je bestelling!");
} else if (totalAmount >= 100){
    console.log("Je krijgt gratis een fles champagne bij je bestelling!");
}