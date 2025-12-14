import NextLink from 'next/link';
import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Gizlilik Politikası">
      <PrivacyPolicyContainer>
        <RichText>
          <h2>Gizlilik Politikası</h2>
          <p>
            CRMENTUM olarak, gizliliğinize önem veriyoruz. Bu gizlilik politikası, kişisel verilerinizi nasıl topladığımızı, 
            kullandığımızı ve koruduğumuzu açıklamaktadır. Hizmetlerimizi kullanarak, bu politikayı kabul etmiş sayılırsınız.
          </p>
          <br />
          <strong>Toplanan Bilgiler</strong>
          <p>
            Hizmetlerimizi kullanırken sizden çeşitli bilgiler toplayabiliriz:
          </p>
          <ul>
            <li>
              <strong>Kimlik Bilgileri:</strong> Ad, soyad, email adresi, telefon numarası gibi doğrudan sağladığınız bilgiler.
            </li>
            <li>
              <strong>Hesap Bilgileri:</strong> Kullanıcı adı, şifre (hashlenmiş olarak saklanır) ve hesap tercihleri.
            </li>
            <li>
              <strong>Kullanım Verileri:</strong> Platform kullanım istatistikleri, tıklama verileri ve oturum bilgileri.
            </li>
            <li>
              <strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri ve çerez verileri.
            </li>
          </ul>
          <br />
          <strong>Bilgilerin Kullanımı</strong>
          <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanıyoruz:</p>
          <ul>
            <li>Hizmetlerimizi sağlamak ve geliştirmek</li>
            <li>Müşteri desteği sunmak</li>
            <li>Güvenlik ve dolandırıcılık önleme</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            <li>Pazarlama iletişimleri (izninizle)</li>
          </ul>
          <br />
          <strong>Veri Güvenliği</strong>
          <p>
            Verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz:
          </p>
          <ul>
            <li>SSL/TLS şifreleme</li>
            <li>Güvenli veri merkezleri</li>
            <li>Düzenli güvenlik denetimleri</li>
            <li>Erişim kontrolü ve yetkilendirme</li>
          </ul>
          <br />
          <strong>Veri Saklama</strong>
          <p>
            Kişisel verilerinizi, hizmetlerimizi sağlamak için gerekli olduğu sürece veya yasal gereklilikler doğrultusunda saklarız. 
            Hesabınızı sildiğinizde, verileriniz yasal saklama süreleri dışında silinir.
          </p>
          <br />
          <strong>Haklarınız (KVKK Kapsamında)</strong>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
            <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
          </ul>
          <br />
          <strong>İletişim</strong>
          <p>
            Gizlilik politikamız hakkında sorularınız için lütfen <NextLink href="/contact">iletişim sayfamız</NextLink> üzerinden 
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
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
