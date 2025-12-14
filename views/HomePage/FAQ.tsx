import React from 'react';
import styled from 'styled-components';
import Accordion from 'components/Accordion';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FAQ_ITEMS = [
  {
    question: 'CRMENTUM nasıl çalışır?',
    answer: 'CRMENTUM, müşteri bilgilerinizi yönetmenizi, profesyonel email şablonları oluşturmanızı ve kampanyalar göndermenizi sağlayan bulut tabanlı bir platformdur. Kişilerinizi içe aktarın, şablonlarınızı tasarlayın ve kampanyalarınızı birkaç tıklamayla başlatın. Gerçek zamanlı analitiklerle sonuçlarınızı takip edin.',
  },
  {
    question: 'Ücretsiz deneme süresi var mı?',
    answer: '14 gün boyunca tüm özellikleri ücretsiz deneyebilirsiniz. Kredi kartı bilgisi gerekmez. Deneme süresinin sonunda dilediğiniz planı seçebilir veya ücretsiz plan ile devam edebilirsiniz.',
  },
  {
    question: 'Mevcut müşteri listemi nasıl içe aktarabilirim?',
    answer: 'Excel veya CSV dosyalarınızı doğrudan platformumuza yükleyebilirsiniz. Sütun eşleştirme özelliğimiz ile verilerinizi kolayca düzenleyebilirsiniz. Ayrıca API üzerinden de toplu veri aktarımı yapabilirsiniz.',
  },
  {
    question: 'Email gönderim limitleri nelerdir?',
    answer: 'Ücretsiz planda aylık 1.000 email, Başlangıç planında 25.000 email, Profesyonel planda 100.000 email gönderebilirsiniz. Kurumsal plan için sınırsız gönderim imkanı sunuyoruz.',
  },
  {
    question: 'Verilerim güvende mi?',
    answer: 'Evet, veri güvenliği bizim için önceliktir. SSL şifreleme, JWT tabanlı kimlik doğrulama, bcrypt ile şifre hashleme ve düzenli yedekleme kullanıyoruz. Ayrıca KVKK uyumlu veri işleme politikalarımız mevcuttur.',
  },
  {
    question: 'Hangi entegrasyonlar mevcut?',
    answer: 'RESTful API, Webhook, N8N, Zapier entegrasyonları mevcuttur. Ayrıca Excel/CSV import-export desteği sunuyoruz. Özel entegrasyon ihtiyaçlarınız için API dokümantasyonumuza göz atabilir veya bizimle iletişime geçebilirsiniz.',
  },
  {
    question: 'Planımı nasıl yükseltebilir veya düşürebilirim?',
    answer: 'Hesap ayarlarınızdan dilediğiniz zaman planınızı değiştirebilirsiniz. Yükseltmelerde fark ücreti hesaplanır, düşürmelerde ise bir sonraki faturalama döneminden itibaren yeni plan geçerli olur.',
  },
  {
    question: 'Teknik destek nasıl alırım?',
    answer: 'Ücretsiz planda email desteği, Başlangıç planında öncelikli email desteği, Profesyonel planda telefon desteği ve Kurumsal planda 7/24 özel destek sunuyoruz. Ayrıca kapsamlı yardım merkezi ve dokümantasyonumuz mevcuttur.',
  },
];

export default function FAQ() {
  return (
    <FAQWrapper id="sss">
      <Container>
        <Content>
          <CustomOverTitle>Sıkça Sorulan Sorular</CustomOverTitle>
          <SectionTitle>Merak Ettiğiniz Her Şey</SectionTitle>
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
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 1.5rem;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FAQColumn = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ContactNote = styled.p`
  text-align: center;
  margin-top: 5rem;
  font-size: 1.6rem;
  opacity: 0.8;
`;

const ContactLink = styled.a`
  color: rgb(var(--primary));
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
