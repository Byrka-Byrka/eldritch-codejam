import cards from '../assets/MythicCards/brown'
import ancientsData from '../data/ancients'
import {
    brownCards,
    blueCards,
    greenCards
} from '../data/mythicCards/index'

console.log(brownCards, blueCards, greenCards)
console.log(ancientsData)
let chosenAncient = {}
const allStages = {
    greenCards: 0,
    blueCards: 0,
    brownCards: 0,
}
let allCardsDeck = {}
let gameGreenCards = shuffle(greenCards)
let gameBlueCards = shuffle(blueCards)
let gameBrownCards = shuffle(brownCards)
let isAncientChecked = false
let isDifficultChecked = false

const choseAncientWrapper = document.createElement('div')
choseAncientWrapper.classList.add('choseAncientWrapper')
document.body.append(choseAncientWrapper)
const difficultWrapper = document.createElement('div')
difficultWrapper.classList.add('difficultWrapper')
document.body.append(difficultWrapper)
const deckSectionWrapper = document.createElement('div')
deckSectionWrapper.classList.add('deckSectionWrapper')
document.body.append(deckSectionWrapper)
const deckCreateButton = document.createElement('div')

function activeToggle(e) {
    console.log(e.target.parentNode)
    let activeCard = e.target.parentNode.querySelector('.active')
    if (activeCard) {
        activeCard.classList.remove('active')
    }
    e.target.classList.add('active')
}

function choseAncient() {
    ancientsData.forEach(elem => {
        const img = new Image();
        img.classList.add('choseImg')
        img.onclick = (e => {
            difficultWrapper.innerHTML = ''
            deckSectionWrapper.innerHTML = ''
            activeToggle(e)
            chosenAncient = ancientsData.find((elem => elem.cardFace === e.target.src))
            allStagesCardsCount(chosenAncient)
            console.log(allStages)
            difficultSectionAdd()
            isAncientChecked = true
            isDifficultChecked = false
        })
        img.src = elem.cardFace
        choseAncientWrapper.append(img)

    })
}
choseAncient()

function allStagesCardsCount(chosenAncient) {
    allStages.greenCards = chosenAncient.firstStage.greenCards + chosenAncient.secondStage.greenCards + chosenAncient.thirdStage.greenCards
    allStages.blueCards = chosenAncient.firstStage.blueCards + chosenAncient.secondStage.blueCards + chosenAncient.thirdStage.blueCards
    allStages.brownCards = chosenAncient.firstStage.brownCards + chosenAncient.secondStage.brownCards + chosenAncient.thirdStage.brownCards
}

function cardsFilter(difficulty) {
    gameGreenCards = gameGreenCards.filter(card => card.difficulty != difficulty)
    gameBlueCards = gameBlueCards.filter(card => card.difficulty != difficulty)
    gameBrownCards = gameBrownCards.filter(card => card.difficulty != difficulty)
}

function cardDifficultySort(cards) {
    cards = cards.sort((a, b) => {
        if (a.difficulty > b.difficulty) {
            return 1;
        }
        if (a.difficulty < b.difficulty) {
            return -1;
        }
        return 0;
    })
    return cards
}

function difficultSort(val) {
    gameGreenCards = shuffle(greenCards)
    gameBlueCards = shuffle(blueCards)
    gameBrownCards = shuffle(brownCards)
    switch (val) {
        case 'очень легко':
            cardsFilter("hard")
            cardDifficultySort(gameGreenCards)
            cardDifficultySort(gameBlueCards)
            cardDifficultySort(gameBrownCards)
            break;
        case 'легко':
            cardsFilter("hard")
            break;
        case 'средне':
            break;
        case 'тяжело':
            cardsFilter("easy")
            break;
        case 'очень тяжело':
            cardsFilter("easy")
            cardDifficultySort(gameGreenCards)
            cardDifficultySort(gameBlueCards)
            cardDifficultySort(gameBrownCards)
            break;
    }
    console.log(gameGreenCards)
}

function shuffle(arr) {
    return arr.map(i => [Math.random(), i]).sort().map(i => i[1])
}

function difficultSectionAdd() {
    const difficultArr = ['очень легко', 'легко', 'средне', 'тяжело', 'очень тяжело']
    difficultArr.forEach(e => {
        let difficultSelector = document.createElement('div')
        difficultSelector.classList.add('difficultSelector')
        difficultSelector.innerText = e
        difficultSelector.onclick = (e) => {
            deckSectionWrapper.innerHTML = ''
            activeToggle(e)
            difficultSort(e.target.innerText)
            isDifficultChecked = true
            allCardsDeck = createDeck()
            deckSectionWrapper.innerHTML = ''
            deckCreateController(deckSectionWrapper)
        }
        difficultWrapper.append(difficultSelector)
    })
}

function createDeck() {
    let greenDeck = gameGreenCards.slice(0, allStages.greenCards)
    let blueDeck = gameBlueCards.slice(0, allStages.blueCards)
    let brownDeck = gameBrownCards.slice(0, allStages.brownCards)
    console.log(allStages.greenCards)
    return {
        greenDeck,
        blueDeck,
        brownDeck,
    }
}

function deckCreateController(parent) {
    deckCreateButton.classList.add('deckCreateButton')
    deckCreateButton.innerText = 'ЗАМЕШАТЬ КОЛОДУ'
    parent.append(deckCreateButton)
}

function cardState () {
    
}
