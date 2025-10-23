export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      return res.status(200).json({ 
        message: 'MongoDB not configured',
        stored: false
      });
    }

    const { MongoClient } = await import('mongodb');
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db('portfolio');
    const collection = db.collection('contacts');
    
    const messages = await collection.find({}).sort({ timestamp: -1 }).limit(10).toArray();
    await client.close();

    res.status(200).json({ 
      message: 'Messages retrieved successfully',
      count: messages.length,
      messages: messages.map(msg => ({
        name: msg.name,
        email: msg.email,
        subject: msg.subject || 'No subject',
        timestamp: msg.timestamp,
        id: msg._id
      }))
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ 
      message: 'Error fetching messages',
      error: error.message
    });
  }
}