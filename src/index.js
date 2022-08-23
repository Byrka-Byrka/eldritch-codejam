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
let gameGreenCards = []
let gameBlueCards = []
let gameBrownCards = []

const choseAncientWrapper = document.createElement('div')
choseAncientWrapper.classList.add('choseAncientWrapper')
document.body.append(choseAncientWrapper)

function choseAncient() {
    ancientsData.forEach(elem => {
        const img = new Image();
        img.classList.add('choseImg')
        img.onclick = (e => {
            chosenAncient = ancientsData.find((elem => elem.cardFace === e.target.src))
            choseAncientWrapper.remove()
            console.log(chosenAncient)
            allStages.greenCards = chosenAncient.firstStage.greenCards + chosenAncient.secondStage.greenCards + chosenAncient.thirdStage.greenCards
            allStages.blueCards = chosenAncient.firstStage.blueCards + chosenAncient.secondStage.blueCards + chosenAncient.thirdStage.blueCards
            allStages.brownCards = chosenAncient.firstStage.brownCards + chosenAncient.secondStage.brownCards + chosenAncient.thirdStage.brownCards
            console.log(allStages)
        })
        console.log('1')
        img.src = elem.cardFace
        choseAncientWrapper.append(img)

    })
}
choseAncient()

function cardsFilter(difficulty) {
    gameGreenCards = greenCards.filter(card => card.difficulty != difficulty)
    gameBlueCards = blueCards.filter(card => card.difficulty != difficulty)
    gameBrownCards = brownCards.filter(card => card.difficulty != difficulty)
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
function difficultSort() {
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