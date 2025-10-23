import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate required fields
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if MongoDB URI is configured
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.log('MongoDB not configured, logging submission:', req.body);
      return res.status(200).json({ 
        message: 'Message received (MongoDB not configured)',
        timestamp: new Date().toISOString()
      });
    }

    // Connect to MongoDB
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db('portfolio');
    const collection = db.collection('contacts');
    
    const result = await collection.insertOne({
      ...req.body,
      timestamp: new Date().toISOString()
    });
    
    await client.close();

    res.status(200).json({ 
      message: 'Message saved successfully',
      id: result.insertedId
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
}