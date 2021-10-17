const mongoose = require('mongoose');

const ChildSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    age: String,
    sex: String,
    dateOfBirth: String,
    profileImageUrl: String,
    SchoolLastAttended: String,
    classLastAttended: String,
    originalHomeOfResidence: String,
    village: String,
    district: String,
    healthStatus: String,
    createdAt: String,
    updatedAt: String
});

mongoose.model('Child', ChildSchema);
mongoose.exports = mongoose.model('Child');
