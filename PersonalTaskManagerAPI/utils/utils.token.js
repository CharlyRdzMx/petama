const { MessageResponse } = require('./utils.messages');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (req.originalUrl !== '/auth') {
        const token = req.header('auth-token');
        if (!token) return MessageResponse(res, 400, null);
    
        try {
            const verify = jwt.verify(token, process.env.JWT_PRIVATEKEY);
            req.user = verify;
            next();
        } catch(err) {
            return MessageResponse(res, 402, null);
        }
    } else {
        next();
    }
}