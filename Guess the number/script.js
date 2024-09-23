let result = document.getElementById('result');
let attempts = document.getElementById('attempts');

let button = document.querySelectorAll('.button');
function disableButton(){
    button.forEach(item=>{
        item.disabled = true;
    })
}

function restart(){
    location.reload();
}

let randomNumber = Math.ceil(Math.random() * 10);
let attemptsLeft = 3;

function makeGuess(guess) {
    if (guess === randomNumber) {
        result.style.color = 'green';
        result.textContent = `You win! The number was ${randomNumber}`;
        disableButton();
    } else {
        attemptsLeft--;
        attempts.textContent = attemptsLeft;

        if (attemptsLeft > 0) {
            result.style.color = 'red';
            if(guess > randomNumber){
                result.textContent = `The number is less than the ${guess}.`
            }
            else{
                result.textContent = `The number is greater than the ${guess}.`
            }
        } else {
            result.style.color = 'red';
            result.textContent = `You lose! The number was ${randomNumber}`;
            disableButton();
        }
    }
}