const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const { OAuth2Client } = require('google-auth-library');
const bodyParser = require('body-parser');

const auth = require('../../middleware/auth');
const User = require('../../models/user');

const client = new OAuth2Client("YOUR_GOOGLE_CLIENT_ID");

router.post('/register', async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone } = req.body;
        const res_data = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            password: password
        };
        User.findOne({ email: email }).
            then(data => {
                if (data) {
                    res.json("Already registerd with this email");
                }
                else {
                    res.json(res_data);
                }
            })
        // const existingUser = await User.findOne({ email });

    } catch (error) {
        res.status(400).json({
            error: "Your request could not be processed. Please try again."
        });
    }
})
router.post('/phoneVerify', async (req, res) => {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Set environment variables for your credentials
    // Read more at http://twil.io/secure
    const accountSid = "ACde8f07bc3c2367dcb37ccac0f4e5297e";
    const authToken = "e7b6e8d97873774362617a70423176cc";
    const verifySid = "VAa78ea6de9297bb7a578e18c90ba6453d";
    const client = new twilio(accountSid, authToken);

    // client.verify.v2
    //     .services(verifySid)
    //     .verifications.create({ to: "+15702313322", channel: "sms" })
    //     .then((verification) => console.log(verification.status))
    //     .then(() => {
    //         console.log("Success")
    //     });

    // const accountSid = 'ACde8f07bc3c2367dcb37ccac0f4e5297e'; // Replace with your Account SID
    // const authToken = 'e7b6e8d97873774362617a70423176cc'; // Replace with your Auth Token
    const twilioNumber = '+18777915106'; // Replace with your Twilio phone number
    // const client = new twilio(accountSid, authToken);
    // // client.verify.v2
    // //     .services(verifySid)
    // //     .verifications.create({ to: "+15702313322", channel: "sms" })
    const numberToSend = Math.floor((10000 + Math.random() * 100000) % 100000);
    let code = `Your number is: ${numberToSend}`;
    console.log(code);
    const to = '+18326990288';
    // const sendSMS = (to, body) => {
    client.
        messages.create({
            body: code,
            to: to, // Text this number
            from: twilioNumber // From a valid Twilio number
        })
        .then((message) => res.json(numberToSend))
        .catch((error) => console.error(error));
})
router.post('/emailVerifyNumber', async (req, res) => {
    const email = req.body.email;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'harrypotterdev1012@gmail.com', // Your Gmail address
            pass: 'usfh imhe mfel oqsd' // Your Gmail password or App password if 2FA is enabled
        }
        // Configure with your SMTP settings
    });
    const numberToSend = Math.floor((1000 + Math.random() * 10000) % 10000);
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: 'harrypotterdev1012@gmail.com',
            to: email,
            subject: 'your verification number',
            text: `Verification number is: ${numberToSend}`,
        }, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                res.json(numberToSend);
            }
        });
    });
})

router.post('/registerAccount', async (req, res) => {
    User.findOne({ email: req.body.data.email }).
        then(async data => {
            const token = jwt.sign({ email: req.body.data.email }, 'secret', { expiresIn: '20m' });
            if (data) {
                res.json("Error");
            } else {
                const hashedPassword = await crypto.createHash('md5').update(req.body.data.password).digest('hex');
                const newUser = new User({
                    firstName: req.body.data.firstName,
                    lastName: req.body.data.lastName,
                    password: hashedPassword,
                    email: req.body.data.email,
                    phone: req.body.data.phone
                });
                newUser.save()
                    .then(data => {
                        res.json({ success: true, message: 'Authentication successful', token: token, verifyMail: true });
                    })
            }
        })

})
router.post('/loginWithGoogle', async (req, res) => {
    const { token } = req.body;
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "YOUR_GOOGLE_CLIENT_ID",  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];

        // You can use the payload to authenticate the user in your own system
        return payload;
    }
    verify().then((user) => {
        // Your own authentication logic here
        res.status(200).json(user);
    }).catch(err => {
        res.status(401).json({ error: 'Unauthorized' });
    });
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }).
        then(async (data) => {
            if (data) {
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: email,
                        pass: password,
                    },
                });

                try {
                    const hashedPassword = await crypto.createHash('md5').update(password).digest('hex');
                    if (data.password == hashedPassword) {
                        const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '20m' });
                        res.json({ success: true, message: 'Authentication successful', token: token, userData: data });
                    }
                    else {
                        res.json({ success: false, message: 'Password does not match', userData: data });
                    }
                    // await transporter.verify();
                } catch (error) {
                    console.log(error)
                    res.status(401).json({ success: false, message: 'Authentication failed', error: error.message });
                }
            } else {
                res.json({ success: false, message: 'This email does not register, You have to register first.' })
            }
        })

})

router.post('/resetPassword', async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }).
        then(async (data) => {
            if (data) {
                try {
                    const hashedPassword = await crypto.createHash('md5').update(password).digest('hex');
                    data.password = hashedPassword;
                    data.save().then(() => res.json({ success: true, message: 'Passwor has been changed successfully' }))
                } catch (error) {
                    console.log(error)
                    res.status(401).json({ success: false, message: 'Authentication failed', error: error.message });
                }
            } else {
                res.json({ success: false, message: 'This email does not register, You have to register first.' })
            }
        })

})

router.post('/getAuthData', async (req, res) => {
    const { token } = req.body;
    const decoded_token = jwt.decode(token);
    const { email } = decoded_token;
    User.findOne({ email: email })
        .then(async (data) => {
            console.log(data
            )
            if (data) {
                res.json(data)
            }
        })
})

router.post('/editUserData', async (req, res) => {

    const editUserData = req.body;
    const { email } = req.body;
    User.findOne({ email: email })
        .then(async (data) => {
            if (data) {
                data.firstName = editUserData.firstName;
                data.lastName = editUserData.lastName;
                data.phone = editUserData.phone;
                data.save().then(saveData => res.json(saveData))
            }
        })
})

module.exports = router;