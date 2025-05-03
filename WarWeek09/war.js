
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner
// Write a Unit Test using Mocha and Chai for at least one of the functions you write
// cards, deck, players, suits, numbers/faces
class War{
   constructor() {
    // creates two players with starting score of 0 and an empty hand
    this.player1 = {
        name: "Player 1",
        score: 0,
        hand:[]
    }
    this.player2 = {
        name: "Player 2",
        score: 0,
        hand:[]
    }
   }
//    shuffles and deals 26 cards to each player by using the createCard() and shuffle() methods from the deck class
   dealDeck() {
    const deck = new Deck
    deck.createCard()
    deck.shuffle()

    while(deck.deck.length !== 0) {
        this.player1.hand.push(deck.deck.shift())
        this.player2.hand.push(deck.deck.shift())
    }
    console.log(this.player1.hand)
    console.log(this.player2.hand)
   }

   playWar() {
    // awards player 1 a point if they're card is higher
    for (let i = 0; i < this.player1.hand.length; i++) {
        if(this.player1.hand[i].value > this.player2.hand[i].value) {
            this.player1.score ++
            console.log(
                `Player1's card: ${this.player1.hand[i].name}
                 Player2's card: ${this.player2.hand[i].name}
                 Player1 wins!`)
        }
    }
    // awards player 2 a point
    for( let i = 0; i < this.player2.hand.length; i++) {
        if(this.player2.hand[i].value >  this.player1.hand[i].value) {
            this.player2.score ++
            console.log(`Player1's card: ${this.player1.hand[i].name}
                 Player2's card: ${this.player2.hand[i].name}
                 Player2 wins!`)
        }
    }
    // Neither player gets a point if they're tied
   for(let i = 0; i < this.player1.hand.length && this.player2.hand.length; i++)
    if(this.player1.hand[i].value === this.player2.hand[i].value) {
        console.log( `Player1's card: ${this.player1.hand[i].name}
                 Player2's card: ${this.player2.hand[i].name}
                    Its a tie! 0 points for both players.`)
    }
   }

   gameOver() { 
//  display score and winner after all cards are used
console.log(`Current score: 
    player 1: ${this.player1.score},
    player 2: ${this.player2.score}`)
if(this.player1.score > this.player2.score) {
    console.log('Player 1 wins')
} else if (this.player2.score > this.player1.score) {
    console.log('Player 2 wins!')
} else {
    console.log('Its a tie!')
}

}

}

class Card {
  constructor(suit, rank) {
    this.suit = suit
    this.rank = rank
}
}


class Deck {
   constructor() {
    this.deck = []

    this.suits= ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    this.ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']
//    Created 52 cards for the deck unshuffled using the suits and rank arrays and pushing them into the deck array
   }
   createCard() {
    for(let i = 0; i < this.suits.length; i++ ) {
        for(let j = 0; j < this.ranks.length; j++) {
            let card = {
                name: `${this.ranks[j]} of ${this.suits[i]}`,
                value: j + 1
            }
             this.deck.push(card)
             
        }
   }
//    shuffles the cards in the deck array
}
    shuffle () {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
         
        }
      }
    
    
}
const war = new War
war.dealDeck()
war.playWar()
war.gameOver()

