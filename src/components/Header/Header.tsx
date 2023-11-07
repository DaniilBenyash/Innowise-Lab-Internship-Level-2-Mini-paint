import { useContext } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useUser } from '@/features/user/useUser'
import { MAIN_PAGE } from '@/variables/routes'
import { Image } from '@components/Image/Image'
import { Button } from '@components/Button/Button'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'

export const Header = () => {
  const { deleteUser, user } = useUser()
  const theme = useContext(ThemeContext)

  return (
    <header className={styles.header}>
      <Link to={MAIN_PAGE}>
        <h1 className={styles.title}>Canvas</h1>
      </Link>
      <div className={styles.rightSection}>
        <Button type='tertiary' onClick={theme?.changeTheme} text='Theme'></Button>
        {user.user && (
          <div className={styles.userPanel}>
            Hello, {user.user?.email}
            <Button onClick={deleteUser} type='tertiary'>
              <Image
                width='35'
                height='35'
                src='https://img.icons8.com/ios-filled/50/fire-exit.png'
                alt='exit'
              />
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
