import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, companyName, companySize, message, source, planInterest } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      return res.status(400).json({ error: 'Ad soyad ve email gereklidir.' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Geçerli bir email adresi giriniz.' });
    }

    // Insert into database
    const query = `
      INSERT INTO demo_requests (full_name, email, phone, company_name, company_size, message, plan_interest, source)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `;

    const values = [
      fullName,
      email,
      phone || null,
      companyName || null,
      companySize || null,
      message || null,
      planInterest || null,
      source || 'website',
    ];

    const result = await pool.query(query, values);

    return res.status(201).json({
      success: true,
      message: 'Demo talebi başarıyla kaydedildi.',
      id: result.rows[0].id,
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Sunucu hatası. Lütfen tekrar deneyin.' });
  }
}
