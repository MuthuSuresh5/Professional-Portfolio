import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

app.post('/api/contact', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    const result = await collection.insertOne(req.body);

    res.status(200).json({ 
      message: 'Message saved successfully',
      id: result.insertedId 
    });
  } catch (error) {
    console.error('MongoDB error:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});