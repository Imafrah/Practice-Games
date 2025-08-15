let user=0;
let com=0;

const ch=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user")
const comScore=document.querySelector("#Com")




const genCom=()=>{
    const op=["rock","paper","scissor"]
    const ranIx=Math.floor(Math.random()*3)
    return op[ranIx];//Returning Computer Choice
}




const showWinner=(userWin,comCh,userCh)=>{
    if(userWin){
        user++;
        userScore.innerText=user;
        console.log("You Win ! This Game")
        msg.innerText=`You Win ! Your ${userCh} beats ${comCh}`;
        msg.style.backgroundColor="green"
    }
    else{
        com++;
        comScore.innerText=com;

        console.log("You Lose This Game")
        msg.innerText=`You Lose ${comCh} beats your  ${userCh}`;
        msg.style.backgroundColor="red"
        
    }

}







const drawgame=()=>{
    console.log("Game Is Draw");
    msg.innerText="Game Is Draw Play Again";
    msg.style.backgroundColor="#393E46"
}



const playGame=(userCh)=>{
    console.log("User Choice Is=",userCh)
    const comCh=genCom();//Genrating Computer Choice
    console.log("Computer Choice Is=",comCh)

    //Checking The Draw Condination
    if(userCh===comCh){
        drawgame();
    }

    //Checking Other Condination
    else{
        let userWin=true;
        if(userCh==="rock"){
            //Computer Can Select Ethier Paper or Scissor
            userWin = comCh==="paper"? false: true;
            }
            else if(userCh==="paper"){
                //Computer Can Select Ethier Rock or Scissor
                userWin = comCh==="scissor"? false:true
            }
            else{
                //Computer Can Select Ethier Rock or Paper
                userWin = comCh==="rock"?false:true;
            }
            showWinner(userWin,comCh,userCh);
    }


};





ch.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userCh=choice.getAttribute("id")
        playGame(userCh);

    });
    
});