const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type : String,
        require: true
    },
    address: {
        type : String,
        require: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Profile', PostSchema);