// Serverless Function handler for Vercel
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, phone, date, venue, guests, budget, message } = req.body;

      if (!name || !email || !phone || !date || !venue) {
        return res.status(400).json({ error: 'Required fields missing' });
      }

      const inquiry = {
        id: Date.now().toString(),
        name,
        email,
        phone,
        date,
        venue,
        guests,
        budget,
        message,
        timestamp: new Date().toISOString()
      };

      console.log('New Booking Inquiry Received:', inquiry);

      // Local storage fallback for development environment
      if (process.env.NODE_ENV !== 'production') {
        const filePath = path.join(process.cwd(), 'inquiries.json');
        let inquiries = [];
        try {
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            inquiries = JSON.parse(data);
          }
        } catch (e) {
          console.error('Error reading local inquiries file:', e);
        }
        inquiries.push(inquiry);
        try {
          fs.writeFileSync(filePath, JSON.stringify(inquiries, null, 2));
        } catch (e) {
          console.error('Error writing local inquiries file:', e);
        }
      }

      return res.status(200).json({ success: true, data: inquiry });
    } catch (error) {
      console.error('Inquiry Submission Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
