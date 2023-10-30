import { IImagesRepository } from './imagesRepository'

type typeImage = {
  image: string | undefined
  user: string | undefined
}

type typeImages = typeImage[]

interface IImagesController {
  imagesRepository: IImagesRepository<typeImages>
  getImages(): Promise<typeImages>
  setImage(paint: typeImage, paints: typeImages): Promise<typeImages>
}

export type { typeImage, typeImages, IImagesController }
