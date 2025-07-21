function play(playerChoice)
{
    const choice=['rock','paper','scissor'];
    const computerChoice=choice[Math.floor(Math.random()*3)];
    document.getElementById("user_Image").style.backgroundImage=`url(./${playerChoice}.png)`;
    document.getElementById("computer_image").style.backgroundImage=`url(./${computerChoice}.png)`;
    document.getElementById("ck").style.display = "none";

    let result="";
    let user="";
    let computer="";
    if (playerChoice === computerChoice) 
        {
    user="Draw";
    computer="Draw";
   } 
   else if ((playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper')) 
    {
    user="Win";
     computer="loose";
    } 
    else {
    user="Loose";
    computer="win";
  }
  if(user==="Win")
  {
     document.getElementById("user_result").innerHTML="You Win!";
     document.getElementById("user_result").style.backgroundColor='Green';
     document.getElementById("computer_result").innerHTML="You loose!";
     document.getElementById("computer_result").style.backgroundColor='red';

  }
  else if(user==="Loose")
  {
    document.getElementById("user_result").innerHTML="You loose!";
    document.getElementById("user_result").style.backgroundColor='red';
    document.getElementById("computer_result").innerHTML="You win!";
    document.getElementById("computer_result").style.backgroundColor='green';
  }
  else{
    document.getElementById("user_result").innerHTML="Draw!";
    document.getElementById("user_result").style.backgroundColor='Yellow';
    document.getElementById("computer_result").innerHTML="Draw!";
    document.getElementById("computer_result").style.backgroundColor='yellow';
  }

}