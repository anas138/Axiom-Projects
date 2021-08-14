const wordElement=document.getElementById('word');
const incorrectWords=document.getElementById('incorrect-words');
const hangman=document.querySelectorAll('.hangman');
const gameOver=document.getElementById('gameover-container');
const gameoverMessage= document.getElementById('gameover');
const notificationContainer=document.getElementById('notification-container');
const incorrectLetter=document.getElementById('incorrect-words');
const playAgain=document.getElementById('play-again');
const words=["anas","Zeeshan","apple","Yellow"];
let flag=0;

let guessWords=words[Math.floor( Math.random() * words.length)];
console.log(guessWords);

let correctGuesses=[];
let incorrectGuesses=[];
function timeOut(){
    notificationContainer.style.display='none';
}
function gameOverwindow(message){
    gameoverMessage.innerText=message;
        gameOver.style.display='flex';
}


function renderWords(){
    wordElement.innerHTML=`
    ${guessWords.split('').map((letter1)=>{
      return  `<span class='letter'>
            ${correctGuesses.includes(letter1)?letter1:''}
        </span>`
        
    }).join('')}
    `
    const word1=wordElement.innerText.replace(/\n/g,'');
    console.log(word1);
    if(word1===guessWords)
    {
       // gameoverMessage.innerText='You Won !!'
       // gameOver.style.display='flex';
       gameOverwindow('You Won !!');
    }
    if(flag==0){
    window.addEventListener('keypress',(e)=>{
      
         console.log(e.keyCode);
         
           if(guessWords.includes(e.key)){
               if(!correctGuesses.includes(e.key))
               {
                correctGuesses.push(e.key);
                renderWords();

               }else{
                notificationContainer.style.display='flex';
                setTimeout(timeOut,1000);
               }
           }
           else{
               if(!incorrectGuesses.includes(e.key)){
            incorrectGuesses.push(e.key)
            incorrectLetter.innerText=incorrectGuesses;
            hangman.forEach((part,index)=>{
               const num=incorrectGuesses.length;
               if(index<num){
                   part.style.display='block';
                   
               }
               if(num==6){
                gameOverwindow('You lost!!');
                flag=1;
                renderWords();
                

               }
            })
            

        }else{
            notificationContainer.style.display='flex';
            setTimeout(timeOut,1000);

        }

           }
       console.log(correctGuesses);
    })
}
        
    
}
playAgain.addEventListener('click',()=>{
    correctGuesses.splice(0);
    incorrectGuesses.splice(0);
    incorrectLetter.innerText='';
    guessWords=words[Math.floor( Math.random() * words.length)];
    console.log(guessWords);
    hangman.forEach((i)=>{
        i.style.display='none';
    })
    
    renderWords();
    


    gameOver.style.display='none';

})

renderWords();