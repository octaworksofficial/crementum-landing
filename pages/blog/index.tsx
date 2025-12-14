import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import { media } from 'utils/media';
import { Pool } from 'pg';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  image_url: string | null;
  author_name: string;
  read_time: number;
  published_at: string;
}

interface BlogIndexPageProps {
  posts: BlogPost[];
}

export default function BlogIndexPage({ posts }: BlogIndexPageProps) {
  return (
    <Page
      title="CRMENTUM Blog"
      description="Email pazarlama, müşteri ilişkileri yönetimi ve dijital pazarlama stratejileri hakkında güncel bilgiler ve ipuçları."
    >
      <CustomAutofitGrid>
        {posts.map((post) => (
          <ArticleCard
            key={post.slug}
            title={post.title}
            description={post.description}
            imageUrl={post.image_url || '/demo-illustration-1.svg'}
            slug={post.slug}
          />
        ))}
      </CustomAutofitGrid>
    </Page>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const query = `
      SELECT id, slug, title, description, image_url, author_name, read_time, published_at
      FROM landing_blog
      WHERE is_published = true
      ORDER BY published_at DESC
    `;
    const result = await pool.query(query);

    return {
      props: {
        posts: JSON.parse(JSON.stringify(result.rows)),
      },
    };
  } catch (error) {
    console.error('Blog fetch error:', error);
    return {
      props: {
        posts: [],
      },
    };
  } finally {
    await pool.end();
  }
};

