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
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { description, email, name } = req.body;

  // Validate required fields
  if (!name || !email || !description) {
    return res.status(400).json({ error: 'Tüm alanlar gereklidir.' });
  }

  try {
    const query = `
      INSERT INTO contact_requests (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING id
    `;
    
    await pool.query(query, [name, email, description]);
    
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}
