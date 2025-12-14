import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
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
    name: 'Webhook',
    description: 'Gerçek zamanlı bildirimler için webhook entegrasyonu',
  },
  {
    name: 'API Erişimi',
    description: 'RESTful API ile tam kontrol',
  },
  {
    name: 'Excel/CSV',
    description: 'Kolay veri import ve export',
  },
  {
    name: 'N8N Otomasyon',
    description: 'N8N ile gelişmiş otomasyon',
  },
  {
    name: 'Zapier',
    description: 'Binlerce uygulama ile entegrasyon',
  },
  {
    name: 'Mobil Uyumlu',
    description: 'Her cihazdan erişim',
  },
];

export default function Integrations() {
  return (
    <IntegrationsWrapper id="entegrasyonlar">
      <Container>
        <Content>
          <CustomOverTitle>Entegrasyonlar</CustomOverTitle>
          <SectionTitle>Mevcut Araçlarınızla Uyumlu Çalışın</SectionTitle>
          <Description>
            CRMENTUM, API ve webhook desteği ile mevcut iş akışlarınıza kolayca entegre olur.
            N8N, Zapier ve daha fazlası ile otomasyonlarınızı güçlendirin.
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
              RESTful API'miz ile CRMENTUM'u istediğiniz şekilde özelleştirin.
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
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
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
  background: rgb(var(--cardBackground));
  border-radius: 1rem;
  border: 1px solid rgba(var(--text), 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

const IntegrationIconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.15) 0%, rgba(24, 144, 255, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: rgb(24, 144, 255);
  }
`;

const IntegrationName = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: rgb(var(--text));
`;

const IntegrationDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.7;
  line-height: 1.5;
`;

const ApiSection = styled.div`
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(24, 144, 255, 0.02) 100%);
  border-radius: 1.5rem;
  padding: 5rem;
  border: 1px solid rgba(24, 144, 255, 0.1);

  ${media('<=tablet')} {
    padding: 3rem 2rem;
  }
`;

const ApiContent = styled.div`
  text-align: center;
`;

const ApiTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: rgb(var(--text));
`;

const ApiDescription = styled.p`
  font-size: 1.6rem;
  opacity: 0.8;
  max-width: 60rem;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const CodeBlock = styled.div`
  background: rgba(var(--text), 0.05);
  border-radius: 0.8rem;
  padding: 2rem 3rem;
  display: inline-block;
  text-align: left;
  font-family: 'Fira Code', monospace;
`;

const CodeLine = styled.div`
  font-size: 1.4rem;
  padding: 0.5rem 0;
  color: rgb(var(--text));
`;

const Keyword = styled.span`
  color: rgb(var(--primary));
  font-weight: 600;
  margin-right: 1rem;
`;
