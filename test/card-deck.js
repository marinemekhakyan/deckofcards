const axios = require('axios');
const { assert } = require('chai');

//request a new deck
    axios.get('https://deckofcardsapi.com/api/deck/new/').then(response => {
    //assign new deck ID to variable
    const deckID = response.data.deck_id;
    //draw two cards from deckID deck
    axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`).then(response => {
        
        })
});

      
