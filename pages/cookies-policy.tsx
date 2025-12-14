import NextLink from 'next/link';
import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Çerez Politikası">
      <CookiesPolicyContainer>
        <RichText>
          <h2>Çerez Politikası</h2>
          <p>
            CRMENTUM olarak, web sitemizi ziyaret ettiğinizde deneyiminizi geliştirmek için çerezler kullanıyoruz. 
            Bu politika, çerezlerin ne olduğunu, nasıl kullandığımızı ve tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.
          </p>
          <br />
          <strong>Çerez Nedir?</strong>
          <p>
            Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet veya telefon) kaydedilen küçük metin dosyalarıdır. 
            Çerezler, web sitesinin sizi tanımasına ve tercihlerinizi hatırlamasına yardımcı olur.
          </p>
          <br />
          <strong>Kullandığımız Çerez Türleri</strong>
          <ul>
            <li>
              <strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler olmadan site düzgün çalışmaz.
            </li>
            <li>
              <strong>Performans Çerezleri:</strong> Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Tüm bilgiler anonimdir.
            </li>
            <li>
              <strong>İşlevsellik Çerezleri:</strong> Tercihlerinizi (dil, bölge gibi) hatırlamamıza yardımcı olur.
            </li>
            <li>
              <strong>Hedefleme/Reklam Çerezleri:</strong> Size ilgi alanlarınıza uygun reklamlar göstermek için kullanılır.
            </li>
          </ul>
          <br />
          <strong>Çerez Tercihlerinizi Yönetme</strong>
          <p>
            Tarayıcı ayarlarınızdan çerezleri kabul etmeyi veya reddetmeyi seçebilirsiniz. Ancak bazı çerezleri devre dışı bırakmak, 
            web sitesinin bazı özelliklerinin düzgün çalışmamasına neden olabilir.
          </p>
          <br />
          <table>
            <tr>
              <th>Çerez Adı</th>
              <th>Amacı</th>
              <th>Süresi</th>
              <th>Türü</th>
            </tr>
            <tr>
              <td>session_id</td>
              <td>Oturum yönetimi için kullanılır</td>
              <td>Oturum sonu</td>
              <td>Zorunlu</td>
            </tr>
            <tr>
              <td>auth_token</td>
              <td>Kullanıcı kimlik doğrulaması için kullanılır</td>
              <td>7 gün</td>
              <td>Zorunlu</td>
            </tr>
            <tr>
              <td>preferences</td>
              <td>Kullanıcı tercihlerini saklar</td>
              <td>1 yıl</td>
              <td>İşlevsellik</td>
            </tr>
            <tr>
              <td>analytics_id</td>
              <td>Anonim kullanım istatistikleri için</td>
              <td>2 yıl</td>
              <td>Performans</td>
            </tr>
          </table>
          <br />
          <strong>İletişim</strong>
          <p>
            Çerez politikamız hakkında sorularınız varsa, lütfen <NextLink href="/contact">iletişim sayfamız</NextLink> üzerinden bizimle iletişime geçin veya aşağıdaki bilgilerden ulaşın:
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
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
