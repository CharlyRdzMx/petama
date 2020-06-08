const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _email: {
        type: String,
        required: true,
        max: 128,
        min: 10
    },
    _password: {
        type: String,
        required: true,
        max: 2048,
        min: 8
    },
    _name: {
        type: String,
        required: true,
        max: 128,
        min: 3
    },
    _lastname: {
        type: String,
        required: true,
        max: 128,
        min: 3
    },
    _role: {
        type: String,
        required: true
    },
    _active: {
        type: Boolean,
        required: true,
        default: true
    },
    _creationDate: {
        type: Date,
        default: Date.now
    },
    _token: {
        type: String
    }
});

module.exports = mongoose.model('users', UserSchema);