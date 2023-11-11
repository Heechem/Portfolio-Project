'use client';
import { SectionName } from '@/lib/types';
import { createContext, useContext, useState } from 'react';

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  timeOfLastClick: number;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  // state to avoid the bouncing on the header backdrop

  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error('useActiveSection must within the active section provider');
  }
  return context;
}
