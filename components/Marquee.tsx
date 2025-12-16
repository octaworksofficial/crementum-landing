import React from 'react';
import styled, { keyframes } from 'styled-components';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export default function Marquee({ 
  children, 
  speed = 40, 
  direction = 'left',
  pauseOnHover = true 
}: MarqueeProps) {
  return (
    <MarqueeContainer $pauseOnHover={pauseOnHover}>
      <MarqueeContent $speed={speed} $direction={direction}>
        {children}
        {children}
      </MarqueeContent>
    </MarqueeContainer>
  );
}

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const MarqueeContainer = styled.div<{ $pauseOnHover: boolean }>`
  overflow: hidden;
  width: 100%;
  position: relative;
  
  &:hover ${(props) => props.$pauseOnHover && `
    > div {
      animation-play-state: paused;
    }
  `}
`;

const MarqueeContent = styled.div<{ $speed: number; $direction: string }>`
  display: flex;
  animation: ${(props) => props.$direction === 'left' ? scrollLeft : scrollRight} 
    ${(props) => props.$speed}s linear infinite;
  width: fit-content;
`;
