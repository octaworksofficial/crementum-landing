import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import Meteors from 'components/Meteors';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import TrueFocus from 'components/TrueFocus';
import { media } from 'utils/media';

const TESTIMONIALS = [
  {
    content: 'Ekip verimliliğimiz inanılmaz arttı. Müşteri memnuniyeti de yükseldi çünkü artık hiçbir müşteriyi atlama riski yok. CRMENTUM ile operasyonel maliyetlerimizi önemli ölçüde düşürdük.',
    author: {
      name: 'Ahmet Yılmaz',
      title: 'Genel Müdür',
      company: 'TechStart A.Ş.',
    },
  },
  {
    content: 'Tüm iletişim kanallarımızı tek yerden yönetmek oyunun kurallarını değiştirdi. Müşteri geçmişine anında erişim sayesinde ekip performansımız katlandı. Satışlarımız 3 ayda ikiye katlandı.',
    author: {
      name: 'Zeynep Kaya',
      title: 'Satış Direktörü',
      company: 'ModaOnline',
    },
  },
  {
    content: 'Randevular ve takipler artık otomatik yürüyor. Yapay zeka markanızın diline uygun mesajlar hazırlıyor, biz sadece onaylıyoruz. Ekibimizin zamanını daha stratejik işlere ayırabiliyoruz.',
    author: {
      name: 'Mehmet Demir',
      title: 'Kurucu',
      company: 'B2B Solutions',
    },
  },
];

const STATS = [
  { number: '%100', label: 'Verimlilik Artışı' },
  { number: '%100', label: 'Müşteri Takip Oranı' },
  { number: '24/7', label: 'Kesintisiz Çalışma' },
  { number: '%0', label: 'Unutulan Müşteri' },
];

export default function Testimonials() {
  return (
    <TestimonialsWrapper>
      <Meteors number={15} />
      <Container>
        <Content>
          <CustomOverTitle>Müşterilerimiz Neler Kazandı</CustomOverTitle>
          <TrueFocus sentence="Gerçek işletmelerden gerçek sonuçlar" manualMode={true} blurAmount={3} borderColor="#1890ff">
            <SectionTitle>Gerçek işletmelerden gerçek sonuçlar</SectionTitle>
          </TrueFocus>
        </Content>

        <StatsGrid>
          {STATS.map((stat, idx) => (
            <StatCard key={idx}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <TestimonialsGrid>
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={idx}>
              <QuoteIcon>&ldquo;</QuoteIcon>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <AuthorInfo>
                <AuthorAvatar>{testimonial.author.name.charAt(0)}</AuthorAvatar>
                <AuthorDetails>
                  <AuthorName>{testimonial.author.name}</AuthorName>
                  <AuthorTitle>{testimonial.author.title}, {testimonial.author.company}</AuthorTitle>
                </AuthorDetails>
              </AuthorInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsWrapper>
  );
}

const TestimonialsWrapper = styled.div`
  padding: 10rem 0;
  background: rgb(var(--secondBackground));
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -15%;
    width: 50rem;
    height: 50rem;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -15%;
    width: 45rem;
    height: 45rem;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.04) 0%,
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 8rem;
  position: relative;
  z-index: 1;

  ${media('<=tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=phone')} {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 3.5rem 2rem;
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(var(--text), 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: var(--shadow-glow);
    border-color: rgba(var(--primary), 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

const StatNumber = styled.div`
  font-size: 4.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
  
  ${StatCard}:hover & {
    transform: scale(1.1);
  }
`;

const StatLabel = styled.div`
  font-size: 1.4rem;
  opacity: 0.7;
  position: relative;
  z-index: 1;
  transition: opacity 0.3s ease;
  
  ${StatCard}:hover & {
    opacity: 1;
  }
`;

const TestimonialsGrid = styled.div`
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
  }
`;

const TestimonialCard = styled.div`
  padding: 3.5rem;
  background: rgba(var(--cardBackground), 0.9);
  backdrop-filter: blur(15px);
  border-radius: 2rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(var(--text), 0.08);
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2rem;
    padding: 2px;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.4), transparent, rgba(24, 144, 255, 0.2));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-15px) rotateX(2deg) rotateY(-2deg);
    box-shadow: var(--shadow-glow-lg);
    border-color: rgba(var(--primary), 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

const QuoteIcon = styled.div`
  font-size: 8rem;
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.15;
  line-height: 1;
  position: absolute;
  top: 1rem;
  left: 2rem;
  transition: all 0.5s ease;
  
  ${TestimonialCard}:hover & {
    opacity: 0.25;
    transform: scale(1.1) rotate(-5deg);
  }
`;

const TestimonialContent = styled.p`
  font-size: 1.6rem;
  line-height: 1.9;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  
  ${TestimonialCard}:hover & {
    color: rgba(var(--text), 0.95);
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  padding-top: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(var(--primary), 0.3) 50%, transparent 100%);
  }
`;

const AuthorAvatar = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  box-shadow: var(--shadow-glow);
  position: relative;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgb(var(--primary)), #096dd9);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.4s ease;
  }
  
  ${TestimonialCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    
    &::before {
      opacity: 0.3;
    }
  }
`;

const AuthorDetails = styled.div``;

const AuthorName = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: rgb(var(--text));
  transition: color 0.3s ease;
  
  ${TestimonialCard}:hover & {
    color: rgb(var(--primary));
  }
`;

const AuthorTitle = styled.div`
  font-size: 1.3rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  ${TestimonialCard}:hover & {
    opacity: 0.9;
  }
`;
