const router = require('express').Router();

const authRoutes = require('./auth');
const vehicleRoutes = require('./vehicle');

router.use('/auth',authRoutes);
router.use('/vehicle',vehicleRoutes);

module.exports = router;
