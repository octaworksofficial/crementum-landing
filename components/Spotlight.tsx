import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export default function Spotlight({ className, fill = 'rgba(24, 144, 255, 0.15)' }: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        spotlightRef.current.style.background = `radial-gradient(circle 600px at ${clientX}px ${clientY}px, ${fill}, transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [fill]);

  return <SpotlightContainer ref={spotlightRef} className={className} />;
}

const SpotlightContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  transition: background 0.3s ease;
`;
