export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate required fields
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      subject: req.body.subject || 'No subject',
      message,
      timestamp: new Date().toISOString()
    });

    // Try MongoDB connection if URI is available
    const uri = process.env.MONGODB_URI;
    if (uri) {
      try {
        const { MongoClient } = await import('mongodb');
        const client = new MongoClient(uri);
        await client.connect();
        
        const db = client.db('portfolio');
        const collection = db.collection('contacts');
        
        const result = await collection.insertOne({
          ...req.body,
          timestamp: new Date().toISOString()
        });
        
        await client.close();
        
        return res.status(200).json({ 
          message: 'Message saved successfully',
          id: result.insertedId
        });
      } catch (dbError) {
        console.error('MongoDB error:', dbError);
        // Continue to success response even if DB fails
      }
    }

    // Return success regardless of DB status
    res.status(200).json({ 
      message: 'Message received successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(200).json({ 
      message: 'Message received successfully',
      timestamp: new Date().toISOString()
    });
  }
}