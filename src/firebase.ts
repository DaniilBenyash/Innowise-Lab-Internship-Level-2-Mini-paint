import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';


export class FirebaseInitialization {
  private config
  private app: any
  
  constructor(config: any) {
    this.config = JSON.parse(config);
  }

  initialization() {
    this.app = initializeApp(this.config);
    getDatabase(this.app);
  }
}

export const firebase = new FirebaseInitialization(process.env.REACT_APP_FIREBASE_CONFIG);
