import { ReactNode, createContext, useState } from 'react'

const ThemeContext = createContext<object | null>(null)

type ThemeProviderProvider = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProvider) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
