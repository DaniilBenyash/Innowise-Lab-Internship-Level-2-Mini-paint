import { FirebaseImagesRepository } from './imagesRepositories/firebaseImagesRepository'
import { IImagesRepository } from './interfaces/imagesRepository'
import { IImagesController, typeImage, typeImages } from './interfaces/imagesController'

class ImagesController implements IImagesController {
  imagesRepository

  constructor(imagesRepository: IImagesRepository<typeImages>) {
    this.imagesRepository = imagesRepository
    
  }

  async getImages(): Promise<typeImages> {
    const response = await this.imagesRepository.getImages()

    return response
  }

  async setImage(image: typeImage, images: typeImages): Promise<typeImages> {
    const changedImages = images ? [image, ...images] : [image]
    const response = await this.imagesRepository.setImage(changedImages)
    return response
  }
}

export const imagesController = new ImagesController(new FirebaseImagesRepository())
