const express = require("express");

// Make an instance of the Express System
// so we can configure it. e.g routes, settings
const app = express();

app.get("/", (request, response) => {
    // response.send("<h1>Hello world!</h1>");
    response.json({
        message: "Hello world!"
    });
});

app.post("/", (request, response) => {
    response.json({
        message: "POST request received"
    });
});

app.post("/bananas", (request, response) => {
    response.json({
        message: "POST request bananas received"
    });
});

const PokemonController = require("./controllers/pokemonController.js");

app.use("/pokemon", PokemonController);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`)
})