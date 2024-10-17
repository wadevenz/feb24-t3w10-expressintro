const express = require("express");

// Make an instance of the Express System
// so we can configure it. e.g routes, settings
const app = express();

// Configure the app instance for whatever we need

app.use(express.json());

// And THEN set up the routes!

function newMiddleware (request, response, next){
    console.log("Middleware is now running");
    request.customData= {
        ...request.customData,
        new: "cool programming!"
    };
    // request.customData.new = "cool programming!" - error as new wasnt defined yet
    next();
}

app.get("/", 
    newMiddleware,
    (request, response) => {
    // response.send("<h1>Hello world!</h1>");
    response.json({
        message: "Hello world!",
        custom: request.customData
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

const UserController = require("./controllers/userController.js")
app.use("/users", UserController);


module.exports = {
    app
}