import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface MeteorsProps {
  number?: number;
}

export default function Meteors({ number = 20 }: MeteorsProps) {
  const [meteors, setMeteors] = useState<Array<{ id: number; delay: number; duration: number; left: string }>>([]);

  useEffect(() => {
    const meteorArray = Array.from({ length: number }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 2,
      left: `${Math.random() * 100}%`,
    }));
    setMeteors(meteorArray);
  }, [number]);

  return (
    <MeteorsContainer>
      {meteors.map((meteor) => (
        <Meteor
          key={meteor.id}
          style={{
            left: meteor.left,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </MeteorsContainer>
  );
}

const meteorAnimation = keyframes`
  0% {
    transform: translateY(-100vh) translateX(0) rotate(45deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-200px) rotate(45deg);
    opacity: 0;
  }
`;

const MeteorsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const Meteor = styled.div`
  position: absolute;
  top: -10px;
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, rgba(24, 144, 255, 1), transparent);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(24, 144, 255, 0.8);
  animation: ${meteorAnimation} 3s linear infinite;
`;
