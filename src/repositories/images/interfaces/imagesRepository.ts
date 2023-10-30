export interface IImagesRepository<TImages> {
  getImages(): Promise<TImages>
  setImage<TImage>(Image: TImage): Promise<TImages>
}
