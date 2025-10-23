// Simple message storage using external service
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;
    
    // Store in Formspree (free form backend service)
    const response = await fetch('https://formspree.io/f/xdkogqpw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || 'Portfolio Contact',
        message,
        _replyto: email,
        _subject: `Portfolio Contact from ${name}`,
      }),
    });

    if (response.ok) {
      return res.status(200).json({
        message: 'Message stored successfully',
        service: 'Formspree',
        timestamp: new Date().toISOString()
      });
    } else {
      throw new Error('Formspree failed');
    }
  } catch (error) {
    // Fallback: just log and return success
    console.log('Message received:', req.body);
    return res.status(200).json({
      message: 'Message logged successfully',
      service: 'Server logs',
      timestamp: new Date().toISOString()
    });
  }
}