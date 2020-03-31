// i = 0, dus start vanaf index0. Elke keer 1 erbij, 
// dus itereert door de array

const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (colors[i]){
    console.log(colors[i]);
    i++;
}

for (i=0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(element => console.log(element));


const person = {
    name: 'Janneke',
    age: 30,
    city: 'Nijmegen',
    gender: 'Female',
    nationality: 'Dutch'
}

const keys = Object.keys(person);

for (i=0; i < keys.length; i++){
    console.log(keys[i]);
}


// Vraag 1:     3
// Vraag 2:     1
// Vraag 3:     Ik vind de for loop makkelijker leesbaar, tov de while loop. De Array Method is nog veel makkelijker, korter en overzichtelijker.
// Vraag 4:     Nee, je itereert niet omdat je een code schrijft die het herhaalt voor jou.