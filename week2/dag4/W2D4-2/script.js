const bigFiveButton = document.getElementsByClassName('big-five-button');
const bigFiveList = document.getElementById('spotted-animals-list');
const removeFirstButton = document.getElementById('remove-first-item-button');
const removeAllButton = document.getElementById('remove-all-button');

const lionButton = bigFiveButton[0].addEventListener("click", function() {
    console.log('lion');
    const liLion = document.createElement("li");
    liLion.classList.add('spotted-animals-list-item');
    liLion.innerHTML = "Lion";
    bigFiveList.appendChild(liLion);
});

const leopardButton = bigFiveButton[1].addEventListener("click", function() {
    console.log('leopard');
    const liLeopard = document.createElement("li");
    liLeopard.classList.add('spotted-animals-list-item');
    liLeopard.innerHTML = "Leopard";
    bigFiveList.appendChild(liLeopard);
});

const elephantButton = bigFiveButton[2].addEventListener("click", function() {
    console.log('elephant');
    const liElephant = document.createElement("li");
    liElephant.classList.add('spotted-animals-list-item');
    liElephant.innerHTML = "Elephant";
    bigFiveList.appendChild(liElephant);
});

const rhinoButton = bigFiveButton[3].addEventListener("click", function() {
    console.log('rhino');
    const liRhino = document.createElement("li");
    liRhino.classList.add('spotted-animals-list-item');
    liRhino.innerHTML = "Rhino";
    bigFiveList.appendChild(liRhino);
});

const buffaloButton = bigFiveButton[4].addEventListener("click", function() {
    console.log('buffalo');
    const liBuffalo = document.createElement("li");
    liBuffalo.classList.add('spotted-animals-list-item');
    liBuffalo.innerHTML = "Buffalo";
    bigFiveList.appendChild(liBuffalo);
});

removeFirstButton.addEventListener("click", function(){
    bigFiveList.removeChild(bigFiveList.children[0]);
});

const clearList = function(){
while (bigFiveList.firstChild) {
    bigFiveList.removeChild(bigFiveList.firstChild);
}};

removeAllButton.addEventListener("click", function(){
    clearList();
});