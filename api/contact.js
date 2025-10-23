export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // For now, just log the contact form data and return success
    console.log('Contact form submission:', req.body);
    
    // Validate required fields
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // TODO: Add MongoDB integration when database is configured
    // For now, just return success
    res.status(200).json({ 
      message: 'Message received successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}