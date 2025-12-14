import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Button from 'components/Button';
import SectionTitle from 'components/SectionTitle';
import { useDemoModalContext } from 'contexts/demo-modal.context';

export default function PricingTablesSection() {
  const { openDemoModal } = useDemoModalContext();

  return (
    <Wrapper>
      <SectionTitle>İşletmenize Uygun Çözümü Keşfedin</SectionTitle>
      <Subtitle>Ücretsiz demo ile platformumuzu deneyin. Size özel teklif alalım.</Subtitle>
      <AutofitGrid>
        <PlanCard>
          <PlanTitle>Başlangıç</PlanTitle>
          <PlanDescription>Küçük işletmeler için ideal başlangıç paketi</PlanDescription>
          <BenefitsList>
            <BenefitItem>✓ Temel müşteri yönetimi</BenefitItem>
            <BenefitItem>✓ Email şablon oluşturucu</BenefitItem>
            <BenefitItem>✓ Temel analitik raporlar</BenefitItem>
            <BenefitItem>✓ Email desteği</BenefitItem>
          </BenefitsList>
          <PlanButton onClick={() => openDemoModal('pricing-page', 'Başlangıç')}>
            Demo Talep Et
          </PlanButton>
        </PlanCard>
        <PlanCard highlighted>
          <PopularBadge>En Popüler</PopularBadge>
          <PlanTitle>Profesyonel</PlanTitle>
          <PlanDescription>Büyüyen işletmeler için kapsamlı çözüm</PlanDescription>
          <BenefitsList>
            <BenefitItem>✓ Gelişmiş müşteri segmentasyonu</BenefitItem>
            <BenefitItem>✓ Sınırsız email şablonu</BenefitItem>
            <BenefitItem>✓ A/B testi</BenefitItem>
            <BenefitItem>✓ Detaylı analitik</BenefitItem>
            <BenefitItem>✓ Otomasyon desteği</BenefitItem>
            <BenefitItem>✓ Öncelikli destek</BenefitItem>
          </BenefitsList>
          <PlanButton highlighted onClick={() => openDemoModal('pricing-page', 'Profesyonel')}>
            Teklif Al
          </PlanButton>
        </PlanCard>
        <PlanCard>
          <PlanTitle>Kurumsal</PlanTitle>
          <PlanDescription>Büyük organizasyonlar için özel çözümler</PlanDescription>
          <BenefitsList>
            <BenefitItem>✓ Sınırsız kullanıcı</BenefitItem>
            <BenefitItem>✓ Özel SLA anlaşması</BenefitItem>
            <BenefitItem>✓ Dedicated sunucu</BenefitItem>
            <BenefitItem>✓ Özel entegrasyonlar</BenefitItem>
            <BenefitItem>✓ Beyaz etiket seçeneği</BenefitItem>
            <BenefitItem>✓ Eğitim ve onboarding</BenefitItem>
            <BenefitItem>✓ 7/24 öncelikli destek</BenefitItem>
          </BenefitsList>
          <PlanButton onClick={() => openDemoModal('pricing-page', 'Kurumsal')}>
            İletişime Geç
          </PlanButton>
        </PlanCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.8rem;
  opacity: 0.7;
  margin-top: 1rem;
`;

const PlanCard = styled.div<{ highlighted?: boolean }>`
  position: relative;
  padding: 3rem 2.5rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  border: ${(p) => (p.highlighted ? '2px solid rgb(var(--primary))' : '1px solid rgba(var(--text), 0.1)')};
  box-shadow: ${(p) => (p.highlighted ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
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

const PlanTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const PlanDescription = styled.p`
  font-size: 1.4rem;
  opacity: 0.7;
  text-align: center;
  margin-bottom: 2rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const BenefitItem = styled.li`
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(var(--text), 0.05);

  &:last-child {
    border-bottom: none;
  }
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
