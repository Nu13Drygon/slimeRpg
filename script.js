const startGameBtn = document.getElementById('startGameBtn');
const gameLogDisplay = document.getElementById('gameLogDisplay');
const gameLog = document.getElementById("gameLog");
const characterCreation = document.getElementById("characterCreation");
const createCharacterBtn = document.getElementById('createCharacterBtn');
const gameControls = document.getElementById('gameControls');
const characterInfoBtn = document.getElementById('characterInfoBtn')
const exploreForestBtn = document.getElementById('exploreForestBtn')
const exploreControls = document.getElementById('exploreControls')
const walkAroundBtn = document.getElementById('walkAroundBtn')

let playerCharacter

class PlayerCharacter  {
    constructor(playerName, playerRace) {
        this.playerName = playerName;
        this.playerRace = playerRace;
        this.hitPoints = 100;
        this.weapon = this.pickRandomWeapon();
        this.introMessage = `Hello ${this.playerRace} ${this.playerName}, You have been given a ${this.weapon}. Welcome to Arcanum!!!`;
    }
    pickRandomWeapon() {
        const weapons = ['sword', 'axe', 'dagger'];
        const randomWeaponPicker = Math.floor(Math.random() *3); 
        return weapons[randomWeaponPicker];
    }
}


// CLICK EVENTS
startGameBtn.addEventListener('click', () => {
    displayCharacterCreation();
    startGameBtn.remove();
});


createCharacterBtn.addEventListener('click', () => {
    gameControls.style.display = 'inline';

    const characterNameInput = document.getElementById('characterNameInput');
    const characterRace = document.getElementById('characterRaces');

    playerCharacter = new PlayerCharacter(characterNameInput.value, characterRace.value)

    characterCreation.style.display = 'none'

    createGameLog(playerCharacter.introMessage)
});

characterInfoBtn.addEventListener('click', () => {
    const characterInfoDisplay = document.getElementById('characterInfoDisplay')
    const characterInfoList = document.getElementById('characterInfoList')

    if(characterInfoDisplay.style.display === '') {
        gameLogDisplay.style.display = 'none'
        characterInfoDisplay.style.display = 'block'
    } else {
        characterInfoDisplay.style.display = ''
        gameLogDisplay.style.display = 'block'
    } 

    if(!characterInfoList.firstChild) {
        createCharacter(characterInfoList)
    }
});

exploreForestBtn.addEventListener('click', () => {
    createGameLog('You have entered the Forest');
    exploreControls.style.display = 'inline-block';
    exploreForestBtn.remove();
});

walkAroundBtn.addEventListener('click', () => {
    initiateEncounter(createEncounter())
});

// FUNCTIONS
function createCharacter(characterInfoList) {
    const listName = document.createElement('li');
    const listHitPoints = document.createElement('li');
    const listRace = document.createElement('li');
    const listWeapon = document.createElement('li');

    listName.innerText = `Name: ${playerCharacter.playerName}`; 
    listHitPoints.innerText = `HP: ${playerCharacter.hitPoints}`; 
    listRace.innerText = `Race: ${playerCharacter.playerRace}`;
    listWeapon.innerText = `Weapon: ${playerCharacter.weapon}`; 

    characterInfoList.append(listName);
    characterInfoList.append(listHitPoints);
    characterInfoList.append(listRace);
    characterInfoList.append(listWeapon);
}

function displayCharacterCreation() {
    // display set to flex because it is currently hidden
    characterCreation.style.display = 'flex';
}

function createGameLog(actionText) {
    let gameLogEntry = document.createElement('li');
    gameLogEntry.innerText = `${actionText}`;
    gameLog.append(gameLogEntry);
    // this makes the browser follow the scroll when list items are added
    gameLogDisplay.scrollTop = gameLogDisplay.scrollHeight
}

function createEncounter() {
    const encounterList = [
        "You encounter a Monster",
        "You find nothing", 
        "You found an item"
    ];

    const randomEncounterPicker = Math.floor(Math.random() *3); 
    return encounterList[randomEncounterPicker];
}

function initiateEncounter(createEncounter) {
    if(createEncounter === "You encounter a Monster") {
        createGameLog(createEncounter)
    } else if(createEncounter === "You find nothing") {
        createGameLog(createEncounter)
    } else if(createEncounter === "You found an item") {
        createGameLog(createEncounter)
    }
}

function monsterEncounter() {
    
}

