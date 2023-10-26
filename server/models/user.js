const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        require: 'true'
    },
    lastName: {
        type: String,
        require: 'true'
    },
    email: {
        type: String,
        require: 'true'
    },
    password: {
        type: String,
        require: 'true'
    },
    phone: {
        type: String,
        require: 'true'
    },
    license: {
        type: String
    },
    payment: {
        type: String
    }
})

module.exports = Mongoose.model('User',UserSchema);