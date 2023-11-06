import { IImagesRepository } from './imagesRepository'

interface IImage {
  image?: string
  user?: string
}

interface IImagesController {
  imagesRepository: IImagesRepository
  getImages(): Promise<IImage[]>
  setImage(paint: IImage, paints: IImage[]): Promise<IImage[]>
}

export type { IImage, IImagesController }
