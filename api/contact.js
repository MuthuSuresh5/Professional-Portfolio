import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
  } finally {
    await client.close();
  }
}