import cards from '../assets/MythicCards/brown'
import ancientsData from '../data/ancients'
import {
    brownCards,
    blueCards,
    greenCards
} from '../data/mythicCards/index'

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
let gameStages = [];
let resCardsArr = []

const choseAncientWrapper = document.createElement('div')
choseAncientWrapper.classList.add('choseAncientWrapper')
document.body.append(choseAncientWrapper)
const difficultWrapper = document.createElement('div')
difficultWrapper.classList.add('difficultWrapper')
document.body.append(difficultWrapper)
const deckSectionWrapper = document.createElement('div')
deckSectionWrapper.classList.add('deckSectionWrapper')
document.body.append(deckSectionWrapper)
const cardsSectionWrapper = document.createElement('div')
cardsSectionWrapper.classList.add('cardsSectionWrapper')
const deckCreateButton = document.createElement('div')
const deckStateWrapper = document.createElement('div')
document.body.append(cardsSectionWrapper)
cardsSectionWrapper.append(deckStateWrapper)
const cardController = new Image();




function activeToggle(e) {
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
            deckStateWrapper.innerHTML = ''
            deckStateWrapper.classList.remove('deckStateWrapper')
            cardController.remove()
            let yourCard = document.querySelector('.yourCard')
            if (yourCard) {
                yourCard.remove()
            }
            activeToggle(e)
            chosenAncient = ancientsData.find((elem => elem.cardFace === e.target.src))
            allStagesCardsCount(chosenAncient)
            difficultSectionAdd()
            createGameStages()
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

function createGameStages() {
    gameStages = []
    gameStages.push(Object.values(chosenAncient.firstStage))
    gameStages.push(Object.values(chosenAncient.secondStage))
    gameStages.push(Object.values(chosenAncient.thirdStage))
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
            deckStateWrapper.innerHTML = ''
            cardController.remove()
            let yourCard = document.querySelector('.yourCard')
            if (yourCard) {
                yourCard.remove()
            }
            let cgosenCard = choseAncientWrapper.querySelector('.active')
            deckStateWrapper.classList.remove('deckStateWrapper')
            activeToggle(e)
            difficultSort(e.target.innerText)
            isDifficultChecked = true
            allCardsDeck = createDeck()
            deckSectionWrapper.innerHTML = ''
            deckCreateController(deckSectionWrapper)
            createGameStages()
        }
        difficultWrapper.append(difficultSelector)
    })
}

function createDeck() {
    let greenDeck = shuffle(gameGreenCards.slice(0, allStages.greenCards))
    let blueDeck = shuffle(gameBlueCards.slice(0, allStages.blueCards))
    let brownDeck = shuffle(gameBrownCards.slice(0, allStages.brownCards))
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

function stageState() {
    deckStateWrapper.innerHTML = ''
    gameStages.forEach((e, index) => {
        const stageWrapper = document.createElement('div')
        stageWrapper.classList.add('stageWrapper')
        const stageNumber = document.createElement('div')
        stageNumber.classList.add('stageNumber')
        stageNumber.innerText = `${index} стадия`
        const greenState = document.createElement('div')
        greenState.classList.add('stageState')
        greenState.classList.add('greenState')
        greenState.innerText = e[0]
        const brownState = document.createElement('div')
        brownState.classList.add('stageState')
        brownState.classList.add('brownState')
        brownState.innerText = e[2]
        const blueState = document.createElement('div')
        blueState.classList.add('stageState')
        blueState.classList.add('blueState')
        blueState.innerText = e[1]
        deckStateWrapper.classList.add('deckStateWrapper')
        stageWrapper.append(stageNumber, greenState, brownState, blueState)
        deckStateWrapper.append(stageWrapper)
    })
}

deckCreateButton.onclick = () => {
    stageState()
    createResCardsArr()
    mythicCardController()
    deckCreateButton.remove()
}


function mythicCardController() {
    cardController.src = './assets/mythicCardBackground.png'
    cardController.classList.add('cardController')
    cardsSectionWrapper.append(cardController)
}

function createResCardsArr() {
    let arr = []
    gameStages.forEach((i) => {
        let resArr = []
        i.forEach((item, index) => {
            for (let i = 0; i < item; i++) {
                if (index === 0) {
                    resArr.push('greenDeck')
                } else if (index === 1) {
                    resArr.push('blueDeck')
                } else if (index === 2) {
                    resArr.push('brownDeck')
                }
            }
        })
        arr.push(shuffle(resArr))
    })
    resCardsArr = [...arr[0], ...arr[1], ...arr[2]].reverse()
}

cardController.onclick = (e) => {
    const yourCard = document.querySelector('.yourCard')
    if (yourCard) yourCard.remove()
    const img = new Image()
    const cardToPop = resCardsArr.pop()
    if (cardToPop) {
        let card = allCardsDeck[cardToPop].pop()
        img.src = card.cardFace
        img.classList.add('yourCard')
        cardsSectionWrapper.append(img)
    } else {
        const cardErr = document.createElement('div')
        cardErr.innerText = 'колода закончилась'
        cardErr.classList.add('cardErr')
        cardsSectionWrapper.append(cardErr)
        setTimeout(() => {
            cardErr.remove()
        }, 500);
    }

    function editState(cardToPop) {
        let color = 0
        if (cardToPop === 'blueDeck') {
            color = 1
        } else if (cardToPop === 'brownDeck') {
            color = 2
        }

        if (gameStages[0][color] !== 0) {
            gameStages[0][color] = gameStages[0][color] - 1
        } else if (gameStages[1][color] !== 0) {
            gameStages[1][color] = gameStages[1][color] - 1
        } else if (gameStages[2][color] !== 0) {
            gameStages[2][color] = gameStages[2][color] - 1
        }
    }
    editState(cardToPop)
    stageState()
}