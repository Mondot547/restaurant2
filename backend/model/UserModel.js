const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String, required: true
    },

});

const User = mongoose.model('User', UserShema);