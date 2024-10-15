const {app} = require('./server.js');

// ?? = nullish coalescing
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`)
})