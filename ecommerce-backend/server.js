const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const fs = require('fs');


// Config
require('dotenv').config();

const app = express();

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// ✅ Serve uploads folder publicly
app.use('/uploads', express.static('uploads'));

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// Routes (empty for now)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
