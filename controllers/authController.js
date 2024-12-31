const User = require('../models/User');

// Register
const register = async(req, res) => {
    const { username, email, password } = req.body;

    // Mengecek apakah username sudah ada
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username sudah digunakan' });
    }

    // Mengecek apakah email sudah ada
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        return res.status(400).json({ message: 'Email sudah digunakan' });
    }

    // Menentukan role berdasarkan email
    const role = email.includes('admin') ? 'admin' : 'user';

    // Menyertakan role saat mendaftar
    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
};

// Login
const login = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'User not found' });
    if (user.password !== password) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({
        message: 'Login successful',
        user: {
            username: user.username,
            email: user.email,
            role: user.role,
        },
    });
};

module.exports = { register, login };