/*
1. Retrieve or generate a valin number for pokemon ID eg. 25, should be from 1 - 1025
2. getPokeApiDAta -- actually making a request to the PokeApi with a number from request.customData
3. trimPokeApiresponse -- process PokeApi response data and keep just a few properties from that mess
*/

const getOrCreatePokemonNumber = (request, response, next) => {
    let pokemonNumber = request.params.pokemonNumber || (Math.floor(Math.random() * 1025) + 1);
    console.log("We are going ot retrieve data for Pokemon with ID of " + pokemonNumber);

    // How to transfer pokemonNumber from this middleware to other middleware
    request.pokemonStuff = {
        ...request.pokemonStuff, // ... a.k.a the spread operator helps us keep existing object data
        pokemonNumber
    }
    next();
}


async function getPokeApiData (request, response, next){
    let pokemonID = request.pokemonStuff.pokemonNumber;
    console.log(pokemonID);

    let responseData = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonID);
    request.pokemonStuff = {
        ...request.pokemonStuff, // ... a.k.a the spread operator helps us keep existing object data
        responseData
    }
    // pokemonData = await responseData.json();
    next();
}

async function trimPokeApiData (request, response, next) {
    let validData = await request.pokemonStuff.responseData.json();

    let trimmedData = {
        name: validData.name,
        image: validData.sprites.front_default
    };

    response.json({
        result: trimmedData
    });
}

module.exports = {
    getOrCreatePokemonNumber,
    getPokeApiData,
    trimPokeApiData
}