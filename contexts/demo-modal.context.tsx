import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface DemoModalState {
  isOpen: boolean;
  source: string;
  planInterest: string;
}

interface DemoModalContextType {
  demoModalState: DemoModalState;
  setDemoModalState: Dispatch<SetStateAction<DemoModalState>>;
  openDemoModal: (source?: string, planInterest?: string) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | null>(null);

export function DemoModalContextProvider({ children }: PropsWithChildren<{}>) {
  const [demoModalState, setDemoModalState] = useState<DemoModalState>({
    isOpen: false,
    source: 'website',
    planInterest: '',
  });

  const openDemoModal = (source: string = 'website', planInterest: string = '') => {
    setDemoModalState({ isOpen: true, source, planInterest });
  };

  const closeDemoModal = () => {
    setDemoModalState({ isOpen: false, source: 'website', planInterest: '' });
  };

  return (
    <DemoModalContext.Provider value={{ demoModalState, setDemoModalState, openDemoModal, closeDemoModal }}>
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModalContext() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error('useDemoModalContext must be used within a DemoModalContextProvider');
  }
  return context;
}
