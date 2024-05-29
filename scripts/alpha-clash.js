// function play(){
//     //hide the home screen
//     //show the playground
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');
//     const playgroundSection = document.getElementById('palyground-section');
//     // console.log(playgroundSection.classList)
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop the game
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // checked matched or not
    if(playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //-----------------------------------------------(ignore this)
        //update score:
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        //increase the score by 1
        // const newScore = currentScore + 1;

        // //show the update score
        // currentScoreElement.innerText = newScore;
        
        //start a new round
        
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        // ------------------------------------------(ignore this)
        // console.log('you lost a life');
        // //step-1: get the current life number
        //  const currentLifeElement = document.getElementById('current-life');
        //  const currentLifeText = currentLifeElement.innerText;
        //  const currentLife = parseInt(currentLifeText);
        // //step-2: reduce the life count
        // const newLife = currentLife - 1;

        // //step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    if(updatedLife === 0){
        gameOver()
    }
    }
}

//capture keyboard press
document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet()
    console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function play(){
    // hide everything except playground.
    hideElementById('home-section');
    hideElementById('final-section');
    showElementById('palyground-section');

    //reset score and life.
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    // removeBackgroundColorById(expectedAlphabet);


    continueGame();
}

function gameOver(){
    hideElementById('palyground-section');
    showElementById('final-section');

    // Update Final Score
    const finalScore = getTextElementValueById('current-score');
    console.log(finalScore);
    setTextElementValueById('final-score', finalScore);

    //clear the last selected alphabet highlight.
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}