const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/UserModel');

const router = express.Router();

// Middleware pour la route d'inscription
router.post('/', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });

        res.json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;