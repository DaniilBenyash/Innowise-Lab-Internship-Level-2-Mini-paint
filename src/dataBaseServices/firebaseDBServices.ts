import { getDatabase, ref, onValue, set, Database } from 'firebase/database';

export interface IFirebaseDBServices<TData> {
  db: Database,
  getPaints(key: string): Promise<TData>,
  setPaint<TCard>(card: TCard, key: string): Promise<TData>
}

export class FirebaseDBServices<TData> implements IFirebaseDBServices<TData> {
  db = getDatabase();

  async getPaints<TData>(key: string): Promise<TData>{
    const starCountRef = ref(this.db, key);

    const promiseGetTasks: Promise<TData> = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val());
      });
    });

    return await promiseGetTasks;
  }

  async setPaint<TCard>(card: TCard, key: string): Promise<TData>{
    await set(ref(this.db, key), card);

    return await this.getPaints(key);
  }
}
