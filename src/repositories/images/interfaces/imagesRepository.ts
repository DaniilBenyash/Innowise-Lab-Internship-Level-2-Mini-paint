import { IImage } from './imagesController'

export interface IImagesRepository {
  getImages(): Promise<IImage[]>
  setImage(Image: IImage[]): Promise<IImage[]>
}
