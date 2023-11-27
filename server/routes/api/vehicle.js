const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../../models/vehicle');

router.post('/addVehicle', async (req, res) => {
    console.log(req.body);
})


module.exports = router;