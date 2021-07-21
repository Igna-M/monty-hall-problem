import game from './game.js'

let message = {
    initial: 'Elige una puerta para encontrar tu premio',
    door1: 'Elegiste la puerta 1',
    door2: 'Elegiste la puerta 2',
    door3: 'Elegiste la puerta 3',
    show: 'Te voy a mostrar otra puerta:',
    show1: 'En la puerta 1 no hay nada',
    show2: 'En la puerta 2 no hay nada',
    show3: 'En la puerta 3 no hay nada',
    change: 'Quieres cambiar tu elección?'
}


let gameStatus = {
    fase: 'start',
    firstChoice: '',
    secondChoice: '',
    prizeDoor: game.randomDoor(),
    showDoor: '',
}


let scores = {
    plays : 0,
    wins: 0,
    loses: 0
}

let door1 = document.getElementById("door1")
let door2 = document.getElementById("door2")
let door3 = document.getElementById("door3")
let messagesMessage = document.getElementById("messagesMessage")
let insertMessage = document.getElementById("insertMessage")
let insertMessage2 = document.getElementById("insertMessage2")
let insertMessage3 = document.getElementById("insertMessage3")
let youWin = document.getElementById("youWin")
let youLose = document.getElementById("youLose")
let roundResultL1 = document.getElementById("round-result-l1")
let roundResultL2 = document.getElementById("round-result-l2")
let roundResult = document.getElementById("round-result")
let played = document.getElementById("played")
let won = document.getElementById("won")
let lost = document.getElementById("lost")
let jugarDeNuevo = document.getElementById("jugarDeNuevo")


function removeDoorsListeners(){
    door1.removeEventListener('click', firstChoiceDoor1);
    door2.removeEventListener('click', firstChoiceDoor2);
    door3.removeEventListener('click', firstChoiceDoor3);
}


function firstChoiceDoor1(){
    if (gameStatus.fase == 'start'){
        door1.classList.remove("door")
        door1.classList.add("door-selected")
        gameStatus.firstChoice = 1
        messagesMessage.innerHTML = message.door1
        gameStatus.fase = 'firstChoice'
        removeDoorsListeners();
        firstChoice();
        }
}

function firstChoiceDoor2(){
    if (gameStatus.fase == 'start'){
        door2.classList.remove("door")
        door2.classList.add("door-selected")
        gameStatus.firstChoice = 2
        gameStatus.fase = 'firstChoice'
        removeDoorsListeners();
        firstChoice();
        }
}

function firstChoiceDoor3(){
    if (gameStatus.fase == 'start'){
        door3.classList.remove("door")
        door3.classList.add("door-selected")
        gameStatus.firstChoice = 3
        gameStatus.fase = 'firstChoice'
        removeDoorsListeners();
        firstChoice();
        }
}


// Parte Inicial
function start() {
    messagesMessage.innerHTML = message.initial
    played.innerHTML = scores.plays
    won.innerHTML = scores.wins
    lost.innerHTML = scores.loses
    
    door1.addEventListener('click', firstChoiceDoor1)
    door2.addEventListener('click', firstChoiceDoor2)
    door3.addEventListener('click', firstChoiceDoor3)
}

// Segunda parte
let firstChoice = () => {
    insertMessage.innerHTML = message.show
    
    if (gameStatus.firstChoice == 1){
        if (gameStatus.prizeDoor == 1){
            let bool = game.randomBool()
            if (bool == 1){
                insertMessage2.innerHTML = message.show2
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 3'
                door2.classList.remove("door")
                door2.classList.add("empty-door")               
                gameStatus.showDoor = 2;
                return secondChoice();
            } else if (bool == 2){
                insertMessage2.innerHTML = message.show3
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 2'
                door3.classList.remove("door")
                door3.classList.add("empty-door")
                gameStatus.showDoor = 3
                return secondChoice();
            } 
        } else {
            if (gameStatus.prizeDoor == 2){
                insertMessage2.innerHTML = message.show3
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 2'
                door3.classList.remove("door")
                door3.classList.add("empty-door")
                gameStatus.showDoor = 3
                return secondChoice();
            } else if (gameStatus.prizeDoor == 3){
                insertMessage2.innerHTML = message.show2
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 3'
                door2.classList.remove("door")
                door2.classList.add("empty-door")
                gameStatus.showDoor = 2
                return secondChoice();
            }
        }

    } else if (gameStatus.firstChoice == 2){
        if (gameStatus.prizeDoor == 2){
            let bool = game.randomBool()
            if (bool == 1){
                insertMessage2.innerHTML = message.show1
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 2 y 3'
                door1.classList.remove("door")
                door1.classList.add("empty-door")
                gameStatus.showDoor = 1
                secondChoice()
            } else if (bool == 2){
                insertMessage2.innerHTML = message.show3
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 2'
                door3.classList.remove("door")
                door3.classList.add("empty-door")
                gameStatus.showDoor = 3
                secondChoice()
            } 
        } else {
            if (gameStatus.prizeDoor == 1){
                insertMessage2.innerHTML = message.show3
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 2'
                door3.classList.remove("door")
                door3.classList.add("empty-door")
                gameStatus.showDoor = 3
                secondChoice()
            } else if (gameStatus.prizeDoor == 3){
                insertMessage2.innerHTML = message.show1
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 2 y 3'
                door1.classList.remove("door")
                door1.classList.add("empty-door")
                gameStatus.showDoor = 1
                secondChoice()
            }
        }
        
    } else if (gameStatus.firstChoice == 3){
        if (gameStatus.prizeDoor == 3){
            let bool = game.randomBool()
            if (bool == 1){
                insertMessage2.innerHTML = message.show1
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 2 y 3'
                door1.classList.remove("door")
                door1.classList.add("empty-door")
                gameStatus.showDoor = 1
            } else if (bool == 2){
                insertMessage2.innerHTML = message.show2
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 3'
                door2.classList.remove("door")
                door2.classList.add("empty-door")
                gameStatus.showDoor = 2
                secondChoice()
            } 
        } else {
            if (gameStatus.prizeDoor == 1){
                insertMessage2.innerHTML = message.show2
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 1 y 3'
                door2.classList.remove("door")
                door2.classList.add("empty-door")
                gameStatus.showDoor = 2
                secondChoice()
            } else if (gameStatus.prizeDoor == 2){
                insertMessage2.innerHTML = message.show1
                insertMessage3.innerHTML = 'Vuelve a elegir entre las puertas 2 y 3'
                door1.classList.remove("door")
                door1.classList.add("empty-door")
                gameStatus.showDoor = 1
                secondChoice()
            }
        }
    } 
}


function removeDoorsListeners2(){
    door1.removeEventListener('click', secondChoice1);
    door2.removeEventListener('click', secondChoice2);
    door3.removeEventListener('click', secondChoice3);
}


function secondChoice1(){
    if (gameStatus.fase == 'firstChoice') {
        gameStatus.secondChoice = 1
        removeDoorsListeners2()
        result()
    }
}

function secondChoice2(){
    if (gameStatus.fase == 'firstChoice') {
        gameStatus.secondChoice = 2
        removeDoorsListeners2()
        result()
    }
}

function secondChoice3(){
    if (gameStatus.fase == 'firstChoice') {
        gameStatus.secondChoice = 3
        removeDoorsListeners2()
        result()
    }
}

let secondChoice = () => {
    if (gameStatus.showDoor == 1) {
        door2.addEventListener('click', secondChoice2)
        door3.addEventListener('click', secondChoice3)
    } else if (gameStatus.showDoor == 2){
        door1.addEventListener('click', secondChoice1)
        door3.addEventListener('click', secondChoice3)
    } else if (gameStatus.showDoor == 3){
        door1.addEventListener('click', secondChoice1)
        door2.addEventListener('click', secondChoice2)
    }
}


let result = function() {
    gameStatus.fase = 'secondChoice'
    switch(gameStatus.prizeDoor) {
        case 1:
            door1.classList.remove("door")
            door1.classList.remove("door-selected")
            door1.classList.add('prize-door')
            break;
        case 2:
            door2.classList.remove("door")
            door2.classList.remove("door-selected")
            door2.classList.add('prize-door')
            break;
        case 3:
            door3.classList.remove("door")
            door3.classList.remove("door-selected")
            door3.classList.add('prize-door')
            break;
    }
    if (gameStatus.secondChoice == gameStatus.prizeDoor){
        youWin.classList.remove("hide")
        gameStatus.fase = 'win'
        reset();
    } 
    
    if (gameStatus.secondChoice != gameStatus.prizeDoor) {

        switch(gameStatus.secondChoice) {
            case 1:
                door1.classList.remove("door")
                door1.classList.remove("door-selected")
                door1.classList.add('loser-door')
                break;
            case 2:
                door2.classList.remove("door")
                door2.classList.remove("door-selected")
                door2.classList.add('loser-door')
                break;
            case 3:
                door3.classList.remove("door")
                door3.classList.remove("door-selected")
                door3.classList.add('loser-door')
                break;
        }
        youLose.classList.remove("hide")
        roundResultL1.innerHTML = 'El premio estaba detrás de la puerta #' + gameStatus.prizeDoor
        roundResultL2.innerHTML = 'Vos te quedaste con la puerta #' + gameStatus.secondChoice
        roundResult.classList.remove("hide")
        gameStatus.fase = 'lose'
        reset();
    }
    
}


let reset = function(){
    
    scores.plays = scores.plays + 1
    if (gameStatus.fase == 'win'){
        scores.wins = scores.wins + 1
    } else {
        scores.loses = scores.loses + 1
    }

    played.innerHTML = scores.plays
    won.innerHTML = scores.wins
    lost.innerHTML = scores.loses

    jugarDeNuevo.classList.remove('hide')
    jugarDeNuevo.addEventListener('click', replay)

}

function replay(){

    jugarDeNuevo.classList.add('hide')
    gameStatus.fase = 'start'
    gameStatus.firstChoice = ''
    gameStatus.secondChoice = ''
    gameStatus.prizeDoor = game.randomDoor()
    gameStatus.showDoor = ''

    door1.classList = 'door doorSkl'
    door2.classList = 'door doorSkl'
    door3.classList = 'door doorSkl'

    jugarDeNuevo.removeEventListener('click', replay)

    roundResultL1.innerHTML = ''
    roundResultL2.innerHTML = ''
    youWin.classList = "hide billboard win"
    youLose.classList = "hide billboard lose"
    roundResult.classList = 'round-result hide'
    
    messagesMessage.innerHTML = message.initial
    played.innerHTML = scores.plays
    won.innerHTML = scores.wins
    lost.innerHTML = scores.loses
    
    door1.addEventListener('click', firstChoiceDoor1)
    door2.addEventListener('click', firstChoiceDoor2)
    door3.addEventListener('click', firstChoiceDoor3)
}


// FIRST CALL
start()

