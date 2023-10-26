const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');

const auth = require('../../middleware/auth');
const User = require('../../models/user');

router.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const { email, password, firstName, lastName, phone, license, payment } = req.body;
        const existingUser = await User.findOne({ email });

    } catch (error) {
        res.status(400).json({
            error: "Your request could not be processed. Please try again."
        });
    }
})

module.exports = router;