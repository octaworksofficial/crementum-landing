import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useDemoModalContext } from 'contexts/demo-modal.context';
import { media } from 'utils/media';

export default function WaveCta() {
  const { openDemoModal } = useDemoModalContext();

  return (
    <WaveCtaWrapper>
      <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1890ff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#096dd9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1890ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </WaveSvg>
      <CtaWrapper>
        <Container>
          <Title>Email pazarlama stratejinizi bir üst seviyeye taşımaya hazır mısınız?</Title>
          <CustomButtonGroup>
            <Button onClick={() => openDemoModal('wave-cta', 'demo')}>
              Ücretsiz Demo Talep Et <span>&rarr;</span>
            </Button>
            <NextLink href="/#ozellikler" passHref>
              <OutlinedButton transparent>
                Özellikler <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </WaveCtaWrapper>
  );
}

const WaveCtaWrapper = styled.div`
  background: linear-gradient(180deg, transparent 0%, rgba(24, 144, 255, 0.03) 100%);
`;

const WaveSvg = styled.svg`
  display: block;
  width: 100%;
  height: 120px;
  margin-bottom: -2px;
`;

const CtaWrapper = styled.div`
  background: linear-gradient(180deg, rgba(24, 144, 255, 0.05) 0%, rgba(24, 144, 255, 0.02) 100%);
  padding: 6rem 0 10rem;
  text-align: center;

  ${media('<=tablet')} {
    padding: 4rem 0 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--text));
  margin-bottom: 4rem;
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--primary));
  color: rgb(var(--primary));
  
  &:hover {
    background: rgba(24, 144, 255, 0.1);
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;
