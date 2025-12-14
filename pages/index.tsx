import Head from 'next/head';
import styled from 'styled-components';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import FAQ from 'views/HomePage/FAQ';
import Features from 'views/HomePage/Features';
import Hero from 'views/HomePage/Hero';
import HowItWorks from 'views/HomePage/HowItWorks';
import Integrations from 'views/HomePage/Integrations';
import Pricing from 'views/HomePage/Pricing';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="CRMENTUM - Profesyonel Email Pazarlama ve CRM Platformu. Müşterilerinizle güçlü ilişkiler kurun, etkili kampanyalar oluşturun. Türkiye'nin en kapsamlı email pazarlama çözümü."
        />
        <meta name="keywords" content="email pazarlama, CRM, müşteri ilişkileri yönetimi, email kampanyası, drip kampanya, email takip, analitik" />
        <meta property="og:title" content="CRMENTUM - Profesyonel Email Pazarlama Platformu" />
        <meta property="og:description" content="Müşterilerinizle güçlü ilişkiler kurun, etkili email kampanyaları oluşturun." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CRMENTUM - Profesyonel Email Pazarlama Platformu" />
        <meta name="twitter:description" content="Müşterilerinizle güçlü ilişkiler kurun, etkili email kampanyaları oluşturun." />
        <link rel="canonical" href="https://crmentum.com" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Features />
        </DarkerBackgroundContainer>
        <WhiteBackgroundContainer>
          <HowItWorks />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Pricing />
        </DarkerBackgroundContainer>
        <WhiteBackgroundContainer>
          <Testimonials />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Integrations />
        </DarkerBackgroundContainer>
        <WhiteBackgroundContainer>
          <FAQ />
        </WhiteBackgroundContainer>
        <CtaContainer>
          <Cta />
        </CtaContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 0;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));
`;

const CtaContainer = styled.div`
  background: rgb(var(--background));
`;
