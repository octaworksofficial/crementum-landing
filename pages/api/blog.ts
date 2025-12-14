import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug } = req.query;

    if (slug) {
      // Tek bir blog yazısı getir
      const query = `
        SELECT id, slug, title, description, content, image_url, author_name, author_image, read_time, published_at
        FROM landing_blog
        WHERE slug = $1 AND is_published = true
      `;
      const result = await pool.query(query, [slug]);

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Blog yazısı bulunamadı.' });
      }

      return res.status(200).json(result.rows[0]);
    } else {
      // Tüm blog yazılarını getir
      const query = `
        SELECT id, slug, title, description, image_url, author_name, author_image, read_time, published_at
        FROM landing_blog
        WHERE is_published = true
        ORDER BY published_at DESC
      `;
      const result = await pool.query(query);

      return res.status(200).json(result.rows);
    }
  } catch (error) {
    console.error('Blog API error:', error);
    return res.status(500).json({ error: 'Sunucu hatası oluştu.' });
  }
}
