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
  Light,
  Dark,
}

export const ThemeProvider = ({ children }: ThemeProviderProvider) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  const appClassName = classNames(styles.app, {
    [styles.appLight]: theme === Theme.Light,
    [styles.appDark]: theme === Theme.Dark,
  })

  const changeTheme = () => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)

  return (
    <div className={appClassName}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
    </div>
  )
}
