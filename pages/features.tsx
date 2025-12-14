import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Müşteri Yönetimi',
    description:
      'Tüm müşteri verilerinizi tek bir platformda yönetin. Segmentasyon, etiketleme ve özel alanlar ile müşterilerinizi organize edin.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Email Şablon Editörü',
    description:
      'Sürükle-bırak editörümüz ile profesyonel email şablonları oluşturun. Mobil uyumlu, özelleştirilebilir tasarımlar.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Kampanya Yönetimi',
    description:
      'Hedefli email kampanyaları oluşturun ve yönetin. Zamanlama, A/B testi ve otomasyon özellikleri ile etkinliğinizi artırın.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Detaylı Analitik',
    description:
      'Gerçek zamanlı açılma, tıklama ve dönüşüm oranlarını takip edin. Grafikler ve raporlarla performansınızı görselleştirin.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Otomasyon',
    description:
      'Drip kampanyalar ve otomatik yanıtlayıcılar ile müşteri yolculuğunu otomatikleştirin. Zamandan tasarruf edin.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'API Entegrasyonu',
    description:
      'RESTful API ile mevcut sistemlerinize kolayca entegre edin. Webhook desteği ile gerçek zamanlı bildirimler alın.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Multi-tenant Mimari',
    description:
      'Birden fazla marka veya müşteriyi tek platformdan yönetin. Her biri için ayrı ayarlar ve izolasyon.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Veri Güvenliği',
    description:
      'SSL şifreleme, JWT kimlik doğrulama ve KVKK uyumlu altyapı. Verileriniz güvende.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: '7/24 Destek',
    description:
      'Uzman destek ekibimiz her zaman yanınızda. Email, telefon ve canlı sohbet ile destek alın.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Özellikler" description="CRMENTUM'un sunduğu tüm özellikler ile email pazarlama stratejinizi güçlendirin.">
      <Wrapper>
        <SectionTitle>CRMENTUM Özellikleri</SectionTitle>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
