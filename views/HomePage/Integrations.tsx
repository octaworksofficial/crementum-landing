import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import TrueFocus from 'components/TrueFocus';
import { media } from 'utils/media';

// SVG Icons
const WebhookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ApiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <line x1="10" y1="9" x2="10" y2="9.01" />
  </svg>
);

const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23,4 23,10 17,10" />
    <polyline points="1,20 1,14 7,14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const ICONS = [WebhookIcon, ApiIcon, ExcelIcon, AutomationIcon, ZapierIcon, MobileIcon];

const INTEGRATIONS = [
  {
    name: 'WhatsApp',
    description: 'Müşterilerinize WhatsApp üzerinden otomatik mesajlar gönderin',
  },
  {
    name: 'Email',
    description: 'Profesyonel email kampanyaları tek tıkla',
  },
  {
    name: 'SMS',
    description: 'Hızlı bilgilendirme için SMS entegrasyonu',
  },
  {
    name: 'Telefon',
    description: 'Arama geçmişi ve notlar tek yerde',
  },
  {
    name: 'Sosyal Medya',
    description: 'Facebook, Instagram mesajlarını tek panelden yönetin',
  },
  {
    name: 'Canlı Chat',
    description: 'Web sitenizden gelen mesajları takip edin',
  },
];

export default function Integrations() {
  return (
    <IntegrationsWrapper id="entegrasyonlar">
      <Container>
        <Content>
          <CustomOverTitle>Çok Kanallı İletişim</CustomOverTitle>
          <TrueFocus sentence="Tüm Kanallarınızı Tek Noktadan Yönetin" manualMode={true} blurAmount={3} borderColor="#1890ff">
            <SectionTitle>Tüm Kanallarınızı Tek Noktadan Yönetin</SectionTitle>
          </TrueFocus>
          <Description>
            WhatsApp, email, SMS, telefon, sosyal medya - hangi kanaldan ulaşıldı, ne zaman yanıt verildi,
            hepsi tek ekranda. Artık hiçbir kanal atlanmaz, hiçbir mesaj kaybolmaz.
          </Description>
        </Content>
        
        <IntegrationsGrid>
          {INTEGRATIONS.map((integration, idx) => {
            const IconComponent = ICONS[idx];
            return (
              <IntegrationCard key={idx}>
                <IntegrationIconWrapper>
                  <IconComponent />
                </IntegrationIconWrapper>
                <IntegrationName>{integration.name}</IntegrationName>
                <IntegrationDescription>{integration.description}</IntegrationDescription>
              </IntegrationCard>
            );
          })}
        </IntegrationsGrid>

        <ApiSection>
          <ApiContent>
            <ApiTitle>Güçlü API ile Sınırsız Olasılıklar</ApiTitle>
            <ApiDescription>
              RESTful API&apos;miz ile CRMENTUM&apos;u istediğiniz şekilde özelleştirin.
              Detaylı dokümantasyon ve örnek kodlarla hızlıca başlayın.
            </ApiDescription>
            <CodeBlock>
              <CodeLine><Keyword>POST</Keyword> /api/v1/campaigns</CodeLine>
              <CodeLine><Keyword>GET</Keyword> /api/v1/contacts</CodeLine>
              <CodeLine><Keyword>POST</Keyword> /api/v1/templates</CodeLine>
              <CodeLine><Keyword>GET</Keyword> /api/v1/analytics</CodeLine>
            </CodeBlock>
          </ApiContent>
        </ApiSection>
      </Container>
    </IntegrationsWrapper>
  );
}

const IntegrationsWrapper = styled.div`
  padding: 10rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: -20%;
    width: 60rem;
    height: 60rem;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.03) 0%,
      transparent 70%
    );
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

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  max-width: 70rem;
  margin: 2rem auto 0;
  line-height: 1.7;
`;

const IntegrationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  margin-bottom: 8rem;
  position: relative;
  z-index: 1;

  ${media('<=desktop')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media('<=phone')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IntegrationCard = styled.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(var(--text), 0.08);
  box-shadow: var(--shadow-md);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    padding: 2px;
    background: linear-gradient(135deg, rgb(var(--primary)), #096dd9);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: var(--shadow-glow);
    
    &::before,
    &::after {
      opacity: 1;
    }
  }
`;

const IntegrationIconWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.08) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  box-shadow: var(--shadow-md);
  transition: all 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(var(--primary)), #096dd9);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.5s ease;
  }
  
  ${IntegrationCard}:hover & {
    transform: scale(1.2) rotate(10deg);
    
    &::before {
      opacity: 0.3;
    }
  }
  
  svg {
    width: 3rem;
    height: 3rem;
    color: rgb(24, 144, 255);
    transition: all 0.5s ease;
    position: relative;
    z-index: 1;
  }
  
  ${IntegrationCard}:hover & svg {
    transform: scale(1.1);
    color: rgb(var(--primary));
  }
`;

const IntegrationName = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: rgb(var(--text));
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  
  ${IntegrationCard}:hover & {
    color: rgb(var(--primary));
  }
`;

const IntegrationDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.7;
  line-height: 1.5;
  position: relative;
  z-index: 1;
  transition: opacity 0.3s ease;
  
  ${IntegrationCard}:hover & {
    opacity: 0.95;
  }
`;

const ApiSection = styled.div`
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.08) 0%, rgba(24, 144, 255, 0.03) 100%);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  padding: 5rem;
  border: 1px solid rgba(24, 144, 255, 0.15);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -30%;
    width: 50rem;
    height: 50rem;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.1) 0%,
      transparent 70%
    );
  }

  ${media('<=tablet')} {
    padding: 3rem 2rem;
  }
`;

const ApiContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const ApiTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, rgb(var(--text)) 0%, rgb(var(--primary)) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ApiDescription = styled.p`
  font-size: 1.6rem;
  opacity: 0.8;
  max-width: 60rem;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const CodeBlock = styled.div`
  background: rgba(var(--text), 0.06);
  backdrop-filter: blur(10px);
  border-radius: 1.2rem;
  padding: 2.5rem 3.5rem;
  display: inline-block;
  text-align: left;
  font-family: 'Fira Code', 'Courier New', monospace;
  border: 1px solid rgba(var(--text), 0.1);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, transparent 100%);
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(var(--primary), 0.3);
  }
`;

const CodeLine = styled.div`
  font-size: 1.4rem;
  padding: 0.6rem 0;
  color: rgb(var(--text));
  position: relative;
  z-index: 1;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateX(5px);
    color: rgb(var(--primary));
  }
`;

const Keyword = styled.span`
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  margin-right: 1rem;
  text-shadow: 0 0 20px rgba(24, 144, 255, 0.5);
`;
