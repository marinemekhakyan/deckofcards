const axios = require('axios');
const { assert } = require('chai');

//request a new deck
    axios.get('https://deckofcardsapi.com/api/deck/new/').then(response => {
    //assign new deck ID to variable
    const deckID = response.data.deck_id;
    //draw two cards from deckID deck
    axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`).then(response => {
        //assert request was successful
        assert.equal(response.data.success, true, 'Request was not successful');
        //assert our assigned deck ID matches each new deck ID
        assert.equal(deckID, response.data.deck_id, 'Response deck id does not match the deck requested');
        //assert after drawing there are 50 cards left in the deck
        assert.equal(response.data.remaining, 50, 'Ramainder of cards in the deck after drawing 2 cards does not equal 50');      
        })
});

      
