import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const STEPS = [
  {
    number: '01',
    title: 'Müşterilerinizi Sisteme Yükleyin',
    description: 'Tüm müşteri verilerinizi tek bir yere toplayın. WhatsApp, email, telefon - tüm iletişim kanalları tek panelde. Artık hiçbir müşteri kaybolmaz.',
  },
  {
    number: '02',
    title: 'Yapay Zeka Kurumunuzu Öğrensin',
    description: 'Markanızı, ürünlerinizi, hizmetlerinizi tanımlayın. CRMENTUM gerçek bir çalışan gibi kurumunuzu öğrenir, size özel iletişim önerileri oluşturur.',
  },
  {
    number: '03',
    title: 'Otomasyonu Devreye Alın',
    description: 'Hangi müşteriye ne zaman, hangi kanaldan ulaşılacağını CRMENTUM planlar. Siz sadece onaylayın. Personel olmadan 24/7 müşteri takibi başlasın.',
  },
  {
    number: '04',
    title: 'Sonuçları İzleyin, Tasarruf Edin',
    description: 'Kim ne zaman yanıt verdi, hangi fırsatlar yaklaşıyor, hangi müşteri takip bekliyor - hepsi tek ekranda. %80 personel tasarrufu ile daha çok kazanın.',
  },
];

// Modern SVG Icons
const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17,8 12,3 7,8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <path d="M3 3l7.5 7.5L14 7l6 6" />
  </svg>
);

const ICONS = [UploadIcon, DesignIcon, CalendarIcon, ChartIcon];

export default function HowItWorks() {
  return (
    <HowItWorksWrapper id="nasil-calisir">
      <Container>
        <Content>
          <CustomOverTitle>Nasıl Çalışır</CustomOverTitle>
          <SectionTitle>4 Adımda İşletmenizi Dönüştürün</SectionTitle>
        </Content>
        <StepsGrid>
          {STEPS.map((step, idx) => {
            const IconComponent = ICONS[idx];
            return (
              <StepCard key={idx}>
                <StepNumber>{step.number}</StepNumber>
                <StepIconWrapper>
                  <IconComponent />
                </StepIconWrapper>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
                {idx < STEPS.length - 1 && <ArrowConnector>&rarr;</ArrowConnector>}
              </StepCard>
            );
          })}
        </StepsGrid>
      </Container>
    </HowItWorksWrapper>
  );
}

const HowItWorksWrapper = styled.div`
  padding: 10rem 0;
  background: rgb(var(--secondBackground));
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  position: relative;

  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=phone')} {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  position: relative;
  text-align: center;
  padding: 3rem 2rem;
`;

const StepNumber = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(var(--primary));
  margin-bottom: 1.5rem;
  letter-spacing: 0.1em;
`;

const StepIconWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto 2rem;
  padding: 1.2rem;
  background: linear-gradient(135deg, rgba(var(--primary), 0.1) 0%, rgba(var(--primary), 0.05) 100%);
  border-radius: 1.2rem;
  color: rgb(var(--primary));
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const StepTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: rgb(var(--text));
`;

const StepDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  opacity: 0.8;
`;

const ArrowConnector = styled.div`
  position: absolute;
  right: -2.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: rgb(var(--primary));
  opacity: 0.5;

  ${media('<=desktop')} {
    display: none;
  }
`;
