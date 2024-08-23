// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/venueDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const venueSchema = new mongoose.Schema({
  placeName: String,
  address: String,
  phone: String,
  email: String,
  category: String,
  photos: [String],
});

const Venue = mongoose.model('Venue', venueSchema);

// API Route to Submit Form Data
app.post('/api/venues', async (req, res) => {
  try {
    const venue = new Venue(req.body);
    await venue.save();
    res.status(201).json({ message: 'Venue added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add venue' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
