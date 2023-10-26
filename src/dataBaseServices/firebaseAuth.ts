import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  UserCredential,
} from 'firebase/auth'
import { firebase } from '../firebase'

interface IDataBaseAuth<TUserData> {
  databaseInit: void
  auth: Auth
  signIn(email: string, password: string): Promise<TUserData>
  signUp(email: string, password: string): Promise<TUserData>
}

export class FirebaseAuth implements IDataBaseAuth<UserCredential> {
  databaseInit
  auth

  constructor() {
    this.databaseInit = firebase.initialization()
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
