import { useEffect, useState } from 'react';
import { useUserData } from '../../features/userData/useUserData';
import { useNavigate, Link } from 'react-router-dom';
import styles from './SignInPage.module.scss';
import { MAIN_PAGE, SIGN_UP } from '../../variables/routes';
import { AuthForm } from '../../components/AuthForm/AuthForm';

export const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const changeInputEmail = (email: string) => setEmail(email);
  const changeInputPassword = (password: string) => setPassword(password);

  const { userData, signInError, signInUser } = useUserData();

  const navigate = useNavigate();


  useEffect(() => {

    const userHandler = (userData: any, error: any) => {
      try {
        if (userData) navigate(MAIN_PAGE);
        if (error) throw new Error(error);
      } catch (error: any) {
        setError(error.message);
      }
    };
    
    userHandler(userData, signInError);
  }, [userData, signInError, navigate]);

  function handleSubmit(ev: any) {
    ev.preventDefault()
    
    const formData = {
      email: email,
      password: password
    };
    
    signInUser(formData);
  }

  return (
    <main className={styles.sign_in}>
      <div className={styles.sign_in__section}>
        <h1>Sign In</h1>
        <p className={styles.sign_in__error}>{error}</p>
        <AuthForm
          valueEmail={email}
          onChangeEmail={changeInputEmail}
          valuePassword={password}
          onChangePassword={changeInputPassword}
          nameButton="Sign In"
          onClickButton={handleSubmit}
        />
        <p className={styles.sign_in__link}>
          New to Canvas?
          <Link to={SIGN_UP}> Create an account</Link>
        </p>
      </div>
    </main>
  );
};
