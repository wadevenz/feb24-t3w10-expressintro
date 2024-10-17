

async function getUsersFromDatabase (request, response, next){
    request.userData = [
        "Damian", "Marianne", "Kim", "Brad", "Hayden" // replece with query IRL
    ];
    next();
}

module.exports = {
    getUsersFromDatabase
}