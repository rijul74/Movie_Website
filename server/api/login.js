const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust the path according to your project structure

const router = express.Router();

// Login Endpoint
router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: '!user not found' });
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: '!password does not match' });
        }
        res.status(200).json({
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email
            }
        });
        console.log('Login successful', user);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
