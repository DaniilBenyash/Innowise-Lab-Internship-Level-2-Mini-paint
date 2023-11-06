import { getDatabase, ref, onValue, set, Database } from 'firebase/database'
import { IImagesRepository } from '../interfaces/imagesRepository'
import { IImage } from '../interfaces/imagesController'

export class FirebaseImagesRepository implements IImagesRepository {
  db: Database = getDatabase()
  key = 'images'

  async getImages(): Promise<IImage[]> {
    const starCountRef = ref(this.db, this.key)

    const images: Promise<IImage[]> = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val())
      })
    })

    return await images
  }

  async setImage(image: IImage[]): Promise<IImage[]> {
    await set(ref(this.db, this.key), image)

    return await this.getImages()
  }
}
