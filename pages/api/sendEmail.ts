import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { description, email, name } = req.body;

  // Validate required fields
  if (!name || !email || !description) {
    return res.status(400).json({ success: false, message: 'Tüm alanlar gereklidir.' });
  }

  try {
    const query = `
      INSERT INTO contact_requests (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING id
    `;
    
    await pool.query(query, [name, email, description]);
    
    return res.status(200).json({ success: true, message: 'Mesajınız başarıyla gönderildi.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, message: 'Bir hata oluştu. Lütfen tekrar deneyin.' });
  }
}
