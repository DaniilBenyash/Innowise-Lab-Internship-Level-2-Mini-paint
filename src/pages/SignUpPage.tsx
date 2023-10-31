import { useEffect, useState, MouseEvent } from 'react'
import { useUserData } from '@/features/userData/useUserData'
import { useNavigate } from 'react-router-dom'
import styles from './SignPage.module.scss'
import { MAIN_PAGE } from '@/variables/routes'
import { AuthForm } from '@components/AuthForm/AuthForm'

export const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const changeInputEmail = (email: string) => setEmail(email)
  const changeInputPassword = (password: string) => setPassword(password)

  const { userData, signUpError, signUpUser } = useUserData()

  const navigate = useNavigate()

  useEffect(() => {
    if (signUpError) {
      setError(signUpError)
    }
  }, [signUpError])

  useEffect(() => {
    userData && navigate(MAIN_PAGE)
  }, [userData, navigate])

  function handleSubmit(ev: MouseEvent) {
    ev.preventDefault()
    const formData = {
      email: email,
      password: password,
    }

    signUpUser(formData)
  }

  return (
    <main className={styles.signPage}>
      <div className={styles.section}>
        <h1>Sign Up</h1>
        <p className={styles.error}>{error}</p>
        <AuthForm
          valueEmail={email}
          onChangeEmail={changeInputEmail}
          valuePassword={password}
          onChangePassword={changeInputPassword}
          nameButton='Sign Up'
          onClickButton={handleSubmit}
        />
      </div>
    </main>
  )
}
