import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import FloatingParticles from 'components/FloatingParticles';
import OverTitle from 'components/OverTitle';
import Spotlight from 'components/Spotlight';
import { useDemoModalContext } from 'contexts/demo-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { openDemoModal } = useDemoModalContext();

  return (
    <HeroWrapper>
      <Spotlight />
      <FloatingParticles count={25} />
      <Contents>
        <CustomOverTitle>Yapay Zeka Destekli Müşteri İlişkileri Otomasyonu</CustomOverTitle>
        <Heading>
          Sizin için 24 saat çalışan, <HighlightedText>müşteri temsilcisi otomasyonu</HighlightedText>
        </Heading>
        <BulletList>
          <BulletItem>
            <BulletIcon>✓</BulletIcon>
            <BulletText>Müşteri iletişimini daha az personelle, daha düzenli ve daha verimli yönetin</BulletText>
          </BulletItem>
          <BulletItem>
            <BulletIcon>✓</BulletIcon>
            <BulletText>CRM süreçlerinizi rutine oturtun; tüm müşteri etkileşimlerini tek çerçevede toplayın</BulletText>
          </BulletItem>
          <BulletItem>
            <BulletIcon>✓</BulletIcon>
            <BulletText>Yapay zeka ile müşteri arşivinizi en değerli şekilde kullanın, hiçbir detayı kaçırmayın</BulletText>
          </BulletItem>
        </BulletList>
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
                className="cursor-target"
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
  position: relative;
  overflow: visible;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 70rem;
  position: relative;
  z-index: 1;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
  
  button {
    transition: all 0.3s ease;
    box-shadow: var(--shadow-lg);
    
    &:first-child {
      background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
      box-shadow: var(--shadow-glow);
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-glow-lg);
      }
    }
    
    &:last-child {
      backdrop-filter: blur(10px);
      border: 2px solid rgba(var(--primary), 0.3);
      
      &:hover {
        transform: translateY(-3px);
        border-color: rgb(var(--primary));
        background: rgba(var(--primary), 0.05);
      }
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  z-index: 1;

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

const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const BulletItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const BulletIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
  transition: all 0.3s ease;
  
  ${BulletItem}:hover & {
    transform: scale(1.1) rotate(360deg);
    box-shadow: 0 6px 20px rgba(24, 144, 255, 0.5);
  }
`;

const BulletText = styled.p`
  font-size: 1.7rem;
  line-height: 1.6;
  opacity: 0.85;
  transition: opacity 0.3s ease;
  
  ${BulletItem}:hover & {
    opacity: 1;
  }
  
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
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  ${media('<=tablet')} {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
`;

const HighlightedText = styled.span`
  color: rgb(var(--primary));
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.15) 0%, rgba(24, 144, 255, 0.08) 100%);
  padding: 0 0.5rem;
  border-radius: 0.4rem;
  position: relative;
  display: inline-block;
  box-shadow: 0 4px 20px rgba(24, 144, 255, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.1) 100%);
    border-radius: 0.4rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
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
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -1rem;
    background: radial-gradient(circle, rgba(24, 144, 255, 0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease;
  }
`;

const StatNumber = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(24, 144, 255, 0.2);
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
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(20px);
  border-radius: 1.6rem;
  box-shadow: var(--shadow-2xl);
  overflow: hidden;
  border: 1px solid rgba(var(--text), 0.1);
  position: relative;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1.6rem;
    padding: 2px;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.5), transparent, rgba(24, 144, 255, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-glow-lg);
    
    &::before {
      opacity: 1;
    }
  }
`;

const MockupHeader = styled.div`
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  padding: 1.2rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
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
  box-shadow: 0 2px 8px ${(p) => p.color}40;
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
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: rgb(var(--primary));
    transition: height 0.3s ease;
  }

  &:hover {
    background: rgba(var(--text), 0.05);
    color: rgb(var(--primary));
    padding-left: 2rem;
    
    &::before {
      height: 80%;
    }
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
  border-radius: 1rem;
  border: 1px solid rgba(var(--text), 0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateX(5px);
    border-color: rgba(var(--primary), 0.3);
    box-shadow: var(--shadow-md);
    
    &::before {
      opacity: 1;
    }
  }
`;

const StatCardIcon = styled.div`
  font-size: 2.5rem;
  transition: transform 0.3s ease;
  
  ${StatCard}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`;

const StatCardContent = styled.div``;

const StatCardNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, rgb(var(--text)) 0%, rgb(var(--primary)) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatCardLabel = styled.div`
  font-size: 1.2rem;
  opacity: 0.6;
`;
