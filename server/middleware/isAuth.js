const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    // checks autheader for authorization field in incoming request
    if(!authHeader) {
        req.isAuth = false;
        // sets isAuth in req to false
        return next();
    };
    const token = authHeader.split(' ')[1];
    // checks if there is a valid token
    if(!token || token === '') {
        req.isAuth = false;
        return next();
    };

    let decodedToken;
    // use jwt to compare the tokens
    try {
        decodedToken = jwt.verify(token, 'supersecretkey');
    } catch(err) {
        req.isAuth = false;
        return next();
    };
    // checks if decoded token is valid
    if(!decodedToken) {
        req.isAuth = false;
        return next();
    };
    // all checks passed, sets req.isAuth to true and assigns userId to req
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
}