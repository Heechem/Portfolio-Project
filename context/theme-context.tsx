'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextProviderPorps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type Theme = 'light' | 'dark';

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeContextProvider({ children }: ThemeContextProviderPorps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme === 'dark') {
      setTheme(localTheme);
      document.documentElement.classList.add('dark');
    } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useActiveSection must within the active section provider');
  }
  return context;
}
