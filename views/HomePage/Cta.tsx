import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useDemoModalContext } from 'contexts/demo-modal.context';
import { media } from 'utils/media';

export default function Cta() {
  const { openDemoModal } = useDemoModalContext();

  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Hemen Başlayın</OverTitle>
          <SectionTitle>Email Pazarlamada Bir Adım Öne Geçin</SectionTitle>
          <Description>
            Ücretsiz demo ile platformumuzu keşfedin. 
            Binlerce işletme CRMENTUM ile müşteri ilişkilerini güçlendiriyor.
          </Description>
          <ButtonGroup>
            <Button onClick={() => openDemoModal('cta', 'demo')}>
              Ücretsiz Demo Talep Et <span>&rarr;</span>
            </Button>
            <OutlinedButton transparent onClick={() => openDemoModal('cta', 'teklif')}>
              Teklif Al <span>&rarr;</span>
            </OutlinedButton>
          </ButtonGroup>
          <TrustBadges>
            <TrustItem>✓ Ücretsiz demo</TrustItem>
            <TrustItem>✓ Size özel teklif</TrustItem>
            <TrustItem>✓ 7/24 destek</TrustItem>
          </TrustBadges>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.9);
  max-width: 60rem;
  line-height: 1.7;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 3rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 2px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));

  &:hover {
    background: rgba(var(--textSecondary), 0.1);
  }
`;

const CtaWrapper = styled.div`
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
`;

const TrustBadges = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2rem;

  ${media('<=phone')} {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TrustItem = styled.span`
  font-size: 1.4rem;
  opacity: 0.9;
`;
