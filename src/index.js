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

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`)
})