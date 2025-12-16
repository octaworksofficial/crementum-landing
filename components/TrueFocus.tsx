import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

interface TrueFocusProps {
  children: React.ReactNode;
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function TrueFocus({
  children,
  sentence,
  manualMode = false,
  blurAmount = 5,
  borderColor = '#1890ff',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}: TrueFocusProps) {
  // If sentence is provided, use it; otherwise extract text from children
  const textContent = sentence || (typeof children === 'string' ? children : '');
  const words = textContent.split(' ');
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex ?? 0);
    }
  };

  // If no sentence provided, render children normally
  if (!textContent) {
    return <>{children}</>;
  }

  return (
    <FocusContainer ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <FocusWord
            key={index}
            ref={el => {
              wordRefs.current[index] = el;
            }}
            $isActive={isActive}
            $blurAmount={blurAmount}
            $animationDuration={animationDuration}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </FocusWord>
        );
      })}

      <FocusFrame
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        $borderColor={borderColor}
      >
        <Corner className="top-left" $borderColor={borderColor} />
        <Corner className="top-right" $borderColor={borderColor} />
        <Corner className="bottom-left" $borderColor={borderColor} />
        <Corner className="bottom-right" $borderColor={borderColor} />
      </FocusFrame>
    </FocusContainer>
  );
}

const FocusContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  outline: none;
  user-select: none;
  
  /* Match SectionTitle styles */
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 4.6rem;
  }
`;

const FocusWord = styled.span<{
  $isActive: boolean;
  $blurAmount: number;
  $animationDuration: number;
}>`
  position: relative;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  filter: ${props => props.$isActive ? 'blur(0px)' : `blur(${props.$blurAmount}px)`};
  transition: filter ${props => props.$animationDuration}s ease;
  outline: none;
  user-select: none;
`;

const FocusFrame = styled(motion.div)<{ $borderColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  box-sizing: content-box;
  border: none;
`;

const Corner = styled.span<{ $borderColor: string }>`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: 3px solid ${props => props.$borderColor};
  filter: drop-shadow(0px 0px 4px ${props => props.$borderColor});
  border-radius: 3px;
  transition: none;

  &.top-left {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }

  &.top-right {
    top: -10px;
    right: -10px;
    border-left: none;
    border-bottom: none;
  }

  &.bottom-left {
    bottom: -10px;
    left: -10px;
    border-right: none;
    border-top: none;
  }

  &.bottom-right {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }
`;
