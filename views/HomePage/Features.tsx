import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

// Modern SVG Icons
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const ChartBarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ICONS = [UsersIcon, MailIcon, RocketIcon, ChartBarIcon, BuildingIcon, PaletteIcon, TrendingUpIcon, ShieldIcon];

const FEATURES = [
  {
    title: 'Müşteri Yönetimi',
    description:
      'Sınırsız kişi depolama, özel alanlar, Excel/CSV import-export, gelişmiş filtreleme ve segmentasyon özellikleri ile müşterilerinizi profesyonelce yönetin.',
  },
  {
    title: 'Email Şablon Oluşturucu',
    description:
      'Sürükle-bırak editör, HTML kod editörü, dinamik değişkenler ve hazır profesyonel şablonlarla etkileyici emailler oluşturun.',
  },
  {
    title: 'Kampanya Yönetimi',
    description:
      'Çok adımlı drip kampanyaları, zamanlanmış gönderim, tekrarlayan kampanyalar, A/B testi ve detaylı kampanya analizleri.',
  },
  {
    title: 'Email Takip ve Analitik',
    description:
      'Gerçek zamanlı açılma takibi, tıklama analitiği, bounce izleme, coğrafi veriler ve cihaz/email istemci tespiti.',
  },
  {
    title: 'Çoklu Organizasyon',
    description:
      'Her organizasyon için ayrı çalışma alanları, rol yönetimi, veri izolasyonu ve özel markalama özellikleri.',
  },
  {
    title: 'Kurumsal Kimlik',
    description:
      'Özel logo ve favicon, sosyal medya entegrasyonu, takım üyesi profilleri ve ürün/hizmet kataloğu yönetimi.',
  },
  {
    title: 'Dashboard ve Raporlar',
    description:
      'Gerçek zamanlı istatistikler, email teslimat metrikleri, açılma ve tıklama oranları, performans trendleri.',
  },
  {
    title: 'Güvenlik ve Uyumluluk',
    description:
      'JWT tabanlı kimlik doğrulama, güvenli şifre şifreleme, oturum yönetimi ve KVKK uyumlu işlemler.',
  },
];

export default function Features() {
  return (
    <FeaturesWrapper id="ozellikler">
      <Container>
        <Content>
          <CustomOverTitle>Özellikler</CustomOverTitle>
          <SectionTitle>Email pazarlama için ihtiyacınız olan her şey</SectionTitle>
        </Content>
        <CustomAutofitGrid>
          {FEATURES.map((feature, idx) => {
            const IconComponent = ICONS[idx];
            return (
              <FeatureCard key={idx}>
                <FeatureIconWrapper>
                  <IconComponent />
                </FeatureIconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            );
          })}
        </CustomAutofitGrid>
      </Container>
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.div`
  padding: 10rem 0;
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 35rem;
  gap: 3rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 100%;
  }
`;

const FeatureCard = styled.div`
  padding: 3rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(var(--text), 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const FeatureIconWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.15) 0%, rgba(24, 144, 255, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  
  svg {
    width: 3rem;
    height: 3rem;
    color: rgb(24, 144, 255);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: rgb(var(--text));
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  opacity: 0.8;
`;
