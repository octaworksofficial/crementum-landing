import NextLink from 'next/link';
import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function TermsPage() {
  return (
    <Page title="Kullanım Şartları">
      <TermsContainer>
        <RichText>
          <h2>Kullanım Şartları</h2>
          <p>
            Bu kullanım şartları, CRMENTUM platformunu kullanımınızı düzenlemektedir. 
            Platformumuzu kullanarak bu şartları kabul etmiş sayılırsınız.
          </p>
          <br />
          <strong>1. Hizmet Tanımı</strong>
          <p>
            CRMENTUM, email pazarlama ve müşteri ilişkileri yönetimi (CRM) hizmetleri sunan bulut tabanlı bir platformdur. 
            Platform, kullanıcıların müşteri verilerini yönetmelerine, email kampanyaları oluşturmalarına ve 
            pazarlama aktivitelerini takip etmelerine olanak sağlar.
          </p>
          <br />
          <strong>2. Hesap Oluşturma ve Güvenlik</strong>
          <ul>
            <li>Hesap oluşturmak için geçerli bir email adresi ve doğru bilgiler sağlamalısınız.</li>
            <li>Hesap güvenliğinizden siz sorumlusunuz. Şifrenizi gizli tutmalısınız.</li>
            <li>Hesabınızla yapılan tüm işlemlerden siz sorumlusunuz.</li>
            <li>Yetkisiz erişim tespit ettiğinizde derhal bizi bilgilendirmelisiniz.</li>
          </ul>
          <br />
          <strong>3. Kabul Edilebilir Kullanım</strong>
          <p>Platformumuzu kullanırken aşağıdaki kurallara uymalısınız:</p>
          <ul>
            <li>Spam veya istenmeyen toplu email göndermek yasaktır.</li>
            <li>Yanıltıcı veya sahte bilgi içeren kampanyalar oluşturmak yasaktır.</li>
            <li>Başkalarının fikri mülkiyet haklarını ihlal etmek yasaktır.</li>
            <li>Platformu yasa dışı amaçlarla kullanmak yasaktır.</li>
            <li>Platformun güvenliğini tehlikeye atacak eylemler yasaktır.</li>
            <li>Diğer kullanıcıların hizmet almasını engelleyecek eylemler yasaktır.</li>
          </ul>
          <br />
          <strong>4. Email Gönderim Kuralları</strong>
          <p>Email kampanyaları için aşağıdaki kurallara uymalısınız:</p>
          <ul>
            <li>Sadece izin aldığınız kişilere email gönderebilirsiniz.</li>
            <li>Her emailde çıkış (unsubscribe) linki bulunmalıdır.</li>
            <li>Gönderen bilgileri doğru ve güncel olmalıdır.</li>
            <li>İçerik, yasal düzenlemelere uygun olmalıdır.</li>
            <li>6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun hükümlerine uymalısınız.</li>
          </ul>
          <br />
          <strong>5. Fikri Mülkiyet</strong>
          <p>
            CRMENTUM platformu, logoları, tasarımları ve içerikleri CERİLAS YÜKSEK TEKNOLOJİ SANAYİ VE TİCARET ANONİM ŞİRKETİ&apos;ne aittir. 
            Bu materyalleri izinsiz kopyalamak, dağıtmak veya kullanmak yasaktır.
          </p>
          <br />
          <strong>6. Veri Sahipliği</strong>
          <ul>
            <li>Platforma yüklediğiniz veriler size aittir.</li>
            <li>Verilerinizi istediğiniz zaman dışa aktarabilirsiniz.</li>
            <li>Hesabınızı sildiğinizde verileriniz yasal saklama süreleri hariç silinir.</li>
            <li>Verilerinizin işlenmesi için gerekli lisansı bize vermiş olursunuz.</li>
          </ul>
          <br />
          <strong>7. Hizmet Kesintileri</strong>
          <p>
            Bakım, güncelleme veya beklenmeyen teknik sorunlar nedeniyle hizmet kesintileri yaşanabilir. 
            Planlı bakımlar önceden duyurulacaktır. Kesintilerden kaynaklanan zararlardan sorumlu değiliz.
          </p>
          <br />
          <strong>8. Sorumluluk Sınırlaması</strong>
          <p>
            Platform &quot;olduğu gibi&quot; sunulmaktadır. Hizmetin kesintisiz veya hatasız olacağını garanti etmiyoruz. 
            Dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu değiliz.
          </p>
          <br />
          <strong>9. Hesap Sonlandırma</strong>
          <ul>
            <li>Hesabınızı istediğiniz zaman kapatabilirsiniz.</li>
            <li>Kullanım şartlarını ihlal etmeniz durumunda hesabınızı askıya alabilir veya sonlandırabiliriz.</li>
            <li>Sonlandırma durumunda verilerinizi dışa aktarmanız için makul süre tanınacaktır.</li>
          </ul>
          <br />
          <strong>10. Değişiklikler</strong>
          <p>
            Bu kullanım şartlarını önceden haber vererek değiştirme hakkımız saklıdır. 
            Önemli değişiklikler email ile bildirilecektir. Değişikliklerden sonra platformu kullanmaya devam etmeniz, 
            yeni şartları kabul ettiğiniz anlamına gelir.
          </p>
          <br />
          <strong>11. Uygulanacak Hukuk</strong>
          <p>
            Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. 
            Uyuşmazlıklarda Gaziantep Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>
          <br />
          <strong>12. İletişim</strong>
          <p>
            Kullanım şartları hakkında sorularınız için lütfen <NextLink href="/contact">iletişim sayfamız</NextLink> üzerinden 
            bizimle iletişime geçin veya aşağıdaki bilgilerden ulaşın:
          </p>
          <p>
            <strong>CERİLAS YÜKSEK TEKNOLOJİ SANAYİ VE TİCARET ANONİM ŞİRKETİ</strong><br />
            Çamtepe Mah. Mahmut Tevfik Atay Bul. D Blok No: 4D İç Kapı No: 11 Şahinbey / Gaziantep<br />
            Telefon: 0544 943 07 26<br />
            KEP: cerilas@hs01.kep.tr
          </p>
          <p>
            <em>Son güncelleme: Aralık 2024</em>
          </p>
        </RichText>
      </TermsContainer>
    </Page>
  );
}

const TermsContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
