const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust the path according to your project structure

const router = express.Router();

// Register Endpoint
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: '!email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
});

module.exports = router;
