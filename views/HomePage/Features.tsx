import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import TrueFocus from 'components/TrueFocus';
import { media } from 'utils/media';

// Modern SVG Icons
// 1. Hiçbir Müşteri Atlanmaz - Checklist icon
const ChecklistIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

// 2. Tarihler ve Saatler - Calendar & Clock icon
const CalendarClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="16" r="3" />
    <polyline points="12,14.5 12,16 13,17" />
  </svg>
);

// 3. Yapay Zeka - Brain/AI icon
const BrainAIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4V6a4 4 0 0 0-4-4z" />
    <path d="M8 16v2a4 4 0 0 0 8 0v-2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="16" y1="10" x2="16" y2="14" />
  </svg>
);

// 4. Çok Kanallı İletişim - Multi-channel icon
const MultiChannelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

// 5. Tüm Geçmiş - Database/History icon
const DatabaseHistoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M12 12v7" />
  </svg>
);

// 6. 24/7 Kesintisiz - Clock 24/7 icon
const Clock247Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const ICONS = [ChecklistIcon, CalendarClockIcon, BrainAIIcon, MultiChannelIcon, DatabaseHistoryIcon, Clock247Icon];

const FEATURES = [
  {
    title: 'Hiçbir Müşteri Atlanmaz',
    description:
      'Yoğun iş temposunda müşterileri takip etmek zorlaşabilir. CRMENTUM, her müşteriyi otomatik olarak takip eder ve hiçbirinin unutulmamasını sağlar. Ekip verimliliğinizi artırın, müşteri memnuniyetini maksimize edin.',
  },
  {
    title: 'Tarihler ve Saatler Asla Karışmaz',
    description:
      'Randevular, takipler ve hatırlatmalar tam zamanında gerçekleşir. Manuel takip sistemlerinin yarattığı karmaşa artık yok. Müşterileriniz her zaman doğru zamanda bilgilendirilir, profesyonel imajınız güçlenir.',
  },
  {
    title: 'Yapay Zeka ile Kurumunuzu Tanır',
    description:
      'Gerçek bir insan gibi kurumunuzu öğrenir, markanızın sesini yakalar. Size özel iletişim önerileri oluşturur, her müşteriye kişiselleştirilmiş mesajlar gönderir. Siz sadece onaylarsınız.',
  },
  {
    title: 'Çok Kanallı İletişim Yönetimi',
    description:
      'WhatsApp, email, SMS, telefon - tüm iletişim kanallarınızı tek yerden yönetin. Hangi kanaldan ulaşıldı, ne zaman yanıt verildi, hepsi tek ekranda. Dağınık iletişim kanallarını tek bir merkezde toplayın.',
  },
  {
    title: 'Tüm Müşteri Geçmişi Tek Yerde',
    description:
      'Kim ne attı, hangi kanallardan ulaşıldı, kaç defa konuşuldu - tüm müşteri geçmişi tek bir panelde. Ekip üyeleriniz müşteri geçmişine anında erişir, daha bilinçli görüşmeler yapar.',
  },
  {
    title: '24/7 Kesintisiz Çalışma',
    description:
      'İş akışınız kesintisiz devam eder. Gece yarısı gelen müşteri talepleri bile sabah ilk iş karşılanmaya hazır. Otomatik sistemler sayesinde hiçbir fırsat kaçmaz, iş sürekliliği sağlanır.',
  },
  {
    title: 'Operasyonel Verimlilik',
    description:
      'Rutin işleri otomatikleştirerek ekibinizin zamanını optimize edin. Ekibiniz stratejik işlere ve satışa odaklanırken, rutin müşteri takibi otomatik olarak yürür. İş gücünüzü en değerli alanlarda kullanın.',
  },
  {
    title: 'Verileriniz Güvende',
    description:
      'KVKK uyumlu, güvenli veri saklama. Müşteri bilgileriniz şifrelenir, yetkisiz erişime karşı korunur. Güvenlik sertifikalarımızla gönül rahatlığıyla çalışın.',
  },
];

export default function Features() {
  const featureImages = [
    '/crmentum-photos/1.jpg',
    '/crmentum-photos/2.jpg',
    '/crmentum-photos/3.jpg',
    '/crmentum-photos/4.jpg',
    '/crmentum-photos/5.jpg',
    '/crmentum-photos/6.jpg',
  ];

  return (
    <FeaturesWrapper id="ozellikler">
      <Container>
        <Content>
          <TrueFocus sentence="İşletmenizi dönüştüren özellikler" manualMode={true} blurAmount={3} borderColor="#1890ff">
            <SectionTitle>İşletmenizi dönüştüren özellikler</SectionTitle>
          </TrueFocus>
        </Content>
        <FeaturesGrid>
          {FEATURES.slice(0, 6).map((feature, idx) => {
            const IconComponent = ICONS[idx];
            return (
              <FeatureCard key={idx}>
                <FeatureImageWrapper>
                  <FeatureImage src={featureImages[idx]} alt={feature.title} />
                  <ImageOverlay />
                  <FeatureIconOverlay>
                    <IconComponent />
                  </FeatureIconOverlay>
                </FeatureImageWrapper>
                <FeatureContent>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            );
          })}
        </FeaturesGrid>
      </Container>
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.div`
  padding: 10rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 40rem;
    height: 40rem;
    background: radial-gradient(circle, rgba(24, 144, 255, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    right: -10%;
    width: 50rem;
    height: 50rem;
    background: radial-gradient(circle, rgba(24, 144, 255, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
  z-index: 1;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  position: relative;
  z-index: 1;

  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  background: rgba(var(--cardBackground), 0.7);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(var(--text), 0.08);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2rem;
    padding: 2px;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.3), transparent, rgba(24, 144, 255, 0.2));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: var(--shadow-glow-lg);
    border-color: rgba(var(--primary), 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:nth-child(1) { --index: 0; }
  &:nth-child(2) { --index: 1; }
  &:nth-child(3) { --index: 2; }
  &:nth-child(4) { --index: 3; }
  &:nth-child(5) { --index: 4; }
  &:nth-child(6) { --index: 5; }
`;

const FeatureImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 28rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  ${FeatureCard}:hover &::after {
    opacity: 1;
  }

  ${media('<=tablet')} {
    height: 22rem;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.95);

  ${FeatureCard}:hover & {
    transform: scale(1.15);
    filter: brightness(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(24, 144, 255, 0.05) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  transition: background 0.5s ease;
  
  ${FeatureCard}:hover & {
    background: linear-gradient(
      180deg,
      rgba(24, 144, 255, 0.1) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const FeatureIconOverlay = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-glow);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(var(--primary)), #096dd9);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.15) rotate(10deg);
    box-shadow: var(--shadow-glow-lg);
    
    &::before {
      opacity: 0.2;
    }
  }

  svg {
    width: 3rem;
    height: 3rem;
    color: rgb(24, 144, 255);
    transition: all 0.5s ease;
  }
  
  ${FeatureCard}:hover & svg {
    transform: scale(1.1);
    color: rgb(var(--primary));
  }
`;

const FeatureContent = styled.div`
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 2.5rem;
    right: 2.5rem;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(var(--primary), 0.3) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  ${FeatureCard}:hover &::before {
    opacity: 1;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: rgb(var(--text));
  line-height: 1.3;
  transition: all 0.3s ease;
  
  ${FeatureCard}:hover & {
    color: rgb(var(--primary));
    transform: translateX(5px);
  }
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  color: rgba(var(--text), 0.75);
  flex: 1;
  transition: color 0.3s ease;
  
  ${FeatureCard}:hover & {
    color: rgba(var(--text), 0.9);
  }
`;
