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

    if(!token || token === '') {
        req.isAuth = false;
        return next();
    };

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, 'supersecretkey');
    } catch(err) {
        req.isAuth = false;
        return next();
    };
    
    if(!decodedToken) {
        req.isAuth = false;
        return next();
    };

    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
}