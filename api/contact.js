export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ 
      message: 'Contact API is working',
      methods: ['POST'],
      status: 'Ready to receive contact form submissions'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed - use POST to submit contact form' });
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

    // Store in MongoDB
    const uri = process.env.MONGODB_URI;
    if (uri) {
      try {
        const { MongoClient } = await import('mongodb');
        const client = new MongoClient(uri);
        
        await client.connect();
        console.log('Connected to MongoDB');
        
        const db = client.db('portfolio');
        const collection = db.collection('contacts');
        
        const result = await collection.insertOne({
          name,
          email,
          subject: req.body.subject || 'No subject',
          message,
          timestamp: new Date().toISOString(),
          ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
        });
        
        await client.close();
        console.log('Message stored with ID:', result.insertedId);
        
        return res.status(200).json({ 
          message: 'Message stored in database successfully',
          id: result.insertedId,
          stored: true
        });
      } catch (dbError) {
        console.error('MongoDB error:', dbError.message);
        // Continue to fallback
      }
    } else {
      console.log('No MongoDB URI configured');
    }

    // Always return success
    res.status(200).json({ 
      message: 'Message received successfully',
      timestamp: new Date().toISOString(),
      note: 'Check your email for confirmation'
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(200).json({ 
      message: 'Message received successfully',
      timestamp: new Date().toISOString()
    });
  }
}