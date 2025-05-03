


describe('Test dealDeck function', () => {
    it('Should deal 26 cards to each player', () => {
        
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
            const deck = new Deck
            deck.createCard()
            deck.shuffle()
        
            while(deck.deck.length !== 0) {
                this.player1.hand.push(deck.deck.shift())
                this.player2.hand.push(deck.deck.shift())
                
            }
        
           expect(this.player1.hand.length = 26)
           expect(this.player2.hand.length = 26)
    })
})

