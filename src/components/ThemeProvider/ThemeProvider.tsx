import { ReactNode, createContext, useState } from 'react'

const ThemeContext = createContext<object | null>(null)

type ThemeProviderProvider = {
  children: ReactNode
}

enum Theme {
  Light,
  Dark
}

export const ThemeProvider = ({ children }: ThemeProviderProvider) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
