import { FirebaseApp, initializeApp } from 'firebase/app'
import { getDatabase } from '@firebase/database'

type typeConfig = {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

export class FirebaseInitialization {
  private config: typeConfig
  private app: FirebaseApp

  constructor(config?: string) {
    this.config = config && JSON.parse(config)
    this.app = initializeApp(this.config)
  }

  initialization() {
    getDatabase(this.app)
  }
}

export const firebase = new FirebaseInitialization(process.env.REACT_APP_FIREBASE_CONFIG)
