import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
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
          <CustomOverTitle>Neler Kazanacaksınız?</CustomOverTitle>
          <SectionTitle>İşletmenizi dönüştüren özellikler</SectionTitle>
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
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  background: rgb(var(--cardBackground));
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(var(--text), 0.06);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(24, 144, 255, 0.15);
  }
`;

const FeatureImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 28rem;
  overflow: hidden;

  ${media('<=tablet')} {
    height: 22rem;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${FeatureCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
`;

const FeatureIconOverlay = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: rgb(24, 144, 255);
  }
`;

const FeatureContent = styled.div`
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: rgb(var(--text));
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  color: rgba(var(--text), 0.75);
  flex: 1;
`;
