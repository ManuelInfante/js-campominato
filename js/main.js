// VARIABILI 
var totalNumber;
var totalBombs = 16;
var bombsNumber = [];
var userNumbers = [];
var gameOver = false;
var difficultyLevel = ["facile", "normale", "difficile"];

// Chidere all'utente la difficoltà
var difficultyChosen = prompt("Scegli il livello di difficoltà: 'facile', 'normale', 'difficile'");

// Switch difficoltà
switch (difficultyChosen.toLocaleLowerCase().trim()) {
    case "facile":
        totalNumber = 100;
        break;
    case "difficile":
        totalNumber = 50;
        break;
    default:
        totalNumber = 80;
}
var userChance = totalNumber - totalBombs;

// Riempimento array 
while (bombsNumber.length < totalBombs) {
    var randomNumber = getRandomNumber(1, 100);
    console.log("Numero random: ", randomNumber)
    if (!isInArray(randomNumber, bombsNumber)) {
        bombsNumber.push(numberRandom);
    }
}
console.log("Array bombe: ", bombsNumber);

// Ciclo che pusha i numeri o dichiara la sconfitta
while (!gameOver && userNumbers.length < userChance) {
    var chosenNumber = getUserNumber(1, totalNumber);
    if (isInArray(chosenNumber, bombsNumber)) {
        gameOver = true;
    } else {
        if (isInArray(chosenNumber, userNumbers)) {
            alert("Numero già inserito, scegli un altro numero!");
        } else {
            userNumbers.push(chosenNumber);
        }
    }
}
console.log("Numeri utente :", userNumbers);

// Stampa vincitore e punteggio
var score = userNumbers.length;
if (gameOver) {
    alert("Hai perso! Punteggio raggiunto: " + score);
} else {
    alert("Hai vinto! Punteggio raggiunto:" + score);
}


// FUNZIONI


//FUNZIONE numeri random
function getRandomNumber(min, max) {
    return numberRandom = Math.floor(Math.random() * (max - min + 1) + min);
}

//Funzione che controlla gli elementi da inserire negli Array
function isInArray(needle, haystack) {
    var found = false;
    var i = 0;
    while (i < haystack.length && !found) {
        if (needle === haystack[i]) {
            found = true;
        }
        i++;
    }
    return found;
}

//TODO Funzione che controlla che sia un numero
function isANumber(num) {
    if (!num || num.trim() === "" || isNaN(num)) {
        return false;
    } else {
        return true;
    }
}

//FUNZIONE che controlla la validità del range del numero
function getUserNumber(min, max) {
    do {
        var num = prompt("Dimmi un numero da " + min + " a " + max);
    } while (!isANumber(num) || num < min || num > max) {
    }
    return parseInt(num);
}