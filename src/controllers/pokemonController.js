const express = require("express");
const { getOrCreatePokemonNumber, getPokeApiData, trimPokeApiData } = require('../middelware/pokeApiMiddleware')
// create an instance of just a router, not a full server
const router = express.Router();


router.get("/", (request, response) => {
    response.json({
        message:"Pokemon route live here!"
    });
});


// pokemon API request

router.get("/random", async (request, response) => {
    let pokemonData = {};

    let randomNumber = Math.floor(Math.random() * 1025) + 1;
    let responseData = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber);
    pokemonData = await responseData.json();
    response.json({
        result: pokemonData
    });

    response.json({
        result: pokemonData
    });
});

router.get(
    '/randomMiddleware', 
    //Middleware goes here
    getOrCreatePokemonNumber,
    getPokeApiData,
    trimPokeApiData, // ------> response.json early exit
    // |
    // |
    // 
    //Middleware finishe here
    (request, response) => {
    response.json({
        result: "todo!"
    });
});



// Export the router for the app to use
// since we must tell the app instance to load up routers
module.exports = router;
