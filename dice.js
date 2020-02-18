var players1=true;
var players2=true;
console.log(player1)
begin()
function begin(){
document.getElementById('roll').addEventListener('click',()=>{
   if(players1== true){
        if(document.getElementById('currentScore1').innerHTML <= 100){
            player1();
        }  
   }
   else if(players2==true){
    if(document.getElementById('currentScore2').innerHTML <= 100){
        player2();
    }  
   }
   
})
}
var score1=Number(document.getElementById('changeScore1').innerHTML);
var score2=Number(document.getElementById('changeScore2').innerHTML);

function player1(){
    players1=false;
    players2=true;
    var changeScores1=Math.floor(Math.random()*Math.floor(7));
    changeScore1Met();
    
    function changeScore1Met(){
        document.getElementById('player1').style.transform='scale(1.030)';
        document.getElementById('player2').style.transform='scale(1)';
        document.getElementById('currentPlayer1').style.display='inline-block';
        document.getElementById('currentPlayer2').style.display='none';
        if(changeScores1!=0){
            document.getElementById('changeScore1').innerHTML=changeScores1;
            addUp1();
        }
    }
    function addUp1(){
        score1=score1 + changeScores1;
        if(score1 >=100){
            document.getElementById('currentScore1').innerHTML =  score1;
            document.getElementById('winner').style.display="block";
            document.getElementById('winner').innerHTML ='Winner<br> Player 1';
            
        }
        else{
            document.getElementById('currentScore1').innerHTML =  score1;
        }
    }
}

function player2(){
    players2=false;
    players1=true;
    var changeScores2=Math.floor(Math.random()*7);
    changeScore2Met();
        function changeScore2Met(){
            document.getElementById('player2').style.transform='scale(1.030)';
            document.getElementById('player1').style.transform='scale(1)';
            document.getElementById('currentPlayer2').style.display='inline-block';
        document.getElementById('currentPlayer1').style.display='none';
            if(changeScores2!=0){
                document.getElementById('changeScore2').innerHTML=changeScores2;
                addUp2();
            }
}
function addUp2(){
    score2=score2 + changeScores2;
    if(score2 >=100){
        document.getElementById('currentScore2').innerHTML =  score2;
        document.getElementById('winner').style.display="block";
        document.getElementById('winner').innerHTML ='Winner <br> Player 2';
        
    }
    else{
        document.getElementById('currentScore2').innerHTML =  score2;
    }
   
   }  
}
document.getElementById('newGame').addEventListener('click',()=>{
    newGame();
});
function newGame(){
    score1=0;
    score2=0;
    document.getElementById('currentPlayer1').style.display='none';
    document.getElementById('currentPlayer2').style.display='none';
    document.getElementById('winner').style.display='none';
    document.getElementById('currentScore1').innerHTML=0;
    document.getElementById('currentScore2').innerHTML=0;
    document.getElementById('changeScore1').innerHTML=0;
    document.getElementById('changeScore2').innerHTML=0;
    document.getElementById('player2').style.transform='scale(1)';
    document.getElementById('player1').style.transform='scale(1)';
}