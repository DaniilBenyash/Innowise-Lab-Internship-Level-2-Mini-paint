import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  UserCredential,
} from 'firebase/auth'
import { firebase } from '../firebase'

interface IFirebaseAuth {
  firebaseInit: void
  auth: Auth
  signIn(email: string, password: string): Promise<UserCredential>
  signUp(email: string, password: string): Promise<UserCredential>
}

export class FirebaseAuth implements IFirebaseAuth {
  firebaseInit
  auth

  constructor() {
    this.firebaseInit = firebase.initialization()
    this.auth = getAuth()
  }

  async signIn(email: string, password: string): Promise<UserCredential> {
    const promiseSignIn: Promise<UserCredential> = new Promise((res) => {
      const response: Promise<UserCredential> = signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      )
      res(response)
    })
    
    return await promiseSignIn
  }
  async signUp(email: string, password: string): Promise<UserCredential> {
    const promiseSignUp: Promise<UserCredential> = new Promise((res) => {
      const response: Promise<UserCredential> = createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      )
      res(response)
    })
    return await promiseSignUp
  }
}

export const authService = new FirebaseAuth()
