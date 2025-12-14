import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useDemoModalContext } from 'contexts/demo-modal.context';
import { media } from 'utils/media';

const PLANS = [
  {
    name: 'Başlangıç',
    description: 'Küçük işletmeler için ideal başlangıç paketi',
    features: [
      'Temel müşteri yönetimi',
      'Email şablon oluşturucu',
      'Temel analitik raporlar',
      'Email desteği',
    ],
    cta: 'Demo Talep Et',
    highlighted: false,
  },
  {
    name: 'Profesyonel',
    description: 'Büyüyen işletmeler için kapsamlı çözüm',
    features: [
      'Gelişmiş müşteri segmentasyonu',
      'Sınırsız email şablonu',
      'A/B testi',
      'Detaylı analitik',
      'Otomasyon desteği',
      'Öncelikli destek',
    ],
    cta: 'Teklif Al',
    highlighted: true,
  },
  {
    name: 'Kurumsal',
    description: 'Büyük organizasyonlar için özel çözümler',
    features: [
      'Sınırsız kullanıcı',
      'Özel SLA anlaşması',
      'Dedicated sunucu',
      'Özel entegrasyonlar',
      'Beyaz etiket seçeneği',
      'Eğitim ve onboarding',
      '7/24 öncelikli destek',
    ],
    cta: 'İletişime Geç',
    highlighted: false,
  },
];

export default function Pricing() {
  const { openDemoModal } = useDemoModalContext();

  const handlePlanClick = (planName: string) => {
    openDemoModal('pricing', planName);
  };

  return (
    <PricingWrapper id="planlar">
      <Container>
        <Content>
          <CustomOverTitle>Çözümler</CustomOverTitle>
          <SectionTitle>İşletmenize Uygun Planı Keşfedin</SectionTitle>
          <Subtitle>Ücretsiz demo ile platformumuzu deneyin. Size özel teklif alalım.</Subtitle>
        </Content>
        <PricingGrid>
          {PLANS.map((plan, idx) => (
            <PricingCard key={idx} highlighted={plan.highlighted}>
              {plan.highlighted && <PopularBadge>En Popüler</PopularBadge>}
              <PlanName>{plan.name}</PlanName>
              <PlanDescription>{plan.description}</PlanDescription>
              <FeaturesList>
                {plan.features.map((feature, featureIdx) => (
                  <FeatureItem key={featureIdx}>
                    <CheckIcon>✓</CheckIcon>
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
              <PlanButton highlighted={plan.highlighted} onClick={() => handlePlanClick(plan.name)}>
                {plan.cta}
              </PlanButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </PricingWrapper>
  );
}

const PricingWrapper = styled.div`
  padding: 10rem 0;
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  opacity: 0.7;
  margin-top: 2rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: stretch;
  max-width: 100rem;
  margin: 0 auto;

  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    max-width: 45rem;
    margin: 0 auto;
  }
`;

const PricingCard = styled.div<{ highlighted?: boolean }>`
  position: relative;
  padding: 3rem 2.5rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  border: ${(p) => (p.highlighted ? '2px solid rgb(var(--primary))' : '1px solid rgba(var(--text), 0.1)')};
  box-shadow: ${(p) => (p.highlighted ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
  transform: ${(p) => (p.highlighted ? 'scale(1.05)' : 'scale(1)')};
  transition: all 0.3s ease;

  &:hover {
    transform: ${(p) => (p.highlighted ? 'scale(1.07)' : 'scale(1.02)')};
    box-shadow: var(--shadow-lg);
  }

  ${media('<=desktop')} {
    transform: none;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -1.2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(var(--primary));
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--text));
  margin-bottom: 1.5rem;
`;

const PlanDescription = styled.p`
  font-size: 1.4rem;
  opacity: 0.7;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(var(--text), 0.05);

  &:last-child {
    border-bottom: none;
  }
`;

const CheckIcon = styled.span`
  color: rgb(var(--primary));
  margin-right: 1rem;
  font-weight: bold;
`;

const PlanButton = styled(Button)<{ highlighted?: boolean }>`
  width: 100%;
  text-align: center;
  background: ${(p) => (p.highlighted ? 'rgb(var(--primary))' : 'transparent')};
  border: 2px solid rgb(var(--primary));
  color: ${(p) => (p.highlighted ? 'white' : 'rgb(var(--primary))')};

  &:hover {
    background: rgb(var(--primary));
    color: white;
  }
`;
