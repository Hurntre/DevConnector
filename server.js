const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');
const profileRoutes = require('./routes/api/profile');
const postsRoutes = require('./routes/api/posts');

const app = express();

// connect database
connectDB();

// init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API running'));

// Define Routers
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));