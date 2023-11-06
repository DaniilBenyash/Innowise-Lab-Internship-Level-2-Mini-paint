import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import styles from './ThemeProvider.module.scss'

interface IContext {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
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
  return (
    <div className={appClassName}>
      <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    </div>
  )
}
