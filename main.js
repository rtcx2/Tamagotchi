    //Declaring variables for sleep, hunger, boredom and interval
    //There's also a stategame variable that determines if the player is playing or not
    //Agecreature determings the creatures age
    //randomchosen will choose a random amount of variables to be picked to go up
    let interval;
    let hungerCount = 0
    let sleepCount = 0
    let boredCount = 0
    let base = 1000
    let randomChosen = 0
    let stateGame = false
    let ageCreature = 0
function startGame(){
   /* function hungerBar(hunger){
        console.log(`hunger is bar is ${hunger}`)
    } */
    //function makes the value go up every second
    function increment(value, step){
        return value+=step
    }

    interval = setInterval(()=>{
        amountChosen = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < amountChosen; i++){
            randomChosen = Math.floor(Math.random() * 3);    
            if(randomChosen === 0){
                hungerCount = increment(hungerCount, 1) 
                document.getElementById("Hunger").innerText = "Hunger: " + hungerCount; 
            }
            else if(randomChosen === 1){
                sleepCount = increment(sleepCount, 1)
                document.getElementById("sleep").innerText = "Sleep: " + sleepCount;
            }
            else{
             boredCount = increment(boredCount, 1)  
             document.getElementById("play").innerText = "Play: " + boredCount; 
            }
        }
        //Age is determined by this random number generator. if the number hits 1 the age will increase out of 20.
        ageRandom = Math.floor(Math.random() * 20);
        if (ageRandom === 1){
        ageCreature = ageCreature + 1
        document.getElementById("Age").innerText = "Age: " + ageCreature; 
        }
        //These if conditions determine if the counter is above 10 they lose
        if(sleepCount >=10){
            clearInterval(interval)
            document.getElementById("Status").innerText = "Status: " + userInput + " died of sleep deprivation" 
            stateGame = false  
        }
        if(boredCount >=10){
            clearInterval(interval)
            document.getElementById("Status").innerText = "Status: " + userInput + " died of boredom" 
            stateGame = false  
        }
        if(hungerCount >=10){
            clearInterval(interval)
            document.getElementById("Status").innerText = "Status: " + userInput + " tarved to death" 
            stateGame = false  
        }

    }, base)
    stateGame = true
        //Hides the button when pressed;
        startbutton.style.visibility = 'hidden'
       //Getting the name of the Tamogatchi     
        let nameValue = document.getElementById('nametext')
        const userInput = nameValue.value
        document.getElementById("nameholder").innerText = "Name: " + userInput
        //hides text document
        nametext.style.visibility = 'hidden'
        playbutton.style.visibility = 'visible'
}

function feed(){
    if(hungerCount > 0 && stateGame === true){
    hungerCount = hungerCount - 1
    document.getElementById("Hunger").innerText = "Hunger: " + hungerCount; 
    document.getElementById("Status").innerText = "Status: NOM NOM NOM NOM " 
    }
}

function play(){
    if(boredCount > 0 && stateGame === true){
    boredCount = boredCount - 1
    document.getElementById("play").innerText = "Boredom: " + boredCount; 
    document.getElementById("Status").innerText = "Status: WEEEEEEEEEEEEEEEEEEEEEEEEEEEEE" 
    
    }
}

function sleep(){
    if(sleepCount > 0 && stateGame === true){
    sleepCount = sleepCount - 1
    document.getElementById("sleep").innerText = "Sleep: " + sleepCount;
    document.getElementById("Status").innerText = "Status: ZzzzzzzzzzzzzzzzzzzzzZZzzzzZZZZ" 
    }
}
