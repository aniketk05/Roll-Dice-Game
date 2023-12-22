'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const diceRoll = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0')
const currentEl1 = document.getElementById('current--1')
const Player0El = document.querySelector('.player--0');
const Player1El = document.querySelector('.player--1');

let scores,currentScore,activePlayer,playing;



const init = function () {

    diceEl.classList.add('hidden');

    scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentEl0.textContent = 0;
    currentEl1.textContent = 0;
    Player0El.classList.remove('player--winner');
    Player1El.classList.remove('player--winner');
    Player0El.classList.add('player--active');
    Player1El.classList.remove('player--active');

}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    Player0El.classList.toggle('player--active');
    Player1El.classList.toggle('player--active');
}




diceRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;


        if (dice != 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});

diceHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            switchPlayer();
        }
    }
});


btnNew.addEventListener('click', init);