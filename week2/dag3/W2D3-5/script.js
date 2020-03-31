const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "first_appearance": "All-American Comics #16",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ]

console.log("Opdracht 1"); //
const superheroNames = superheroes.map (function(superhero) {
    return superhero.name;
});

console.log(superheroNames);



console.log("\nOpdracht 2"); //

const lightSuperhero = superheroes.filter(function (superhero) {
    return parseInt(superhero.weight) < 190;
})

console.log(lightSuperhero);



console.log("\nOpdracht 3"); //

const heavySuperhero = superheroes.filter(function (superhero) {
    return parseInt(superhero.weight) === 200;
    }).map (function(superhero) {
        return superhero.name;
    })

console.log (heavySuperhero);



console.log("\nOpdracht 4"); //

const firstAppearance = superheroes.map (function (superhero) {
    return superhero.first_appearance;
})

console.log(firstAppearance);



console.log("\nOpdracht 5"); //

const dcComics = superheroes.filter(function(superhero){
    return superhero.publisher === "DC Comics";
}).map (function(superhero){
    return superhero.name;
})

console.log(dcComics);

const marvelComics = superheroes.filter(function(superhero){
    return superhero.publisher === "Marvel Comics";
}).map (function(superhero){
    return superhero.name;
})

console.log(marvelComics);



console.log("\nOpdracht 6"); //
const weightDcComics = superheroes.filter(function(superhero){
    return superhero.publisher === "DC Comics";
}).map (function(superhero){
    return parseInt(superhero.weight);
})

const totalWeightDcComics = weightDcComics.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue;
})

console.log(totalWeightDcComics);



console.log("\nOpdracht 7"); //
const weightMarvelComics = superheroes.filter(function(superhero) {
    return superhero.publisher === "Marvel Comics" && superhero.weight != "unknown";
}).map (function(superhero){
    return parseInt(superhero.weight);
})

const totalWeightMarvelComics = weightMarvelComics.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue;
})

console.log(totalWeightMarvelComics);



console.log("\nOpdracht 8"); //
const weightSuperheroes = superheroes.filter(function(superhero) {
    return superhero.weight != "unknown";
}).map(function (superhero){
    return parseInt(superhero.weight);
})

const heaviestSuperhero = weightSuperheroes.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log(heaviestSuperhero);