
const checkIfAdmin = (request, response, next) => {
    if (request.body.isAdmin == "true") {
        request.auth = {
            isAdmin: true
        };
    } else {
        response.json({
            error: "Not authorised for this endpoint!"
        });
    }
    next();
}

module.exports = {
    checkIfAdmin
}