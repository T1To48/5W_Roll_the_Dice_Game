let profiles = [
   {},
  {
   //I've wrote the id key-value for futuristic dynamic purposes & to distinguish between players but it wasn't called at all in my code. 
    id: 1,
    currentScore: 0,
    finalScore: 0,
  },
  {
    id: 2,
    currentScore: 0,
    finalScore: 0,
  },
];


//QUERY-SELECTORS
let landingPage=document.querySelector('.landing-page-container');
let gameRules=document.querySelector('.game-rules');
let targetScore=document.querySelector('#target-score');
let startBtn=document.querySelector('#btn');
let dice1=document.querySelector('#dice-1-img');
let dice2=document.querySelector('#dice-2-img');
let rollDiceBtn=document.querySelector('#roll-dice-btn');
let currentScoreP1=document.querySelector('#plyr-1-current-score');
let currentScoreP2=document.querySelector('#plyr-2-current-score');
let finalScoreP1=document.querySelector('#plyr-1-final-score');
let finalScoreP2=document.querySelector('#plyr-2-final-score');
let hideGamePage=document.querySelector('#hide-game-page');
let gamePage=document.querySelector('.game-page-container');
let holdBtn=document.querySelector('#hold-btn');
let newgameBtn=document.querySelector('#new-game-btn');
//variables-Shortcuts & utilities vaiables
let turn=1;
let cScore1=profiles[1].currentScore;
let fScore1=profiles[1].finalScore;
let cScore2=profiles[2].currentScore;
let fScore2=profiles[2].finalScore;
//dynamic variables
// let cScorevar=profiles[turn].currentScore;
// let fScorevar=profiles[turn].finalScore;
// let currentScoreVar=document.querySelector(`#plyr-${turn}-current-score`);
// let finalScoreVar=document.querySelector(`#plyr-${turn}-final-score`);
////Visual-Actions & functions 

startBtn.addEventListener("click",function(){
   if(targetScore.value.length<1 || targetScore.value<1){
      alert('please enter a target score')
   }
   else {landingPage.style.display="none";
   gamePage.style.display="grid";}
})


holdBtn.addEventListener("click",function(){
   //add current score to final score
      profiles[turn].finalScore+=profiles[turn].currentScore;
   //print out final score
   document.querySelector(`#plyr-${turn}-final-score`).textContent=profiles[turn].finalScore
   //return the current score to 0
   profiles[turn].currentScore=0;
   //print the current score again
   document.querySelector(`#plyr-${turn}-current-score`).textContent=profiles[turn].currentScore;
   //check who wins or switch turns
   if(profiles[turn].finalScore===targetScore.value){
      //player (turn) won the game alert
      alert(`Congratulations Player ${turn}, you have won the game`);
      //if you want to play again press newgame
      alert('if you want to play again press the New game button');
   }
   if(profiles[turn].finalScore>targetScore.value && turn===1){
      //player (turn=2) won the game alert
      alert(`Congratulations Player 2, you have won the game`);
      //if you want to play again press newgame
      alert('if you want to play again press the New game button');
   }
   if(profiles[turn].finalScore>targetScore.value && turn===2){
      //player (turn=1) won the game alert
      alert(`Congratulations Player 1, you have won the game`);
      //if you want to play again press newgame
      //all page display:none
      //new game button display:initial
   }
  ///switch turns between players
   else{
   turn===1?turn=2:turn=1;
}
})


rollDiceBtn.addEventListener("click",function(){
   //generate 2 random numbs (we can not take the random numbers variables outside of
  // the function into the global scope , because they will be generated just once when the page is initialised,
  // thats why they should be regenrated every time the button "roll the dice" is pressed)
   let rndmNumb1=Math.floor(Math.random()*6)+1;
   let rndmNumb2=Math.floor(Math.random()*6)+1;
   //if numbs=6
   if(rndmNumb1===6 && rndmNumb2===6){
      profiles[turn].currentScore=0;
   }
   else{
   profiles[turn].currentScore+=rndmNumb1;
   profiles[turn].currentScore+=rndmNumb2;
   }
   //print out results of current score
   document.querySelector(`#plyr-${turn}-current-score`).textContent=profiles[turn].currentScore;
   //print  dice-pics that match the result
   dice1.setAttribute('src',`./assets/dice-${rndmNumb1}.png`);
   dice2.setAttribute('src',`./assets/dice-${rndmNumb2}.png`);
})

newgameBtn.addEventListener("click",function(){
   landingPage.style.display="flex";
   gameRules.style.display="none";
   targetScore.value=0;
   currentScoreP1.textContent='0';
   currentScoreP2.textContent='0';
   finalScoreP1.textContent='0';
   finalScoreP2.textContent='0';
   turn=1;
})
