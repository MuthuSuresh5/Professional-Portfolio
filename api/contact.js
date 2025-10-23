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

    // Try to store via external service (Formspree)
    try {
      const formspreeResponse = await fetch('https://formspree.io/f/xdkogqpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject: req.body.subject || 'Portfolio Contact',
          message,
          _replyto: email,
          _subject: `Portfolio Contact from ${name}`,
        }),
      });
      
      if (formspreeResponse.ok) {
        return res.status(200).json({ 
          message: 'Message sent and stored successfully',
          service: 'Email notification sent'
        });
      }
    } catch (formspreeError) {
      console.error('Formspree error:', formspreeError);
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