const clickedButton = document.getElementById("mybutton");
clickedButton.addEventListener("click", function(){
    alert('button clicked');
});


// eerst functie aanmaken
const toggleBodyBG = () => {
    const bodyBg = document.body;
    bodyBg.classList.toggle("red-background");
};

// voordat ik bovenstaande functie veranderde met de toggle.event, zag hij er zo uit:
// const changeBodyBG = () => {
//     const bodyBg = document.body;
//     bodyBg.classList.add("red-background");
// };



// dan een click event aan een button toevoegen, waarbij je de functie aanroept
const bgButton = document.getElementById("changeBackground");
bgButton.addEventListener("click", function(){
    toggleBodyBG();
})



