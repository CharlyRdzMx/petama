const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    _name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('roles', RoleSchema);