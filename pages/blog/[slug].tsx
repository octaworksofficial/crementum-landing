import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Pool } from 'pg';
import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image_url: string | null;
  author_name: string;
  author_image: string | null;
  read_time: number;
  published_at: string;
}

interface SingleArticlePageProps {
  post: BlogPost;
}

export default function SingleArticlePage({ post }: SingleArticlePageProps) {
  const formattedDate = formatDate(new Date(post.published_at));
  
  return (
    <Page title={post.title} description={post.description}>
      <Head>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
      </Head>
      <CustomContainer>
        <ArticleHeader>
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleMeta>
            <MetaItem>
              <AuthorName>{post.author_name}</AuthorName>
            </MetaItem>
            <MetaDivider>•</MetaDivider>
            <MetaItem>{formattedDate}</MetaItem>
            <MetaDivider>•</MetaDivider>
            <MetaItem>{post.read_time} dk okuma</MetaItem>
          </ArticleMeta>
        </ArticleHeader>
        
        <ArticleContent>
          <RichText>
            <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
          </RichText>
        </ArticleContent>
      </CustomContainer>
    </Page>
  );
}

// Basit markdown parser
function parseMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^(?!<[hlu])/gim, '<p>')
    .replace(/(?<![>])$/gim, '</p>')
    // Clean up
    .replace(/<p><\/p>/g, '')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h(\d)><\/p>/g, '</h$1>')
    .replace(/<p><li>/g, '<ul><li>')
    .replace(/<\/li><\/p>/g, '</li></ul>')
    .replace(/<\/li><li>/g, '</li><li>');
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const query = `
      SELECT id, slug, title, description, content, image_url, author_name, author_image, read_time, published_at
      FROM landing_blog
      WHERE slug = $1 AND is_published = true
    `;
    const result = await pool.query(query, [slug]);

    if (result.rows.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: JSON.parse(JSON.stringify(result.rows[0])),
      },
    };
  } catch (error) {
    console.error('Blog fetch error:', error);
    return {
      notFound: true,
    };
  } finally {
    await pool.end();
  }
};

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 80rem;
  margin: 5rem auto;

  ${media('<=tablet')} {
    margin: 3rem auto;
  }
`;

const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(var(--text), 0.1);
`;

const ArticleTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    font-size: 3rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  font-size: 1.4rem;
  color: rgba(var(--text), 0.7);
`;

const MetaDivider = styled.span`
  color: rgba(var(--text), 0.3);
`;

const AuthorName = styled.span`
  font-weight: 600;
  color: rgb(var(--primary));
`;

const ArticleContent = styled.article`
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 3rem 0 1.5rem;
    color: rgb(var(--text));
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    margin: 2.5rem 0 1rem;
    color: rgb(var(--text));
  }

  p {
    font-size: 1.6rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: rgba(var(--text), 0.85);
  }

  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  li {
    font-size: 1.6rem;
    line-height: 1.8;
    margin-bottom: 0.5rem;
    color: rgba(var(--text), 0.85);
  }

  strong {
    font-weight: 600;
    color: rgb(var(--text));
  }
`;
