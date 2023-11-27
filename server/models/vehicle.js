const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const VehicleSchema = new Schema({
    name: {
        type: String,
        require: 'true'
    },
    price: {
        type: String,
        require: 'true'
    },
    address: {
        type: String,
        require: 'true'
    },
    type: {
        type: String,
        require: 'true'
    },
    date: {
        type: Date,
        require: 'true'
    },
    priceType: {
        type: Boolean,
        require: 'true'
    },
    distance: {
        type: String,
        require: 'true'
    },
    geolocation: {
        type: Boolean,
        require: 'true'
    },
    description: {
        type: String,
        require: 'true'
    },
    image: {
        type: Object,
    }
})

module.exports = Mongoose.model('Vehicle',VehicleSchema);