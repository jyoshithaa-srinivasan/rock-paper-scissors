let score=JSON.parse(localStorage.getItem('score'));

           
            if(score==null){
                score={
                    wins:0,
                    losses:0,
                    ties:0

                };
            }

           updateScoreElement();



            function updateScoreElement(){
            document.querySelector('.js-score').innerHTML=` Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
            }

            
            
            function pickComputerMove(){
                randomNumber=Math.random();
                let computerMove='';
                
                if(randomNumber>=0 && randomNumber<1/3){
                    computerMove='rock';
                    
                }
                else if(randomNumber>=1/3 && randomNumber<2/3){
                    computerMove='paper';
                    
                }
                else{
                    computerMove='scissors';
                    
                }
                

                return computerMove;

            }
            function playGame(playerMove){
                const computerMove=pickComputerMove();
                let result='';
                if(playerMove==='rock'){
                   
                if(computerMove==='rock'){
                    result='tie';

                }
                else if(computerMove==='paper'){
                    result='you lose';
                }
                else{
                    result='you win';
                }
               
                }

                else if(playerMove==='paper'){
                   
                if(computerMove==='rock'){
                    result='you win';

                }
                else if(computerMove==='paper'){
                    result='tie';
                }
                else{
                    result='you lose';
                }
                

                }

                else{
                    
                if(computerMove==='rock'){
                    result='you lose';

                }
                else if(computerMove==='paper'){
                    result='you win';
                }
                else{
                    result='tie';
                }
                }

                if(result==='you win'){
                    score.wins++;
                }
                else if(result==='you lose'){
                    score.losses++;
                }
                else if(result==='tie'){
                    score.ties++;
                }

                localStorage.setItem('score',JSON.stringify(score));

                updateScoreElement();


                document.querySelector('.js-result').innerHTML=result;
                document.querySelector('.js-moves').innerHTML=`You
                <img class="move-icon" src="images/${playerMove}-emoji.png">
                <img class="move-icon" src="images/${computerMove}-emoji.png">
                Computer`;
            }
            //to keep track whether we or not playing
            let isAutoPlaying=false;

            let intervalId;

            //const autoPlay=()=>{

           // };
            function autoPlay(){
                if(!isAutoPlaying){
                    intervalId=setInterval(()=>{
                        const playerMove=pickComputerMove();
                        playGame(playerMove);
    
                    },1000);
                    isAutoPlaying=true;
                    document.querySelector('.auto-play-button').innerHTML='Stop Play';
                }
                //to stop the interval
                else{
                    clearInterval(intervalId);
                    document.querySelector('.auto-play-button').innerHTML='Auto Play';
                    isAutoPlaying=false;

                }
               
            }
            //document.querySelector('.js-rock-button')
              //  .addEventListener('click',playGame('rock'));

            document.querySelector('.js-rock-button')
                .addEventListener('click',()=>{
                    playGame('rock');
                });

            document.querySelector('.js-paper-button')
                .addEventListener('click',()=>{
                    playGame('paper');
                })

            document.querySelector('.js-scissors-button')
                .addEventListener('click',()=>{
                    playGame('scissors');
                })
