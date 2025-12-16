import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import FloatingParticles from 'components/FloatingParticles';
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
        <FloatingParticles count={20} color="rgba(24, 144, 255, 0.4)" />
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
  background: linear-gradient(180deg, transparent 0%, rgba(24, 144, 255, 0.05) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 80rem;
    height: 80rem;
    background: radial-gradient(
      circle,
      rgba(24, 144, 255, 0.08) 0%,
      transparent 70%
    );
    animation: pulse 10s ease-in-out infinite;
    pointer-events: none;
  }
`;

const WaveSvg = styled.svg`
  display: block;
  width: 100%;
  height: 150px;
  margin-bottom: -2px;
  animation: float 8s ease-in-out infinite;
  
  path {
    animation: shimmer 5s ease-in-out infinite;
  }
`;

const CtaWrapper = styled.div`
  background: linear-gradient(180deg, rgba(24, 144, 255, 0.08) 0%, rgba(24, 144, 255, 0.03) 100%);
  backdrop-filter: blur(10px);
  padding: 6rem 0 10rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: fadeInUp 0.8s ease-out;

  ${media('<=tablet')} {
    padding: 4rem 0 8rem;
  }
`;

const Title = styled(SectionTitle)`
  background: linear-gradient(135deg, rgb(var(--text)) 0%, rgb(var(--primary)) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
  text-shadow: 0 2px 20px rgba(24, 144, 255, 0.2);
`;

const OutlinedButton = styled(Button)`
  border: 2px solid rgb(var(--primary));
  background: transparent;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.2) 0%, rgba(24, 144, 255, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    border-color: rgb(var(--primary));
    box-shadow: var(--shadow-glow);
    
    &::before {
      opacity: 1;
    }
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
  animation: scaleIn 0.8s ease-out 0.4s backwards;
  
  button:first-child {
    background: linear-gradient(135deg, rgb(var(--primary)) 0%, #096dd9 100%);
    box-shadow: var(--shadow-glow);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: translate(-50%, -50%);
      transition: width 0.6s ease, height 0.6s ease;
    }
    
    &:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: var(--shadow-glow-lg);
      animation: pulse 2s ease-in-out infinite;
      
      &::before {
        width: 30rem;
        height: 30rem;
      }
    }
  }
`;
