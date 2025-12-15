import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { useDemoModalContext } from 'contexts/demo-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { openDemoModal } = useDemoModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Yapay Zeka Destekli Müşteri İlişkileri Otomasyonu</CustomOverTitle>
        <Heading>
          Sizin için 24 saat çalışan, <HighlightedText>müşteri temsilcisi otomasyonu</HighlightedText>
        </Heading>
        <Description>
          Müşteri iletişimini daha az personelle, daha düzenli ve daha verimli yönetin. 
          CRM süreçlerinizi rutine oturtun; otomasyonlarla tüm müşteri etkileşimlerini tek bir çerçevede toplayın. 
          Müşteri arşivinizi en değerli şekilde kullanın, hiçbir detayı kaçırmayın ve her müşteriyle maksimum verimle çalışın.
        </Description>
        <CustomButtonGroup>
          <Button onClick={() => openDemoModal('hero', 'demo')}>
            Ücretsiz Keşfet <span>&rarr;</span>
          </Button>
          <Button transparent onClick={() => openDemoModal('hero', 'teklif')}>
            Teklif Al <span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
        <StatsContainer>
          <StatItem>
            <StatNumber>%100</StatNumber>
            <StatLabel>Verimlilik Artışı</StatLabel>
          </StatItem>
          <StatDivider />
          <StatItem>
            <StatNumber>%0</StatNumber>
            <StatLabel>Unutulan Müşteri</StatLabel>
          </StatItem>
          <StatDivider />
          <StatItem>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Kesintisiz Çalışma</StatLabel>
          </StatItem>
        </StatsContainer>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

function HeroIllustration() {
  const [activeItem, setActiveItem] = useState(0);
  
  const menuItems = [
    { icon: '📊', label: 'Dashboard' },
    { icon: '👥', label: 'Kişiler' },
    { icon: '📬', label: 'Kampanyalar' },
    { icon: '📝', label: 'Şablonlar' },
    { icon: '📈', label: 'Raporlar' },
  ];

  const dashboardStats = [
    [
      { icon: '📧', number: '12,453', label: 'Gönderilen Email' },
      { icon: '👁️', number: '%42.3', label: 'Açılma Oranı' },
      { icon: '🖱️', number: '%18.7', label: 'Tıklama Oranı' },
    ],
    [
      { icon: '👤', number: '3,847', label: 'Toplam Kişi' },
      { icon: '⭐', number: '1,234', label: 'Aktif Aboneler' },
      { icon: '📋', number: '8', label: 'Segmentler' },
    ],
    [
      { icon: '🚀', number: '24', label: 'Aktif Kampanya' },
      { icon: '📅', number: '156', label: 'Tamamlanan' },
      { icon: '⏳', number: '3', label: 'Bekleyen' },
    ],
    [
      { icon: '🎨', number: '45', label: 'Email Şablonu' },
      { icon: '✨', number: '12', label: 'Özel Tasarım' },
      { icon: '📑', number: '33', label: 'Hazır Şablon' },
    ],
    [
      { icon: '📊', number: '%98.2', label: 'Teslimat Oranı' },
      { icon: '📈', number: '+23%', label: 'Büyüme' },
      { icon: '💰', number: '₺45K', label: 'Dönüşüm Değeri' },
    ],
  ];

  return (
    <IllustrationWrapper>
      <DashboardMockup>
        <MockupHeader>
          <MockupDots>
            <Dot color="#FF5F56" />
            <Dot color="#FFBD2E" />
            <Dot color="#27CA40" />
          </MockupDots>
          <MockupTitle>CRMENTUM Dashboard</MockupTitle>
        </MockupHeader>
        <MockupContent>
          <MockupSidebar>
            {menuItems.map((item, index) => (
              <SidebarItem 
                key={index} 
                active={activeItem === index}
                onClick={() => setActiveItem(index)}
              >
                {item.icon} {item.label}
              </SidebarItem>
            ))}
          </MockupSidebar>
          <MockupMain>
            {dashboardStats[activeItem].map((stat, index) => (
              <StatCard key={index}>
                <StatCardIcon>{stat.icon}</StatCardIcon>
                <StatCardContent>
                  <StatCardNumber>{stat.number}</StatCardNumber>
                  <StatCardLabel>{stat.label}</StatCardLabel>
                </StatCardContent>
              </StatCard>
            ))}
          </MockupMain>
        </MockupContent>
      </DashboardMockup>
    </IllustrationWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  align-items: center;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 70rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  ${media('<=desktop')} {
    margin-top: 3rem;
    justify-content: center;
    width: 100%;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.7;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
`;

const HighlightedText = styled.span`
  color: rgb(var(--primary));
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, rgba(24, 144, 255, 0.05) 100%);
  padding: 0 0.5rem;
  border-radius: 0.4rem;
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem 0;
  
  ${media('<=phone')} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 0 2rem;
`;

const StatNumber = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  color: rgb(var(--primary));
`;

const StatLabel = styled.div`
  font-size: 1.3rem;
  opacity: 0.7;
  margin-top: 0.5rem;
`;

const StatDivider = styled.div`
  width: 1px;
  height: 4rem;
  background: rgba(var(--text), 0.2);

  ${media('<=phone')} {
    display: none;
  }
`;

// Dashboard Mockup Styles
const IllustrationWrapper = styled.div`
  width: 100%;
  max-width: 55rem;
`;

const DashboardMockup = styled.div`
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border: 1px solid rgba(var(--text), 0.1);
`;

const MockupHeader = styled.div`
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const MockupDots = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const Dot = styled.div<{ color: string }>`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: ${(p) => p.color};
`;

const MockupTitle = styled.div`
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
`;

const MockupContent = styled.div`
  display: flex;
  min-height: 25rem;
`;

const MockupSidebar = styled.div`
  width: 14rem;
  background: rgba(var(--text), 0.03);
  padding: 1.5rem 0;
  border-right: 1px solid rgba(var(--text), 0.08);

  ${media('<=phone')} {
    display: none;
  }
`;

const SidebarItem = styled.div<{ active?: boolean }>`
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  color: ${(p) => (p.active ? 'rgb(var(--primary))' : 'rgba(var(--text), 0.7)')};
  background: ${(p) => (p.active ? 'rgba(24, 144, 255, 0.1)' : 'transparent')};
  border-left: ${(p) => (p.active ? '3px solid rgb(var(--primary))' : '3px solid transparent')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(var(--text), 0.05);
  }
`;

const MockupMain = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(var(--text), 0.02);
  border-radius: 0.8rem;
  border: 1px solid rgba(var(--text), 0.06);
`;

const StatCardIcon = styled.div`
  font-size: 2.5rem;
`;

const StatCardContent = styled.div``;

const StatCardNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--text));
`;

const StatCardLabel = styled.div`
  font-size: 1.2rem;
  opacity: 0.6;
`;
