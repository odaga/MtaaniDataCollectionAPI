const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    passHash: String
});

mongoose.model('User', UserSchema);
mongoose.exports = mongoose.model('User');