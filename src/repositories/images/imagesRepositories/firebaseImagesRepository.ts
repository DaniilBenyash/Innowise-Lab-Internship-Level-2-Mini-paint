import { getDatabase, ref, onValue, set, Database } from 'firebase/database'
import { IImagesRepository } from '../interfaces/imagesRepository'

export class FirebaseImagesRepository<TImages> implements IImagesRepository<TImages> {
  db: Database = getDatabase()
  key = 'images'

  async getImages<TImages>(): Promise<TImages> {
    const starCountRef = ref(this.db, this.key)

    const images: Promise<TImages> = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val())
      })
    })

    return await images
  }

  async setImage<TImage>(image: TImage): Promise<TImages> {
    await set(ref(this.db, this.key), image)

    return await this.getImages()
  }
}
