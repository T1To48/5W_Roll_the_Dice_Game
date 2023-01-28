let profiles = [
   {},
  {
   //I've wrote the id key-value for futuristic dynamic purposes & to distinguish between players but it wasn't called at all in my code. 
    id: 1,
    currentScore: 0,
    finalScore: 0,
    wins:0,
  },
  {
    id: 2,
    currentScore: 0,
    finalScore: 0,
    wins:0,
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
let gamePage=document.querySelector('.game-page-container');
let holdBtn=document.querySelector('#hold-btn');
let newgameBtn=document.querySelector('#new-game-btn');
let targetOnScreen=document.querySelector('#target');
let table=document.querySelector("table");
//variables-Shortcuts & utilities vaiables
let turn=1;
let cScore1=profiles[1].currentScore;
let fScore1=profiles[1].finalScore;
let cScore2=profiles[2].currentScore;
let fScore2=profiles[2].finalScore;
let targetScoreVal;
/// variables for visuals
let plyr1=document.querySelector("#plyr-1");
let plyr2=document.querySelector("#plyr-2");
let cScoreDesignP1=document.querySelector("#plyr-1-current-score-design");
let cScoreDesignP2=document.querySelector("#plyr-2-current-score-design");
let fScoreDesignP1=document.querySelector("#plyr-1-final-score-design");
let fScoreDesignP2=document.querySelector("#plyr-2-final-score-design");
let resultP1=document.querySelector('#result-1');
let resultP2=document.querySelector('#result-2');
//dynamic variables
// let cScorevar=profiles[turn].currentScore;
// let fScorevar=profiles[turn].finalScore;
// let currentScoreVar=document.querySelector(`#plyr-${turn}-current-score`);
// let finalScoreVar=document.querySelector(`#plyr-${turn}-final-score`);
////Visual-Actions & functions 


//////*****START the game button
startBtn.addEventListener("click",function(){
   if(targetScore.value.length<1 || targetScore.value<1){
      alert('please enter a target score')
   }
   else {
      //move from landing page to game page
      landingPage.style.display="none";
   gamePage.style.display="grid";
   //show the target score on the game page
   targetScoreVal=document.querySelector('#target-score').value;
   targetOnScreen.textContent=`${targetScoreVal}`
   //in order to distinguish who is playing
   plyr1.style.fontWeight="900";
   cScoreDesignP1.style.fontWeight="900";
   fScoreDesignP1.style.fontWeight="900";
   plyr2.style.fontWeight="200";
   cScoreDesignP2.style.fontWeight="200";
   fScoreDesignP2.style.fontWeight="200";
   //show the result table just on the game page
   table.style.display="initial";
}
})

//////*****Hold button
holdBtn.addEventListener("click",function(){
   //add current score to final score
      profiles[turn].finalScore+=profiles[turn].currentScore;
   //print out final score
   document.querySelector(`#plyr-${turn}-final-score`).textContent=profiles[turn].finalScore;
   //return the current score to 0
   profiles[turn].currentScore=0;
   //print the current score again
   document.querySelector(`#plyr-${turn}-current-score`).textContent=profiles[turn].currentScore;
///////check who wins or switch turns
   if(profiles[turn].finalScore==targetScoreVal){
      //player (turn) won the game alert
      alert(`Congratulations Player ${turn}, you have won the game`);
      //change the look of new game button
      newgameBtn.style.backgroundColor='red';
      newgameBtn.style.color='beige';
      newgameBtn.style.width='100%';
      newgameBtn.style.height='100%';
      //save the win in profiles
      profiles[turn].wins+=1;
      //if you want to play again press newgame
      alert('if you want to play again press the New game button');
   }
   if(profiles[turn].finalScore>targetScoreVal && turn===1){
      //player (turn=2) won the game alert
      alert(`Congratulations Player 2, you have won the game`);
      //change the look of new game button
      newgameBtn.style.backgroundColor='blue';
      newgameBtn.style.color='beige';
      newgameBtn.style.width='100%';
      newgameBtn.style.height='100%';
      //save the win in profiles
      profiles[2].wins+=1;
      //if you want to play again press newgame
      alert('if you want to play again press the New game button');
   }
   if(profiles[turn].finalScore>targetScoreVal && turn===2){
      //player (turn=1) won the game alert
      alert(`Congratulations Player 1, you have won the game`);
      //change the look of new game button
      newgameBtn.style.backgroundColor='green';
      newgameBtn.style.color='beige';
      newgameBtn.style.width='100%';
      newgameBtn.style.height='100%';
      //save the win in profiles
      profiles[1].wins+=1;
      //if you want to play again press newgame
      alert('if you want to play again press the New game button');
      //all page display:none
      //new game button display:initial
   }
  /// IF NO winner was found switch turns between players
   else{
      if(turn==1){
         plyr2.style.fontWeight="900";
         cScoreDesignP2.style.fontWeight="900";
         fScoreDesignP2.style.fontWeight="900";
         plyr1.style.fontWeight="200";
         cScoreDesignP1.style.fontWeight="200";
         fScoreDesignP1.style.fontWeight="200";
         return turn=2;
         
}
if(turn==2){
         plyr1.style.fontWeight="900";
         cScoreDesignP1.style.fontWeight="900";
         fScoreDesignP1.style.fontWeight="900";
         plyr2.style.fontWeight="200";
         cScoreDesignP2.style.fontWeight="200";
         fScoreDesignP2.style.fontWeight="200";
   return turn=1;

}
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


   

//new game button resets all parameters back to default or 0 and allows the player to choose new target score
newgameBtn.addEventListener("click",function(){
   landingPage.style.display="flex";
   gameRules.style.display="none";
   gamePage.style.display="none";
   targetScore.value=0;
   profiles[1].currentScore=0;
   profiles[2].currentScore=0;
   profiles[1].finalScore=0;
   profiles[2].finalScore=0;
   currentScoreP1.textContent=0;
   currentScoreP2.textContent=0;
   finalScoreP1.textContent=0;
   finalScoreP2.textContent=0;
   turn=1;
   newgameBtn.style.backgroundColor='bisque';
   newgameBtn.style.color='black';
   newgameBtn.style.width='fit-content';
   newgameBtn.style.height='fit-content';
   resultP1.textContent=`${profiles[1].wins}`
   resultP2.textContent=`${profiles[2].wins}`
})

