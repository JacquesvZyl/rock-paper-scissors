const playerChoice = sessionStorage.getItem('playerChoice');
const computerChoice = sessionStorage.getItem('computerChoice');

const winner = document.querySelector('.winner')
const player = document.querySelector('.your-pick')
const computer = document.querySelector('.computer-pick')
const playAgain = document.querySelector('.play-again')



function gameLogic(playerChoice,computerChoice) {

    switch(playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            return 'player';
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            return 'computer'
        case "scissorscissor":
        case "paperpaper":
        case "rockrock":
            return 'tie'
        
    }
        
    
}

if(gameLogic(playerChoice,computerChoice) === 'player') {
    winner.classList.add('you-win');
    player.querySelector('img').src = `./images/${playerChoice}.png`;
    player.querySelector('h1').style.visibility = 'visible'
    computer.querySelector('h1').style.visibility = 'hidden'
    computer.querySelector('img').src = `./images/${computerChoice}.png`;
}
else if(gameLogic(playerChoice,computerChoice) === 'computer') {
    winner.classList.add('computer-wins');
    player.querySelector('h1').style.visibility = 'hidden'
    computer.querySelector('h1').style.visibility = 'visible'
    player.querySelector('img').src = `./images/${playerChoice}.png`;
    computer.querySelector('img').src = `./images/${computerChoice}.png`;
}
else {
    winner.classList.add('tie');
    player.querySelector('h1').style.visibility = 'visible'
    player.querySelector('h1').innerText = 'Tie'
    computer.querySelector('h1').style.visibility = 'visible'
    computer.querySelector('h1').innerText = 'Tie'
    player.querySelector('img').src = `./images/${playerChoice}.png`;
    computer.querySelector('img').src = `./images/${computerChoice}.png`;
}

playAgain.addEventListener('click', () => {
    window.location.replace("./index.html")  
})

