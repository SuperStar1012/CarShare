const router = require('express').Router();

const authRoutes = require('./auth');
router.use('/auth',authRoutes,()=>console.log("hello"));

module.exports = router;
