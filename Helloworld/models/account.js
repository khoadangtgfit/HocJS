const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/mongo');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String
}, {
    collection: 'user'
});

const AccountModel = mongoose.model('user', AccountSchema)

module.exports = AccountModel