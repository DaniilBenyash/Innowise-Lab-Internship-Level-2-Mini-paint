import { createContext, useState } from 'react';

const ThemeContext = createContext<{} | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
