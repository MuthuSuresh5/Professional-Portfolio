export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      return res.status(200).json({ 
        message: 'MongoDB not configured - messages are logged in function logs',
        stored: false,
        count: 0
      });
    }

    // Try to connect to MongoDB
    try {
      const { MongoClient } = await import('mongodb');
      const client = new MongoClient(uri);
      
      await Promise.race([
        client.connect(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Connection timeout')), 10000))
      ]);
      
      const db = client.db('portfolio');
      const collection = db.collection('contacts');
      
      const messages = await collection.find({}).sort({ timestamp: -1 }).limit(5).toArray();
      await client.close();

      return res.status(200).json({ 
        message: 'Messages retrieved from MongoDB',
        stored: true,
        count: messages.length,
        messages: messages.map(msg => ({
          name: msg.name,
          email: msg.email,
          subject: msg.subject || 'No subject',
          timestamp: msg.timestamp
        }))
      });
    } catch (dbError) {
      console.error('MongoDB connection failed:', dbError.message);
      return res.status(200).json({ 
        message: 'MongoDB connection failed - check Vercel function logs for submissions',
        stored: false,
        error: 'Database connection issue',
        count: 0
      });
    }
  } catch (error) {
    console.error('General error:', error);
    return res.status(200).json({ 
      message: 'Service temporarily unavailable',
      stored: false,
      count: 0
    });
  }
}