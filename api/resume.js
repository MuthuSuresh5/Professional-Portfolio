import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'MuthuSuresh_CV.pdf');
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    const fileBuffer = fs.readFileSync(filePath);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="MuthuSuresh_CV.pdf"');
    res.setHeader('Content-Length', fileBuffer.length);
    
    res.send(fileBuffer);
  } catch (error) {
    console.error('Error serving resume:', error);
    res.status(500).json({ error: 'Failed to serve resume' });
  }
}