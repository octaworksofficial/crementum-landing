import React from 'react';
import styled from 'styled-components';
import Accordion from 'components/Accordion';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import TrueFocus from 'components/TrueFocus';
import { media } from 'utils/media';

const FAQ_ITEMS = [
  {
    question: 'Gerçekten personel sayısını azaltabilir miyim?',
    answer: 'Evet! Müşterilerimiz ortalama %80 personel tasarrufu sağlıyor. Rutin müşteri takibi, hatırlatmalar, randevu yönetimi gibi işler otomatikleşince ekibiniz satışa ve stratejiye odaklanabiliyor. 10 kişilik ekipler 2-3 kişiyle aynı verimi alıyor.',
  },
  {
    question: 'Yapay zeka gerçekten kurumumuzu tanıyabilir mi?',
    answer: 'Evet! Markanızı, ürünlerinizi, hizmetlerinizi, müşteri profilinizi sisteme tanımlarsınız. Yapay zeka geçmiş görüşmelerden öğrenir ve size özel iletişim önerileri oluşturur. Siz sadece onaylayıp gönderirsiniz. Gerçek insan gibi konuşur.',
  },
  {
    question: 'Hangi iletişim kanallarını destekliyor?',
    answer: 'WhatsApp, Email, SMS, Telefon, Facebook, Instagram, web sitesi canlı chat - tüm kanallar tek panelde. Kim hangi kanaldan ne zaman yazdı, hepsi tek ekranda. Artık hiçbir kanal atlanmaz, hiçbir mesaj kaybolmaz.',
  },
  {
    question: 'Gerçekten hiçbir müşteri atlanmaz mı?',
    answer: 'Hiçbir müşteri atlanmaz! İnsan yoğunlukta unutabilir, CRMENTUM unutmaz. Her müşteri otomatik takip edilir, randevular zamanında hatırlatılır, follow-up\'lar aksatılmaz. %100 müşteri takip garantisi.',
  },
  {
    question: 'Tarih ve saat karışıklığı olur mu?',
    answer: 'Asla! İnsan hatası yapar, CRMENTUM yapmaz. Randevular, takipler, hatırlatmalar tam zamanında gerçekleşir. Dakika bile şaşmaz. Müşterileriniz her zaman doğru zamanda bilgilendirilir.',
  },
  {
    question: 'Mevcut sistemlerimle entegre olur mu?',
    answer: 'Evet! Excel/CSV import, API entegrasyonu, Webhook desteği mevcut. Mevcut müşteri listenizi kolayca aktarabilir, kullandığınız diğer yazılımlarla entegre edebilirsiniz. Kurulum çok basit.',
  },
  {
    question: 'Ne kadar sürede başlayabilirim?',
    answer: 'Aynı gün! Müşteri listenizi yükleyin, markanızı tanımlayın, ilk otomatik mesajlarınızı ayarlayın. 1 saatte kurulum tamamlanır. Demo talep edin, size adım adım gösterelim.',
  },
  {
    question: 'Verilerim güvende mi?',
    answer: 'Evet! KVKK uyumlu, şifreli veri saklama, yetkisiz erişime karşı korunma. Müşteri bilgileriniz bankacılık seviyesinde güvenlikle saklanır. Güvenlik sertifikalarımız mevcut.',
  },
];

export default function FAQ() {
  return (
    <FAQWrapper id="sss">
      <Container>
        <Content>
          <CustomOverTitle>Sıkça Sorulan Sorular</CustomOverTitle>
          <TrueFocus sentence="Merak Ettiğiniz Her Şey" manualMode={true} blurAmount={3} borderColor="#1890ff">
            <SectionTitle>Merak Ettiğiniz Her Şey</SectionTitle>
          </TrueFocus>
        </Content>
        <FAQGrid>
          <FAQColumn>
            {FAQ_ITEMS.slice(0, 4).map((item, idx) => (
              <Accordion key={idx} title={item.question}>
                {item.answer}
              </Accordion>
            ))}
          </FAQColumn>
          <FAQColumn>
            {FAQ_ITEMS.slice(4).map((item, idx) => (
              <Accordion key={idx} title={item.question}>
                {item.answer}
              </Accordion>
            ))}
          </FAQColumn>
        </FAQGrid>
        <ContactNote>
          Başka sorularınız mı var?{' '}
          <ContactLink href="/contact">Bizimle iletişime geçin</ContactLink>
        </ContactNote>
      </Container>
    </FAQWrapper>
  );
}

const FAQWrapper = styled.div`
  padding: 10rem 0;
  background: rgb(var(--secondBackground));
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -30%;
    right: -10%;
    width: 50rem;
    height: 50rem;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.04) 0%,
      transparent 70%
    );
    animation: float 25s ease-in-out infinite;
    pointer-events: none;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
  z-index: 1;
  animation: fadeInUp 0.8s ease-out;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  position: relative;
  z-index: 1;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FAQColumn = styled.div`
  animation: fadeInUp 0.6s ease-out backwards;
  animation-delay: 0.2s;
  
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ContactNote = styled.p`
  text-align: center;
  margin-top: 5rem;
  font-size: 1.6rem;
  opacity: 0.8;
  position: relative;
  z-index: 1;
  animation: fadeIn 0.8s ease-out 0.6s backwards;
  padding: 2rem;
  background: rgba(var(--cardBackground), 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(var(--text), 0.08);
`;

const ContactLink = styled.a`
  background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, rgb(var(--primary)), #096dd9);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
