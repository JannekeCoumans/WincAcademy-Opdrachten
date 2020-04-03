const ul = document.getElementById('showCategorie');
const button = document.getElementsByTagName('button');

const buttonLandenlijst = document.getElementById('buttonLandenlijst')
const buttonSteenbokvrouwen = document.getElementById('buttonSteenbokvrouwen')
const buttonOudeCreditcards = document.getElementById('buttonOudeCreditcards')
const buttonMeesteMensen = document.getElementById('buttonMeesteMensen')
const buttonGemiddeldeLeeftijd = document.getElementById('buttonGemiddeldeLeeftijd')
const buttonMatchmaking = document.getElementById('buttonMatchmaking')

const datum = new Date();
const huidigJaartaal = datum.getFullYear();

buttonLandenlijst.addEventListener("click", () => {
    const landenlijst = randomPersonData.map(data => {return data.region});
    landenlijst.sort();
    ul.innerHTML = "";
    landenlijst.forEach(element => {
        const li = document.createElement('li');
        const liContent = document.createTextNode(element);
        ul.appendChild(li);
        li.appendChild(liContent);
    })
});



buttonSteenbokvrouwen.addEventListener("click", () => {
    ul.innerHTML = "";
    const steenbokvrouwen = () => {
        randomPersonData.forEach(person => {
            const birthday = new Date(person.birthday.mdy);
            if (birthday.getFullYear() <= 1990 && ((birthday.getMonth() == 0 && birthday.getUTCDate() < 20) || (birthday.getMonth() == 11 && birthday.getUTCDate() > 21)) && person.gender === 'female' ) {
                const li = document.createElement('li');
                const liContent = document.createTextNode(person.name + ' ' + person.surname);
                ul.appendChild(li);
                li.appendChild(liContent);
            }
        });
    }
    steenbokvrouwen();
})

buttonOudeCreditcards.addEventListener("click", () => {
    const oudeCreditcards = () => {
        randomPersonData.forEach(person => {
            const todaysDate = new Date();
            const creditcardExpiringDate = new Date(person.credit_card.expiration);
            console.log(creditcardExpiringDate.getFullYear());
        })
    }
    oudeCreditcards();
})
buttonMeesteMensen.addEventListener("click", () => {

})
buttonGemiddeldeLeeftijd.addEventListener("click", () => {

})
buttonMatchmaking.addEventListener("click", () => {

})



// console.log(steenbokvrouwen);

// const addToDom = (lijst) => {
//     lijst.forEach(element => {
//         const li = document.createElement('li');
//         const liContent = document.createTextNode(element)
//         ul.appendChild(li);
//         li.appendChild(liContent);
//     })
// }

// addToDom(landenlijst.sort());
// // addToDom(steenbokvrouwen);


// button.forEach(button => {
//     button.addEventListener("change", function() {

//     })
// })


// for (i = 0; i < radioButtons.length; i++) {
//     radioButtons[i].addEventListener("change", function () {
//         const handleOnChangeEvent = (event) => {
//             x = event.target.value;
//             switch (x) {
//                 case "nieuwe-films":
//                     addMoviesToDom(newestMovies);
//                     break;
//                 case "avenger-films":
//                     addMoviesToDom(avengers);
//                     break;
//                 case "xmen-films":
//                     addMoviesToDom(xmen);
//                     break;
//                 case "princess-films":
//                     addMoviesToDom(princess);
//                     break;
//                 case "batman-films":
//                     addMoviesToDom(batman);
//                     break;
//             }
//         };
//         handleOnChangeEvent(event);
//     })
// }