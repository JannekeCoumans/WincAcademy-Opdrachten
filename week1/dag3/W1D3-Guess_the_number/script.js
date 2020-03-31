// Hier vraag ik de gebruiker om zijn/haar naam en alert ik deze naam vervolgens
let name = prompt('Welkom! Wat is je naam?');
alert('Hey ' + name);

// Hier wordt er om een nummer gevraagd
let guessedNumber = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');
let answer = parseInt(guessedNumber);

// Hier wordt er een random nummer gegenereerd
const min = 1;
const max = 25;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// Hier wordt nagegaan of de persoon het juiste random nummer geraden heeft
if (answer === randomNumber){
    alert('Gefeliciteerd!! Je hebt gewonnen');
} else {
    alert('Dat is niet correct');
    let guessedNumber = prompt('Voer een nummer in van 0 tot 25');
    let answer = parseInt(guessedNumber);
    if (answer === randomNumber){
        alert('Gefeliciteerd!! Je hebt gewonnen');
    } else {
        alert('Dat is niet correct');
    }
}

//Hier is de BONUS wat ik geprobeerd te maken, maar ik ben niet verder gekomen dan dit.


// if (answer === randomNumber){
// alert('Gefeliciteerd!! Je hebt gewonnen');
// } else {
//     for (pogingen=4; pogingen >= 1; pogingen--){
//         alert('Dat is niet correct. Je hebt nog ' + pogingen + ' pogingen.');
//         let guessedNumber = prompt('Voer een nummer in van 0 tot 25');
//         let answer = parseInt(guessedNumber);
//             if (answer === randomNumber){
//             alert('Gefeliciteerd!! Je hebt gewonnen');
//                 }
//         } 
//     }

alert('Dag ' + name + '. Tot de volgende keer!');