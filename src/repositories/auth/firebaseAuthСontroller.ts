import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  UserCredential,
} from 'firebase/auth'
import { firebase } from '@/firebase'
import { IAuthCredentialsСontroller } from './interfaces/authСontroller'

export class FirebaseAuthСontroller implements IAuthCredentialsСontroller<UserCredential> {
  databaseInit
  auth: Auth

  constructor() {
    this.databaseInit = firebase.initialization()
    this.auth = getAuth()
  }

  async signIn(email: string, password: string): Promise<UserCredential> {
    const user: Promise<UserCredential> = new Promise((res) => {
      const response = signInWithEmailAndPassword(this.auth, email, password)
      res(response)
    })

    return user
  }
  async signUp(email: string, password: string): Promise<UserCredential> {
    const user: Promise<UserCredential> = new Promise((res) => {
      const response = createUserWithEmailAndPassword(this.auth, email, password)
      res(response)
    })
    return user
  }
}

export const firebaseAuthСontroller = new FirebaseAuthСontroller()
