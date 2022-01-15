const choiceBtns = document.querySelectorAll('.pick-one button');
var playerChoice;
var computerChoice;

const choices = ['rock','paper','scissors']

function random() {
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}









choiceBtns.forEach(choice => {

    choice.addEventListener('click', ()=> {
        playerChoice = choice.innerText;
        computerChoice = random();
        sessionStorage.setItem('playerChoice', playerChoice);
        sessionStorage.setItem('computerChoice', computerChoice);
        window.location.replace("./winner.html")       
    })
})