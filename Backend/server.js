// File: server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON requests

// API Routes
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Contact API is running');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
