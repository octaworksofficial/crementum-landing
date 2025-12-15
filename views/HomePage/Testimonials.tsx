import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
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
      <Container>
        <Content>
          <CustomOverTitle>Müşterilerimiz Neler Kazandı</CustomOverTitle>
          <SectionTitle>Gerçek işletmelerden gerçek sonuçlar</SectionTitle>
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
              <QuoteIcon>"</QuoteIcon>
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
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 8rem;

  ${media('<=tablet')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=phone')} {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: rgb(var(--primary));
  margin-bottom: 1rem;
`;

const StatLabel = styled.div`
  font-size: 1.4rem;
  opacity: 0.7;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  ${media('<=desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  padding: 3rem;
  background: rgb(var(--cardBackground));
  border-radius: 1.2rem;
  box-shadow: var(--shadow-md);
  position: relative;
`;

const QuoteIcon = styled.div`
  font-size: 6rem;
  color: rgb(var(--primary));
  opacity: 0.2;
  line-height: 1;
  position: absolute;
  top: 1rem;
  left: 2rem;
`;

const TestimonialContent = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const AuthorAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
`;

const AuthorDetails = styled.div``;

const AuthorName = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: rgb(var(--text));
`;

const AuthorTitle = styled.div`
  font-size: 1.3rem;
  opacity: 0.7;
`;
