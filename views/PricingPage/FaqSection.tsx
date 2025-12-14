import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Sıkça Sorulan Sorular</SectionTitle>
      <Accordion title="CRMENTUM nasıl çalışır?">
        CRMENTUM, müşteri bilgilerinizi yönetmenizi, profesyonel email şablonları oluşturmanızı ve kampanyalar göndermenizi sağlayan bulut tabanlı bir platformdur. Kişilerinizi içe aktarın, şablonlarınızı tasarlayın ve kampanyalarınızı birkaç tıklamayla başlatın.
      </Accordion>
      <Accordion title="Ücretsiz deneme süresi var mı?">
        Evet! 14 gün boyunca tüm özellikleri ücretsiz deneyebilirsiniz. Kredi kartı bilgisi gerekmez. Deneme süresinin sonunda dilediğiniz planı seçebilir veya ücretsiz plan ile devam edebilirsiniz.
      </Accordion>
      <Accordion title="Mevcut müşteri listemi nasıl içe aktarabilirim?">
        Excel veya CSV dosyalarınızı doğrudan platformumuza yükleyebilirsiniz. Sütun eşleştirme özelliğimiz ile verilerinizi kolayca düzenleyebilirsiniz. Ayrıca API üzerinden de toplu veri aktarımı yapabilirsiniz.
      </Accordion>
      <Accordion title="Email gönderim limitleri nelerdir?">
        Ücretsiz planda aylık 1.000 email, Başlangıç planında 25.000 email, Profesyonel planda 100.000 email gönderebilirsiniz. Kurumsal plan için sınırsız gönderim imkanı sunuyoruz.
      </Accordion>
      <Accordion title="Verilerim güvende mi?">
        Evet, veri güvenliği bizim için önceliktir. SSL şifreleme, JWT tabanlı kimlik doğrulama, bcrypt ile şifre hashleme ve düzenli yedekleme kullanıyoruz. Ayrıca KVKK uyumlu veri işleme politikalarımız mevcuttur.
      </Accordion>
      <Accordion title="Planımı nasıl yükseltebilir veya düşürebilirim?">
        Hesap ayarlarınızdan dilediğiniz zaman planınızı değiştirebilirsiniz. Yükseltmelerde fark ücreti hesaplanır, düşürmelerde ise bir sonraki faturalama döneminden itibaren yeni plan geçerli olur.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
