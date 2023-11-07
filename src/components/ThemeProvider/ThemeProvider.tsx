import { ReactNode, createContext, useState } from 'react'
import classNames from 'classnames'
import styles from './ThemeProvider.module.scss'

interface IContext {
  theme: Theme
  changeTheme: () => void
}

export const ThemeContext = createContext<IContext | null>(null)

type ThemeProviderProvider = {
  children: ReactNode
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export const ThemeProvider = ({ children }: ThemeProviderProvider) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  const themeProviderClassNames = classNames(styles.themeProvider)

  const changeTheme = () => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)

  return (
    <div className={themeProviderClassNames} data-theme={theme}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
    </div>
  )
}
