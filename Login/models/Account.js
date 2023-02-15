const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/LearningEnglish');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String
}, {
    collection: 'Account'
});

const AccountModel = mongoose.model('Account', AccountSchema)

module.exports = AccountModel