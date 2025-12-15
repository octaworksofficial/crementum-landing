import styled from 'styled-components';
import Container from 'components/Container';
import Page from 'components/Page';
import { media } from 'utils/media';

export default function AboutPage() {
  return (
    <Page title="Hakkımızda" description="CRMENTUM ve CERİLAS hakkında bilgi edinin.">
      <Container>
        <PageWrapper>
          <Section>
            <SectionTitle>CRMENTUM Hakkında</SectionTitle>
            <Paragraph>
              <strong>CRMENTUM</strong>, işletmelerin müşteri ilişkilerini güçlendirmesine ve e-posta pazarlama 
              stratejilerini optimize etmesine yardımcı olan kapsamlı bir CRM ve e-posta pazarlama platformudur.
            </Paragraph>
            <Paragraph>
              Kullanıcı dostu arayüzümüz ve güçlü otomasyon araçlarımızla, küçük işletmelerden büyük 
              kurumsal şirketlere kadar her ölçekte firmaya hizmet veriyoruz. Müşteri segmentasyonu, 
              davranış takibi, kişiselleştirilmiş kampanyalar ve detaylı analitik raporlarla 
              pazarlama stratejilerinizi bir üst seviyeye taşıyoruz.
            </Paragraph>
            
            <FeatureGrid>
              <FeatureItem>
                <FeatureIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Müşteri Yönetimi</FeatureTitle>
                <FeatureDesc>Tüm müşteri verilerinizi tek bir platformda yönetin</FeatureDesc>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>E-posta Pazarlama</FeatureTitle>
                <FeatureDesc>Profesyonel e-posta kampanyaları oluşturun</FeatureDesc>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Otomasyon</FeatureTitle>
                <FeatureDesc>İş süreçlerinizi otomatikleştirin</FeatureDesc>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Analitik</FeatureTitle>
                <FeatureDesc>Detaylı raporlar ve içgörüler elde edin</FeatureDesc>
              </FeatureItem>
            </FeatureGrid>
          </Section>

          <Divider />

          <Section>
            <SectionTitle>CERİLAS Hakkında</SectionTitle>
            <Paragraph>
              <strong>CERİLAS YÜKSEK TEKNOLOJİ SANAYİ VE TİCARET A.Ş.</strong>, yapay zeka, robotik süreç 
              otomasyonu (RPA) ve veri mühendisliği alanlarında Ar-Ge odaklı çözümler geliştiren 
              bir teknoloji şirketidir.
            </Paragraph>
            <Paragraph>
              &ldquo;Dream, Design, Disrupt&rdquo; (Hayal Et, Tasarla, Dönüştür) mottosuyla yola çıkan CERİLAS, 
              açık inovasyon felsefesiyle üniversiteler, özel sektör şirketleri ve topluluklar ile 
              iş birliği yaparak yıkıcı inovasyon projelerine imza atıyor.
            </Paragraph>
            <Paragraph>
              Şirketimiz, TÜBİTAK BiGG programı destekli projeleriyle de tanınmakta ve Türkiye&apos;nin 
              teknoloji ekosisteminde aktif rol almaktadır.
            </Paragraph>

            <StatsGrid>
              <StatItem>
                <StatNumber>4+</StatNumber>
                <StatLabel>Aktif Ar-Ge Projesi</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>7</StatNumber>
                <StatLabel>Patent</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>₺5M+</StatNumber>
                <StatLabel>Proje Başına Ar-Ge Bütçesi</StatLabel>
              </StatItem>
            </StatsGrid>
          </Section>

          <Divider />

          <Section>
            <SectionTitle>İletişim</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </ContactIcon>
                <ContactText>
                  Camtepe Mah. Mahmut Tevfik Atay Bul. No 4D<br />
                  Şahinbey / Gaziantep, Türkiye
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </ContactIcon>
                <ContactText>0544 943 07 26</ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </ContactIcon>
                <ContactText>
                  <a href="mailto:hi@cerilas.com">hi@cerilas.com</a><br />
                  <a href="mailto:info@cerilas.com">info@cerilas.com</a>
                </ContactText>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </ContactIcon>
                <ContactText>
                  <a href="https://www.linkedin.com/company/cerilas" target="_blank" rel="noopener noreferrer">
                    LinkedIn&apos;de takip edin
                  </a>
                </ContactText>
              </ContactItem>
            </ContactInfo>
          </Section>
        </PageWrapper>
      </Container>
    </Page>
  );
}

const PageWrapper = styled.div`
  padding: 8rem 0;
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  color: rgb(var(--text));
  margin-bottom: 2rem;
  
  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  color: rgba(var(--text), 0.8);
  margin-bottom: 1.5rem;
  
  strong {
    color: rgb(var(--primary));
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(var(--text), 0.1);
  margin: 4rem 0;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background: rgba(var(--primary), 0.05);
  border-radius: 1.2rem;
  padding: 2rem;
  border: 1px solid rgba(var(--primary), 0.1);
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
    stroke: rgb(var(--primary));
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgb(var(--text));
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 1.5rem;
  color: rgba(var(--text), 0.7);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(var(--primary), 0.05);
  border-radius: 1.2rem;
  border: 1px solid rgba(var(--primary), 0.1);
`;

const StatNumber = styled.div`
  font-size: 3.6rem;
  font-weight: bold;
  color: rgb(var(--primary));
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.5rem;
  color: rgba(var(--text), 0.7);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

const ContactIcon = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
    stroke: rgb(var(--primary));
  }
`;

const ContactText = styled.div`
  font-size: 1.6rem;
  color: rgba(var(--text), 0.8);
  line-height: 1.6;
  
  a {
    color: rgb(var(--primary));
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
