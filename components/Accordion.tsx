import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Collapse from './Collapse';
import RichText from './RichText';

interface AccordionProps {
  title: string;
  isOpen?: boolean;
}

export default function Accordion({ title, isOpen, children }: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper onClick={() => setHasCollapsed((prev) => !prev)}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isActive={isActive}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon chakra-accordion__icon css-j2ph2z"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isActive} duration={300}>
        <Description>
          <RichText>{children}</RichText>
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  background: rgba(var(--cardBackground), 0.8);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  border-radius: 1.2rem;
  border: 1px solid rgba(var(--text), 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-glow);
    border-color: rgba(var(--primary), 0.3);
    
    &::before {
      opacity: 1;
    }
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  
  ${AccordionWrapper}:hover & {
    color: rgb(var(--primary));
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 2.4rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotateZ(${(p) => (p.isActive ? 180 : 0)}deg);
  color: ${(p) => (p.isActive ? 'rgb(var(--primary))' : 'rgba(var(--text), 0.6)')};
  position: relative;
  z-index: 1;
  
  ${AccordionWrapper}:hover & {
    color: rgb(var(--primary));
    transform: rotateZ(${(p) => (p.isActive ? 180 : 0)}deg) scale(1.1);
  }
`;

const Description = styled.div`
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: normal;
  position: relative;
  z-index: 1;
  opacity: 0.85;
  line-height: 1.7;
  
  ${AccordionWrapper}:hover & {
    opacity: 1;
  }
`;
