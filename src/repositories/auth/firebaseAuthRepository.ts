import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  UserCredential,
} from 'firebase/auth'
import { firebase } from '@/firebase'
import { IAuthRepository } from './interfaces/authRepository'

export class FirebaseAuthRepository implements IAuthRepository<UserCredential> {
  databaseInit
  auth: Auth

  constructor() {
    this.databaseInit = firebase.initialization()
    this.auth = getAuth()
  }

  async signIn(email: string, password: string): Promise<UserCredential> {
    const promiseSignIn: Promise<UserCredential> = new Promise((res) => {
      const response = signInWithEmailAndPassword(this.auth, email, password)
      res(response)
    })

    return await promiseSignIn
  }
  async signUp(email: string, password: string): Promise<UserCredential> {
    const promiseSignUp: Promise<UserCredential> = new Promise((res) => {
      const response = createUserWithEmailAndPassword(this.auth, email, password)
      res(response)
    })
    return await promiseSignUp
  }
}

export const firebaseAuthRepository = new FirebaseAuthRepository()
