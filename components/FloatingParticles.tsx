import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface FloatingParticlesProps {
  count?: number;
  color?: string;
}

export default function FloatingParticles({ 
  count = 30,
  color = 'rgba(24, 144, 255, 0.3)'
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 5 + 5,
    }));
    setParticles(particleArray);
  }, [count]);

  return (
    <ParticlesContainer>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </ParticlesContainer>
  );
}

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
`;
