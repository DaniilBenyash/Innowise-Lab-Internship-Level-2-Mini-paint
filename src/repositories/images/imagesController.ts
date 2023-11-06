import { FirebaseImagesRepository } from './imagesRepositories/firebaseImagesRepository'
import { IImagesRepository } from './interfaces/imagesRepository'
import { IImagesController, IImage } from './interfaces/imagesController'

class ImagesController implements IImagesController {
  imagesRepository

  constructor(imagesRepository: IImagesRepository) {
    this.imagesRepository = imagesRepository
  }

  async getImages(): Promise<IImage[]> {
    const response = await this.imagesRepository.getImages()

    return response
  }

  async setImage(image: IImage, images: IImage[]): Promise<IImage[]> {
    const changedImages = images ? [image, ...images] : [image]
    const response = await this.imagesRepository.setImage(changedImages)
    
    return response
  }
}

export const imagesController = new ImagesController(new FirebaseImagesRepository())
