import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useUserData } from '../../features/userData/useUserData'
import { MAIN_PAGE } from '../../variables/routes'
import { Image } from '../Image/Image'
import { Button } from '../Button/Button'

export const Header = () => {
  const { deleteUser, userData } = useUserData()
  return (
    <header className={styles.header}>
      <Link to={MAIN_PAGE}>
        <h1 className={styles.title}>Canvas</h1>
      </Link>
      {userData && (
        <div className={styles.userPanel}>
          Hello, {userData?.email}
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
    </header>
  )
}
