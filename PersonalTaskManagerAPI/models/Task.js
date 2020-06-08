const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    _title: {
        type: String,
        required: true
    },
    _description: {
        type: String,
        required: true
    },
    _owner: {
        type: String,
        required: true
    },
    _creationDate: {
        type: Date,
        default: Date.now
    },
    _deadline: {
        type: Date,
        default: Date.now
    },
    _status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('tasks', TaskSchema);