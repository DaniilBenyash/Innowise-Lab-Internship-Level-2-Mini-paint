import { Link } from 'react-router-dom'
import styles from './LinkComponent.module.scss'

type LinkComponentProps = {
  to: string
  children: React.ReactNode
}

export const LinkComponent = ({ to, children }: LinkComponentProps) => {
  return (
    <Link to={to} className={styles.linkComponent}>
      {children}
    </Link>
  )
}
