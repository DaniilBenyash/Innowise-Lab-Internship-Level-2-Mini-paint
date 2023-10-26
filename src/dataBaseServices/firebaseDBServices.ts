import { getDatabase, ref, onValue, set, Database } from 'firebase/database'

export interface IDBService<TData> {
  db: Database
  getData(key: string): Promise<TData>
  setData<TCard>(card: TCard, key: string): Promise<TData>
}

export class FirebaseDBService<TData> implements IDBService<TData> {
  db = getDatabase()

  async getData<TData>(key: string): Promise<TData> {
    const starCountRef = ref(this.db, key)

    const promiseGetData: Promise<TData> = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val())
      })
    })

    return await promiseGetData
  }

  async setData<TCard>(card: TCard, key: string): Promise<TData> {
    await set(ref(this.db, key), card)

    return await this.getData(key)
  }
}
